(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{445:function(t,e,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("723e5689",content,!0,{sourceMap:!1})},470:function(t,e,r){"use strict";r(445)},471:function(t,e,r){var n=r(92)(!1);n.push([t.i,".Confirm{text-align:center}.Confirm .title{margin-bottom:3rem}.Confirm .subtitle{margin-bottom:1rem;font-size:1.5rem}.Confirm button[type=submit]{width:10rem;margin:1rem 0}",""]),t.exports=n},502:function(t,e,r){"use strict";r.r(e);r(15),r(9),r(12),r(21),r(22);var n=r(2),o=r(4),c=(r(53),r(13),r(29));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{isError:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["isLoggedIn","isVerified","csrfToken"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("updateCsrfToken",t);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){(this.isLoggedIn||this.$router.replace({path:"/login"}),document.referrer)&&("/confirm"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Confirmation Step - TSG LIVE! 10 CTF"}}},m=l,d=(r(470),r(37)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Confirm"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("form",{attrs:{method:"POST"}},[r("button",{attrs:{id:"submit",type:"submit",tabindex:"5"}},[t._v("Resend")]),t._v(" "),r("input",{attrs:{type:"hidden",name:"nonce"},domProps:{value:t.csrfToken}})])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title"},[r("span",[t._v("Confirmation Step")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subtitle"},[t._v("\n\t\tWe've sent a confirmation email to you!"),r("br"),t._v("\n\t\tPlease click the link in that email to confirm your account.\n\t")])}],!1,null,null,null);e.default=component.exports}}]);