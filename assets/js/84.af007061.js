(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{422:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mime-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-db"}},[e._v("#")]),e._v(" mime-db")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.org/package/mime-db",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/npm/v/mime-db",alt:"NPM Version"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/mime-db",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/npm/dm/mime-db",alt:"NPM Downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/npm/node/mime-db",alt:"Node.js Version"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://travis-ci.org/jshttp/mime-db",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/travis/jshttp/mime-db/master",alt:"Build Status"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/jshttp/mime-db?branch=master",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/coveralls/c/github/jshttp/mime-db/master",alt:"Coverage Status"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This is a database of all mime types.\nIt consists of a single, public JSON file and does not include any logic,\nallowing it to remain as un-opinionated as possible with an API.\nIt aggregates data from the following sources:")]),e._v(" "),a("ul",[a("li",[e._v("http://www.iana.org/assignments/media-types/media-types.xhtml")]),e._v(" "),a("li",[e._v("http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types")]),e._v(" "),a("li",[e._v("http://hg.nginx.org/nginx/raw-file/default/conf/mime.types")])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" mime-db\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"database-download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-download"}},[e._v("#")]),e._v(" Database Download")]),e._v(" "),a("p",[e._v("If you're crazy enough to use this in the browser, you can just grab the\nJSON file using "),a("a",{attrs:{href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsDelivr"),a("OutboundLink")],1),e._v(". It is recommended to\nreplace "),a("code",[e._v("master")]),e._v(" with "),a("a",{attrs:{href:"https://github.com/jshttp/mime-db/tags",target:"_blank",rel:"noopener noreferrer"}},[e._v("a release tag"),a("OutboundLink")],1),e._v("\nas the JSON format may change in the future.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://cdn.jsdelivr.net/gh/jshttp/mime-db@master/db.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'mime-db'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// grab data on .js files")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'application/javascript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[e._v("#")]),e._v(" Data Structure")]),e._v(" "),a("p",[e._v("The JSON file is a map lookup for lowercased mime types.\nEach mime type has the following properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".source")]),e._v(" - where the mime type is defined.\nIf not set, it's probably a custom media type.\n"),a("ul",[a("li",[a("code",[e._v("apache")]),e._v(" - "),a("a",{attrs:{href:"http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache common media types"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("iana")]),e._v(" - "),a("a",{attrs:{href:"http://www.iana.org/assignments/media-types/media-types.xhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("IANA-defined media types"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("nginx")]),e._v(" - "),a("a",{attrs:{href:"http://hg.nginx.org/nginx/raw-file/default/conf/mime.types",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx media types"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("code",[e._v(".extensions[]")]),e._v(" - known extensions associated with this mime type.")]),e._v(" "),a("li",[a("code",[e._v(".compressible")]),e._v(" - whether a file of this type can be gzipped.")]),e._v(" "),a("li",[a("code",[e._v(".charset")]),e._v(" - the default charset associated with this type, if any.")])]),e._v(" "),a("p",[e._v("If unknown, every property could be "),a("code",[e._v("undefined")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),a("p",[e._v("To edit the database, only make PRs against "),a("code",[e._v("src/custom.json")]),e._v(" or\n"),a("code",[e._v("src/custom-suffix.json")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("src/custom.json")]),e._v(" file is a JSON object with the MIME type as the keys\nand the values being an object with the following keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("compressible")]),e._v(" - leave out if you don't know, otherwise "),a("code",[e._v("true")]),e._v("/"),a("code",[e._v("false")]),e._v(" to\nindicate whether the data represented by the type is typically compressible.")]),e._v(" "),a("li",[a("code",[e._v("extensions")]),e._v(" - include an array of file extensions that are associated with\nthe type.")]),e._v(" "),a("li",[a("code",[e._v("notes")]),e._v(" - human-readable notes about the type, typically what the type is.")]),e._v(" "),a("li",[a("code",[e._v("sources")]),e._v(" - include an array of URLs of where the MIME type and the associated\nextensions are sourced from. This needs to be a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Primary_source",target:"_blank",rel:"noopener noreferrer"}},[e._v("primary source"),a("OutboundLink")],1),e._v(";\nlinks to type aggregating sites and Wikipedia are "),a("em",[e._v("not acceptable")]),e._v(".")])]),e._v(" "),a("p",[e._v("To update the build, run "),a("code",[e._v("npm run build")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"adding-custom-media-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-media-types"}},[e._v("#")]),e._v(" Adding Custom Media Types")]),e._v(" "),a("p",[e._v("The best way to get new media types included in this library is to register\nthem with the IANA. The community registration procedure is outlined in\n"),a("a",{attrs:{href:"http://tools.ietf.org/html/rfc6838#section-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 6838 section 5"),a("OutboundLink")],1),e._v(". Types\nregistered with the IANA are automatically pulled into this library.")])])}),[],!1,null,null,null);t.default=n.exports}}]);