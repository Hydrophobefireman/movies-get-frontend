(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{245:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s(7),o=s.n(n),i=s(1);class r extends i.i{constructor(){super(...arguments),o()(this,"state",{isFocused:!1,value:""}),o()(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),o()(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),o()(this,"onInput",t=>this.setState({value:t.target.value})),o()(this,"onSubmit",()=>this.props.onSubmit(this.state.value))}render(t,e){let{id:s,buttonText:n="Search",labelText:o="Search For Movies",onInput:r,wssResponse:c}=t,{isFocused:h,moveDown:u}=e;const l=["_animate",h?"moveup":"",u?"movedown":""];return Object(i.h)("div",{class:"search-component"},Object(i.h)("form",{action:"javascript:",onSubmit:this.onSubmit},Object(i.h)("label",{class:l,for:s},o),Object(i.h)(a,{onFocus:this.onFocus,onBlur:this.onBlur,id:s,onInput:t=>{this.onInput(t),null!=r&&r(t)}}),c,Object(i.h)("button",{class:"search-button"},n)))}}function a(t){let{onFocus:e,onBlur:s,onInput:n,id:o}=t;return Object(i.h)("input",{onFocus:e,onBlur:s,onInput:n,id:o,class:"paper-input"})}},248:function(t,e,s){"use strict";var n=s(11);let o=Object(n.e)();const i=Object(n.b)("Map",o),r=(Object(n.b)("Set",o),Object(n.b)("WeakMap",o)&&Object(n.b)("WeakSet",o),"__@@map"),a=t=>t!=t,c=(t,e)=>t===e||a(t)&&a(e),h=t=>0===t?0:t;let u,l,p;if("undefined"!=typeof Symbol){function d(t,e){const s=t[r];let n=0;const o=s.length,i=e?0:1;return{[Symbol.iterator]:function(){return this},next:function(){return n<o?{value:s[n++][i],done:!1}:{value:void 0,done:!0}}}}u=function(){return this[r][Symbol.iterator]()},l=function(){return d(this,!1)},p=function(){return d(this,!0)}}else u=p=l=function(){console.warn("no symbol support")};var b={keys:p,values:l,entries:u},m=s(119);function f(t,e){for(const s of t[r])if(c(s[0],e))return s;return null}function g(t,e){if(s=t,!(null!=(n=e)&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](s):s instanceof n))throw new TypeError("Cannot call a class as a function");var s,n}const v=function t(e,s){return!s&&i?new Map(e):(g(this,t),this[r]=[],function(t,e){if(null!=e){if(!Object(n.d)(e))throw new Error("value:"+String(e)+" is not iterable");for(const s of e){if(!s||2!==s.length)throw new Error("invalid arg");t.set(s[0],s[1])}}}(this,e),this)};var S;(S=v).prototype.set=function(t,e){const s=f(this,t);return s?s[1]=e:this[r].push([h(t),e]),this},S.prototype.has=function(t){return!!f(this,t)},S.prototype.delete=function(t){let e=!1;return this[r]=this[r].filter(s=>{const n=!c(s[0],t);return n||(e=!0),n}),e},S.prototype.get=function(t){const e=f(this,t);return e?e[1]:void 0},S.prototype.forEach=function(t,e){for(const s of this[r]){const n=s[1],o=s[0],i=this;e?t.call(e,n,o,i):t(n,o,i)}},S.prototype.clear=function(){this[r].length=0},Object.defineProperty(S.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[r].length}}),"undefined"!=typeof Symbol&&(S.prototype[Symbol.iterator]=b.entries,S.prototype[Symbol.toStringTag]="Map"),Object(m.a)(S.prototype,b),v[Symbol.species]=v;e.a=v},251:function(t,e,s){"use strict";var n=s(7),o=s.n(n),i=s(1),r=s(245),a=s(34);class c{__defaultOnMessage(t){if(["ping","pong"].includes(t.data))return;const e=JSON.parse(t.data);this._socketID=e.socket_id}startConn(t){return this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)?this.socket:new Promise((e,s)=>{this.socket=new WebSocket(Object(a.h)(t)),this.socket.onopen=()=>{this.socket.onmessage=this.__defaultOnMessage,e(this.socket)},this.socket.onerror=t=>s(t)})}close(){try{this.socket.close()}catch(t){console.warn(t)}}send(t){return this.socket.send(JSON.stringify(t))}sendString(t){return this.socket.send(t)}set onmessage(t){t!==this._onmessage&&(this._onmessage=t,this.socket.onmessage=t=>{const e=JSON.parse(t.data||"{}");return"ping"===e.type||"pong"===e.type?void 0:this._onmessage(e)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}}let h;const u=()=>(h||{}).isUsable?h:h=new c;let l;class p extends i.i{constructor(){super(...arguments),o()(this,"state",{resp:[],prevVal:""}),o()(this,"onMessage",t=>{t.data?this.setState({resp:t.data.map(t=>({movie:t.movie,href:Object(a.e)(t.id,t.movie)}))}):this.setState({resp:[]})}),o()(this,"componentWillUpdate",this.fetchResponses),o()(this,"componentWillMount",this.componentWillUpdate)}async fetchResponses(){const t=this.props.val;t!=this.state.prevVal&&t?(console.log("fetching"),this.setState({prevVal:t}),l=u(),await l.startConn("suggestqueries"),l.onmessage=this.onMessage,l.sendString(t)):this.state.resp.length&&!t&&this.setState({resp:[],prevVal:""})}render(){const t=["response-parent"];return this.state.resp.length&&t.push("has-data"),Object(i.h)("div",{class:t},this.state.resp.map(t=>Object(i.h)(i.a,{class:["movie-link","query-response"],href:t.href},Object(a.c)(t.movie))))}}s.d(e,"a",(function(){return d}));class d extends i.i{constructor(){super(...arguments),o()(this,"state",{value:""}),o()(this,"onInput",t=>{const e=(t.target.value||"").trim();document.title=e?"Search for ".concat(e):a.d,this.setState({value:e})}),o()(this,"loadSearchResults",()=>{const t=(this.state.value||"").trim();t&&Object(a.g)(t),this.setState({value:""})})}componentWillMount(){u().startConn("suggestqueries")}render(){return Object(i.h)(i.d,null,Object(i.h)(r.a,{id:"landing-search-component",onSubmit:this.loadSearchResults,wssResponse:Object(i.h)(p,{val:this.state.value}),onInput:this.onInput}))}}},267:function(t,e,s){"use strict";s.r(e);var n=s(7),o=s.n(n),i=s(1),r=s(251),a=s(148),c=(s(167),s(114)),h=s(248);const u="data:text/html;base64,PGh0bWw+PGJvZHkgc3R5bGU9Im1hcmdpbjphdXRvO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6Ym9sZCI+TG9hZGluZy4uLjwvYm9keT48L2h0bWw+",l=new h.a;console.log("video player cache:",l);const p=t=>{if(!t||"none"===t.toLowerCase())return null;let e;try{(e=new URL(t,"".concat(location.protocol,"//").concat(location.hostname))).protocol="https:",e=e.toString()}catch(s){e=t,t.startsWith("//")&&(e="https:".concat(e))}return e},d=async t=>{const e=await c.a.post("/api/movie/",!0,{id:t},{"content-type":"application/json"}),s=await e.json();if(s.error||!s.movie_name)throw new Error;return{movie:s.movie_name,urls:[s.url,s.alt1,s.alt2].map(p)}},b=Object(i.h)("div",null,"No movie exists with the given ID"),m=async t=>{const e=l.get(t);if(e)return console.log("refreshing cache in background"),d(t).then(e=>l.set(t,e)),e;{const e=await d(t);return l.set(t,e),e}};function f(t){return new URL(t).hostname}var g=s(34);class v extends i.i{constructor(){super(...arguments),o()(this,"state",{src:u}),o()(this,"componentDidUpdate",this.componentDidMount),o()(this,"setSrc",t=>this.setState({src:t}))}componentDidMount(){this.state.src===u&&this.props.URLs.length&&this.setState({src:this.props.URLs[0]})}render(t){let{URLs:e,movieName:s,id:n}=t;return Object(i.h)(i.d,null,Object(i.h)("h2",{style:{fontWeight:"bold"}},Object(g.c)(s)),Object(i.h)(S,{id:n}),e.map(t=>Object(i.h)(O,{url:t,onClick:this.setSrc})),Object(i.h)("iframe",{class:"frame-src",src:this.state.src}),e.map(t=>Object(i.h)(y,{href:t})))}}class S extends i.i{constructor(){super(...arguments),o()(this,"state",{hasSubtitles:null}),o()(this,"css",{color:"var(--text-component)",display:"block",margin:"auto",marginBottom:"10px",width:"25%",textDecoration:"none",borderRadius:"10px"}),o()(this,"componentWillUpdate",this.componentWillMount)}componentWillMount(){"boolean"!=typeof this.state.hasSubtitles&&(this.setState({hasSubtitles:!1}),c.a.get("/api/movie/has-subtitles?"+Object(g.k)({s:this.props.id})).then(t=>t.json()).then(t=>this.setState({hasSubtitles:t.data})))}render(t,e){let{id:s}=t,{hasSubtitles:n}=e;return n?Object(i.h)("a",{class:"search-button",target:"_blank",style:this.css,href:"https://movies-get.herokuapp.com/api/get-subtitles/?".concat(Object(g.k)({s:s}))},"Download Subtitles"):Object(i.h)("a",{style:{display:"none"}})}}function O(t){let{url:e,onClick:s}=t;return e?Object(i.h)("button",{onClick:()=>s(e),class:"url-selector-button",style:{cursor:"pointer"}},f(e)):null}function y(t){let{href:e}=t;if(!e)return null;const s="/out?".concat(Object(g.k)({u:e}));return Object(i.h)(i.a,{href:s,class:["download-url-component","search-button"]},"Download from: ",f(e))}class j extends i.i{constructor(){super(...arguments),o()(this,"state",{badId:!1,URLArr:[],fetchingDetails:!1,movieName:""}),o()(this,"componentDidUpdate",this.componentDidMount)}render(t,e){let{id:s}=t,{URLArr:n,badId:o,fetchingDetails:r,movieName:c}=e;return o||!n||!n.length&&!r?b:r?Object(i.h)("div",{"data-fetch":JSON.stringify(this.props)},"Loading Movie Data",Object(i.h)("div",null,Object(i.h)(a.a))):Object(i.h)(v,{URLs:n,movieName:c,id:s})}componentDidMount(t){const e=this.props.id;if(e||this.setState({badId:!0}),!(this.state.fetchingDetails||t&&t.id===this.props.id))return this.setState({URLArr:[],badId:!1,fetchingDetails:!0}),m(e).then(t=>this.setState({URLArr:t.urls,badId:!1,fetchingDetails:!1,movieName:t.movie})).catch(t=>console.log(t)||this.setState({badId:!0,URLArr:[],fetchingDetails:!1}))}}s.d(e,"default",(function(){return k}));class k extends i.i{constructor(){super(...arguments),o()(this,"state",{badId:!1})}get movieId(){return new URLSearchParams(i.e.getQs).get("id")}getChildren(t,e){let{}=t,{badId:s}=e;return s?b:Object(i.h)(j,{id:this.movieId})}render(t,e){return Object(i.h)(i.d,null,Object(i.h)(r.a),Object(i.h)("section",{data:"player-component"},this.getChildren(t,e)))}}}}]);