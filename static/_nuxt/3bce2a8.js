(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{449:function(t,e,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("44d37eae",content,!0,{sourceMap:!1})},475:function(t,e,r){"use strict";r(449)},476:function(t,e,r){var n=r(92)(!1);n.push([t.i,'.Login{text-align:center}.Login .title{margin-bottom:0}.Login .subtitle{margin-bottom:2rem;font-size:1.5rem}.Login .subtitle a{color:#90cbff}.Login .form-group{display:flex;justify-content:center;line-height:2rem;padding:.6rem 0;align-items:center}.Login label{font-size:1rem;width:10rem;text-align:right;padding-right:1rem}.Login .form-control{font-size:1.2rem;width:20rem}.Login .error{font-size:1.5rem;font-family:"Fredoka One",cursive;font-weight:300;color:#f44336;padding:0;line-height:2rem}.Login button[type=submit]{width:10rem;margin:1rem 0}',""]),t.exports=n},506:function(t,e,r){"use strict";r.r(e);r(15),r(9),r(12),r(21),r(22);var n=r(2),o=r(4),c=(r(13),r(134)),l=r(29);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={components:{IsoLink:c.a},data:function(){return{isError:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)(["isLoggedIn","csrfToken"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("updateCsrfToken",t);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){document.referrer&&("/login"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Login - TSG LIVE! 7 CTF"}}},d=m,v=(r(475),r(37)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Login"},[t._m(0),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("or "),r("iso-link",{attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),r("form",{staticClass:"login-form",attrs:{method:"post","accept-charset":"utf-8",autocomplete:"off"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t.isError?r("div",{staticClass:"error"},[t._v("\n\t\t\tLogin errored. Maybe incorrect username of password?\n\t\t")]):t._e(),t._v(" "),r("div",[r("iso-link",{attrs:{to:"/reset_password"}},[t._v("\n\t\t\t\tForgot your password?\n\t\t\t")])],1),t._v(" "),r("input",{attrs:{type:"hidden",name:"nonce"},domProps:{value:t.csrfToken}})])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title"},[r("span",[t._v("Login")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name-input"}},[t._v("\n\t\t\t\tUser Name or Email\n\t\t\t")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{id:"name-input",type:"text",name:"name"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password-input"}},[t._v("\n\t\t\t\tPassword\n\t\t\t")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{id:"password-input",type:"password",name:"password"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{attrs:{id:"submit",type:"submit",tabindex:"5"}},[t._v("\n\t\t\t\tSubmit\n\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);