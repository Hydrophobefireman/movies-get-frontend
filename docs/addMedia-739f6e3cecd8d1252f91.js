(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{294:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var s=n(5),r=n.n(s),a=n(296),i=n.n(a),o=n(12),c=n.n(o);const u={userAgent:navigator.userAgent,referrer:document.referrer,location:window.location.href,deviceDetails:{screen:{orientation:screen.orientation.type,width:screen.width,height:screen.height}}};function d(e){return h.apply(this,arguments)}function h(){return(h=c()(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.appData.send(i()({},t,{generalData:u}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,this,[[0,6]])}))).apply(this,arguments)}},295:function(e,t,n){"use strict";var s=n(5),r=n.n(s),a=n(12),i=n.n(a),o=n(20),c=n(7),u=n(33);class d{__defaultOnMessage(e){if(["ping","pong"].includes(e.data))return;const t=JSON.parse(e.data);this._socketID=t.socket_id}startConn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise((n,s)=>{this.socket=new WebSocket(Object(u.f)(e)),this.socket.onopen=(()=>{this.socket.onmessage=this.__defaultOnMessage,t&&this._pingPongs(),n(this.socket)}),this.socket.onerror=(e=>s(e))})}close(){try{this.socket.close()}catch(e){console.warn(e)}}send(e){return this.socket.send(JSON.stringify(e))}sendString(e){return this.socket.send(e)}set onmessage(e){this.socket.onmessage=(t=>{const n=JSON.parse(t.data||"{}");return"ping"===n.type||"pong"===n.type?void 0:e(n)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}_pingPongs(){this.pingtimer=setTimeout(()=>{this.socket.readyState===this.socket.OPEN?(this.send({type:"ping"}),this._pingPongs()):clearTimeout(this.pingtimer)},2e4)}constructor(){}}let h;const p=()=>(h||{}).isUsable?h:h=new d;var l=n(51);n.d(t,"b",function(){return b}),n.d(t,"a",function(){return m});const b=e=>void(document.title=e);class v extends o.b{update(){const e=this.getState.value;b(e?`Search for ${e}`:window.oldTitle),this.setDomAttrs({value:e},!1).updateDOMAttrs()}appendComponentOnResponse(e){this.socket.onmessage=this.onResponse=e.bind(this)}handleInput(e){var t=this;return i()(r.a.mark(function n(){var s,a;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:s=e.target.value,t.setState({value:s}),"/search/"===Object(l.b)(window.location.href).route&&Object(l.c)("q",s),!t.socket.isConnected&&t.socket.isUsable&&t.useSocket&&t.socket.startConn("suggestqueries",!1),(a=s.trim())&&t.useSocket&&t.socket.sendString(a);case 7:case"end":return n.stop()}},n,this)}))()}handleFocus(){this.setState({isFocused:!0})}handleBlur(){this.setState({isFocused:!1})}constructor(e){super("input",{value:""},[],{className:["paper-input"]}),this.useSocket=!!e,this.onResponse=(()=>void 0),this.socket={},e&&(this.socket=p(),this.beforeRender=(()=>{this.onResponse()}),this.onAttached=(()=>{!this.socket.isConnected&&this.socket.isUsable&&this.socket.startConn("suggestqueries",!1)})),this.attachEventListener("input",this.handleInput.bind(this)).attachEventListener("focus",this.handleFocus.bind(this)).attachEventListener("blur",this.handleBlur.bind(this))}}class f extends o.b{constructor(e){super("div",{},[new c.b(e)],{className:"_animate"})}update(){this.updateChildren(),(this.getState.value||"").trim()||this.getState.isFocused?this.addClassName("moveup").removeClassName("movedown"):this.removeClassName("moveup").addClassName("movedown"),this.updateDOMAttrs()}}const m=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new f(e),s=new v(t).bindData("value",n,"value",!1).bindData("isFocused",n,"isFocused",!1);return{component:new o.b("div",{},[n,s],{className:["search-component"]}),inputComponent:s,animatedInputComponent:n}}},296:function(e,t,n){var s=n(297);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}},297:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},304:function(e,t,n){"use strict";n.r(t);var s=n(5),r=n.n(s),a=n(12),i=n.n(a),o=n(20),c=n(7),u=n(295),d=n(88),h=n(51),p=n(294),l=n(33);const b=e=>{const t=btoa(e);return Object(l.i)(t).split("").reverse().join("")},v=Object(u.a)("Press enter to search",!1),f=v.inputComponent,m=new o.b("div"),k=new o.b("div");k.onAttached=(()=>{Object(p.a)({data:"media-add"}),k.destroyChildComponents(!1,!0),k.addChild(v.component),k.addChild(m),k.renderChildrenOnly()});const g=(e,t)=>{e.attachEventListener("click",i()(r.a.mark(function e(){var n,s,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(`/api/add/tv-show/lookup?${Object(h.d)({s:b(this.getState.url),t:this.getState.title})}`);case 2:return n=e.sent,e.next=5,n.text();case 5:s=e.sent,k.destroyChildComponents(!1,!0),k.$element.appendChild(new c.b(s)),(a=document.createElement("a")).href=`#/search?${Object(h.d)({q:t})}`,a.style.margin="auto",a.style.display="block",a.innerHTML=`Search for ${t}`,k.$element.appendChild(a);case 14:case"end":return e.stop()}},e,this)})).bind(e))};function w(){return(w=i()(r.a.mark(function e(t){var n,s,a,i,u,p,l,b,v,f,w,y,C,O,S;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode){e.next=47;break}if((n=c.b.find("$$",k.$element)[0])&&n.remove(),!(s=(t.target.value||"").trim())){e.next=47;break}return e.prev=5,m.destroyChildComponents(!1,!0),e.next=9,d.a.get(`/media/add-shows/fetch/?${Object(h.d)({s:s})}`,!0);case 9:return i=e.sent,e.next=12,i.json();case 12:if(e.t0=e.sent,e.t0){e.next=15;break}e.t0={};case 15:u=e.t0,a=u.shows,e.next=21;break;case 19:e.prev=19,e.t1=e.catch(5);case 21:if(!a||!a.length){e.next=46;break}for(p=[],l=!0,b=!1,v=void 0,e.prev=26,f=a[Symbol.iterator]();!(l=(w=f.next()).done);l=!0)y=w.value,C=y.title,O=y.url,S=new o.b("div",{url:O,title:C},[new c.b(C)],{style:"width:65%;margin:auto;text-decoration:underline;cursor:pointer"}),g(S,C),p.push(S);e.next=34;break;case 30:e.prev=30,e.t2=e.catch(26),b=!0,v=e.t2;case 34:e.prev=34,e.prev=35,l||null==f.return||f.return();case 37:if(e.prev=37,!b){e.next=40;break}throw v;case 40:return e.finish(37);case 41:return e.finish(34);case 42:m.addChild(new o.b("div",{},p),!1),m.update(),e.next=47;break;case 46:return e.abrupt("return",k.$element.appendChild(new c.b("No Results found","$$")));case 47:case"end":return e.stop()}},e,this,[[5,19],[26,30,34,42],[35,,37,41]])}))).apply(this,arguments)}f.attachEventListener("keydown",function(e){return w.apply(this,arguments)}.bind(f)),t.default=k}}]);