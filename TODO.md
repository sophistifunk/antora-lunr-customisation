# TODOs

To get this from junk PoC to something solid enough to replace existing workflow

* [ ] Set up lerna, moving ui-bundle and generator into packages with their own build lifecycles
* [ ] Set up the custom-stemming jargon plugin as a lerna package so it can be pulled into both generator and ui
* [ ] Improve build process from fragile and crappy shell script to something sensible
* [ ] Make changes to `site-development.yml` and `side-production.yml` to match changes made to `site-local.yml`
* [ ] Figure out a way to serve locally-generated content so that urls work etc
* [ ] Switch custom jargon plugin out from hard-coded example to something more meaningful and data-driven, get some more examples from tech writing team
* [ ] PrettierJS
* [ ] TSC where appropriate