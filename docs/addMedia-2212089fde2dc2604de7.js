(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{294:function(e,t,s){"use strict";var n=s(5),a=s.n(n),i=s(12),o=s.n(i),r=s(20),c=s(7),d=s(33);class u{__defaultOnMessage(e){if(["ping","pong"].includes(e.data))return;const t=JSON.parse(e.data);this._socketID=t.socket_id}startConn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise((s,n)=>{this.socket=new WebSocket(Object(d.f)(e)),this.socket.onopen=(()=>{this.socket.onmessage=this.__defaultOnMessage,t&&this._pingPongs(),s(this.socket)}),this.socket.onerror=(e=>n(e))})}close(){try{this.socket.close()}catch(e){console.warn(e)}}send(e){return this.socket.send(JSON.stringify(e))}sendString(e){return this.socket.send(e)}set onmessage(e){this.socket.onmessage=(t=>{const s=JSON.parse(t.data||"{}");return"ping"===s.type||"pong"===s.type?void 0:e(s)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}_pingPongs(){this.pingtimer=setTimeout(()=>{this.socket.readyState===this.socket.OPEN?(this.send({type:"ping"}),this._pingPongs()):clearTimeout(this.pingtimer)},2e4)}constructor(){}}let h;const l=()=>(h||{}).isUsable?h:h=new u;var p=s(51);s.d(t,"b",function(){return b}),s.d(t,"a",function(){return v});const b=e=>void(document.title=e);class k extends r.b{update(){const e=this.getState.value;b(e?`Search for ${e}`:window.oldTitle),this.setDomAttrs({value:e},!1).updateDOMAttrs()}appendComponentOnResponse(e){this.socket.onmessage=this.onResponse=e.bind(this)}handleInput(e){var t=this;return o()(a.a.mark(function s(){var n,i;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:n=e.target.value,t.setState({value:n}),"/search/"===Object(p.b)(window.location.href).route&&Object(p.c)("q",n),!t.socket.isConnected&&t.socket.isUsable&&t.useSocket&&t.socket.startConn("suggestqueries",!1),(i=n.trim())&&t.useSocket&&t.socket.sendString(i);case 7:case"end":return s.stop()}},s,this)}))()}handleFocus(){this.setState({isFocused:!0})}handleBlur(){this.setState({isFocused:!1})}constructor(e){super("input",{value:""},[],{className:["paper-input"]}),this.useSocket=!!e,this.onResponse=(()=>void 0),this.socket={},e&&(this.socket=l(),this.beforeRender=(()=>{this.onResponse()}),this.onAttached=(()=>{!this.socket.isConnected&&this.socket.isUsable&&this.socket.startConn("suggestqueries",!1)})),this.attachEventListener("input",this.handleInput.bind(this)).attachEventListener("focus",this.handleFocus.bind(this)).attachEventListener("blur",this.handleBlur.bind(this))}}class m extends r.b{constructor(e){super("div",{},[new c.b(e)],{className:"_animate"})}update(){this.updateChildren(),(this.getState.value||"").trim()||this.getState.isFocused?this.addClassName("moveup").removeClassName("movedown"):this.removeClassName("moveup").addClassName("movedown"),this.updateDOMAttrs()}}const v=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const s=new m(e),n=new k(t).bindData("value",s,"value",!1).bindData("isFocused",s,"isFocused",!1);return{component:new r.b("div",{},[s,n],{className:["search-component"]}),inputComponent:n,animatedInputComponent:s}}},301:function(e,t,s){"use strict";s.r(t);var n=s(5),a=s.n(n),i=s(12),o=s.n(i),r=s(20),c=s(7),d=s(294),u=s(88),h=s(51),l=s(33);const p=e=>{const t=btoa(e);return Object(l.i)(t).split("").reverse().join("")},b=Object(d.a)("Press enter to search",!1),k=b.inputComponent,m=new r.b("div"),v=new r.b("div");v.onAttached=(()=>{v.destroyChildComponents(!1,!0),v.addChild(b.component),v.addChild(m),v.renderChildrenOnly()});const g=(e,t)=>{e.attachEventListener("click",o()(a.a.mark(function e(){var s,n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(`/api/add/tv-show/lookup?${Object(h.d)({s:p(this.getState.url),t:this.getState.title})}`);case 2:return s=e.sent,e.next=5,s.text();case 5:n=e.sent,v.destroyChildComponents(!1,!0),v.$element.appendChild(new c.b(n)),(i=document.createElement("a")).href=`#/search?${Object(h.d)({q:t})}`,i.style.margin="auto",i.style.display="block",i.innerHTML=`Search for ${t}`,v.$element.appendChild(i);case 14:case"end":return e.stop()}},e,this)})).bind(e))};function f(){return(f=o()(a.a.mark(function e(t){var s,n,i,o,d,l,p,b,k,f,w,C,S,y,O;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode){e.next=47;break}if((s=c.b.find("$$",v.$element)[0])&&s.remove(),!(n=(t.target.value||"").trim())){e.next=47;break}return e.prev=5,m.destroyChildComponents(!1,!0),e.next=9,u.a.get(`/media/add-shows/fetch/?${Object(h.d)({s:n})}`,!0);case 9:return o=e.sent,e.next=12,o.json();case 12:if(e.t0=e.sent,e.t0){e.next=15;break}e.t0={};case 15:d=e.t0,i=d.shows,e.next=21;break;case 19:e.prev=19,e.t1=e.catch(5);case 21:if(!i||!i.length){e.next=46;break}for(l=[],p=!0,b=!1,k=void 0,e.prev=26,f=i[Symbol.iterator]();!(p=(w=f.next()).done);p=!0)C=w.value,S=C.title,y=C.url,O=new r.b("div",{url:y,title:S},[new c.b(S)],{style:"width:65%;margin:auto;text-decoration:underline;cursor:pointer"}),g(O,S),l.push(O);e.next=34;break;case 30:e.prev=30,e.t2=e.catch(26),b=!0,k=e.t2;case 34:e.prev=34,e.prev=35,p||null==f.return||f.return();case 37:if(e.prev=37,!b){e.next=40;break}throw k;case 40:return e.finish(37);case 41:return e.finish(34);case 42:m.addChild(new r.b("div",{},l),!1),m.update(),e.next=47;break;case 46:return e.abrupt("return",v.$element.appendChild(new c.b("No Results found","$$")));case 47:case"end":return e.stop()}},e,this,[[5,19],[26,30,34,42],[35,,37,41]])}))).apply(this,arguments)}k.attachEventListener("keydown",function(e){return f.apply(this,arguments)}.bind(k)),t.default=v}}]);