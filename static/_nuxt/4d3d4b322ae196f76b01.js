(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{411:function(t,o,n){var content=n(433);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("401d8467",content,!0,{sourceMap:!1})},432:function(t,o,n){"use strict";var e=n(411);n.n(e).a},433:function(t,o,n){(t.exports=n(71)(!1)).push([t.i,".Notifications>.title{margin-bottom:5rem}.Notifications .notification{width:100%;max-width:50rem;background:hsla(0,0%,100%,.2);box-shadow:0 0 8px #000;position:relative;color:#fff;margin:1rem auto;padding:.8rem 10rem 1rem 1rem;box-sizing:border-box;border-radius:3px}.Notifications .notification .title{font-size:2rem}.Notifications .notification .date{position:absolute;bottom:1rem;right:1rem}.Notifications .no-notification{text-align:center;font-size:2.5rem;font-family:Fredoka One,cursive;font-weight:300;padding:0;line-height:2rem}",""])},466:function(t,o,n){"use strict";n.r(o);var e=n(4),c=n(38),r={computed:Object(e.a)({},Object(c.b)({notifications:"notifications/getNotifications"})),head:function(){return{title:"Notifications - TSG CTF"}}},f=(n(432),n(30)),component=Object(f.a)(r,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("section",{staticClass:"Notifications"},[t._m(0),t._v(" "),t._l(t.notifications,function(o){return n("div",{key:o.id,staticClass:"notification"},[n("div",{staticClass:"title"},[t._v(t._s(o.title))]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(o.content))]),t._v(" "),n("timeago",{staticClass:"date",attrs:{datetime:o.date,"auto-update":60}})],1)}),t._v(" "),0===t.notifications.length?n("div",{staticClass:"no-notification"},[t._v("\n\t\tNo notifications yet!\n\t")]):t._e()],2)},[function(){var t=this.$createElement,o=this._self._c||t;return o("h2",{staticClass:"title"},[o("span",[this._v("Notifications")])])}],!1,null,null,null);o.default=component.exports}}]);