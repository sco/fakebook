require 'net/http'
require 'uri'
require 'digest/md5'
require 'erb'
require 'rubygems'
require 'rack'

class Fakebook
  
  Version = '0.1.0'
  
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

  # Implements the Rack interface. Takes a hash representing the environment; returns an 
  # array of [status, headers, body].
  def call(env)
    req = Rack::Request.new(env)
    res = Rack::Response.new
    path = env['PATH_INFO']

    if File.exists?(File.join(@static.root, Rack::Utils.unescape(path)))
      return @static.call(env)
    elsif path=='/fakebook-rest-server'
      res["Content-Type"] = "text/json; charset=utf-8"
      res.write %Q({ "success":"true" })
    elsif path=='/fakebook-install'
      res.write %Q(This is the install URL.)
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
  
  # Takes a path and optional params; returns the response body.
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
      body.gsub! /<fb:name .*?>/, '[name]'
      body.gsub! /<fb:title>(.*)<\/fb:title>/, ''
      title = $1
      erb.result(binding)
    end
    
    def erb
      @erb ||= ERB.new(File.read(@template))
    end

end
