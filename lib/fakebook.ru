require 'rubygems'
require 'rack'
require 'rack/adapter/rails'

require File.dirname(__FILE__) + '/../lib/fakebook'

use Fakebook::Middleware, "http://0.0.0.0:5000/packrat/", "http://0.0.0.0:3000/facebook/", "app-secret", { :user => 123, :session_key => 'session-key', :friends => "2,3,4" }
run Rack::Adapter::Rails.new(:root => "/path/to/my/app")
