(window.webpackJsonpmy_website=window.webpackJsonpmy_website||[]).push([[0],{100:function(e,t){},101:function(e,t){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(55),o=a.n(r),s=a(18),c=(a(80),a(81),a(21)),l=a(22),m=a(24),p=a(23),d=a(25),u=(a(82),function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={navigationLinks:[{name:"Portfolio",link:"/"},{name:"About Me",link:"/coming-soon"},{name:"Skills",link:"/coming-soon"},{name:"Work Experience",link:"/coming-soon"},{name:"Education",link:"/coming-soon"}]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.visible,t=this.state.navigationLinks,a="hide";return e&&(a="show"),n.a.createElement("ul",{className:"nav-list ".concat(a)},t.map((function(e,t){return n.a.createElement("li",{className:"nav-list__item",key:t},n.a.createElement(s.c,{exact:!0,to:e.link,className:"nav-list__link",activeClassName:"is-active"},e.name))})))}}]),t}(i.Component));a(87);var h=function(e){var t=e.visible,a=e.handleMenuClick,i="";return t&&(i="change"),n.a.createElement("button",{onClick:a,className:"menu-icon ".concat(i)},n.a.createElement("div",{className:"bar1"}),n.a.createElement("div",{className:"bar2"}),n.a.createElement("div",{className:"bar3"}))};a(88);var g=function(e){var t=e.visible,a=e.handleMenuClick;return n.a.createElement("div",{className:"nav-container"},n.a.createElement("nav",{className:"nav"},n.a.createElement(s.b,{to:"/",className:"nav-home"},n.a.createElement("h1",{className:"nav-home__title"},"Patr\xedcia Silva"),n.a.createElement("h2",{className:"nav-home__subtitle"},"Front-end web developer")),n.a.createElement(h,{visible:t,handleMenuClick:a}),n.a.createElement(u,{visible:t})))},A=a(26),v=a(58),f=a.n(v),b=a(45),E=a.n(b),k=a(59),C=a.n(k),S=a(60),M=a.n(S),P=a(61),N=a.n(P),y=a(62),w=a.n(y),x=a(63),W=a.n(x),j=a(64),B=a.n(j),R=a(65),F=a.n(R),T=a(66),I=a.n(T),Q=a(67),V=a.n(Q),Y=a(68),J=a.n(Y),L=a(69),z=a.n(L),O=a(70),K=a.n(O),U=a(71),G=a.n(U),Z=a(72),H=a.n(Z),X=a(30),D=a(32),q=(a(91),function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={courses:[{title:"EDIT Front-End Development Course",image:f.a,link:"https://edit.com.pt/",projects:[{image:J.a,title:"Blog",description:"A blog that uses an API to fetch data for the posts",demo:"https://patriciarrsilva.github.io/Blog/",code:"https://github.com/patriciarrsilva/Blog",pass:"Developed on",datetime:"2019-08",date:"August, 2019",skills:"React (JSX), React Router, API, Responsive, JavaScript (ES6), CSS3, HTML5"},{image:z.a,title:"Tindeir\xe3o",description:"A responsive progressive web app that uses geolocation",demo:"https://patriciarrsilva.github.io/tindeirao/",code:"https://github.com/patriciarrsilva/tindeirao",pass:"Developed on",datetime:"2019-07",date:"July, 2019",skills:"PWA, Responsive, JavaScript (ES6), SCSS, CSS3, HTML5, CSS minification, Autoprefixer, Express, Notifications and Push APIs, Web push"},{image:K.a,title:"Creative",description:"A responsive web page with a mobile first approach",demo:"https://patriciarrsilva.github.io/Creative-web-page-responsive/",code:"https://github.com/patriciarrsilva/Creative-web-page-responsive",pass:"Developed on",datetime:"2019-05",date:"May, 2019",skills:"Responsive, SCSS, CSS3, HTML5"}]},{title:"Udacity Front-End Nanodegree Program",image:E.a,link:"https://www.udacity.com/",projects:[{image:C.a,title:"Neighborhood Map",description:"Users can search locations on the map and display information about it on an info window",demo:"https://patriciarrsilva.github.io/Neighborhood-Map/",code:"https://github.com/patriciarrsilva/Neighborhood-Map",pass:"Passed on",datetime:"2018-08-10",date:"August 10th, 2018",skills:"React (JSX), Google Maps API, FourSquare API, PWA, Accessibility, Responsive, JavaScript (ES6), CSS3, HTML5"},{image:M.a,title:"MyReads: A Book Tracking App",description:"Users can select and categorize books into a virtual bookshelf",demo:"https://patriciarrsilva.github.io/MyReads-A-Book-Tracking-App/",code:"https://github.com/patriciarrsilva/MyReads-A-Book-Tracking-App",fork:"https://github.com/udacity/reactnd-project-myreads-starter",pass:"Passed on",datetime:"2018-07-30",date:"July 30th, 2018",skills:"React (JSX), React Router, API, JavaScript (ES6), HTML5"},{image:N.a,title:"Restaurant Reviews App",description:"An accessible, responsive and progressive web application",demo:"https://patriciarrsilva.github.io/Restaurant-Reviews-App/",code:"https://github.com/patriciarrsilva/Restaurant-Reviews-App",fork:"https://github.com/udacity/mws-restaurant-stage-1",pass:"Passed on",datetime:"2018-07-01",date:"July 1st, 2018",skills:"PWA, Accessibility, Responsive, JavaScript (ES6), CSS3, HTML5"},{image:w.a,title:"Feed Reader Testing",description:"Comprehensive unit tests",code:"https://github.com/patriciarrsilva/Feed-Reader-Testing",fork:"https://github.com/udacity/frontend-nanodegree-feedreader",pass:"Passed on",datetime:"2018-06-04",date:"June 4st, 2018",skills:"Jasmine"},{image:W.a,title:"Classic Arcade Game Clone",description:"A recreation of the classic arcade game Frogger",demo:"https://patriciarrsilva.github.io/Classic-Arcade-Game-Clone/",code:"https://github.com/patriciarrsilva/Classic-Arcade-Game-Clone",fork:"https://github.com/udacity/frontend-nanodegree-arcade-game",pass:"Passed on",datetime:"2018-05-21",date:"May 21st, 2018",skills:"JavaScript (ES6)"},{image:B.a,title:"Memory Game",description:"A card matching game (a.k.a Concentration)",demo:"https://patriciarrsilva.github.io/Memory-Game/",code:"https://github.com/patriciarrsilva/Memory-Game",fork:"https://github.com/udacity/fend-project-memory-game",pass:"Passed on",datetime:"2018-04-02",date:"April 2nd, 2018",skills:"Responsive, JavaScript, CSS3, HTML5"},{image:F.a,title:"Portfolio Site",description:"A simple portfolio site to keep track of my projects",demo:"https://patriciarrsilva.github.io/Portfolio-Site/",code:"https://github.com/patriciarrsilva/Portfolio-Site",pass:"Passed on",datetime:"2018-03-09",date:"March 9th, 2018",skills:"Responsive, CSS3, HTML5"}]},{title:"Udacity Front-End Nanodegree Program / Google Developer Challenge Scholarship",image:E.a,link:"https://www.udacity.com/scholarships",projects:[{image:I.a,title:"Animal Trading Cards",description:"A trading card with my favorite animal",demo:"https://patriciarrsilva.github.io/Animal-Trading-Cards/",code:"https://github.com/patriciarrsilva/Animal-Trading-Cards",fork:"https://github.com/udacity/fend-animal-trading-cards",pass:"Passed on",datetime:"2018-02-16",date:"February 16th, 2018",skills:"CSS3, HTML5"},{image:V.a,title:"Pixel Art Maker",description:"Users can draw pixel art on a customizable canvas",demo:"https://patriciarrsilva.github.io/Pixel-Art-Maker/",code:"https://github.com/patriciarrsilva/Pixel-Art-Maker",fork:"https://github.com/udacity/project-pixel-art-maker-starter",pass:"Exercise completed on",datetime:"2018-01",date:"January 2018",skills:"JavaScript"}]},{title:"freeCodeCamp Responsive Web Design Certification",icon:D.a,link:"https://learn.freecodecamp.org/",projects:[{image:G.a,title:"Survey Form",description:"A simple survey form",demo:"https://patriciarrsilva.github.io/Survey-form/",code:"https://github.com/patriciarrsilva/Survey-form",skills:"Responsive, CSS3, HTML5"},{image:H.a,title:"Tribute Page",description:"A simple tribute page",demo:"https://patriciarrsilva.github.io/Tribute-page/",code:"https://github.com/patriciarrsilva/Tribute-page",skills:"Responsive, CSS3, HTML5"}]}]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{id:"portfolio",className:"portfolio"},n.a.createElement("h2",{className:"portfolio-title"},"Portfolio"),this.state.courses.map((function(e,t){return n.a.createElement("section",{className:"portfolio-course",key:t},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"portfolio-course__title-link"},n.a.createElement("h3",{className:"portfolio-course__title"},e.icon&&n.a.createElement(X.a,{icon:e.icon,className:"portfolio-course__icon"}),e.image&&n.a.createElement("img",{src:e.image,alt:"logo",className:"portfolio-course__image"}),e.title)),n.a.createElement("div",{className:"projects-container"},e.projects.map((function(e,t){return n.a.createElement("article",{className:"project",key:t},n.a.createElement(s.b,{to:"/coming-soon",className:"project__title-link"},n.a.createElement("h4",{className:"project__title"},e.title),n.a.createElement("img",{src:e.image,alt:"".concat(e.title," project screen"),className:"project__image"})),n.a.createElement("p",{className:"project__description"},e.description),n.a.createElement("p",{className:"project__links"},e.demo&&n.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer",className:"button button--right-margin"},"Demo"),n.a.createElement("a",{href:e.code,target:"_blank",rel:"noopener noreferrer",className:"button"},"Code")),e.fork&&n.a.createElement("p",{className:"project__fork"},"Forked from ",n.a.createElement("a",{href:e.fork,target:"_blank",rel:"noopener noreferrer",className:"project__fork-link"},"starter code")),e.pass&&n.a.createElement("p",{className:"project__pass"},e.pass," ",n.a.createElement("time",{dateTime:e.datetime},e.date)),n.a.createElement("p",{className:"project__skills"},e.skills))}))),n.a.createElement("hr",{className:"hr"}))})))}}]),t}(i.Component));a(92);var _=function(e){var t=e.handleOutsideClick;return n.a.createElement("div",{className:"home",onClick:t},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__titles"},n.a.createElement("h1",{className:"header__title"},"Patr\xedcia Silva"),n.a.createElement("h2",{className:"header__subtitle"},"Front-end Web Developer")),n.a.createElement("p",{className:"header__description"},"I combine my passion for learning with my skills to build interesting applications that create unique user experiences"),n.a.createElement("a",{href:"#portfolio",className:"button"},"Check out my portfolio below!")),n.a.createElement(q,null))},$=a(33),ee=a(73),te=a.n(ee);$.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat($.pdfjs.version,"/pdf.worker.js");var ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={numPages:null,pageNumber:1},a.onDocumentLoadSuccess=function(e){var t=e.numPages;a.setState({numPages:t,pageNumber:1})},a.changePage=function(e){return a.setState((function(t){return{pageNumber:t.pageNumber+e}}))},a.previousPage=function(){return a.changePage(-1)},a.nextPage=function(){return a.changePage(1)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.numPages,a=e.pageNumber;return n.a.createElement(n.a.Fragment,null,n.a.createElement($.Document,{file:te.a,onLoadSuccess:this.onDocumentLoadSuccess},n.a.createElement($.Page,{pageNumber:a})),n.a.createElement("div",null,n.a.createElement("p",null,"Page ",a||(t?1:"--")," of ",t||"--"),n.a.createElement("button",{type:"button",disabled:a<=1,onClick:this.previousPage},"Previous"),n.a.createElement("button",{type:"button",disabled:a>=t,onClick:this.nextPage},"Next")))}}]),t}(i.Component);a(135);var ie=function(){return n.a.createElement("div",{className:"coming-soon"},n.a.createElement("h1",{className:"coming-soon__title"},"Coming soon..."))};a(136);var ne=function(e){var t=e.handleOutsideClick;return n.a.createElement("div",{className:"main"},n.a.createElement(A.a,{exact:!0,path:"/",render:function(){return n.a.createElement(_,{handleOutsideClick:t})}}),n.a.createElement(A.a,{path:"/project",component:ae}),n.a.createElement(A.a,{path:"/coming-soon",component:ie}))},re=a(74);a(137);var oe=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("h2",null,"Let's connect!"),n.a.createElement("div",{className:"contacts"},n.a.createElement("a",{href:"https://www.linkedin.com/in/patriciarrsilva/?locale=en_US",target:"_blank",rel:"noopener noreferrer",className:"contacts__icon linkedin-icon"},n.a.createElement(X.a,{icon:D.c})),n.a.createElement("a",{href:"https://github.com/patriciarrsilva",target:"_blank",rel:"noopener noreferrer",className:"contacts__icon github-icon"},n.a.createElement(X.a,{icon:D.b})),n.a.createElement("a",{href:"mailto:prrs89@gmail.com",className:"contacts__icon email-icon"},n.a.createElement(X.a,{icon:re.a}))),n.a.createElement("address",{className:"address"},n.a.createElement("p",null,"Patr\xedcia Silva"),n.a.createElement("p",null,"Porto, Portugal (2019)")))},se=(a(138),a(139),function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={visible:!1},a.handleMenuClick=function(e){a.setState({visible:!a.state.visible}),e.stopPropagation()},a.handleOutsideClick=function(e){a.setState({visible:!1}),e.stopPropagation()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.visible;return n.a.createElement("div",{className:"App"},n.a.createElement(g,{visible:e,handleMenuClick:this.handleMenuClick}),n.a.createElement(ne,{handleOutsideClick:this.handleOutsideClick}),n.a.createElement(oe,null))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(s.a,{basename:"/Patricia-Silva-Front-end-Web-Developer"},n.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=35},45:function(e,t,a){e.exports=a.p+"static/media/udacity.5df1bb3f.svg"},58:function(e,t){e.exports="data:image/png;base64,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"},59:function(e,t,a){e.exports=a.p+"static/media/neighborhood-map.6dd54438.png"},60:function(e,t,a){e.exports=a.p+"static/media/my-reads.89d02a8d.png"},61:function(e,t,a){e.exports=a.p+"static/media/restaurant-reviews.9daa67a3.png"},62:function(e,t,a){e.exports=a.p+"static/media/feed-reader.869c7d2d.png"},63:function(e,t,a){e.exports=a.p+"static/media/arcade-game.d3d6e17c.png"},64:function(e,t,a){e.exports=a.p+"static/media/memory-game.cbd1426f.png"},65:function(e,t,a){e.exports=a.p+"static/media/portfolio-site.b65484d4.png"},66:function(e,t,a){e.exports=a.p+"static/media/trading-cards.b3c59109.png"},67:function(e,t,a){e.exports=a.p+"static/media/pixel-art.637c0520.png"},68:function(e,t,a){e.exports=a.p+"static/media/blog.a38a3461.png"},69:function(e,t,a){e.exports=a.p+"static/media/tindeirao.044c1e06.png"},70:function(e,t,a){e.exports=a.p+"static/media/creative.c04a5851.png"},71:function(e,t,a){e.exports=a.p+"static/media/survey-form.4b7ebaef.png"},72:function(e,t,a){e.exports=a.p+"static/media/tribute-page.4307e75e.png"},73:function(e,t,a){e.exports=a.p+"static/media/example.a742d31d.pdf"},75:function(e,t,a){e.exports=a(140)},81:function(e,t,a){},82:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},96:function(e,t){},98:function(e,t){},99:function(e,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.70d5d95c.chunk.js.map