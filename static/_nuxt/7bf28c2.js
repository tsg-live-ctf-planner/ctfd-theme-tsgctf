(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{437:function(e,t,r){"use strict";var n=0;function o(e){if(!n){var s=document.createElement("script");s.setAttribute("src",e),document.body.appendChild(s),n=new Promise((function(e){s.onload=function(){e(window.twttr)}}))}return n}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:o,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,e.props),mounted:function(){var t,r=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(n){return e.embedComponent(n,t,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},442:function(e,t,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(93).default)("0134cbae",content,!0,{sourceMap:!1})},458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return l.default}});var n=c(r(459)),o=c(r(460)),l=c(r(461));function c(e){return e&&e.__esModule?e:{default:e}}},459:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(437).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTweetEmbed.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;t.default=o},460:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(437).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createMoment.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;t.default=o},461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(437).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTimeline.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}}),o=n;t.default=o},462:function(e,t,r){"use strict";r(442)},463:function(e,t,r){var n=r(92)(!1);n.push([e.i,'.About h3{font-size:2rem;font-family:"Fredoka One",cursive;font-weight:300;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}.About .period{text-align:center;font-size:3rem;line-height:3rem}.About ol,.About p,.About ul{font-family:"Roboto";width:100%;max-width:50rem;margin:0 auto;font-size:1.4rem;line-height:2rem}.About ul.socials{display:flex;justify-content:center;flex-wrap:wrap;padding:0}.About ul.socials li{flex:0 0 20rem;height:30rem;overflow-y:auto;display:flex;flex-direction:column;align-items:center;font-size:1rem;margin:0 1rem .6rem}.About img{display:block;width:80vw;max-width:30rem;margin:0 auto 1rem}.About a{color:#90cbff}',""]),e.exports=n},501:function(e,t,r){"use strict";r.r(t);var n={components:{Timeline:r(458).Timeline},head:function(){return{title:"About - TSG LIVE! 10 CTF"}}},o=(r(462),r(37)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"About"},[e._m(0),e._v(" "),r("h3",[e._v("Period")]),e._v(" "),e._m(1),e._v(" "),r("p",{style:{textAlign:"center"}},[e._v("(JST)")]),e._v(" "),r("h3",[e._v("Staffs")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Below is the full list of TSG members who contributed to this CTF in success. So many thanks!!")]),e._v(" "),e._m(4)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{staticClass:"title"},[r("span",[e._v("About")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"period"},[r("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210516T1433&p1=248",target:"_blank",rel:"noopener"}},[e._v("5/13 13:03")]),e._v("\n\t\t-\n\t\t"),r("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210516T1613&p1=248",target:"_blank",rel:"noopener"}},[e._v("5/13 14:43")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://tsg.ne.jp/",target:"_blank",rel:"noopener"}},[t("img",{attrs:{src:"https://old.tsg.ne.jp/images/tsg-logo.png"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n\t\tTSG LIVE! 10 CTF is organized by "),r("a",{attrs:{href:"https://tsg.ne.jp/",target:"_blank",rel:"noopener"}},[e._v("TSG")]),e._v(", the official computer society of The\n\t\tUniversity of Tokyo.\n\t")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://twitter.com/iwashiira",target:"_blank",rel:"noopener"}},[e._v("@iwashiira")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/syobon_hinata",target:"_blank",rel:"noopener"}},[e._v("@syobon_hinata")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/JP3BGY",target:"_blank",rel:"noopener"}},[e._v("@JP3BGY")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/moratorium08",target:"_blank",rel:"noopener"}},[e._v("@moratorium08")])])])}],!1,null,null,null);t.default=component.exports}}]);