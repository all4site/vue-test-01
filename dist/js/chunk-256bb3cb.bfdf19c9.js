(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-256bb3cb"],{"1fe4":function(t,s,o){"use strict";o("7d48")},"37d3":function(t,s,o){"use strict";o.r(s);var a=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"wrapper"},[o("h1",[t._v(t._s(t.post.title))]),o("p",[t._v(t._s(t.post.body))]),o("div",{staticClass:"post-data"},[o("span",[t._v("Post id - "+t._s(t.post.id))]),o("span",[t._v("User is - "+t._s(t.post.userId))])]),o("div",{staticClass:"post-link-wrapper"},[o("router-link",{staticClass:"post-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1)])},n=[],e=o("bc3a"),i=o.n(e),p={name:"Post",data:function(){return{post:{}}},mounted:function(){this.postData()},methods:{postData:function(){var t=this;i.a.get("https://jsonplaceholder.typicode.com/posts/".concat(this.$route.params.id)).then((function(s){return t.post=s.data}))}}},c=p,r=(o("1fe4"),o("2877")),u=Object(r["a"])(c,a,n,!1,null,"428168f8",null);s["default"]=u.exports},"7d48":function(t,s,o){}}]);
//# sourceMappingURL=chunk-256bb3cb.bfdf19c9.js.map