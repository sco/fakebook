Gem::Specification.new do |s|
	s.name               = "fakebook"
	s.version            = '0.1.2' # also see Fakebook::Version
	s.date               = '2008-07-17'
	s.summary            = "Simple Facebook platform simulator, to aid in developing Facebook canvas apps offline."
	s.author             = "Scott Raymond"
	s.email              = 'sco@scottraymond.net'
	s.homepage           = 'http://github.com/sco/fakebook'
	s.platform           = Gem::Platform::RUBY
  s.has_rdoc           = true
	s.require_paths      = ['lib']
  s.executables        = ['fakebook']
  s.default_executable = 'fakebook'
  s.extra_rdoc_files   = ['TODO', 'README', 'LICENSE']
	s.files              = ['TODO', 'README', 'LICENSE']
  s.rdoc_options       = ['--main', 'README']
	s.add_dependency "rack", ">=0.3.0"
  s.files = ['lib/**/*', 'bin/*'].inject([]) { |files, dir| files + Dir.glob(dir).delete_if { |item| item =~ /^\./ } }
end
