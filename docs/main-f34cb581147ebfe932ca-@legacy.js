!function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={9:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+""+({0:"vendors~@lazy/admin~@lazy/all~@lazy/player-component~@lazy/search-results~@lazy/subtitles",1:"@lazy/add-media",2:"@lazy/admin",3:"@lazy/all",4:"@lazy/landing",5:"@lazy/out",6:"@lazy/player-component",7:"@lazy/search-results",8:"@lazy/subtitles"}[e]||e)+"-"+{0:"b5dd7d54cb40dcbba03c",1:"545241f1f3be37ca6367",2:"8f88a19b0146b602b434",3:"9c9808bc8af4136902f5",4:"42644540740715ea70f9",5:"e2aaa03dfb318d97fe4a",6:"33998e97094e66edd9c7",7:"827c9daaf6b81c642054",8:"002e5bfb389ba77b19cb"}[e]+"-@legacy.js"}(e);var u=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;a.push([414,10]),n()}({160:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(25),n(46);var r=n(53),o=n.n(r),a=n(16),c=n.n(a),i=(n(89),n(35)),u=n.n(i),s=n(78),l={get:function(e,t,n){return void 0===t&&(t=!0),void 0===n&&(n={}),u()(c.a.mark((function r(){var o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t?""+s.a+e:e,r.next=3,fetch(o,{headers:n,credentials:"include"});case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})))()},post:function(e,t,n,r){return void 0===t&&(t=!0),void 0===r&&(r={"content-type":"application/x-www-form-urlencoded"}),u()(c.a.mark((function a(){var i,u;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u="application/json"===r["content-type"].toLowerCase()&&"object"==typeof n?o()(n):n,i=t?""+s.a+e:e,a.next=4,fetch(i,{method:"post",body:u,headers:r,credentials:"include"});case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}),a)})))()}}},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,o=n(43),a=n.n(o),c=n(3),i=n(241);if(window.customElements){Object(i.a)({"loading-spinner":{observedAttributes:[{prop:"size",listener:function(e,t){if(t!==e){var n=this.shadowRoot.querySelector("div").style;n.height=n.width="string"==typeof t&&a()(t).call(t,"px")?t:t+"px"}}}]}}),r=Object(c.b)("loading-spinner",{size:55})}else r="Connecting to the server";function u(){return Object(c.b)(c.a,null,r)}},256:function(e,t,n){},278:function(e,t,n){},293:function(e,t,n){},409:function(e,t,n){},410:function(e,t,n){},411:function(e,t,n){},412:function(e,t,n){},413:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var r=n(15),o=n.n(r),a=n(2),c=n.n(a),i=n(113),u=n.n(i),s=n(43),l=n.n(s),d=n(3),f=n(417),b=(n(278),n(161)),p=n.n(b),h=n(75),v=n.n(h),m=n(53),g=n.n(m),w=n(61),y=n.n(w),O=n(12),j=n.n(O),M=n(30),C=n.n(M),k=n(19),S=n.n(k),x=n(47),P=n(415),A=n(77),_=(n(293),n(76)),E=n.n(_),z=n(31),I=n.n(z),R=n(238);function D(e){var t={};return I()(e).call(e,(function(e){t[e.id]=e})),t}var L=window.__uiExperiments,T=function(e){function t(){for(var t,n,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=e.call.apply(e,y()(t=[this]).call(t,o))||this,S()(j()(n),"state",{experiments:D(L.experiments),showModal:!1,addStyleElement:!1}),S()(j()(n),"_toggleModal",(function(){return n.setState((function(e){return{showModal:!e.showModal}}))})),S()(j()(n),"_updateConf",(function(e){return n.setState({experiments:e})})),n}C()(t,e);var n=t.prototype;return n._reactToPrefChanges=function(e){var t=!!this.state.experiments[e].data.value.current;switch(e){case"FONT.CASING.EXPERIMENT":this.state.addStyleElement!==t&&this.setState({addStyleElement:t})}},n.componentDidUpdate=function(){var e;this.state.showModal?document.body.style.overflow="hidden":document.body.style.overflow="unset",E()(e=Object(x.a)(this.state.experiments)).call(e,this._reactToPrefChanges,this)},n.render=function(){return Object(d.b)(d.a,null,Object(d.b)("button",{class:"toggle-option",onClick:this._toggleModal},"UI Experiments"),this.state.showModal&&Object(d.b)(N,{experiments:this.state.experiments,updateConf:this._updateConf,toggle:this._toggleModal}),this.state.addStyleElement&&Object(d.b)("style",null,"*{text-transform:lowercase !important}"))},t}(A.a);function N(e){var t,n=e.experiments,r=e.updateConf,o=e.toggle;function a(e){var t=e.target.dataset,o=t.id,a=!JSON.parse(t.value).current;n[o].data.value.current=a,r(n)}return Object(d.b)("div",{class:"modal-ui-selector"},Object(d.b)("div",null,"Current Experiments",I()(t=Object(R.a)(n)).call(t,(function(e){return Object(d.b)("div",{data:g()(e)},Object(d.b)("div",{class:"expirement-opts"},e.displayName,Object(d.b)("div",{class:"info-text"},e.additionalText),Object(d.b)("div",{class:"current-exp"},"Current Value:",Object(d.b)("span",{class:"data-value"},String(e.data.value.current))),Object(d.b)("div",{class:"c-edit"},Object(d.b)("button",{class:"search-button","data-id":e.id,"data-value":g()(e.data.value),onClick:a},"Toggle"))))})),Object(d.b)("button",{class:"_done",onClick:o},"Done")))}var U="ontouchstart"in window||navigator.maxTouchPoints;function H(e){var t=e.preferences,n=e.setPreferences,r=e.removeMenu,o=e.showMenu;return Object(d.b)(d.a,null,Object(d.b)("div",J({class:"mask",onClick:r},o)),Object(d.b)("div",J({id:"preference-component"},o),Object(d.b)("div",null,"Preferences"),Object(d.b)("button",{class:"toggle-option",onClick:function(){return n("darkMode",!t.darkMode)}},"Dark Mode is ",t.darkMode?"On":"Off"),!!U&&Object(d.b)("button",{class:"toggle-option",onClick:function(){return n("zoom",!t.zoom)}},"Zoom is ",t.zoom?"Enabled":"Disabled"),Object(d.b)(T)))}var J=function(e,t){return t||(e.hidden=!0),e},G=function(e){function t(){for(var t,n,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=e.call.apply(e,y()(t=[this]).call(t,o))||this,S()(j()(n),"state",{currentUrl:P.d.getPath,showMenu:!1,preferences:{darkMode:!0,zoom:!0}}),S()(j()(n),"onURLChange",(function(){return n.setState({currentUrl:P.d.getPath})})),S()(j()(n),"setPreferences",(function(e,t){return n.setState((function(n){n.preferences[e]=t;var r=JSON.parse(localStorage.getItem("prefs")||"{}");return r[e]=t,localStorage.setItem("prefs",g()(r)),n}))})),S()(j()(n),"toggleMenu",(function(){return n.setState((function(e){return{showMenu:!e.showMenu}}))})),n}C()(t,e);var n=t.prototype;return n.componentWillMount=function(){P.b.subscribe(this.onURLChange)},n.componentDidMount=function(){var e,t=this,n=JSON.parse(localStorage.getItem("prefs")||"{}");window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: no-preference)"))&&(null==n.darkMode&&(n.darkMode=!e.matches),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){t.setPreferences("dark",e.matches)})));var r=v()({},this.state.preferences),a=Object(x.a)(n),i=c()(a),u=0;for(a=i?a:o()(a);;){var s;if(i){if(u>=a.length)break;s=a[u++]}else{if((u=a.next()).done)break;s=u.value}var l=s;r[l]=n[l]}this.setState({preferences:r})},n.componentDidUpdate=function(){var e=this.state;!function(e){var t=document.body.getAttribute("dark"),n=e.preferences.darkMode;if(n&&!t)return window.__globalEvt.emit(!0),document.body.setAttribute("dark",!0);!n&&t&&(window.__globalEvt.emit(!1),document.body.removeAttribute("dark"))}(e),function(e){var t=e.preferences.zoom,n=document.querySelector("meta[name='viewport']"),r="width=device-width,initial-scale=1";n.setAttribute("content",t?r:r+",user-scalable=no")}(e)},n.render=function(e,t){p()(e);var n=t.currentUrl,r=t.showMenu,o=t.preferences;return Object(d.b)(d.a,null,Object(d.b)("header",null,Object(d.b)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiPjwvcGF0aD48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiIGZpbGw9IndoaXRlIj48L3BhdGg+PC9zdmc+",alt:"menu button",style:{position:"fixed",left:0,cursor:"pointer"},onClick:this.toggleMenu}),"/"!==n&&Object(d.b)(P.a,{href:"/",class:["banner-button","router-link"]},"Home Page"),"/all"!==n&&Object(d.b)(P.a,{href:"/all",class:["banner-button","router-link"]},"All Movies")),Object(d.b)(H,{showMenu:r,preferences:o,setPreferences:this.setPreferences,removeMenu:this.toggleMenu}))},t}(A.a);n(25),n(46);var B=n(95),W=n.n(B),Z=n(156),q=n.n(Z),F=n(416),V=n(160),Q=n(243),X=n(234);function Y(e){var t=e.onRetryClick;return Object(d.b)("div",null,"An Error Occured while connecting to the server",Object(d.b)("button",{class:"reload-connection",onClick:t},"Click here to try again"))}function K(){return Object(d.b)("div",null,"The Requested URL was not found")}var $=(window.__appConfig||{}).SHOULD_PREFETCH_MODULES,ee=function(e){return e.default},te={"/":function(){return n.e(4).then(n.bind(null,483)).then(ee)},"/search":function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,484)).then(ee)},"/all":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,485)).then(ee)},"/watch":function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,488)).then(ee)},"/media/add":function(){return n.e(1).then(n.bind(null,490)).then(ee)},"/subs":function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,486)).then(ee)},"/out":function(){return n.e(5).then(n.bind(null,487)).then(ee)},"/admin":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,489)).then(ee)}},ne=function(e){function t(){for(var t,n,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=e.call.apply(e,y()(t=[this]).call(t,o))||this,S()(j()(n),"state",{hasServerResponse:!1,isContentLoadable:!1,errorComponent:Y,hasPrefetchedComponents:!1}),S()(j()(n),"_onMount",(function(){return n.state.hasPrefetchedComponents||($&&n._prefetchComponents(),n.setState({hasPrefetchedComponents:!0})),V.a.get("/collect/")})),S()(j()(n),"componentWillMount",(function(){n.state.hasServerResponse&&n.setState({hasServerResponse:!1}),Object(Q.a)(n._onMount,3,500)().then((function(){return n.setState({hasServerResponse:!0,isContentLoadable:!0})})).catch((function(){return n.setState({hasServerResponse:!0,isContentLoadable:!1})}))})),n}C()(t,e);var n=t.prototype;return n._prefetchComponents=function(){console.log("prefetching sources");for(var e=0,t=q()(te);e<t.length;e++){var n=t[e];(0,te[n])()}},n.componentDidMount=function(){var e,t=P.d.getQs;(e=new W.a(t).get("__loader"))&&Object(P.f)(e)},n.render=function(e,t){var n;return t.hasServerResponse?t.isContentLoadable?Object(d.b)(P.d,{fallbackComponent:K},I()(n=q()(te)).call(n,(function(e){return Object(d.b)(F.a,{componentPromise:te[e],path:Object(P.c)(e)})}))):Object(d.b)(t.errorComponent,{onRetryClick:this.componentWillMount}):Object(d.b)(d.a,null,Object(d.b)(X.a),Object(d.b)("div",null,"Connecting to the server"))},t}(A.a),re=n(78),oe=(n(256),n(409),n(410),n(411),n(412),n(413),Object(d.b)((function(){return Object(d.b)(d.a,null,Object(d.b)(G),Object(d.b)("main",{class:"center"},Object(d.b)(ne)))}))),ae=[];window.__globalEvt={subscribe:function(e){l()(ae).call(ae,e)||ae.push(e)},unsubscribe:function(e){for(var t=0;t<ae.length;t++)if(ae[t]===e)return u()(ae).call(ae,t,1)},emit:function(e,t){var n=ae,r=c()(n),a=0;for(n=r?n:o()(n);;){var i;if(r){if(a>=n.length)break;i=n[a++]}else{if((a=n.next()).done)break;i=a.value}i(e,t)}},unsubscribeAll:function(){ae.length=0}};var ce=document.getElementById("app-root");ce.removeAttribute("style"),Object(f.a)(oe,ce),window.addEventListener("load",(function(){document.head.appendChild(Object(re.b)(document.createElement("link"),{rel:"stylesheet",href:"https://fonts.pycode.tk/open-sans.css"}))}),{once:!0})},78:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"j",(function(){return v})),n.d(t,"a",(function(){return w})),n.d(t,"h",(function(){return y})),n.d(t,"f",(function(){return j})),n.d(t,"c",(function(){return C})),n.d(t,"g",(function(){return k})),n.d(t,"e",(function(){return S})),n.d(t,"i",(function(){return x}));n(117),n(25),n(46),n(115),n(255),n(245);var r=n(16),o=n.n(r),a=(n(41),n(5)),c=n.n(a),i=(n(89),n(35)),u=n.n(i),s=n(43),l=n.n(s),d=n(415),f=n(170);n.d(t,"b",(function(){return f.a}));var b,p=n(240),h="Watch Movies on Movies-Get",v=p.a,m=l()(b=window.location.host).call(b,"localhost")?"localhost:5000":"movies-get.herokuapp.com",g=function(e){try{return e.replace(/([^\w]|_)/g,"-").replace(/--/g,"-")}catch(t){console.log(e)}},w=window.location.protocol+"//"+m,y=function(e){return("https:"===window.location.protocol?"wss://":"ws://")+m+"/"+e},O=null,j=function(){var e=u()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,new c.a((function(e,t){if("boolean"==typeof O)return e(O);var n=new Image;n.onload=function(){var t=1===n.naturalHeight&&1===n.naturalWidth;O=t,e(t)},n.onerror=function(){return e(!1)},n.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}));case 4:if(!e.sent){e.next=11;break}return(n=t.split("."))[n.length-1]="webp",e.abrupt("return",n.join("."));case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=document.createElement("textarea"),C=function(e){return e?(M.innerHTML=e,M.value):""};function k(e){Object(d.e)("/search?"+v({q:e}))}function S(e,t){return"/watch?"+v({id:e,movie:g(t)})}function x(e){if(!e)return e;var t=e.split("/upload/");return t[1]=t[1].split("/"),t[1]="w_150,h_200/"+t[1][1],t.join("/upload/")}}});