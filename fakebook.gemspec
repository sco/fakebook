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
  s.extra_rdoc_files   = ['TODO', 'README.rdoc', 'LICENSE']
  s.rdoc_options       = ['--main', 'README.rdoc']
	s.add_dependency     "rack", ">=0.3.0"
  s.files = %w(LICENSE README.rdoc Rakefile TODO bin bin/fakebook lib lib/fakebook-assets lib/fakebook-assets/attachments.js lib/fakebook-assets/canvas.css lib/fakebook-assets/canvas.js lib/fakebook-assets/common.css lib/fakebook-assets/common.js lib/fakebook-assets/confirmation.js lib/fakebook-assets/dialogpro.css lib/fakebook-assets/drag.js lib/fakebook-assets/edit_app_settings.css lib/fakebook-assets/edit_app_settings.js lib/fakebook-assets/editapps.js lib/fakebook-assets/editprofile.css lib/fakebook-assets/endscript.js lib/fakebook-assets/fb_menubar.png lib/fakebook-assets/fb_menubar_logo.gif lib/fakebook-assets/fbml.js lib/fakebook-assets/feedform.js lib/fakebook-assets/firstscript.js lib/fakebook-assets/flyout_menu.js lib/fakebook-assets/friend_suggester.css lib/fakebook-assets/friend_suggester.js lib/fakebook-assets/ie6.css lib/fakebook-assets/ie7.css lib/fakebook-assets/js_strings.js lib/fakebook-assets/link_controller.js lib/fakebook-assets/livemessage.js lib/fakebook-assets/pages.css lib/fakebook-assets/profile.css lib/fakebook-assets/quickling.js lib/fakebook-assets/scrollarea.js lib/fakebook-assets/search_friend_source.js lib/fakebook-assets/search_typeaheadpro.js lib/fakebook-assets/sort.js lib/fakebook-assets/static_source.js lib/fakebook-assets/tidied.html lib/fakebook-assets/tour_tip.css lib/fakebook-assets/typeahead_source.js lib/fakebook-assets/typeaheadpro.css lib/fakebook-assets/ubersearch.css lib/fakebook-assets/webkit.css lib/fakebook.rb lib/node.rb lib/templates lib/templates/old.html.erb lib/templates/standard.html.erb lib/tokenizer.rb)
end
