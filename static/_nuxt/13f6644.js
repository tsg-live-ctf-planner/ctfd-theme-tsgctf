(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{437:function(t,n,e){"use strict";var r=e(5),o=e(438),c=e(210),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},438:function(t,n,e){var r=e(28),o=e(211),c=e(47);t.exports=function(t,n,e,l){var f=String(c(t)),d=f.length,m=void 0===e?" ":String(e),h=r(n);if(h<=d||""==m)return f;var v=h-d,w=o.call(m,Math.ceil(v/m.length));return w.length>v&&(w=w.slice(0,v)),l?w+f:f+w}},460:function(t,n,e){var content=e(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(93).default)("6759f5ab",content,!0,{sourceMap:!1})},501:function(t,n,e){"use strict";e(460)},502:function(t,n,e){var r=e(92)(!1);r.push([t.i,"\n.Index {\n\tmargin: 0 auto;\n\theight: calc(100vh - 4rem);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n.index-content {\n\t\tmax-width: 100%;\n}\n.ctf-logo {\n\t\tfont-family: 'Fredoka One', cursive;\n\t\tfont-size: 8rem;\n\t\tfont-weight: 300;\n\t\tcolor: rgb(0, 150, 250);\n\t\t-webkit-text-fill-color: transparent;\n\t\tbackground: linear-gradient(90deg, rgb(151, 77, 255) 0%, rgb(41, 210, 119) 100%);\n\t\tbackground-clip: text;\n\t\tdisplay: block;\n\t\tletter-spacing: 1px;\n\t\tmix-blend-mode: screen;\n@media (max-width: 900px) {\n\t\t\tfont-size: 18vw;\n}\n}\n.subtitle {\n\t\tfont-family: 'Roboto', sans-serif;\n\t\tfont-size: 1.5rem;\n\t\tmargin-top: -1rem;\n\t\topacity: 0.3;\n}\n.buttons {\n\t\tdisplay: flex;\n\t\tmargin-top: 1rem;\n\t\tjustify-content: center;\n}\n.button {\n\t\tdisplay: block;\n\t\tmargin: 0 0.5rem;\n\t\twidth: 10rem;\n\t\theight: 2.6rem;\n\t\tline-height: 2.6rem;\n\t\tborder-radius: 9999px;\n\t\tfont-size: 1.5rem;\n\t\tfont-family: 'Fredoka One', cursive;\n\t\tfont-weight: 300;\n&.login {\n\t\t\tbackground: linear-gradient(90deg, #6299a7 0%, #21207d 100%);\n}\n&.register {\n\t\t\tbackground: linear-gradient(90deg, #ffc107 0%, #f44336 100%);\n}\n}\n.timer {\n\t\tmargin-top: 1rem;\n\t\tfont-family: 'Roboto', sans-serif;\n\t\tfont-size: 4rem;\n}\n}\n",""]),t.exports=r},517:function(t,n,e){"use strict";e.r(n);e(15),e(9),e(12),e(21),e(22);var r=e(4),o=(e(437),e(7),e(67),e(68),e(134)),c=e(29);function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var f=new Date("2021-11-22T14:03:00+0900").getTime(),d=new Date("2021-11-22T15:43:00+0900").getTime(),m={components:{IsoLink:o.a},data:function(){return{remainingTime:this.getRemaining()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({timer:function(){var t=Math.floor(this.remainingTime/1e3/60/60/24).toString().padStart(2,"0"),n=(Math.floor(this.remainingTime/1e3/60/60)%24).toString().padStart(2,"0"),e=(Math.floor(this.remainingTime/1e3/60)%60).toString().padStart(2,"0"),r=(Math.floor(this.remainingTime/1e3)%60).toString().padStart(2,"0");return"".concat(t,":").concat(n,":").concat(e,":").concat(r)}},Object(c.c)(["isLoggedIn"])),mounted:function(){var t=this;this.interval=setInterval((function(){t.remainingTime=t.getRemaining()}),1e3)},unmounted:function(){clearInterval(this.interval)},methods:{getRemaining:function(){var t=Date.now();return t>d?0:t>f?d-t:f-t}},head:function(){return{title:"TSG LIVE! 7 CTF"}}},h=m,v=(e(501),e(37)),component=Object(v.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"Index"},[e("div",{staticClass:"index-content"},[e("h1",{staticClass:"ctf-logo"},[t._v("TSG LIVE! 7 CTF")]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v("Pwn, Rev, Web, Crypto, etc...")]),t._v(" "),e("div",{staticClass:"timer"},[t._v(t._s(t.timer))]),t._v(" "),t.isLoggedIn?t._e():e("div",{staticClass:"buttons"},[e("iso-link",{staticClass:"button login",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("iso-link",{staticClass:"button register",attrs:{to:"/register"}},[t._v("Register")])],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);