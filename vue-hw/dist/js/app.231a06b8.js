webpackJsonp([1],{0:function(t,n,e){t.exports=e("NHnr")},"F1/T":function(t,n){},GKp1:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("/5sW"),i=e("mtWM"),r=e.n(i),s="?access_token=258f353075006b79e1a0b782da71071119959161";function a(t){return r.a.get("https://api.github.com/users/".concat(t).concat(s))}function u(t){return r.a.get("https://api.github.com/users/".concat(t,"/repos").concat(s))}function c(t){return r.a.get("https://api.github.com/users/".concat(t,"/following").concat(s))}var l={name:"UserSearch",data:function(){return{login:"",user:null}},watch:{login:function(t){var n=this;this.user=null,a(t).then(function(e){n.user=e.data,n.$router.push("/repositories/".concat(t))}).catch(function(){n.user=null,n.$router.push("")})}}},p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v("\n  Find github user:\n  "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{placeholder:"login"},domProps:{value:t.login},on:{input:function(n){n.target.composing||(t.login=n.target.value)}}}),t.user?e("div",[e("div",{staticClass:"profileHolder"},[e("div",[e("h2",[t._v(t._s(t.user.login))]),e("h1",[t._v(t._s(t.user.name))]),e("p",[t._v(t._s(t.user.bio))]),e("i",[t._v(t._s(t.user.company))])]),e("img",{attrs:{width:"200px",height:"200px",src:t.user.avatar_url}})]),e("nav",[e("router-link",{attrs:{to:"/following/"+t.login}},[t._v("Following")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/repositories/"+t.login}},[t._v("Repositories")])],1),e("router-view")],1):t._e(),e("div",[t.user?t._e():e("div",[t._v("User not found ")])])])},v=[],f=e("XyMi");function d(t){e("GKp1")}var h=!1,g=d,_=null,m=null,w=Object(f["a"])(l,p,v,h,g,_,m),b=w.exports,x={name:"App",components:{UserSearch:b}},$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("UserSearch")],1)},C=[];function k(t){e("QTX8")}var y=!1,j=k,F=null,H=null,N=Object(f["a"])(x,$,C,y,j,F,H),O=N.exports,T=e("/ocq"),E={name:"repositories",data:function(){return{repositores:[]}},created:function(){var t=this;this.repositores=[],u(this.$route.params.login).then(function(n){t.repositores=n.data}).catch(function(){t.repositores=[]})}},U=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v(" Repositories ")]),t._l(t.repositores,function(n){return e("div",{key:n.id,staticClass:"cardsHolder"},[e("div",{staticClass:"card"},[e("div",{staticClass:"firstLine"},[e("h4",[t._v(t._s(n.name))]),e("i",[t._v(t._s(n.language))])]),e("p",[t._v(t._s(n.description))])])])})],2)},q=[];function M(t){e("NvqV")}var S=!1,X=M,G=null,K=null,P=Object(f["a"])(E,U,q,S,X,G,K),Q=P.exports,R={name:"following",data:function(){return{following:[]}},created:function(){var t=this;this.following=[],c(this.$route.params.login).then(function(n){t.following=n.data}).catch(function(){t.following=[]})}},V=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v(" Following users")]),t._l(t.following,function(n){return e("div",{key:n.login,staticClass:"cardsHolder"},[e("div",{staticClass:"card followingCard"},[e("img",{attrs:{width:"100px",height:"100px",src:n.avatar_url}}),e("h4",[t._v(t._s(n.login))])])])})],2)},W=[];function A(t){e("F1/T")}var J=!1,L=A,z=null,B=null,D=Object(f["a"])(R,V,W,J,L,z,B),I=D.exports;o["a"].use(T["a"]);var Y=new T["a"]({mode:"history",routes:[{path:"/repositories/:login",name:"repositories",component:Q},{path:"/following/:login",name:"following",component:I}]});o["a"].config.productionTip=!1,new o["a"]({router:Y,render:function(t){return t(O)}}).$mount("#app")},NvqV:function(t,n){},QTX8:function(t,n){}},[0]);
//# sourceMappingURL=app.231a06b8.js.map