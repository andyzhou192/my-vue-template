(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82a1e776"],{"49a2":function(e,n,r){},"9ed6":function(e,n,r){"use strict";r.r(n);var o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[r("h3",[e._v("vue-admin-template")]),r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-search",name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-search",type:e.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("Sign in")])],1),r("div",[r("span",[e._v("username: admin")]),r("span",[e._v("password: admin")]),r("span",[e._v("role :0")])]),r("div",[r("span",[e._v("username: editor")]),r("span",[e._v("password: editor")]),r("span",[e._v("role :1")])]),r("div",[r("span",[e._v("username: reader")]),r("span",[e._v("password: reader")]),r("span",[e._v("role :2")])])],1)],1)},a=[],t={name:"Login",data:function(){var e=function(e,n,r){n.length<5?r(new Error("用户名密码不能小于5位")):r()},n=function(e,n,r){n.length<5?r(new Error("密码不能小于5位")):r()};return{loginForm:{username:"admin",password:"admin"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:n}]},loading:!1,pwdType:"password",redirect:void 0}},watch:{},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return e.$message.error("error submit!!"),!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(n){e.loading=!1,n&&e.$router.push("/")}).catch(function(){e.loading=!1})})}}},i=t,s=(r("b87e"),r("2877")),l=Object(s["a"])(i,o,a,!1,null,"8653011a",null);n["default"]=l.exports},b87e:function(e,n,r){"use strict";var o=r("49a2"),a=r.n(o);a.a}}]);
//# sourceMappingURL=chunk-82a1e776.f3413640.js.map