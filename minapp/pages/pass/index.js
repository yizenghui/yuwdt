(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pass/index"],{"0625":function(t,n,e){"use strict";e.r(n);var a=e("fdf4"),i=e("0a05");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("772b");var u=e("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},"0a05":function(t,n,e){"use strict";e.r(n);var a=e("c649"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=i.a},"28a9":function(t,n,e){},"772b":function(t,n,e){"use strict";var a=e("28a9"),i=e.n(a);i.a},c649:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a")),i=(r(e("66fd")),r(e("6979")));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,i,r,u){try{var o=t[r](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(a,i)}function o(t){return function(){var n=this,e=arguments;return new Promise(function(a,i){var r=t.apply(n,e);function o(t){u(r,a,i,o,s,"next",t)}function s(t){u(r,a,i,o,s,"throw",t)}o(void 0)})}}var s={data:function(){return{confirm:!1,id:0,score:0,use_time:0,can_award:!1,award_status:!0,loading:!0,info:[],lock_at:"",qualified:this.qualified,apppasslogo:this.apppasslogo,videoAd:null,rewardAdIsLoad:!1,isIpx:this.isIpx}},onLoad:function(){var n=o(a.default.mark(function n(e){var r,u,o;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return r=e.id,this.id=parseInt(r),u=this,t.showLoading({title:"加载中",mask:!0}),n.next=6,i.default.GetInfo(this.id);case 6:o=n.sent,u.info=o,u.score=o.score,u.use_time=o.use_time,u.can_award=!o.award&&o.score>=this.qualified,setTimeout(function(){t.hideLoading()},1e3);case 12:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}(),methods:{gohome:function(){t.navigateTo({url:"/pages/index/index"})},reStart:function(){var n=o(a.default.mark(function n(){var e;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.default.GetProblem();case 2:e=n.sent,e&&t.navigateTo({url:"/pages/question/index?id="+e.id});case 4:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()}};n.default=s}).call(this,e("543d")["default"])},f5b8:function(t,n,e){"use strict";(function(t){e("994a"),e("921b");a(e("66fd"));var n=a(e("0625"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},fdf4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}},[["f5b8","common/runtime","common/vendor"]]]);