(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{316:function(t,n,e){},317:function(t,n,e){},318:function(t,n,e){var r=e(28),i="["+e(319)+"]",o=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),a=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(u,"")),e}};t.exports={start:a(1),end:a(2),trim:a(3)}},319:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},321:function(t,n,e){"use strict";var r=e(316);e.n(r).a},322:function(t,n,e){"use strict";var r=e(317);e.n(r).a},323:function(t,n,e){"use strict";var r=e(8),i=e(6),o=e(101),u=e(15),a=e(9),s=e(22),c=e(324),p=e(48),f=e(4),l=e(34),v=e(70).f,g=e(29).f,h=e(11).f,m=e(318).trim,d=i.Number,b=d.prototype,_="Number"==s(l(b)),x=function(t){var n,e,r,i,o,u,a,s,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(n=(c=m(c)).charCodeAt(0))||45===n){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(u=(o=c.slice(2)).length,a=0;a<u;a++)if((s=o.charCodeAt(a))<48||s>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var y,N=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof N&&(_?f((function(){b.valueOf.call(e)})):"Number"!=s(e))?c(new d(x(n)),e,N):x(n)},$=r?v(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;$.length>O;O++)a(d,y=$[O])&&!a(N,y)&&h(N,y,g(d,y));N.prototype=b,b.constructor=N,u(i,"Number",N)}},324:function(t,n,e){var r=e(7),i=e(102);t.exports=function(t,n,e){var o,u;return i&&"function"==typeof(o=n.constructor)&&o!==e&&r(u=o.prototype)&&u!==e.prototype&&i(t,u),t}},325:function(t,n,e){var r=e(182),i=e(175),o=e(326),u=e(330);t.exports=function(t,n){if(null==t)return{};var e=r(u(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},326:function(t,n,e){var r=e(107),i=e(327),o=e(100);t.exports=function(t,n,e){for(var u=-1,a=n.length,s={};++u<a;){var c=n[u],p=r(t,c);e(p,c)&&i(s,o(c,t),p)}return s}},327:function(t,n,e){var r=e(328),i=e(100),o=e(105),u=e(69),a=e(49);t.exports=function(t,n,e,s){if(!u(t))return t;for(var c=-1,p=(n=i(n,t)).length,f=p-1,l=t;null!=l&&++c<p;){var v=a(n[c]),g=e;if(c!=f){var h=l[v];void 0===(g=s?s(h,v,l):void 0)&&(g=u(h)?h:o(n[c+1])?[]:{})}r(l,v,g),l=l[v]}return t}},328:function(t,n,e){var r=e(329),i=e(104),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var u=t[n];o.call(t,n)&&i(u,e)&&(void 0!==e||n in t)||r(t,n,e)}},329:function(t,n,e){var r=e(183);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},330:function(t,n,e){var r=e(176),i=e(331),o=e(333);t.exports=function(t){return r(t,o,i)}},331:function(t,n,e){var r=e(103),i=e(332),o=e(177),u=e(178),a=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:u;t.exports=a},332:function(t,n,e){var r=e(181)(Object.getPrototypeOf,Object);t.exports=r},333:function(t,n,e){var r=e(179),i=e(334),o=e(106);t.exports=function(t){return o(t)?r(t,!0):i(t)}},334:function(t,n,e){var r=e(69),i=e(180),o=e(335),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var a in t)("constructor"!=a||!n&&u.call(t,a))&&e.push(a);return e}},335:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},336:function(t,n,e){},337:function(t,n,e){},339:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return f}));e(12);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,367,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(321),e(14)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,u=(e(322),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,e(323),e(71)),a=e.n(u),s=e(325),c=e.n(s),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,a.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(p,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},343:function(t,n,e){"use strict";var r=e(336);e.n(r).a},344:function(t,n,e){"use strict";var r=e(337);e.n(r).a},370:function(t,n,e){"use strict";e.r(n);var r={components:{Comment:e(339).a}},i=(e(343),e(344),e(14)),o=Object(i.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("Content"),this._v(" "),n("Comment")],1)}),[],!1,null,null,null);n.default=o.exports}}]);