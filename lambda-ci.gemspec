# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)

Gem::Specification.new do |s|
  s.name        = "lambda-ci"
  s.authors = "david and luis"
  s.version = 1
  s.summary = 1
  s.add_dependency "guard", ">= 0.4"
  s.add_dependency "guard-mocha-node", ">= 0.0"
  s.add_dependency "guard-rspec", ">= 0.0"
  s.add_dependency "guard-jasmine-node", ">= 0.0"

end
