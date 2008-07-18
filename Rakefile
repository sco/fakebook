require 'rake'

desc "install gem"
task :install_gem do
  puts `gem build fakebook.gemspec && sudo gem install fakebook*.gem --no-rdoc --no-ri && rm fakebook*.gem`
end

desc "update gemspec with latest file list, because github can't deal with File.glob tricks"
task :manifest do
  list = Dir['**/*'].sort
  spec_file = Dir['*.gemspec'].first
  list -= [spec_file] if spec_file
  
  if spec_file
    spec = File.read(spec_file)
    spec.gsub! /^(\s* s.(test_)?files \s* = \s* )( \[ [^\]]* \] | %w\( [^)]* \) )/mx do
      assignment = $1
      bunch = $2 ? list.grep(/^test\//) : list
      '%s%%w(%s)' % [assignment, bunch.join(' ')]
    end
    File.open(spec_file, 'w')  {|f| f << spec }
  end
end