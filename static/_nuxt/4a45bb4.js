(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{451:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("571af42b",content,!0,{sourceMap:!1})},479:function(t,e,n){"use strict";n(451)},480:function(t,e,n){var r=n(92)(!1);r.push([t.i,"\n.Register {\n\ttext-align: center;\n.title {\n\t\tmargin-bottom: 0;\n}\n.subtitle {\n\t\tmargin-bottom: 2rem;\n\t\tfont-size: 1.5rem;\na {\n\t\t\tcolor: #90cbff;\n}\n}\n.form-group {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tline-height: 2rem;\n\t\tpadding: 0.6rem 0;\n\t\talign-items: center;\n}\nlabel {\n\t\tfont-size: 1rem;\n\t\twidth: 10rem;\n\t\ttext-align: right;\n\t\tpadding-right: 1rem;\n}\n.form-control {\n\t\tfont-size: 1.2rem;\n\t\twidth: 20rem;\n}\n.error {\n\t\tfont-size: 1.5rem;\n\t\tfont-family: 'Fredoka One', cursive;\n\t\tfont-weight: 300;\n\n\t\tcolor: #f44336;\n\t\tpadding: 0;\n\t\tline-height: 2rem;\n}\nbutton[type='submit'] {\n\t\twidth: 10rem;\n\t\tmargin: 1rem 0;\n}\n}\n",""]),t.exports=r},508:function(t,e,n){"use strict";n.r(e);n(15),n(9),n(12),n(21),n(22);var r=n(2),o=n(4),c=(n(13),n(134)),l=n(29);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={components:{IsoLink:c.a},data:function(){return{isError:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)(["isLoggedIn","csrfToken"])),asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("updateCsrfToken",t);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){document.referrer&&("/register"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Register - TSG LIVE! 7 CTF"}}},d=f,v=(n(479),n(37)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"Register"},[t._m(0),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("or "),n("iso-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),n("form",{staticClass:"login-form",attrs:{method:"post","accept-charset":"utf-8",autocomplete:"off"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",[t._v("\n\t\t\tIndividual registration is recommended. You can create team account later.\n\t\t")]),t._v(" "),t.isError?n("div",{staticClass:"error"},[t._v("\n\t\t\tRegistration errored. Maybe username already taken?\n\t\t")]):t._e(),t._v(" "),t._m(4),t._v(" "),n("input",{attrs:{type:"hidden",name:"nonce"},domProps:{value:t.csrfToken}})])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"title"},[n("span",[t._v("Register")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name-input"}},[t._v("\n\t\t\t\tUser Name\n\t\t\t")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{id:"name-input",type:"text",name:"name"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email-input"}},[t._v("\n\t\t\t\tEmail\n\t\t\t")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{id:"email-input",type:"email",name:"email"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password-input"}},[t._v("\n\t\t\t\tPassword\n\t\t\t")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{id:"password-input",type:"password",name:"password"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{attrs:{id:"submit",type:"submit",tabindex:"5"}},[t._v("\n\t\t\t\tSubmit\n\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);