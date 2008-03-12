require 'rubygems'
require 'rake'

begin
  require 'echoe'

  Echoe.new('fakebook', '0.1.0') do |p|
    #p.rubyforge_name = 'fakebook'
    #p.summary      = ""
    #p.description  = ""
    #p.url          = "http://github.com/sco/fakebook/"
    #p.author       = 'Scott Raymond'
    #p.email        = "sco@scottraymond.net"
  end

rescue LoadError => boom
  puts "You are missing a dependency required for meta-operations on this gem."
  puts "#{boom.to_s.capitalize}."
end
