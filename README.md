# Proof of Concept for customising lunr.js in Antora build

This builds locally without Docker, because we need to monkey with things a bit:

* We use a [customised variation](generator/lib/generate-index.js) of [antora-lunr](https://github.com/Mogztter/antora-lunr), which allows us to add a lunr plugin for custom-stemming jargon
* We use a [customised variation](generator/lib/generate-site.js) of the original Antora [default generator](https://gitlab.com/antora/antora/tree/master/packages/site-generator-default) so that we can wire in the antora-lunr step that generaes the search index
* We use a MacGyvered (and not in a good way) ui-bundle, because we need to integrate the search UI and our jargon-stemming plugin

This is haphazardly constructed at present, see [TODOs](TODO.md) for details.

To build locally, you'll need Antora (but not the default site generator) installed globally, and run:

```
./build-local.sh
```

Which should zip up the ui-bundle, and run Antora with the customised generator and leave your output in `./build/site/`

