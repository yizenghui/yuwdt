(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/support"],{"127b":function(t,o,u){"use strict";u.r(o);var e=u("f2be"),n=u.n(e);for(var r in e)"default"!==r&&function(t){u.d(o,t,function(){return e[t]})}(r);o["default"]=n.a},"4d2b":function(t,o,u){"use strict";u.r(o);var e=u("f990"),n=u("127b");for(var r in n)"default"!==r&&function(t){u.d(o,t,function(){return n[t]})}(r);var a=u("2877"),p=Object(a["a"])(n["default"],e["a"],e["b"],!1,null,"38adb271",null);o["default"]=p.exports},f2be:function(t,o,u){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n(u("66fd"));function n(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{show_support:this.show_support,show_support_box:!1,support_poster:""}},methods:{showSupportModal:function(){this.support_poster=e.default.prototype.support_poster,this.show_support_box=!0},hideSupporModal:function(){this.show_support_box=!1},gotosupport:function(){t.navigateToMiniProgram({appId:"wx7543142ce921d8e3",path:"pages/index/index?channel=bbs",extraData:{appid:e.default.prototype.appid,uid:e.default.prototype.uid},success:function(t){}})}}};o.default=r}).call(this,u("543d")["default"])},f990:function(t,o,u){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},n=[];u.d(o,"a",function(){return e}),u.d(o,"b",function(){return n})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/support-create-component',
    {
        'components/support-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4d2b"))
        })
    },
    [['components/support-create-component']]
]);
