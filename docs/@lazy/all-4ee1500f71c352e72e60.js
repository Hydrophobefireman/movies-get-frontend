(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{245:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s(7),o=s.n(n),r=s(1);class i extends r.i{constructor(){super(...arguments),o()(this,"state",{isFocused:!1,value:""}),o()(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),o()(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),o()(this,"onInput",t=>this.setState({value:t.target.value})),o()(this,"onSubmit",()=>this.props.onSubmit(this.state.value))}render(t,e){let{id:s,buttonText:n="Search",labelText:o="Search For Movies",onInput:i,wssResponse:a}=t,{isFocused:h,moveDown:u}=e;const l=["_animate",h?"moveup":"",u?"movedown":""];return Object(r.h)("div",{class:"search-component"},Object(r.h)("form",{action:"javascript:",onSubmit:this.onSubmit},Object(r.h)("label",{class:l,for:s},o),Object(r.h)(c,{onFocus:this.onFocus,onBlur:this.onBlur,id:s,onInput:t=>{this.onInput(t),null!=i&&i(t)}}),a,Object(r.h)("button",{class:"search-button"},n)))}}function c(t){let{onFocus:e,onBlur:s,onInput:n,id:o}=t;return Object(r.h)("input",{onFocus:e,onBlur:s,onInput:n,id:o,class:"paper-input"})}},247:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return u}));var n=s(7),o=s.n(n),r=s(1),i=s(116),c=s(34);function a(){return Object(r.h)(r.d,null,Object(r.h)("div",{style:{display:"block",marginTop:"50px"}},"Check some of these movies out!"),Object(r.h)(h))}class h extends r.i{constructor(){super(...arguments),o()(this,"state",{resp:[]})}componentWillMount(){i.a.get("/i/rec/").then(t=>t.json()).then(t=>{this.setState({resp:t.recommendations})})}render(t,e){let{resp:s=[]}=e;return Object(r.h)("div",{class:"rec-box"},s.map(t=>Object(r.h)(u,{data:t})))}}class u extends r.i{render(t){let{data:e={},customOnClick:s}=t;const n=Object(r.h)(r.d,null,Object(r.h)(l,{thumb:e.thumb?Object(c.f)(e.thumb).then(c.i):null}),Object(r.h)("span",{class:"rec-title"},Object(c.c)(e.movie)));return s?Object(r.h)("div",{class:"rec-wrapper",onClick:()=>s(e.id)},n):Object(r.h)(r.a,{class:"rec-wrapper",href:e.id?Object(c.e)(e.id,e.movie):null},n)}}class l extends r.i{constructor(){super(...arguments),o()(this,"state",{thumb:""}),o()(this,"componentDidUpdate",this.componentDidMount)}componentDidMount(t){if(null==this.props.thumb)return this.setState(t=>null!=t&&t.thumb?{thumb:""}:null);this.props.thumb&&this.props.thumb.then&&(!this.state.thumb||t&&t.thumb!==this.props.thumb)&&this.props.thumb.then(t=>t&&this.setState({thumb:t}))}render(t,e){let{}=t,{thumb:s=""}=e;return Object(r.h)("div",{style:{backgroundImage:s?"url(".concat(s,")"):"none"},class:"rec-image"})}}},249:function(t,e,s){"use strict";var n=s(10);let o=Object(n.e)();const r=Object(n.b)("Map",o),i=(Object(n.b)("Set",o),Object(n.b)("WeakMap",o)&&Object(n.b)("WeakSet",o),"__@@map"),c=t=>t!=t,a=(t,e)=>t===e||c(t)&&c(e),h=t=>0===t?0:t;let u,l,p;if("undefined"!=typeof Symbol){function d(t,e){const s=t[i];let n=0;const o=s.length,r=e?0:1;return{[Symbol.iterator]:function(){return this},next:function(){return n<o?{value:s[n++][r],done:!1}:{value:void 0,done:!0}}}}u=function(){return this[i][Symbol.iterator]()},l=function(){return d(this,!1)},p=function(){return d(this,!0)}}else u=p=l=function(){console.warn("no symbol support")};var b={keys:p,values:l,entries:u},m=s(120);function f(t,e){const s=t[i],n=s.length;for(let t=0;t<n;t++){const n=s[t];if(a(n[0],e))return n}return null}function g(t,e){if(s=t,!(null!=(n=e)&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](s):s instanceof n))throw new TypeError("Cannot call a class as a function");var s,n}const O=function t(e,s){return g(this,t),!s&&r?new Map(e):(this[i]=[],function(t,e){if(null==e)return;if(!Object(n.d)(e))throw new Error("value:"+String(e)+" is not iterable");const s=e.length;for(let n=0;n<s;n++){const s=e[n];if(!s||2!==s.length)throw new Error("invalid arg");t.set(s[0],s[1])}}(this,e),this)};var v;(v=O).prototype.set=function(t,e){const s=f(this,t);return s?s[1]=e:this[i].push([h(t),e]),this},v.prototype.has=function(t){return!!f(this,t)},v.prototype.delete=function(t){let e=!1;return this[i]=this[i].filter(s=>{const n=!a(s[0],t);return n||(e=!0),n}),e},v.prototype.get=function(t){const e=f(this,t);return e?e[1]:void 0},v.prototype.forEach=function(t,e){const s=this[i],n=s.length;for(let o=0;o<n;o++){const n=s[o],r=n[1],i=n[0],c=this;e?t.call(e,r,i,c):t(r,i,c)}},v.prototype.clear=function(){this[i].length=0},Object.defineProperty(v.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[i].length}}),"undefined"!=typeof Symbol&&(v.prototype[Symbol.iterator]=b.entries,v.prototype[Symbol.toStringTag]="Map"),Object(m.a)(v.prototype,b),O[Symbol.species]=O;e.a=O},253:function(t,e,s){"use strict";s.d(e,"b",(function(){return p})),s.d(e,"a",(function(){return d}));var n=s(7),o=s.n(n),r=s(1),i=s(116),c=s(34),a=s(247);const h=new(s(249).a),u=async t=>{const e=await i.a.post("/api/data/search/",!0,Object(c.k)({q:t}));return await e.json()};console.log("Search-results cache:",h);const l=async t=>{t=(t||"").toLowerCase();try{const e=h.get(t);if(e)return console.log("refreshing cache in background"),u(t).then(e=>h.set(t,e)),e;const s=await u(t);return h.set(t,s),s}catch(t){return{hasError:!0}}},p={data:{thumb:""}};class d extends r.i{constructor(){super(...arguments),o()(this,"state",{resp:[],fetchingPromise:null,isFetching:!1,showGhost:!0}),o()(this,"showResults",t=>t.hasError?this.setState({hasError:!0,resp:[],fetchingPromise:null,isFetching:!1,showGhost:!1}):this.setState({resp:{data:t.movies,q:this.props.q},showGhost:!1,isFetching:!1,fetchingPromise:null}))}componentDidMount(){this.setState({didMount:!0,isFetching:!0,fetchingPromise:l(this.props.q).then(this.showResults),showGhost:!0})}componentDidUpdate(t){(!this.state.isFetching&&this.props.q!==this.state.resp.q||(t||{}).q!==this.props.q)&&this.setState({isFetching:!0,hasError:!1,fetchingPromise:l(this.props.q).then(this.showResults),showGhost:!0})}render(t,e){let{q:s,customOnClick:n}=t,{showGhost:o,resp:i,hasError:c}=e;return c?Object(r.h)("div",null,"An Error occured"):o?Object(r.h)("div",{class:"rec-box"},Array.from({length:5},()=>Object(r.h)(a.b,p))):i.data&&i.data.length?Object(r.h)("div",{class:"rec-box"},i.data.map(t=>Object(r.h)(a.b,{data:t,customOnClick:n}))):Object(r.h)("div",null,'No Results found for:"',s,'"')}}},255:function(t,e,s){"use strict";var n=s(7),o=s.n(n),r=s(1),i=s(245),c=s(34);class a{__defaultOnMessage(t){if(["ping","pong"].includes(t.data))return;const e=JSON.parse(t.data);this._socketID=e.socket_id}startConn(t){return this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)?this.socket:new Promise((e,s)=>{this.socket=new WebSocket(Object(c.h)(t)),this.socket.onopen=()=>{this.socket.onmessage=this.__defaultOnMessage,e(this.socket)},this.socket.onerror=t=>s(t)})}close(){try{this.socket.close()}catch(t){console.warn(t)}}send(t){return this.socket.send(JSON.stringify(t))}sendString(t){return this.socket.send(t)}set onmessage(t){t!==this._onmessage&&(this._onmessage=t,this.socket.onmessage=t=>{const e=JSON.parse(t.data||"{}");return"ping"===e.type||"pong"===e.type?void 0:this._onmessage(e)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}}let h;const u=()=>(h||{}).isUsable?h:h=new a;let l;class p extends r.i{constructor(){super(...arguments),o()(this,"state",{resp:[],prevVal:""}),o()(this,"onMessage",t=>{t.data?this.setState({resp:t.data.map(t=>({movie:t.movie,href:Object(c.e)(t.id,t.movie)}))}):this.setState({resp:[]})}),o()(this,"componentWillUpdate",this.fetchResponses),o()(this,"componentWillMount",this.componentWillUpdate)}async fetchResponses(){const t=this.props.val;t!=this.state.prevVal&&t?(console.log("fetching"),this.setState({prevVal:t}),l=u(),await l.startConn("suggestqueries"),l.onmessage=this.onMessage,l.sendString(t)):this.state.resp.length&&!t&&this.setState({resp:[],prevVal:""})}render(){const t=["response-parent"];return this.state.resp.length&&t.push("has-data"),Object(r.h)("div",{class:t},this.state.resp.map(t=>Object(r.h)(r.a,{class:["movie-link","query-response"],href:t.href},Object(c.c)(t.movie))))}}s.d(e,"a",(function(){return d}));class d extends r.i{constructor(){super(...arguments),o()(this,"state",{value:""}),o()(this,"onInput",t=>{const e=(t.target.value||"").trim();document.title=e?"Search for ".concat(e):c.d,this.setState({value:e})}),o()(this,"loadSearchResults",()=>{const t=(this.state.value||"").trim();t&&Object(c.g)(t),this.setState({value:""})})}componentWillMount(){u().startConn("suggestqueries")}render(){return Object(r.h)(r.d,null,Object(r.h)(i.a,{id:"landing-search-component",onSubmit:this.loadSearchResults,wssResponse:Object(r.h)(p,{val:this.state.value}),onInput:this.onInput}))}}},270:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return p}));var n=s(7),o=s.n(n),r=s(1),i=s(116),c=s(253),a=s(247),h=s(255);let u=[];class l extends r.i{constructor(){super(...arguments),o()(this,"state",{hasResults:!1,showGhost:!0,data:[]})}componentDidMount(){if(u.length)return this.setState({resp:u,showGhost:!1});i.a.post("/api/get-all/",!0,{}).then(t=>t.json()).then(t=>{u=t.movies,this.setState({resp:t.movies,showGhost:!1})})}getChildNodes(t){let{showGhost:e,resp:s}=t;return e?Object(r.h)("div",{class:"rec-box"},Array.from({length:5},()=>Object(r.h)(a.b,c.b))):Object(r.h)("div",{class:"rec-box"},s.map(t=>Object(r.h)(a.b,{data:t})))}render(t,e){let{}=t;return Object(r.h)("section",{data:"all-results"},this.getChildNodes(e))}}function p(){return Object(r.h)(r.d,null,Object(r.h)(h.a),Object(r.h)(l))}}}]);