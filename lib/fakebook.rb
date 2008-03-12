require 'net/http'
require 'uri'
require 'digest/md5'
require 'erb'
require 'rubygems'
require 'rack'

module Fakebook
  class Application
    def initialize(callback_url, canvas_path, app_secret)
      @callback_url = callback_url
      @canvas_path  = canvas_path
      @app_secret   = app_secret
    end
  
    def set_default_params(params)
      @default_params = params.merge(:in_canvas => 1, :expires => 0, :added => 1)
    end

    # todo: use rack's logger mechanism?
    def request(path, params={})
      url = URI.parse(@callback_url + path.gsub(Regexp.new('^' + @canvas_path), ''))
      path_and_query_string = "#{url.path}?#{url.query}"
      body = sign(params).map{ |a| "#{a.first}=#{a.last}" }.join('&')
      #start_time = Time.now
      response = Net::HTTP.new(url.host, url.port).post(path_and_query_string, body)
      #end_time = Time.now
      #STDERR.puts "[#{end_time - start_time}] #{path}"
      response
    end

    private
          
      def sign(params)
        params_to_sign = (@default_params || {}).merge(:time => Time.now.to_f)
        raw_string = params_to_sign.map{ |pair| pair.join('=') }.sort.join + @app_secret
        signature = Digest::MD5.hexdigest(raw_string)
        params_to_sign.each { |k,v| params["fb_sig_" + k.to_s] = v.to_s }
        params['fb_sig'] = signature
        params
      end
      
  end

  class Proxy
    
    # this doesn't seem right
    def self.rack(canvas_url, callback_url, app_secret, default_params={})
      app = Rack::Builder.new do 
        use Rack::ShowExceptions 
        use Rack::Static, :urls => ["/assets"], :root => File.expand_path(File.dirname(__FILE__))
        run Proxy.new(canvas_url, callback_url, app_secret, default_params)
      end
      Rack::Handler::Mongrel.run(app, :Port => URI.parse(canvas_url).port)
    end
    
    def initialize(canvas_url, callback_url, app_secret, default_params={})
      @app_id = '2431403991'
      @canvas_url = URI.parse(canvas_url)
      @application = Application.new(callback_url, @canvas_url.path, app_secret)
      @application.set_default_params(default_params)
      STDERR.puts "Starting Fakebook proxy from #{canvas_url} to #{callback_url}"
    end

    def call(env)
      req = Rack::Request.new(env)
      res = Rack::Response.new 
      app_response = @application.request(env['PATH_INFO'], req.params)
      if app_response.body =~ /fb:redirect url=\"(.*)\"/
        res.status = 302
        res["Location"] = $1
      else
        res["Content-Type"] = "text/html; charset=utf-8"
        res.write parse_fbml(app_response.body)
      end
      res.finish
    end

    private

      def parse_fbml(body, template='standard.html.erb')
        body.gsub! /<fb:name .*?>/, '[name]'
        body.gsub! /<fb:title>(.*)<\/fb:title>/, ''
        title = $1
        template = ERB.new File.read(File.join(File.dirname(__FILE__), "templates", template))
        template.result(binding)
      end

  end

end
