(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{419:function(t,e,r){var content=r(453);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("4753035a",content,!0,{sourceMap:!1})},452:function(t,e,r){"use strict";var n=r(419);r.n(n).a},453:function(t,e,r){(t.exports=r(71)(!1)).push([t.i,".NewTeam{text-align:center}.NewTeam .title{margin-bottom:0}.NewTeam .subtitle{margin-bottom:2rem;font-size:1.5rem}.NewTeam .subtitle a{color:#90cbff}.NewTeam .form-group{display:flex;justify-content:center;line-height:2rem;padding:.6rem 0;align-items:center}.NewTeam label{font-size:1rem;width:10rem;text-align:right;padding-right:1rem}.NewTeam .form-control{font-size:1.2rem;width:20rem}.NewTeam button[type=submit]{width:10rem;margin:1rem 0}",""])},474:function(t,e,r){"use strict";r.r(e);r(12);var n=r(2),o=r(4),m=r(38),c={data:function(){return{isError:!1}},computed:Object(o.a)({},Object(m.c)(["csrfToken"])),asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("updateCsrfToken",e);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){document.referrer&&("/teams/new"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Create Team - TSG CTF"}}},l=(r(452),r(30)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"NewTeam"},[t._m(0),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("After creating your team, share the team name and password with your teammates so they can join your team.")]),t._v(" "),r("form",{staticClass:"login-form",attrs:{method:"post","accept-charset":"utf-8",autocomplete:"off"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("input",{attrs:{type:"hidden",name:"nonce"},domProps:{value:t.csrfToken}})])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("Create Team")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name-input"}},[this._v("\n\t\t\t\tTeam Name\n\t\t\t")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{id:"name-input",type:"text",name:"name"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password-input"}},[this._v("\n\t\t\t\tTeam Password\n\t\t\t")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{id:"password-input",type:"password",name:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{attrs:{id:"submit",type:"submit",tabindex:"5"}},[this._v("\n\t\t\t\tCreate\n\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);