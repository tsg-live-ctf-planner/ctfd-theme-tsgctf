(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{434:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("53eee732",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r(434)},436:function(t,e,r){var n=r(92)(!1);n.push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),t.exports=n},437:function(t,e,r){"use strict";var n=r(5),o=r(438),c=r(210),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);n(n.P+n.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},438:function(t,e,r){var n=r(28),o=r(211),c=r(47);t.exports=function(t,e,r,l){var m=String(c(t)),f=m.length,d=void 0===r?" ":String(r),h=n(e);if(h<=f||""==d)return m;var v=h-f,y=o.call(d,Math.ceil(v/d.length));return y.length>v&&(y=y.slice(0,v)),l?y+m:m+y}},439:function(t,e,r){"use strict";var n={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(r(435),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[r("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),r("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),r("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},441:function(t,e,r){"use strict";var n=r(8),o=r(42),c=r(43),l=r(135),m=r(94),f=r(16),d=r(69).f,h=r(70).f,v=r(23).f,y=r(442).trim,_="Number",O=n.Number,S=O,w=O.prototype,j=c(r(95)(w))==_,x="trim"in String.prototype,T=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=x?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!O(" 0o1")||!O("0b1")||O("+0x1")){O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(j?f((function(){w.valueOf.call(r)})):c(r)!=_)?l(new S(T(e)),r,O):T(e)};for(var C,I=r(14)?d(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;I.length>D;D++)o(S,C=I[D])&&!o(O,C)&&v(O,C,h(S,C));O.prototype=w,w.constructor=O,r(26)(n,_,O)}},442:function(t,e,r){var n=r(5),o=r(47),c=r(16),l=r(443),m="["+l+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),h=function(t,e,r){var o={},m=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=m?e(v):l[t];r&&(o[r]=f),n(n.P+n.F*m,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(d,"")),t};t.exports=h},443:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},444:function(t,e,r){"use strict";r(15),r(9),r(12),r(21),r(22);var n=r(4),o=(r(441),r(437),r(7),r(67),r(68),r(29));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={props:{class:{required:!1,default:"",type:String},datetime:{required:!0,type:Number},autoUpdate:{required:!0,type:Number}},computed:l(l({},Object(o.c)(["isStatic"])),{},{klass:function(){return this.class},date:function(){return new Date(this.datetime)},dateText:function(){var t=(this.date.getUTCMonth()+1).toString().padStart(2,"0"),e=this.date.getUTCDate().toString().padStart(2,"0"),r=this.date.getUTCHours().toString().padStart(2,"0"),n=this.date.getUTCMinutes().toString().padStart(2,"0"),o=this.date.getUTCSeconds().toString().padStart(2,"0");return"".concat(t,"/").concat(e," ").concat(r,":").concat(n,":").concat(o)}})},f=r(37),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isStatic?r("time",{class:t.klass,attrs:{datetime:t.datetime}},[t._v("\n\t"+t._s(t.dateText)+"\n")]):r("timeago",{class:t.klass,attrs:{datetime:t.datetime,"auto-update":t.autoUpdate}})}),[],!1,null,null,null);e.a=component.exports},459:function(t,e,r){var content=r(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("b331e310",content,!0,{sourceMap:!1})},499:function(t,e,r){"use strict";r(459)},500:function(t,e,r){var n=r(92)(!1);n.push([t.i,'.Team .title{text-transform:none;margin-bottom:0;z-index:-1;display:flex;justify-content:center;flex-direction:column;align-items:center}.Team .title:before{content:"Team";font-family:serif;font-family:initial;color:hsla(0,0%,100%,.6);font-size:1rem;line-height:.2rem;text-align:center;left:0;right:0;bottom:calc(100% - .3rem)}.Team .score{font-size:2rem}.Team .members-head,.Team .score{text-align:center;font-family:"Roboto"}.Team .members-head{font-size:1.2rem;margin-top:2rem}.Team .members{display:flex;flex-wrap:wrap;width:100%;max-width:30rem;margin:0 auto;justify-content:center}.Team .member{font-size:1.5rem;margin:0 .5rem}.Team table{max-width:1000px;margin-top:4rem}.Team thead{font-size:1.4rem}.Team tbody{font-size:1.2rem}',""]),t.exports=n},516:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(21),r(22);var n=r(51),o=r(10),c=r(2),l=r(4),m=(r(13),r(17),r(7),r(18),r(53),r(9),r(30),r(96),r(24),r(27),r(29)),f=r(444);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{PulseLoader:r(439).a,IsoTimeago:f.a},computed:h(h({team:function(t){return this.teams.get(parseInt(this.$route.params.id))||{}},score:function(t){return this.$store.getters["scoreboard/getScore"](parseInt(this.$route.params.id))||{}}},Object(m.c)({isStatic:"isStatic",isLoggedIn:"isLoggedIn",isVerified:"isVerified",teams:function(t){return t.teams.teams}})),Object(m.b)({getUser:"users/getUser"})),asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.store.dispatch("teams/getTeam",h(h({},t),{},{id:t.route.params.id})),t.store.dispatch("scoreboard/updateScoreboard",t)]);case 2:r=e.sent,n=Object(o.a)(r,1),null===n[0]&&t.error({statusCode:404,message:"Team not found"});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){if(this.isStatic||this.isLoggedIn)if(this.isStatic||this.isVerified){var t=Array.from(new Set([].concat(Object(n.a)(this.team.solves.map((function(t){return t.user}))),Object(n.a)(this.team.members))));this.$store.dispatch("users/getUsers",{$axios:this.$axios,ids:t})}else this.$router.replace({path:"/confirm"});else this.$router.replace({path:"/login"})},methods:{formatOrdinals:function(i){var t=i%10,e=i%100;return"".concat(i,1===t&&11!==e?"st":2===t&&12!==e?"nd":3===t&&13!==e?"rd":"th")}},head:function(){return{title:"Team ".concat(this.team&&this.team.name," - TSG LIVE! 7 CTF")}}},y=(r(499),r(37)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Team"},[r("h2",{staticClass:"title"},[r("span",[t._v(t._s(t.team.name))])]),t._v(" "),r("div",{staticClass:"score"},[t._v(t._s(t.formatOrdinals(t.score.pos))+" "+t._s(t.score.score)+"pts")]),t._v(" "),r("div",{staticClass:"members-head"},[t._v("Members")]),t._v(" "),r("div",{staticClass:"members"},t._l(t.team.members,(function(e){return r("div",{key:e,staticClass:"member"},[t.getUser(e)?r("span",[t._v(t._s(t.getUser(e).name))]):r("pulse-loader",{attrs:{color:"white",size:"10px"}})],1)})),0),t._v(" "),r("div",{staticClass:"table-wrap"},[r("table",{staticClass:"scoreboard"},[t._m(0),t._v(" "),r("tbody",t._l(t.team.solves,(function(e){return r("tr",{key:e.challenge_id},[r("td",[r("b",[t._v(t._s(e.challenge.name))])]),t._v(" "),r("td",[t._v(t._s(e.challenge.category))]),t._v(" "),r("td",[t._v(t._s(e.challenge.value))]),t._v(" "),r("td",[t.getUser(e.user)?r("span",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.getUser(e.user).name)+"\n\t\t\t\t\t\t")]):r("pulse-loader",{attrs:{color:"white",size:"10px"}})],1),t._v(" "),r("td",[r("iso-timeago",{attrs:{datetime:e.date,"auto-update":60}})],1)])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",{attrs:{scope:"col"}},[r("b",[t._v("Challenge")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Category")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Value")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Solver")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Time")])])])])}],!1,null,null,null);e.default=component.exports}}]);