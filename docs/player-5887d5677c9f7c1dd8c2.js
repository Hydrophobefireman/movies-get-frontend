(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{294:function(e,t,n){"use strict";var s=n(5),a=n.n(s),r=n(12),o=n.n(r),i=n(20),c=n(7),d=n(33);class u{__defaultOnMessage(e){if(["ping","pong"].includes(e.data))return;const t=JSON.parse(e.data);this._socketID=t.socket_id}startConn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise((n,s)=>{this.socket=new WebSocket(Object(d.f)(e)),this.socket.onopen=(()=>{this.socket.onmessage=this.__defaultOnMessage,t&&this._pingPongs(),n(this.socket)}),this.socket.onerror=(e=>s(e))})}close(){try{this.socket.close()}catch(e){console.warn(e)}}send(e){return this.socket.send(JSON.stringify(e))}sendString(e){return this.socket.send(e)}set onmessage(e){this.socket.onmessage=(t=>{const n=JSON.parse(t.data||"{}");return"ping"===n.type||"pong"===n.type?void 0:e(n)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}_pingPongs(){this.pingtimer=setTimeout(()=>{this.socket.readyState===this.socket.OPEN?(this.send({type:"ping"}),this._pingPongs()):clearTimeout(this.pingtimer)},2e4)}constructor(){}}let l;const h=()=>(l||{}).isUsable?l:l=new u;var p=n(51);n.d(t,"b",function(){return b}),n.d(t,"a",function(){return f});const b=e=>void(document.title=e);class m extends i.b{update(){const e=this.getState.value;b(e?`Search for ${e}`:window.oldTitle),this.setDomAttrs({value:e},!1).updateDOMAttrs()}appendComponentOnResponse(e){this.socket.onmessage=this.onResponse=e.bind(this)}handleInput(e){var t=this;return o()(a.a.mark(function n(){var s,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:s=e.target.value,t.setState({value:s}),"/search/"===Object(p.b)(window.location.href).route&&Object(p.c)("q",s),!t.socket.isConnected&&t.socket.isUsable&&t.useSocket&&t.socket.startConn("suggestqueries",!1),(r=s.trim())&&t.useSocket&&t.socket.sendString(r);case 7:case"end":return n.stop()}},n,this)}))()}handleFocus(){this.setState({isFocused:!0})}handleBlur(){this.setState({isFocused:!1})}constructor(e){super("input",{value:""},[],{className:["paper-input"]}),this.useSocket=!!e,this.onResponse=(()=>void 0),this.socket={},e&&(this.socket=h(),this.beforeRender=(()=>{this.onResponse()}),this.onAttached=(()=>{!this.socket.isConnected&&this.socket.isUsable&&this.socket.startConn("suggestqueries",!1)})),this.attachEventListener("input",this.handleInput.bind(this)).attachEventListener("focus",this.handleFocus.bind(this)).attachEventListener("blur",this.handleBlur.bind(this))}}class v extends i.b{constructor(e){super("div",{},[new c.b(e)],{className:"_animate"})}update(){this.updateChildren(),(this.getState.value||"").trim()||this.getState.isFocused?this.addClassName("moveup").removeClassName("movedown"):this.removeClassName("moveup").addClassName("movedown"),this.updateDOMAttrs()}}const f=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new v(e),s=new m(t).bindData("value",n,"value",!1).bindData("isFocused",n,"isFocused",!1);return{component:new i.b("div",{},[n,s],{className:["search-component"]}),inputComponent:s,animatedInputComponent:n}}},295:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var s=n(7),a=n(51),r=n(20),o=n(33);const i=(e,t)=>{t.forEach((t,n)=>{const r=e[n],o=t.children[0],i=t.getState.id,c=s.b.find(i,o.$element)[0],d=r.id,u=r.movie;if(i===d)return;const l=`/watch?${Object(a.d)({id:d,movie:u})}`;o.setDomAttrs({href:`#${l}`},!1),t.setState({id:d,movieName:u},!1),c.data=u,c.tag=d})},c=new r.b("div",{},[],{class:["response-parent"]}),d=e=>{if(!e)return c.removeClassName("has-data"),c.destroyChildComponents(!1,!0),c;c.addClassName("has-data");const t=(e=>{let t;if("string"==typeof e&&(s.e&&console.warn("return response as an object!"),t=JSON.parse(e)),(t=e)["no-res"])return[];return t.data||[]})(e),n=t.length;n||c.removeClassName("has-data");const u=c.children.length;if(n===u)i(t,c.children);else if(n>u){const e=t.splice(u,n);i(t,c.children);const v=(e=>{const t=[];var n=!0,i=!1,c=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done);n=!0){const e=u.value,n=e.id,i=e.movie,c=`/watch?${Object(a.d)({id:n,movie:Object(o.j)(i)})}`,l=new r.b("div",{id:n,movieName:i},[],{className:"query-response"}),h=new r.b("a",{},[new s.b(i,n)],{href:`#${c}`,className:"movie-link"}).attachEventListener("click",()=>{d(),Object(a.a)(`/watch?${Object(a.d)({id:l.getState.id,movie:Object(o.j)(l.getState.movieName)})}`)});l.addChild(h),t.push(l)}}catch(e){i=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(i)throw c}}return t})(e);var l=!0,h=!1,p=void 0;try{for(var b,m=v[Symbol.iterator]();!(l=(b=m.next()).done);l=!0){const e=b.value;c.addChild(e)}}catch(e){h=!0,p=e}finally{try{l||null==m.return||m.return()}finally{if(h)throw p}}}else{const e=c.children.splice(n,u);i(t,c.children),e.forEach(e=>e.destroyComponent())}c.update()}},296:function(e,t,n){"use strict";n.r(t);var s=n(20),a=n(7),r=n(294),o=n(51),i=n(295),c=n(5),d=n.n(c),u=n(12),l=n.n(u),h=n(88),p=n(33);n.d(t,"animatedInputComponent",function(){return v}),n.d(t,"handleInput",function(){return f}),n.d(t,"handleKeyDown",function(){return w}),n.d(t,"searchButtonComponent",function(){return y}),n.d(t,"asYouTypeComponent",function(){return C}),n.d(t,"handleButtonClick",function(){return k});const b=new s.b("div",{},[new a.b("NEW! Add a new movie to our databases by yourself"),new s.b("a",{},[new a.b("Here!")],{className:["banner-button","database-linker"],href:"#/media/add/"}).attachEventListener("click",e=>{e.preventDefault(),e.ctrlKey||Object(o.a)("/media/add/")})]),m=new s.b("div").addChild(Object(i.a)()),v=Object(r.a)("Search For movies");function f(e){let t=e.target.value;v.inputComponent.handleInput.call(this,{target:{value:t}}),t.trim()||Object(i.a)(),v.inputComponent.appendComponentOnResponse(i.a)}function w(e){if(85===e.keyCode&&e.ctrlKey)e.preventDefault(),v.inputComponent.setState({value:""}),Object(i.a)();else if(13===e.keyCode){const e=this.getState.value||"";if(e.trim())return Object(i.a)(),Object(o.a)(`/search?${Object(o.d)({q:e})}`)}}const y=new s.b("button",{},[new a.b("Search")],{class:"search-button"}).bindData("query",v.inputComponent,"value",!1),C=new s.b("div",{},[v.component,m,y]),g=new s.b("div",{},[b,C,new s.b("div",{},[new a.b("Check some of these movies out")],{style:"display:block;margin-top: 50px;"})]);function k(){const e=this.getState.query;e&&e.trim()&&(Object(i.a)(),Object(o.a)(`/search?${Object(o.d)({q:e})}`))}g.addChild((new class extends s.b{futureAddOn(e){return this._parent=e,this}update(){var e=this;return l()(d.a.mark(function t(){var n,r,i,c,u,l,h,b,m,v;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.getState.data,e.destroyChildComponents(!1,!0),r=!0,i=!1,c=void 0,t.prev=5,u=n[Symbol.iterator]();case 7:if(r=(l=u.next()).done){t.next=20;break}return h=l.value,t.next=11,Object(p.e)(h.thumb);case 11:b=t.sent,m=new s.b("div",{},[],{style:{"background-image":`url(${b})`},className:"rec-image"}),h.movie=Object(p.c)(h.movie),(v=new s.b("a",{url:h.id,name:h.movie},[m,new s.b("span",{},[new a.b(h.movie)],{className:"rec-title"})],{className:"rec-wrapper",href:`#/watch?${Object(o.d)({id:h.id,movie:Object(p.j)(h.movie)})}`})).attachEventListener("click",function(e){e.ctrlKey||Object(o.a)(`/watch?${Object(o.d)({id:this.getState.url,movie:Object(p.j)(this.getState.name)})}`)}.bind(v)),e.addChild(v);case 17:r=!0,t.next=7;break;case 20:t.next=26;break;case 22:t.prev=22,t.t0=t.catch(5),i=!0,c=t.t0;case 26:t.prev=26,t.prev=27,r||null==u.return||u.return();case 29:if(t.prev=29,!i){t.next=32;break}throw c;case 32:return t.finish(29);case 33:return t.finish(26);case 34:e.updateChildren(e.$element);case 35:case"end":return t.stop()}},t,this,[[5,22,26,34],[27,,29,33]])}))()}constructor(){if(super("div",{data:[]},[],{class:"rec-box"}),this.beforeRender=console.log,this.onAttached=(()=>{this.setState({data:[]}),h.a.get("/i/rec/",!0).then(e=>e.json()).then(e=>this.setState({data:e.recommendations},!0)).catch(this.destroyComponent)}),!this.getState.data.length)for(let e=0;e<5;e++)this.children.push(new s.b("div",{},[new s.b("div",{},[],{className:"rec-image"}),new s.b("div",{},[],{className:"ghostText"})],{className:"rec-wrapper"}))}}).futureAddOn(g)),v.inputComponent.attachEventListener("input",f.bind(v.inputComponent),!0),g.onAttached=(()=>{Object(r.b)(window.oldTitle),v.inputComponent.attachEventListener("keydown",w.bind(v.inputComponent),!0),y.attachEventListener("click",k.bind(y),!0)});t.default=g},297:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(20),a=n(7);const r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>void 0;const r=new s.b("div",{},[],{className:"err-component-full-cover"}),o=new s.b("div",{},[new s.b("div",{},[new a.b(e)],{style:"overflow:hidden;text-overflow:ellipses"})],{className:"err-component-area"}).addChild(new s.b("button",{},[new a.b("Okay")],{className:"search-button"}).attachEventListener("click",()=>{r.destroyComponent(!1,!0),t.removeChild(o),n()}));r.addChild(o),r.render(t.$element)}},304:function(e,t,n){"use strict";n.r(t);var s=n(5),a=n.n(s),r=n(12),o=n.n(r),i=n(20),c=n(7),d=n(296),u=n(51),l=n(88);const h=function(){var e=o()(a.a.mark(function e(t){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)();case 2:return n=e.sent,e.next=5,l.a.post("/api/movie/",!0,{token:n,id:t},{"content-type":"application/json"});case 5:return s=e.sent,e.next=8,s.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();var p=n(297),b=n(33);const m="data:text/html;base64,PGRpdiBzdHlsZT0iZm9udC1mYW1pbHk6c2Fucy1zZXJpZjttYXJnaW46YXV0bzt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDpib2xkIj5Mb2FkaW5nIE1vdmllIERhdGE8L2Rpdj4=",v=e=>new URL(e).hostname;const f=new class extends i.b{onAttached(){this.children[1].$element.src=m}update(){var e=this;return o()(a.a.mark(function t(){var n,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.children[1],!(s=e.getState).selectedURL||n.$element.src===s.selectedURL){t.next=5;break}return n.$element.src=m,t.abrupt("return",setTimeout(()=>s.selectedURL?n.setDomAttrs({src:s.selectedURL},!0):void 0,700));case 5:e.updateChildren(e.$element),e.updateDOMAttrs();case 7:case"end":return t.stop()}},t,this)}))()}constructor(e,t,n,s,a){super(e,t,n,s,a)}}("div",{currentEp:null},[new c.b("","episode-id"),new i.b("iframe",{},[],{src:m,className:"frame-src"})],{}),w=new class extends i.b{update(){const e=this.getState,t=this,n=e.URLArray;function s(){const e=this.getState,n=e.url;console.log(e),t.setState({selectedURL:n})}if(n){this.destroyChildComponents(!1,!0);var a=!0,r=!1,o=void 0;try{for(var d,u=n[Symbol.iterator]();!(a=(d=u.next()).done);a=!0){const e=d.value,t=new i.b("button",{url:e},[new c.b(v(e))],{className:"url-selector-button"});t.attachEventListener("click",s.bind(t)),this.addChild(t)}}catch(e){r=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(r)throw o}}}this.updateChildren(this.$element),this.updateDOMAttrs()}constructor(){super(...arguments)}}("div"),y=new class extends i.b{update(){const e=this.getState.URLArray;if(this.destroyChildComponents(!1,!0),e){const o=new i.b("div");var t=!0,n=!1,s=void 0;try{for(var a,r=e[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){const e=a.value,t=new i.b("a",{url:e},[new c.b(`Download ${v(e)}`)],{className:"download-url-component",href:`#/out?${Object(u.d)({url:e})}`}).attachEventListener("click",t=>{Object(b.g)(t),Object(u.a)(`/out?${Object(u.d)({url:e})}`)});o.addChild(t,!1)}}catch(e){n=!0,s=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw s}}this.addChild(o)}this.updateChildren(this.$element)}constructor(){super(...arguments),this.onDestroy=(()=>{this.clearState(),((this.children[1]||{}).$element||{}).src=m})}}("div",{},[]),C=e=>{if(!e||"none"===e.toLowerCase())return null;let t;try{(t=new URL(e,`${location.protocol}//${location.hostname}`)).protocol="https:",t=t.toString()}catch(n){t=e,e.startsWith("//")&&(t=`https:${t}`)}return t},g=new c.b(""),k=new i.b("h2",{},[g],{style:"font-weight:bold"}),O=new i.b("div",{},[]),S=new i.b("div",{},[d.asYouTypeComponent,k,O,w,f,y]);function j(){return(j=o()(a.a.mark(function e(){var t,n,s,r,o,m,v,w,y,k,j,N;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(u.b)(location.href).qs,n=t.get("id"),O.destroyChildComponents(!1,!0),g.textContent="Loading",d.animatedInputComponent.inputComponent.attachEventListener("keydown",d.handleKeyDown.bind(d.animatedInputComponent.inputComponent),!0),e.next=7,h(n);case 7:if(!(s=e.sent).error){e.next=10;break}return e.abrupt("return",Object(p.a)("No Movie exists with the given ID",S,()=>S.destroyComponent(!0)));case 10:return r=s.url,o=s.alt1,m=s.alt2,v=C(r),w=C(o),y=C(m),k=[v,w,y].filter(e=>e),g.textContent=`Watch: ${s.movie_name}`,f.setState({movieID:n,URLArray:k,selectedURL:v||w||y}),j=Object(u.d)({s:n}),e.next=18,l.a.get(`/api/movie/has-subtitles?${j}`,!0);case 18:return N=e.sent,e.next=21,N.json();case 21:e.sent.data&&(O.destroyChildComponents(!1,!0),O.children=[new i.b("a",{},[new c.b("Download Subtitles")],{href:`${b.a}/api/get-subtitles/?${j}`,className:"search-button",style:"color:black;display:block;margin-bottom:10px"})],O.update());case 23:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}f.bindData("URLArray",w,"URLArray",!1),f.bindData("selectedURL",w,"selectedURL",!0),f.bindData("URLArray",y,"URLArray",!1),S.onAttached=function(){return j.apply(this,arguments)};t.default=S}}]);