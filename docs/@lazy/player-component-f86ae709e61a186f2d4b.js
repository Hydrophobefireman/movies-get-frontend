(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var n=s(8),o=s.n(n),i=s(41),r=s(3);class a extends i.a{constructor(){super(...arguments),o()(this,"state",{isFocused:!1,value:""}),o()(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),o()(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),o()(this,"onInput",t=>this.setState({value:t.target.value})),o()(this,"onSubmit",()=>this.props.onSubmit(this.state.value))}render(t,e){let{id:s,buttonText:n="Search",labelText:o="Search For Movies",onInput:i,wssResponse:a}=t,{isFocused:l,moveDown:u}=e;const h=["_animate",l?"moveup":"",u?"movedown":""];return Object(r.b)("div",{class:"search-component"},Object(r.b)("form",{action:"javascript:",onSubmit:this.onSubmit},Object(r.b)("label",{class:h,for:s},o),Object(r.b)(c,{onFocus:this.onFocus,onBlur:this.onBlur,id:s,onInput:t=>{this.onInput(t),null!=i&&i(t)}}),a,Object(r.b)("button",{class:"search-button"},n)))}}function c(t){let{onFocus:e,onBlur:s,onInput:n,id:o}=t;return Object(r.b)("input",{onFocus:e,onBlur:s,onInput:n,id:o,class:"paper-input"})}},222:function(t,e,s){"use strict";var n=s(10);let o=Object(n.e)();const i=Object(n.b)("Map",o),r=(Object(n.b)("Set",o),Object(n.b)("WeakMap",o)&&Object(n.b)("WeakSet",o),"__@@map"),a=t=>t!=t,c=(t,e)=>t===e||a(t)&&a(e),l=t=>0===t?0:t;let u,h,p;if("undefined"!=typeof Symbol){function b(t,e){const s=t[r];let n=0;const o=s.length,i=e?0:1;return{[Symbol.iterator]:function(){return this},next:function(){return n<o?{value:s[n++][i],done:!1}:{value:void 0,done:!0}}}}u=function(){return this[r][Symbol.iterator]()},h=function(){return b(this,!1)},p=function(){return b(this,!0)}}else u=p=h=function(){console.warn("no symbol support")};var d={keys:p,values:h,entries:u},m=s(100);function f(t,e){const s=t[r],n=s.length;for(let t=0;t<n;t++){const n=s[t];if(c(n[0],e))return n}return null}function g(t,e){if(s=t,!(null!=(n=e)&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](s):s instanceof n))throw new TypeError("Cannot call a class as a function");var s,n}const v=function t(e,s){return g(this,t),!s&&i?new Map(e):(this[r]=[],function(t,e){if(null==e)return;if(!Object(n.d)(e))throw new Error("value:"+String(e)+" is not iterable");const s=e.length;for(let n=0;n<s;n++){const s=e[n];if(!s||2!==s.length)throw new Error("invalid arg");t.set(s[0],s[1])}}(this,e),this)};var S;(S=v).prototype.set=function(t,e){const s=f(this,t);return s?s[1]=e:this[r].push([l(t),e]),this},S.prototype.has=function(t){return!!f(this,t)},S.prototype.delete=function(t){let e=!1;return this[r]=this[r].filter(s=>{const n=!c(s[0],t);return n||(e=!0),n}),e},S.prototype.get=function(t){const e=f(this,t);return e?e[1]:void 0},S.prototype.forEach=function(t,e){const s=this[r],n=s.length;for(let o=0;o<n;o++){const n=s[o],i=n[1],r=n[0],a=this;e?t.call(e,i,r,a):t(i,r,a)}},S.prototype.clear=function(){this[r].length=0},Object.defineProperty(S.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[r].length}}),"undefined"!=typeof Symbol&&(S.prototype[Symbol.iterator]=d.entries,S.prototype[Symbol.toStringTag]="Map"),Object(m.a)(S.prototype,d),v[Symbol.species]=v;e.a=v},229:function(t,e,s){"use strict";var n=s(8),o=s.n(n),i=s(41),r=s(3),a=s(218),c=s(43),l=s(212);class u{__defaultOnMessage(t){if(["ping","pong"].includes(t.data))return;const e=JSON.parse(t.data);this._socketID=e.socket_id}startConn(t){return this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)?this.socket:new Promise((e,s)=>{this.socket=new WebSocket(Object(c.h)(t)),this.socket.onopen=()=>{this.socket.onmessage=this.__defaultOnMessage,e(this.socket)},this.socket.onerror=t=>s(t)})}close(){try{this.socket.close()}catch(t){console.warn(t)}}send(t){return this.socket.send(JSON.stringify(t))}sendString(t){return this.socket.send(t)}set onmessage(t){t!==this._onmessage&&(this._onmessage=t,this.socket.onmessage=t=>{const e=JSON.parse(t.data||"{}");return"ping"===e.type||"pong"===e.type?void 0:this._onmessage(e)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}}let h;const p=()=>(h||{}).isUsable?h:h=new u;let b;class d extends i.a{constructor(){super(...arguments),o()(this,"state",{resp:[],prevVal:""}),o()(this,"onMessage",t=>{t.data?this.setState({resp:t.data.map(t=>({movie:t.movie,href:Object(c.e)(t.id,t.movie)}))}):this.setState({resp:[]})}),o()(this,"componentWillUpdate",this.fetchResponses),o()(this,"componentWillMount",this.componentWillUpdate)}async fetchResponses(){const t=this.props.val;t!=this.state.prevVal&&t?(console.log("fetching"),this.setState({prevVal:t}),b=p(),await b.startConn("suggestqueries"),b.onmessage=this.onMessage,b.sendString(t)):this.state.resp.length&&!t&&this.setState({resp:[],prevVal:""})}render(){const t=["response-parent"];return this.state.resp.length&&t.push("has-data"),Object(r.b)("div",{class:t},this.state.resp.map(t=>Object(r.b)(l.a,{class:["movie-link","query-response"],href:t.href},Object(c.c)(t.movie))))}}s.d(e,"a",(function(){return m}));class m extends i.a{constructor(){super(...arguments),o()(this,"state",{value:""}),o()(this,"onInput",t=>{const e=(t.target.value||"").trim();document.title=e?"Search for ".concat(e):c.d,this.setState({value:e})}),o()(this,"loadSearchResults",()=>{const t=(this.state.value||"").trim();t&&Object(c.g)(t),this.setState({value:""})})}componentWillMount(){p().startConn("suggestqueries")}render(){return Object(r.b)(r.a,null,Object(r.b)(a.a,{id:"landing-search-component",onSubmit:this.loadSearchResults,wssResponse:Object(r.b)(d,{val:this.state.value}),onInput:this.onInput}))}}},241:function(t,e,s){"use strict";s(242);var n=s(28),o=s(154),i=s(53),r=/./.toString,a=function(t){s(55)(RegExp.prototype,"toString",t,!0)};s(54)((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?a((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=r.name&&a((function(){return r.call(this)}))},242:function(t,e,s){s(53)&&"g"!=/./g.flags&&s(71).f(RegExp.prototype,"flags",{configurable:!0,get:s(154)})},256:function(t,e,s){"use strict";s.r(e);var n=s(8),o=s.n(n),i=s(41),r=s(212),a=s(3),c=s(229),l=s(135),u=(s(241),s(96)),h=s(222);const p="data:text/html;base64,PGh0bWw+PGJvZHkgc3R5bGU9Im1hcmdpbjphdXRvO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6Ym9sZCI+TG9hZGluZy4uLjwvYm9keT48L2h0bWw+",b=new h.a;console.log("video player cache:",b);const d=t=>{if(!t||"none"===t.toLowerCase())return null;let e;try{(e=new URL(t,"".concat(location.protocol,"//").concat(location.hostname))).protocol="https:",e=e.toString()}catch(s){e=t,t.startsWith("//")&&(e="https:".concat(e))}return e},m=async t=>{const e=await u.a.post("/api/movie/",!0,{id:t},{"content-type":"application/json"}),s=await e.json();if(s.error||!s.movie_name)throw new Error;return{movie:s.movie_name,urls:[s.url,s.alt1,s.alt2].map(d)}},f=Object(a.b)("div",null,"No movie exists with the given ID"),g=async t=>{const e=b.get(t);if(e)return console.log("refreshing cache in background"),m(t).then(e=>b.set(t,e)),e;{const e=await m(t);return b.set(t,e),e}};function v(t){return new URL(t).hostname}var S=s(43);class O extends i.a{constructor(){super(...arguments),o()(this,"state",{src:p}),o()(this,"componentDidUpdate",this.componentDidMount),o()(this,"setSrc",t=>this.setState({src:t}))}componentDidMount(){this.state.src===p&&this.props.URLs.length&&this.setState({src:this.props.URLs[0]})}render(t){let{URLs:e,movieName:s,id:n}=t;return Object(a.b)(a.a,null,Object(a.b)("h2",{style:{fontWeight:"bold"}},Object(S.c)(s)),Object(a.b)(y,{id:n}),e.map(t=>Object(a.b)(j,{url:t,onClick:this.setSrc})),Object(a.b)("iframe",{class:"frame-src",src:this.state.src}),e.map(t=>Object(a.b)(w,{href:t})))}}class y extends i.a{constructor(){super(...arguments),o()(this,"state",{hasSubtitles:null}),o()(this,"css",{color:"var(--text-component)",display:"block",margin:"auto",marginBottom:"10px",width:"50%",textDecoration:"none",borderRadius:"10px"}),o()(this,"componentWillUpdate",this.componentWillMount)}componentWillMount(){"boolean"!=typeof this.state.hasSubtitles&&(this.setState({hasSubtitles:!1}),u.a.get("/api/movie/has-subtitles?"+Object(S.j)({s:this.props.id})).then(t=>t.json()).then(t=>this.setState({hasSubtitles:t.data})))}render(t,e){let{id:s}=t,{hasSubtitles:n}=e;return n?Object(a.b)("a",{class:"search-button",target:"_blank",style:this.css,href:"https://movies-get.herokuapp.com/api/get-subtitles/?".concat(Object(S.j)({s:s}))},"Download Subtitles"):Object(a.b)("a",{style:{display:"none"}})}}function j(t){let{url:e,onClick:s}=t;return e?Object(a.b)("button",{onClick:()=>s(e),class:"url-selector-button",style:{cursor:"pointer"}},v(e)):null}function w(t){let{href:e}=t;if(!e)return null;const s="/out?".concat(Object(S.j)({u:e}));return Object(a.b)(r.a,{href:s,class:["download-url-component","search-button"]},"Download from: ",v(e))}class k extends i.a{constructor(){super(...arguments),o()(this,"state",{badId:!1,URLArr:[],fetchingDetails:!1,movieName:""}),o()(this,"componentDidUpdate",this.componentDidMount)}render(t,e){let{id:s}=t,{URLArr:n,badId:o,fetchingDetails:i,movieName:r}=e;return o||!n||!n.length&&!i?f:i?Object(a.b)("div",{"data-fetch":JSON.stringify(this.props)},"Loading Movie Data",Object(a.b)("div",null,Object(a.b)(l.a))):Object(a.b)(O,{URLs:n,movieName:r,id:s})}componentDidMount(t){const e=this.props.id;if(e||this.setState({badId:!0}),!(this.state.fetchingDetails||t&&t.id===this.props.id))return this.setState({URLArr:[],badId:!1,fetchingDetails:!0}),g(e).then(t=>this.setState({URLArr:t.urls,badId:!1,fetchingDetails:!1,movieName:t.movie})).catch(t=>console.log(t)||this.setState({badId:!0,URLArr:[],fetchingDetails:!1}))}}s.d(e,"default",(function(){return I}));class I extends i.a{constructor(){super(...arguments),o()(this,"state",{badId:!1})}get movieId(){return new URLSearchParams(r.d.getQs).get("id")}getChildren(t,e){let{}=t,{badId:s}=e;return s?f:Object(a.b)(k,{id:this.movieId})}render(t,e){return Object(a.b)(a.a,null,Object(a.b)(c.a),Object(a.b)("section",{data:"player-component"},this.getChildren(t,e)))}}}}]);