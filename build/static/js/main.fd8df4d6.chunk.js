(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),o=n.n(l),c=(n(88),n(90),n(92),n(53),n(13)),i=n(14),s=n(16),u=n(15),m=n(17),d=n(202),h=n(197),p=n(9),E=n.n(p),b=n(41),f=n.n(b),v=n(73),g=n.n(v),O=(n(95),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClose=function(e){n.setState({open:!1})},n.handleSubmit=function(e){e.preventDefault(),n.setState({open:!0});var t=n.props.history.push;e.preventDefault(),setTimeout(function(){return t("/welcome")},3e3)},n.state={open:!1,vertical:"center",horizontal:"center"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.open,t=this.state.vertical,n=this.state.horizontal;return r.a.createElement("div",{className:"DashboardPage"},r.a.createElement(E.a,{onSubmit:this.handleSubmit},r.a.createElement(E.a.Group,{controlId:"email",bsSize:"large"},r.a.createElement(E.a.Label,null,"Username"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Username"})),r.a.createElement(E.a.Group,{controlId:"password",bsSize:"large"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{placeholder:"Password",type:"password"})),r.a.createElement(f.a,{block:!0,bsSize:"large",type:"submit"},"Login"),r.a.createElement(g.a,{anchorOrigin:{vertical:t,horizontal:n},key:"".concat(t,",").concat(n),open:e,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Login Successful. Redirect after 3 seconds")})))}}]),t}(a.Component)),w=n(75),y=(n(189),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=1e4+89999*Math.random(),a=Math.round(t);n.setState({random:"SVT"+a,open:"inline"})},n.state={random:0,open:"none"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.random,t={display:this.state.open};return r.a.createElement("div",{className:"WelcomePage"},r.a.createElement(E.a,{onSubmit:this.handleSubmit},r.a.createElement(E.a.Group,{controlId:"name",bsSize:"large"},r.a.createElement(E.a.Control,{type:"text",placeholder:"H\u1ecd v\xe0 t\xean ch\u1ee7 h\u1ed9"})),r.a.createElement(E.a.Group,{controlId:"address",bsSize:"large"},r.a.createElement(E.a.Control,{placeholder:"\u0110\u1ecba ch\u1ec9",type:"text"})),r.a.createElement(E.a.Group,{controlId:"S\u1ed1 nh\xe2n kh\u1ea9u",bsSize:"large"},r.a.createElement(E.a.Control,{placeholder:"S\u1ed1 nh\xe2n kh\u1ea9u",type:"number"})),r.a.createElement(f.a,{block:!0,bsSize:"large",type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("div",{style:t},r.a.createElement(E.a.Label,null,"M\xe3 s\u1ed1 kh\xe1ch h\xe0ng: "),r.a.createElement(E.a.Control,{plaintext:!0,readOnly:!0,value:e}))),r.a.createElement("div",{className:"copy",style:{display:"none"}},r.a.createElement(w.CopyToClipboard,{text:this.state.random},r.a.createElement("button",null,"Copy"))))}}]),t}(a.Component)),j=n(76),k=n.n(j),S=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"PricePage"},r.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"M\xe3 v\u1eadt t\u01b0"),r.a.createElement("th",null,"T\xean v\u1eadt t\u01b0"),r.a.createElement("th",null,"\u0110\u01a1n v\u1ecb t\xednh"),r.a.createElement("th",null,"\u0110\u01a1n gi\xe1"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"ON21"),r.a.createElement("td",null,"\u1ed0ng n\u01b0\u1edbc d21"),r.a.createElement("td",null,"m\xe9t"),r.a.createElement("td",null,"7000")),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,"ON27"),r.a.createElement("td",null,"\u1ed0ng n\u01b0\u1edbc d27"),r.a.createElement("td",null,"m\xe9t"),r.a.createElement("td",null,"14000")),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"KDO"),r.a.createElement("td",null,"Keo d\xe1n \u1ed1ng"),r.a.createElement("td",null,"chai"),r.a.createElement("td",null,"8000")))))}}]),t}(a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/rpaweb",component:O}),r.a.createElement(h.a,{path:"/welcome",component:y}),r.a.createElement(h.a,{path:"/price",component:S}))}}]),t}(r.a.Component),N=n(8),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={collapse:!1},n.onClick=function(){n.setState({collapse:!n.state.collapse})},n.toggle=function(){n.setState({dropdownOpen:!n.state.dropdownOpen})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(N.e,{className:"flexible-navbar",light:!0,expand:"md",scrolling:!0},r.a.createElement(N.f,{href:"/"},r.a.createElement("strong",null,"RPA")),r.a.createElement(N.h,{onClick:this.onClick}),r.a.createElement(N.b,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(N.g,{left:!0})))}}]),t}(a.Component),z=n(82),L=n.n(z),P=function(){return r.a.createElement("div",{className:"sidebar-fixed position-fixed"},r.a.createElement("a",{href:"#!",className:"logo-wrapper waves-effect"},r.a.createElement("img",{alt:"MDB React Logo",className:"img-fluid",src:L.a})))},T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flexible-content"},r.a.createElement(x,null),r.a.createElement(P,null),r.a.createElement("main",{id:"content",className:"p-5"},r.a.createElement(C,null)))}}]),t}(a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var W=n(201);o.a.render(r.a.createElement(W.a,null,r.a.createElement(T,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/home",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/home","/service-worker.js");D?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(e)})}}()},53:function(e,t,n){},82:function(e,t,n){e.exports=n.p+"static/media/mdb-react.750b5338.png"},83:function(e,t,n){e.exports=n(196)},95:function(e,t,n){}},[[83,2,1]]]);
//# sourceMappingURL=main.fd8df4d6.chunk.js.map