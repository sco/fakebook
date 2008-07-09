require 'rake'
require './lib/fakebook'

task :install_gem do
  puts `gem build fakebook.gemspec && gem install fakebook-#{Fakebook::Version}.gem && rm fakebook-#{Fakebook::Version}.gem`
end