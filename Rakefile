require 'rake'
require './lib/fakebook'

#begin
#  require 'rubygems'
#  gem 'echoe', '>=2.7'
#  ENV['RUBY_FLAGS'] = ""
#  require 'echoe'
#
#  Echoe.new('fakebook') do |p|
#    p.project        = 'fakebook'
#    p.rubyforge_name = 'fakebook'
#    p.version        = Fakebook::Version
#    p.summary        = "Simple Facebook platform simulator, to aid in developing Facebook canvas apps offline."
#    p.description    = "Simple Facebook platform simulator, to aid in developing Facebook canvas apps offline."
#    p.url            = "http://github.com/sco/fakebook/"
#    p.author         = 'Scott Raymond'
#    p.email          = "sco@scottraymond.net"
#    p.dependencies   << 'rack >=0.3.0'
#    p.clean_pattern.delete('lib/*-*') # so that 'rake clean' won't clobber fakebook-assets
#  end
#rescue LoadError => boom
#  puts "You are missing a dependency required for meta-operations on this gem."
#  puts "#{boom.to_s.capitalize}."
#end
#
#desc 'Install as a gem'
#task :install_gem do
#  puts `rake manifest package && gem install pkg/fakebook-#{Fakebook::Version}.gem`
#end
#

task :install_gem do
  puts `gem build fakebook.gemspec && gem install fakebook-#{Fakebook::Version}.gem && rm fakebook-#{Fakebook::Version}.gem`
end