(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{452:function(e,t,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(93).default)("1f5991fb",content,!0,{sourceMap:!1})},481:function(e,t,r){"use strict";r(452)},482:function(e,t,r){var n=r(92)(!1);n.push([e.i,"\n.Reset {\n\ttext-align: center;\n.title {\n\t\tmargin-bottom: 3rem;\n}\n.subtitle {\n\t\tmargin-bottom: 1rem;\n\t\tfont-size: 1.5rem;\n}\n}\n",""]),e.exports=n},509:function(e,t,r){"use strict";r.r(t);r(15),r(9),r(12),r(21),r(22);var n=r(2),o=r(4),c=(r(13),r(29));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={data:function(){return{isError:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["isLoggedIn","csrfToken"])),asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("updateCsrfToken",e);case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){document.referrer&&("/reset_password"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Reset Password - TSG LIVE! 7 CTF"}}},d=l,m=(r(481),r(37)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"Reset"},[r("h2",{staticClass:"title"},[r("span",[e._v("Reset Password")])]),e._v(" "),r("p",[e._v("Sorry, please contact an organizer to have your password reset")])])}],!1,null,null,null);t.default=component.exports}}]);