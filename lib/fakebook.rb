require 'net/http'
require 'uri'
require 'digest/md5'
require 'erb'
require 'rubygems'
require 'rack'
require File.dirname(__FILE__) + '/tokenizer'
require File.dirname(__FILE__) + '/node'

class Fakebook
  
  Version = '0.1.2' # also see fakebook.gemspec
  
  attr_accessor :callback, :canvas, :secret, :fb_params, :template

  # Options: 
  #   :callback
  #   :canvas
  #   :secret
  #   :fb_params
  #   :template
  #
  def initialize(options = {})
    @callback  =  options[:callback]  || "http://localhost:3000/"
    @canvas    =  options[:canvas]    || "myapp"
    @secret    =  options[:secret]    || "secret"
    @fb_params = (options[:fb_params] || { :user => 1, :session_key => "session_key", :friends => [2, 3, 4] }).merge(:in_canvas => 1, :expires => 0, :added => 1)
    @template  =  options[:template]  || File.join(File.dirname(__FILE__), "templates", "standard.html.erb")
    @static    =  Rack::File.new(File.expand_path(File.dirname(__FILE__)))
  end

  # Implements the Rack interface. Takes a hash representing the request environment; returns an 
  # array of [status, headers, body].
  def call(env)
    req = Rack::Request.new(env)
    res = Rack::Response.new
    path = env['PATH_INFO']

    if File.exists?(File.join(@static.root, Rack::Utils.unescape(path)))
      return @static.call(env)
    elsif path=='/favicon.ico'
      res.status = 404
    elsif path=='/fakebook-rest-server'
      res["Content-Type"] = "text/json; charset=utf-8"
      res.write %Q({ "success":"true" })
    elsif path=='/fakebook-update'
      @fb_params[:user]      = req.params['user'].to_i if req.params['user']
      @fb_params[:friends]   = req.params['friends'].split(/, ?/).map{ |id| id.to_i } if req.params['friends']
      @fb_params[:in_canvas] = req.params['in_canvas'].to_i if req.params['in_canvas']
      @fb_params[:added]     = req.params['added'].to_i if req.params['added']
      res.status = 302
      res["Location"] = req.env['HTTP_REFERER']
    elsif path=='/fakebook-install'
      res.write %Q(This is the install URL. <a href="?added=1">Set fb_sig_added to 1.</a>)
      @fb_params[:added] = 1 if req.params['added']=='1'
    else
      response_body = request(path, req.params)
      if response_body =~ /fb:redirect url=\"(.*)\"/
        res.status = 302
        res["Location"] = $1
      else
        res["Content-Type"] = "text/html; charset=utf-8"
        res.write response_body
      end
    end
    res.finish
  end
  
  # Takes a path and optional params; returns the parsed and re-written response body.
  def request(path, params={})
    url = URI.parse(@callback + path.gsub(Regexp.new('^/' + @canvas + '/'), ''))
    path_and_query_string = "#{url.path}?#{url.query}"
    request_body = sign(params).map{ |a| "#{a.first}=#{a.last}" }.join('&')
    response = Net::HTTP.new(url.host, url.port).post(path_and_query_string, request_body)
    parse_fbml(response.body)
  end

  private
    
    def sign(params)
      params_to_sign = normalize(@fb_params || {}).merge(:time => Time.now.to_f)
      raw_string = params_to_sign.map{ |pair| pair.join('=') }.sort.join + @secret
      signature = Digest::MD5.hexdigest(raw_string)
      params_to_sign.each { |k,v| params["fb_sig_" + k.to_s] = v.to_s }
      params['fb_sig'] = signature
      normalize(params)
    end

    def normalize(params)
      params.inject({}) do |hash, pair|
        hash[pair[0].to_s] = pair[1].is_a?(Array) ? pair[1].join(',') : pair[1].to_s
        hash
      end
    end

    def parse_fbml(body)
      allowed_tags = %w(fb:redirect link style script form input textarea strong em b i p code pre tt samp kbd var sub sup dfn cite big small address hr br div span h1 h2 h3 h4 h5 h6 ul ol li dt dd abbr acronym a img blockquote del ins)
      parent = []
      result = []
      hide = false # TODO: in order to account for more complicated nesting of conditions, this should be an array
      tokenizer = HTML::Tokenizer.new(body)
      while token = tokenizer.next
        node = HTML::Node.parse(nil, 0, 0, token, false)
        temp = nil
        if node.is_a? HTML::Tag
          if node.name=='fb:name'
            temp = "[USER #{node.attributes['uid']}]"
          elsif node.name=='fb:profile-pic'
            temp = "[PIC #{node.attributes['uid']}]"
          elsif node.name=='fb:title'
            title = tokenizer.next
          elsif node.name=='fb:if-is-user'
            hide = (node.closing==:close) ? false : (node.attributes['uid']!=@fb_params[:user].to_s) # TODO: allow for multiple uids to be specified
          elsif node.name=='fb:else'
            hide = !hide
          elsif node.name=='fb:dashboard'
            temp = (node.closing==:close) ? %Q(</div>) : %Q(<div style="padding: 8px;">)
          elsif node.name=='fb:create-button'
            temp = %Q(<a href="#{node.attributes['href']}" class="create-button" style="float: right">#{tokenizer.next}</a>)
            tokenizer.next
          elsif node.name=='fb:action'
            temp = %Q(<a href="#{node.attributes['href']}" class="dashboard-action">#{tokenizer.next}</a> | )
            tokenizer.next
          else
            temp = node if allowed_tags.include?(node.name)
          end
        else
          temp = node.to_s
        end
        result << temp unless temp.nil? || hide
      end

      body = result.join
      erb.result(binding)
    end
    
    def erb
      @erb ||= ERB.new(File.read(@template))
    end

end
