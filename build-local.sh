set -e
pushd ui-bundle && zip -r ui-bundle.zip * && popd
DOCSEARCH_ENABLED=true DOCSEARCH_ENGINE=lunr antora site-local.yml --generator ./generator/ --stacktrace