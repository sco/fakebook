Gem::Specification.new do |s|
  s.name             = "fakebook"
  s.version          = "0.1.0" # also see fakebook.rb
  s.date             = "2008-04-26"
  s.summary          = "Simple Facebook platform simulator, to aid in developing Facebook canvas apps offline."
  s.homepage         = "http://github.com/sco/fakebook"
  s.author           = "Scott Raymond"
  s.email            = "sco@scottraymond.net"
  s.executables      = ['fakebook']
  s.files            = ["bin/fakebook",
                        "fakebook.gemspec",
                        "lib/fakebook-assets/base.js",
                        "lib/fakebook-assets/canvas.css",
                        "lib/fakebook-assets/common.css",
                        "lib/fakebook-assets/extended.js",
                        "lib/fakebook-assets/fakebook.js",
                        "lib/fakebook-assets/fbml.js",
                        "lib/fakebook-assets/navigator_bg.gif",
                        "lib/fakebook-assets/shadow_gray.gif",
                        "lib/fakebook-assets/string.js",
                        "lib/fakebook-assets/white.gif",
                        "lib/fakebook.rb",
                        "lib/node.rb",
                        "lib/templates/minimal.html.erb",
                        "lib/templates/standard.html.erb",
                        "lib/tokenizer.rb",
                        "LICENSE",
                        "Manifest",
                        "Rakefile",
                        "README",
                        "TODO",
                       ]
  s.has_rdoc         = true
  s.rdoc_options     = ["--main", "README"]
  s.extra_rdoc_files = ["Manifest", "TODO", "README", "LICENSE"]
  s.add_dependency   "rack", ">=0.3.0"
end
