require 'net/http'
require 'uri'
require 'digest/md5'
require 'erb'
require 'rubygems'
require 'rack'

# Valid options: 
#   :callback_url
#   :canvas_path
#   :app_secret
#   :fb_params
#   :template_file
#
class Fakebook
  
  Version = '0.1.0'
  
  attr_accessor :callback_url, :canvas_path, :app_secret, :fb_params, :template_file

  #def self.new(*args)
  #  Rack::Static.new(super, :urls => ["/fakebook-assets"], :root => File.join(File.expand_path(File.dirname(__FILE__)), "..", "lib"))
  #end

  def initialize(options = {})
    @callback_url  =  options[:callback_url]
    @canvas_path   =  options[:canvas_path]
    @app_secret    =  options[:app_secret]
    @fb_params     = (options[:fb_params] || {}).merge(:in_canvas => 1, :expires => 0, :added => 1)
    @template_file =  options[:template_file] || File.join(File.dirname(__FILE__), "templates", "standard.html.erb")
  end

  # Implements the Rack interface. Takes a hash representing the environment; returns an 
  # array of [status, headers, body].
  def call(env)
    req = Rack::Request.new(env)
    res = Rack::Response.new

    response_body = request(env['PATH_INFO'], req.params)

    if response_body =~ /fb:redirect url=\"(.*)\"/
      res.status = 302
      res["Location"] = $1
    else
      res["Content-Type"] = "text/html; charset=utf-8"
      res.write response_body
    end
    res.finish
  end
  
  # Takes a path and optional params; returns the response body.
  def request(path, params={})
    url = URI.parse(@callback_url + path.gsub(Regexp.new('^' + @canvas_path), ''))
    path_and_query_string = "#{url.path}?#{url.query}"
    request_body = sign(params).map{ |a| "#{a.first}=#{a.last}" }.join('&')
    response = Net::HTTP.new(url.host, url.port).post(path_and_query_string, request_body)
    parse_fbml(response.body)
  end

  private
  
    def sign(params)
      params_to_sign = (@fb_params || {}).merge(:time => Time.now.to_f)
      raw_string = params_to_sign.map{ |pair| pair.join('=') }.sort.join + @app_secret
      signature = Digest::MD5.hexdigest(raw_string)
      params_to_sign.each { |k,v| params["fb_sig_" + k.to_s] = v.to_s }
      params['fb_sig'] = signature
      params
    end

    def parse_fbml(body)
      body.gsub! /<fb:name .*?>/, '[name]'
      body.gsub! /<fb:title>(.*)<\/fb:title>/, ''
      title = $1
      template.result(binding)
    end
    
    def template
      @template ||= ERB.new(File.read(@template_file))
    end

end
