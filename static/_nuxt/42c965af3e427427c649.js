(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{413:function(t,e,r){var content=r(437);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("2dfca512",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";var n=r(413);r.n(n).a},437:function(t,e,r){(t.exports=r(71)(!1)).push([t.i,".Reset{text-align:center}.Reset .title{margin-bottom:3rem}.Reset .subtitle{margin-bottom:1rem;font-size:1.5rem}",""])},468:function(t,e,r){"use strict";r.r(e);r(12);var n=r(2),o=r(4),c=r(38),f={data:function(){return{isError:!1}},computed:Object(o.a)({},Object(c.c)(["isLoggedIn","csrfToken"])),asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("updateCsrfToken",e);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){document.referrer&&("/reset_password"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Reset Password - TSG CTF"}}},l=(r(436),r(30)),component=Object(l.a)(f,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"Reset"},[e("h2",{staticClass:"title"},[e("span",[this._v("Reset Password")])]),this._v(" "),e("p",[this._v("Sorry, please contact an organizer to have your password reset")])])}],!1,null,null,null);e.default=component.exports}}]);