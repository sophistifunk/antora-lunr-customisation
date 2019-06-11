# TODOs

To get this from junk PoC to something solid enough to replace existing workflow

* [ ] Set up lerna, moving ui-bundle and generator into packages with their own build lifecycles
* [ ] Set up the custom-stemming jargon plugin as a lerna package so it can be pulled into both generator and ui
* [ ] Properly bundle all the scripts in the UI template rather than using a bunch of vendored pre-minified stuff that doesn't really go together
* [ ] Improve build process from fragile and crappy shell script to something sensible
* [ ] Make changes to `site-development.yml` and `side-production.yml` to match changes made to `site-local.yml`
* [ ] Figure out a way to serve locally-generated content so that urls work etc
* [ ] Switch custom jargon plugin out from hard-coded example to something more meaningful and data-driven, get some more examples from tech writing team
* [ ] PrettierJS
* [ ] TSC where appropriate
* [ ] Figure out how to have lunrjs auto-suggest (at least) jargon words when you've typed a handful of characters in, which would be nice to have in addition to the custom stemming dictionary
