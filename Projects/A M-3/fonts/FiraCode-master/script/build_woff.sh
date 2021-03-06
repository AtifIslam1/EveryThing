#!/bin/bash
set -o errexit -o nounset -o pipefail
cd "`dirname $0`/.."
[ -d venv ] && source venv/bin/activate
mkdir -p distr/woff
rm -rf distr/woff/*

# requires sfnt2woff-zopfli (get from https://github.com/bramstein/homebrew-webfonttools)

ttfs=$(ls distr/*/*.ttf)
for ttf in $ttfs; do
    echo "sfnt2woff-zopfli $ttf"
    sfnt2woff-zopfli $ttf
done

mkdir -p distr/woff
mv distr/*/*.woff distr/woff
rm distr/woff/FiraCode-Retina.woff
