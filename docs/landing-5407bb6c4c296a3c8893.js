(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var s=n(7),a=n(51),i=n(20),o=n(33);const r=(e,t)=>{t.forEach((t,n)=>{const i=e[n],o=t.children[0],r=t.getState.id,c=s.b.find(r,o.$element)[0],d=i.id,u=i.movie;if(r===d)return;const h=`/watch?${Object(a.d)({id:d,movie:u})}`;o.setDomAttrs({href:`#${h}`},!1),t.setState({id:d,movieName:u},!1),c.data=u,c.tag=d})},c=new i.b("div",{},[],{class:["response-parent"]}),d=e=>{if(!e)return c.removeClassName("has-data"),c.destroyChildComponents(!1,!0),c;c.addClassName("has-data");const t=(e=>{let t;if("string"==typeof e&&(s.e&&console.warn("return response as an object!"),t=JSON.parse(e)),(t=e)["no-res"])return[];return t.data||[]})(e),n=t.length;n||c.removeClassName("has-data");const u=c.children.length;if(n===u)r(t,c.children);else if(n>u){const e=t.splice(u,n);r(t,c.children);const v=(e=>{const t=[];var n=!0,r=!1,c=void 0;try{for(var u,h=e[Symbol.iterator]();!(n=(u=h.next()).done);n=!0){const e=u.value,n=e.id,r=e.movie,c=`/watch?${Object(a.d)({id:n,movie:Object(o.j)(r)})}`,h=new i.b("div",{id:n,movieName:r},[],{className:"query-response"}),l=new i.b("a",{},[new s.b(r,n)],{href:`#${c}`,className:"movie-link"}).attachEventListener("click",()=>{d(),Object(a.a)(`/watch?${Object(a.d)({id:h.getState.id,movie:Object(o.j)(h.getState.movieName)})}`)});h.addChild(l),t.push(h)}}catch(e){r=!0,c=e}finally{try{n||null==h.return||h.return()}finally{if(r)throw c}}return t})(e);var h=!0,l=!1,p=void 0;try{for(var m,b=v[Symbol.iterator]();!(h=(m=b.next()).done);h=!0){const e=m.value;c.addChild(e)}}catch(e){l=!0,p=e}finally{try{h||null==b.return||b.return()}finally{if(l)throw p}}}else{const e=c.children.splice(n,u);r(t,c.children),e.forEach(e=>e.destroyComponent())}c.update()}},295:function(e,t,n){"use strict";var s=n(5),a=n.n(s),i=n(12),o=n.n(i),r=n(20),c=n(7),d=n(33);class u{__defaultOnMessage(e){if(["ping","pong"].includes(e.data))return;const t=JSON.parse(e.data);this._socketID=t.socket_id}startConn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise((n,s)=>{this.socket=new WebSocket(Object(d.f)(e)),this.socket.onopen=(()=>{this.socket.onmessage=this.__defaultOnMessage,t&&this._pingPongs(),n(this.socket)}),this.socket.onerror=(e=>s(e))})}close(){try{this.socket.close()}catch(e){console.warn(e)}}send(e){return this.socket.send(JSON.stringify(e))}sendString(e){return this.socket.send(e)}set onmessage(e){this.socket.onmessage=(t=>{const n=JSON.parse(t.data||"{}");return"ping"===n.type||"pong"===n.type?void 0:e(n)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}_pingPongs(){this.pingtimer=setTimeout(()=>{this.socket.readyState===this.socket.OPEN?(this.send({type:"ping"}),this._pingPongs()):clearTimeout(this.pingtimer)},2e4)}constructor(){}}let h;const l=()=>(h||{}).isUsable?h:h=new u;var p=n(51);n(294);n.d(t,"b",function(){return m}),n.d(t,"a",function(){return f});const m=e=>void(document.title=e);class b extends r.b{update(){const e=this.getState.value;m(e?`Search for ${e}`:window.oldTitle),this.setDomAttrs({value:e},!1).updateDOMAttrs()}appendComponentOnResponse(e){this.socket.onmessage=this.onResponse=e.bind(this)}handleInput(e){var t=this;return o()(a.a.mark(function n(){var s,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:s=e.target.value,t.setState({value:s}),"/search/"===Object(p.b)(window.location.href).route&&Object(p.c)("q",s),!t.socket.isConnected&&t.socket.isUsable&&t.useSocket&&t.socket.startConn("suggestqueries",!1),(i=s.trim())&&t.useSocket&&t.socket.sendString(i);case 7:case"end":return n.stop()}},n,this)}))()}handleFocus(){this.setState({isFocused:!0})}handleBlur(){this.setState({isFocused:!1})}constructor(e){super("input",{value:""},[],{className:["paper-input"]}),this.useSocket=!!e,this.onResponse=(()=>void 0),this.socket={},e&&(this.socket=l(),this.beforeRender=(()=>{this.onResponse()}),this.onAttached=(()=>{!this.socket.isConnected&&this.socket.isUsable&&this.socket.startConn("suggestqueries",!1)})),this.attachEventListener("input",this.handleInput.bind(this)).attachEventListener("focus",this.handleFocus.bind(this)).attachEventListener("blur",this.handleBlur.bind(this))}}class v extends r.b{constructor(e){super("div",{},[new c.b(e)],{className:"_animate"})}update(){this.updateChildren(),(this.getState.value||"").trim()||this.getState.isFocused?this.addClassName("moveup").removeClassName("movedown"):this.removeClassName("moveup").addClassName("movedown"),this.updateDOMAttrs()}}const f=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new v(e),s=new b(t).bindData("value",n,"value",!1).bindData("isFocused",n,"isFocused",!1);return{component:new r.b("div",{},[n,s],{className:["search-component"]}),inputComponent:s,animatedInputComponent:n}}},296:function(e,t,n){"use strict";n.r(t);var s=n(20),a=n(7),i=n(295),o=n(51),r=n(294),c=n(5),d=n.n(c),u=n(12),h=n.n(u),l=n(88),p=n(33);n.d(t,"animatedInputComponent",function(){return v}),n.d(t,"handleInput",function(){return f}),n.d(t,"handleKeyDown",function(){return w}),n.d(t,"searchButtonComponent",function(){return g}),n.d(t,"asYouTypeComponent",function(){return k}),n.d(t,"handleButtonClick",function(){return O});const m=new s.b("div",{},[new a.b("NEW! Add a new movie to our databases by yourself"),new s.b("a",{},[new a.b("Here!")],{className:["banner-button","database-linker"],href:"#/media/add/"}).attachEventListener("click",e=>{e.preventDefault(),e.ctrlKey||Object(o.a)("/media/add/")})]),b=new s.b("div").addChild(Object(r.a)()),v=Object(i.a)("Search For movies");function f(e){let t=e.target.value;v.inputComponent.handleInput.call(this,{target:{value:t}}),t.trim()||Object(r.a)(),v.inputComponent.appendComponentOnResponse(r.a)}function w(e){if(85===e.keyCode&&e.ctrlKey)e.preventDefault(),v.inputComponent.setState({value:""}),Object(r.a)();else if(13===e.keyCode){const e=this.getState.value||"";if(e.trim())return Object(r.a)(),Object(o.a)(`/search?${Object(o.d)({q:e})}`)}}const g=new s.b("button",{},[new a.b("Search")],{class:"search-button"}).bindData("query",v.inputComponent,"value",!1),k=new s.b("div",{},[v.component,b,g]),C=new s.b("div",{},[m,k,new s.b("div",{},[new a.b("Check some of these movies out")],{style:"display:block;margin-top: 50px;"})]);function O(){const e=this.getState.query;e&&e.trim()&&(Object(r.a)(),Object(o.a)(`/search?${Object(o.d)({q:e})}`))}C.addChild((new class extends s.b{futureAddOn(e){return this._parent=e,this}update(){var e=this;return h()(d.a.mark(function t(){var n,i,r,c,u,h,l,m,b,v;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.getState.data,e.destroyChildComponents(!1,!0),i=!0,r=!1,c=void 0,t.prev=5,u=n[Symbol.iterator]();case 7:if(i=(h=u.next()).done){t.next=20;break}return l=h.value,t.next=11,Object(p.e)(l.thumb);case 11:m=t.sent,b=new s.b("div",{},[],{style:{"background-image":`url(${m})`},className:"rec-image"}),l.movie=Object(p.c)(l.movie),(v=new s.b("a",{url:l.id,name:l.movie},[b,new s.b("span",{},[new a.b(l.movie)],{className:"rec-title"})],{className:"rec-wrapper",href:`#/watch?${Object(o.d)({id:l.id,movie:Object(p.j)(l.movie)})}`})).attachEventListener("click",function(e){e.ctrlKey||Object(o.a)(`/watch?${Object(o.d)({id:this.getState.url,movie:Object(p.j)(this.getState.name)})}`)}.bind(v)),e.addChild(v);case 17:i=!0,t.next=7;break;case 20:t.next=26;break;case 22:t.prev=22,t.t0=t.catch(5),r=!0,c=t.t0;case 26:t.prev=26,t.prev=27,i||null==u.return||u.return();case 29:if(t.prev=29,!r){t.next=32;break}throw c;case 32:return t.finish(29);case 33:return t.finish(26);case 34:e.updateChildren(e.$element);case 35:case"end":return t.stop()}},t,this,[[5,22,26,34],[27,,29,33]])}))()}constructor(){if(super("div",{data:[]},[],{class:"rec-box"}),this.beforeRender=console.log,this.onAttached=(()=>{this.setState({data:[]}),l.a.get("/i/rec/",!0).then(e=>e.json()).then(e=>this.setState({data:e.recommendations},!0)).catch(this.destroyComponent)}),!this.getState.data.length)for(let e=0;e<5;e++)this.children.push(new s.b("div",{},[new s.b("div",{},[],{className:"rec-image"}),new s.b("div",{},[],{className:"ghostText"})],{className:"rec-wrapper"}))}}).futureAddOn(C)),v.inputComponent.attachEventListener("input",f.bind(v.inputComponent),!0),C.onAttached=(()=>{Object(i.b)(window.oldTitle),v.inputComponent.attachEventListener("keydown",w.bind(v.inputComponent),!0),g.attachEventListener("click",O.bind(g),!0)});t.default=C}}]);