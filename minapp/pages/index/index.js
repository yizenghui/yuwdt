(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"195b":function(t,e,n){"use strict";n.r(e);var r=n("3ded"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"1c22":function(t,e,n){"use strict";(function(t){n("994a"),n("921b");r(n("66fd"));var e=r(n("4d40"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"3ded":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("66fd")),i=u(n("6979"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,a,i,u){try{var o=t[i](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(r,a)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function u(t){o(i,r,a,u,s,"next",t)}function s(t){o(i,r,a,u,s,"throw",t)}u(void 0)})}}var c={data:function(){return{loading:!0,id:0,users:0,total:0,shared:0,score:0,index:0,progress:0,show:!0,answer_id:0,eject_poster:0,poster:"",locking:!1,qyestion_title:"题目标题",answers:[],questions:[],answer_ids:[],title:this.title,remarks:this.remarks,rules:this.rules,recommends:this.recommends,appstartlogo:this.appstartlogo,count:0,maxtime:100,time:null,start_answer:!1}},mounted:function(){this.loading=!1},onShow:function(){},onLoad:function(){var t=s(r.default.mark(function t(e){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.default.GetStats();case 2:n=t.sent,this.users=n.users,this.total=n.total,this.shared=n.shared;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),methods:{start:function(){var e=s(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.GetProblem();case 2:n=e.sent,n&&t.navigateTo({url:"/pages/question/index?id="+n.id});case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),click:function(e){"jump"==e.type?t.navigateToMiniProgram({appId:e.appid,path:e.path,extraData:{appid:a.default.prototype.appid,uid:a.default.prototype.uid},success:function(t){}}):"poster"==e.type&&t.previewImage({current:0,urls:[e.poster]})}},onShareAppMessage:function(t){i.default.ShareLog();var e=a.default.prototype.share_title?a.default.prototype.share_title:"Rank",n=a.default.prototype.share_cover?a.default.prototype.share_cover:"",r="/pages/index/index?fromid="+a.default.prototype.uid;return{title:e,path:r,imageUrl:n}},computed:{timestyle:function(){return this.count>=this.maxtime?"text-red":this.count<this.maxtime/2?"text-green":this.count>=this.maxtime/2&&this.count<this.maxtime/4*3?"text-green":this.count>=this.maxtime/4*3?"text-red":void 0}}};e.default=c}).call(this,n("543d")["default"])},"4d40":function(t,e,n){"use strict";n.r(e);var r=n("e278"),a=n("195b");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("5cc6");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"5cc6":function(t,e,n){"use strict";var r=n("6a5a"),a=n.n(r);a.a},"6a5a":function(t,e,n){},e278:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})}},[["1c22","common/runtime","common/vendor"]]]);