(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{340:function(t,n,a){"use strict";a.r(n);var r=a(358),e=a(361),i={name:"markmap",props:["src"],data:function(){return{}},beforeCreate:function(){window.MathJax={options:{skipHtmlTags:{"[-]":["code","pre"]}}}},mounted:function(){Object(e.markmap)("#markmap",Object(r.transform)(a(363)("".concat(this.src))),{processHtml:function(t){window.MathJax.typeset&&MathJax.typeset(t)}})}},o=a(14),s=Object(o.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("hr"),this._v(" "),n("svg",{staticStyle:{width:"800px",height:"800px"},attrs:{id:"markmap"}}),this._v(" "),n("hr")])}),[],!1,null,"1663f6f4",null);n.default=s.exports},363:function(t,n,a){var r={"./markmap":340,"./markmap.vue":340,"./markmap/note.mkd":364};function e(t){var n=i(t);return a(n)}function i(t){if(!a.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}e.keys=function(){return Object.keys(r)},e.resolve=i,t.exports=e,e.id=363},364:function(t,n){t.exports="# markmap-lib\n\n## Links\n\n- <https://markmap.js.org/>\n- [GitHub](https://github.com/gera2ld/markmap-lib)\n\n## Related\n\n- [coc-markmap](https://github.com/gera2ld/coc-markmap)\n- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)\n\n## Features\n\n- links\n- **inline** *styles* ~~text~~\n- multiline\n  text\n- `inline code`\n- MathJax - `\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)`\n"}}]);