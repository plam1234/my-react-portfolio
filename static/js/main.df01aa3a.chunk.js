(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/github.c6c5a902.png"},35:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},41:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=(a(40),a(7)),o=a(12),m=a(10),s=a(9),u=a(22),d=a(3),E=a(13),b=a(17),p=(a(41),a(14)),f=a(16);var h=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(E.a,{fluid:!0},l.a.createElement(p.a,{className:"border-top justify-content-between p-3"},l.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Peter Lam"),l.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Peter Lam."))))},g=a(32);var v=function(e){return l.a.createElement(g.a,{className:"bg-transparent Jumbotron-fluid p-0"},l.a.createElement(E.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center py-5"},l.a.createElement(f.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead front-weight-light"},e.text)))))},k=a(18),y=a(28);var N=function(e){var t=Object(y.b)({opacity:1,from:{opacity:0}});return l.a.createElement(y.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener",noreferrer:!0},"View"))};var w=function(e){return l.a.createElement("div",{className:"d-inline-block g-card"},l.a.createElement("img",{className:"g-card-image",onClick:function(t){return e.click(e.item)},src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=a(33),x=a.n(j),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(w,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"GitHub Repo",subTitle:"My GitHub Repo",imgSrc:x.a,link:"https://github.com/plam1234",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var T=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(C,null))};var O=function(e){return l.a.createElement(E.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))};var P=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title}),l.a.createElement(O,null,l.a.createElement("p",null,"Greetings! My name is Peter Lam. I'm a full-stack developer with experience in Java, Node JS, React, Express, MongoDB, MySQL."),l.a.createElement("p",null,"I recently finish attending Columbia University Full-Stack Developer Coding Bootcamp."),l.a.createElement("p",null,"My goal is to obtain as much knowledge about coding as possible! I enjoy coding a lot!")))};var S=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title}),l.a.createElement(O,null,l.a.createElement("p",null,"Peter Lam"),l.a.createElement("p",null,"Phone: 917-698-6592"),l.a.createElement("p",null,"Email: Piitaa1234@gmail.com "),l.a.createElement("p",null,"I will get back to you as soon as possible!")))},L=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Peter Lam",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Full-Stack Developer",subTitle:"JavaScript / Node / React / Express / MongoDB / Passport",text:"Checkout my Projects below"},about:{title:"About me"},contact:{title:"Contact Me"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(E.a,{className:"p-0",fluid:!0},l.a.createElement(b.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(b.a.Brand,null,"Peter Lam"),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar toggle"},l.a.createElement(b.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(T,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(P,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(S,{title:e.state.contact.title})}}),l.a.createElement(h,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.df01aa3a.chunk.js.map