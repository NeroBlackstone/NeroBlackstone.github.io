(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{316:function(t,n,e){},317:function(t,n,e){},318:function(t,n,e){var r=e(28),i="["+e(319)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:s(1),end:s(2),trim:s(3)}},319:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},321:function(t,n,e){"use strict";var r=e(316);e.n(r).a},322:function(t,n,e){"use strict";var r=e(317);e.n(r).a},323:function(t,n,e){"use strict";var r=e(8),i=e(6),o=e(101),a=e(15),s=e(9),u=e(22),c=e(324),p=e(48),f=e(4),l=e(34),v=e(70).f,h=e(29).f,g=e(11).f,m=e(318).trim,_=i.Number,d=_.prototype,b="Number"==u(l(d)),x=function(t){var n,e,r,i,o,a,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(n=(c=m(c)).charCodeAt(0))||45===n){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var y,$=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof $&&(b?f((function(){d.valueOf.call(e)})):"Number"!=u(e))?c(new _(x(n)),e,$):x(n)},N=r?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;N.length>E;E++)s(_,y=N[E])&&!s($,y)&&g($,y,h(_,y));$.prototype=d,d.constructor=$,a(i,"Number",$)}},324:function(t,n,e){var r=e(7),i=e(102);t.exports=function(t,n,e){var o,a;return i&&"function"==typeof(o=n.constructor)&&o!==e&&r(a=o.prototype)&&a!==e.prototype&&i(t,a),t}},325:function(t,n,e){var r=e(182),i=e(175),o=e(326),a=e(330);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},326:function(t,n,e){var r=e(107),i=e(327),o=e(100);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var c=n[a],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},327:function(t,n,e){var r=e(328),i=e(100),o=e(105),a=e(69),s=e(49);t.exports=function(t,n,e,u){if(!a(t))return t;for(var c=-1,p=(n=i(n,t)).length,f=p-1,l=t;null!=l&&++c<p;){var v=s(n[c]),h=e;if(c!=f){var g=l[v];void 0===(h=u?u(g,v,l):void 0)&&(h=a(g)?g:o(n[c+1])?[]:{})}r(l,v,h),l=l[v]}return t}},328:function(t,n,e){var r=e(329),i=e(104),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},329:function(t,n,e){var r=e(183);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},330:function(t,n,e){var r=e(176),i=e(331),o=e(333);t.exports=function(t){return r(t,o,i)}},331:function(t,n,e){var r=e(103),i=e(332),o=e(177),a=e(178),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},332:function(t,n,e){var r=e(181)(Object.getPrototypeOf,Object);t.exports=r},333:function(t,n,e){var r=e(179),i=e(334),o=e(106);t.exports=function(t){return o(t)?r(t,!0):i(t)}},334:function(t,n,e){var r=e(69),i=e(180),o=e(335),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},335:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},339:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return f}));e(12);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,367,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(321),e(14)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(e(322),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,e(323),e(71)),s=e.n(a),u=e(325),c=e.n(u),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,s.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(p,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},341:function(t,n,e){"use strict";var r=e(3),i=e(318).trim;r({target:"String",proto:!0,forced:e(342)("trim")},{trim:function(){return i(this)}})},342:function(t,n,e){var r=e(4),i=e(319);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},369:function(t,n,e){"use strict";e.r(n);e(73),e(72),e(108),e(341);var r={components:{Pagination:e(339).b},methods:{resovlePostDate:function(t){return new Date(t.replace(/-/g,"/").trim()).toDateString()}}},i=e(14),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ul",{attrs:{id:"default-layout"}},t._l(t.$pagination.pages,(function(n){return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[e("router-link",{attrs:{to:n.path}},[t._v("\n                "+t._s(n.title)+"\n              ")])],1),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n              "+t._s(n.frontmatter.summary)+"\n            ")]),t._v(" "),n.frontmatter.author?e("div",[t._m(0,!0),t._v(" "),e("span",[t._v(t._s(n.frontmatter.author)+" in "+t._s(n.frontmatter.location))])]):t._e(),t._v(" "),n.frontmatter.date?e("div",[t._m(1,!0),t._v(" "),e("span",[t._v(t._s(t.resovlePostDate(n.frontmatter.date)))])]):t._e()])])})),0),t._v(" "),e("div",{staticClass:"has-text-centered"},[e("Pagination")],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-home"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-clock"})])}],!1,null,null,null);n.default=o.exports}}]);