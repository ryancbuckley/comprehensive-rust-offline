# Third-party notices without a local source

`offline/licenses.mjs` reads most license files from where the code comes from
(`node_modules/`, this repository, the built book). These are for code we only
have as built files:

- `mdbook/`: the libraries mdBook copies into every book: Ace (`LICENSE` at
  ajaxorg/ace), highlight.js 10.1.1, clipboard.js 2.0.4, elasticlunr 0.9.5,
  mark.js 8.11.1, and Font Awesome Free 6.2.0, whose icons are inlined as SVG.
  `licenses.mjs` reads the versions from the built book and stops if a library
  is missing; when mdBook changes them, these need updating.
- `MIT.txt`: the MIT license (SPDX's template), for packages that say they are
  MIT but ship no license text (is-node-process, strict-event-emitter).
