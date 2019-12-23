(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"1cc2":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;a(e("66fd"));function a(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,FormID:this.fromid}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,e=this.bgImage,a="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(a="".concat(a,"background-image:url(").concat(e,");")),a}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})},BackHome:function(){t.redirectTo({url:"/pages/index/index"})}}};n.default=u}).call(this,e("543d")["default"])},"7bc4":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"8c37":function(t,n,e){"use strict";e.r(n);var a=e("7bc4"),u=e("f3be");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);var o=e("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},f3be:function(t,n,e){"use strict";e.r(n);var a=e("1cc2"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8c37"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);
