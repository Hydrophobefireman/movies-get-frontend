(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},175:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));n(30);var r=n(12),o=n.n(r),s=n(9),a=n.n(s),i=n(16),c=n.n(i),u=n(13),l=n.n(u),h=n(3),f=n.n(h),p=n(17),v=n.n(p),d=n(6),b=n.n(d),m=n(0),g=function(t){function e(){var t,n;o()(this,e);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=c()(this,(t=l()(e)).call.apply(t,[this].concat(s))),b()(f()(n),"state",{isFocused:!1,value:""}),b()(f()(n),"onFocus",(function(){return!n.state.value&&n.setState({isFocused:!0,moveDown:!1})})),b()(f()(n),"onBlur",(function(){return!n.state.value&&n.setState({isFocused:!1,moveDown:!0})})),b()(f()(n),"onInput",(function(t){return n.setState({value:t.target.value})})),b()(f()(n),"onSubmit",(function(){return n.props.onSubmit(n.state.value)})),n}return v()(e,t),a()(e,[{key:"render",value:function(t,e){var n=this,r=t.id,o=t.buttonText,s=void 0===o?"Search":o,a=t.labelText,i=void 0===a?"Search For Movies":a,c=t.onInput,u=t.wssResponse,l=["_animate",e.isFocused?"moveup":"",e.moveDown?"movedown":""];return Object(m.h)("div",{class:"search-component"},Object(m.h)("form",{action:"javascript:",onSubmit:this.onSubmit},Object(m.h)("label",{class:l,for:r},i),Object(m.h)(y,{onFocus:this.onFocus,onBlur:this.onBlur,id:r,onInput:function(t){n.onInput(t),null!=c&&c(t)}}),u,Object(m.h)("button",{class:"search-button"},s)))}}]),e}(m.i);function y(t){var e=t.onFocus,n=t.onBlur,r=t.onInput,o=t.id;return Object(m.h)("input",{onFocus:e,onBlur:n,onInput:r,id:o,class:"paper-input"})}},177:function(t,e,n){"use strict";var r=n(7),o=n(178).trim;r({target:"String",proto:!0,forced:n(179)("trim")},{trim:function(){return o(this)}})},178:function(t,e,n){var r=n(23),o="["+n(174)+"]",s=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),i=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:i(1),end:i(2),trim:i(3)}},179:function(t,e,n){var r=n(4),o=n(174);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},180:function(t,e,n){"use strict";var r=n(11);let o=Object(r.e)();const s=Object(r.b)("Map",o),a=(Object(r.b)("Set",o),Object(r.b)("WeakMap",o)&&Object(r.b)("WeakSet",o),"__@@map"),i=t=>t!=t,c=(t,e)=>t===e||i(t)&&i(e),u=t=>0===t?0:t;let l,h,f;if("undefined"!=typeof Symbol){function p(t,e){const n=t[a];let r=0;const o=n.length,s=e?0:1;return{[Symbol.iterator]:function(){return this},next:function(){return r<o?{value:n[r++][s],done:!1}:{value:void 0,done:!0}}}}l=function(){return this[a][Symbol.iterator]()},h=function(){return p(this,!1)},f=function(){return p(this,!0)}}else l=f=h=function(){console.warn("no symbol support")};var v={keys:f,values:h,entries:l},d=n(84);function b(t,e){for(const n of t[a])if(c(n[0],e))return n;return null}function m(t,e){if(n=t,!(null!=(r=e)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r))throw new TypeError("Cannot call a class as a function");var n,r}const g=function t(e,n){return!n&&s?new Map(e):(m(this,t),this[a]=[],function(t,e){if(null!=e){if(!Object(r.d)(e))throw new Error("value:"+String(e)+" is not iterable");for(const n of e){if(!n||2!==n.length)throw new Error("invalid arg");t.set(n[0],n[1])}}}(this,e),this)};var y;(y=g).prototype.set=function(t,e){const n=b(this,t);return n?n[1]=e:this[a].push([u(t),e]),this},y.prototype.has=function(t){return!!b(this,t)},y.prototype.delete=function(t){let e=!1;return this[a]=this[a].filter(n=>{const r=!c(n[0],t);return r||(e=!0),r}),e},y.prototype.get=function(t){const e=b(this,t);return e?e[1]:void 0},y.prototype.forEach=function(t,e){for(const n of this[a]){const r=n[1],o=n[0],s=this;e?t.call(e,r,o,s):t(r,o,s)}},y.prototype.clear=function(){this[a].length=0},Object.defineProperty(y.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[a].length}}),"undefined"!=typeof Symbol&&(y.prototype[Symbol.iterator]=v.entries,y.prototype[Symbol.toStringTag]="Map"),Object(d.a)(y.prototype,v),g[Symbol.species]=g;e.a=g},181:function(t,e,n){"use strict";n(30),n(177);var r,o,s=n(12),a=n.n(s),i=n(9),c=n.n(i),u=n(16),l=n.n(u),h=n(13),f=n.n(h),p=n(3),v=n.n(p),d=n(17),b=n.n(d),m=n(6),g=n.n(m),y=n(0),S=n(175),k=n(26),O=(n(79),n(15)),j=n.n(O),w=(n(55),n(27)),I=n.n(w),x=(n(56),n(33),n(43),n(83),function(){function t(){a()(this,t)}return c()(t,[{key:"__defaultOnMessage",value:function(t){if(!["ping","pong"].includes(t.data)){var e=JSON.parse(t.data);this._socketID=e.socket_id}}},{key:"startConn",value:function(t){var e=this;return this.socket&&this.socket.readyState===WebSocket.OPEN?this.socket:new Promise((function(n,r){e.socket=new WebSocket(Object(k.h)(t)),e.socket.onopen=function(){e.socket.onmessage=e.__defaultOnMessage,n(e.socket)},e.socket.onerror=function(t){return r(t)}}))}},{key:"close",value:function(){try{this.socket.close()}catch(t){console.warn(t)}}},{key:"send",value:function(t){return this.socket.send(JSON.stringify(t))}},{key:"sendString",value:function(t){return this.socket.send(t)}},{key:"onmessage",set:function(t){var e=this;t!==this._onmessage&&(this._onmessage=t,this.socket.onmessage=function(t){var n=JSON.parse(t.data||"{}");return"ping"===n.type||"pong"===n.type?void 0:e._onmessage(n)})}},{key:"readyState",get:function(){return this.socket.readyState}},{key:"isUsable",get:function(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}},{key:"isConnected",get:function(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}}]),t}()),R=function(){return(r||{}).isUsable?r:r=new x},W=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=l()(this,(t=f()(e)).call.apply(t,[this].concat(o))),g()(v()(n),"state",{resp:[],prevVal:""}),g()(v()(n),"onMessage",(function(t){t.data?n.setState({resp:t.data.map((function(t){return{movie:t.movie,href:Object(k.e)(t.id,t.movie)}}))}):n.setState({resp:[]})})),g()(v()(n),"componentWillUpdate",n.fetchResponses),g()(v()(n),"componentWillMount",n.fetchResponses),n}var n;return b()(e,t),c()(e,[{key:"fetchResponses",value:(n=I()(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.val,n=this.state.prevVal,e!=n&&e){t.next=5;break}return this.state.resp.length&&!e&&this.setState({resp:[],prevVal:""}),t.abrupt("return");case 5:return console.log("fetching"),this.setState({prevVal:e}),o=R(),t.next=10,o.startConn("suggestqueries");case 10:o.onmessage=this.onMessage,o.sendString(e);case 12:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var t=["response-parent"];return this.state.resp.length&&t.push("has-data"),Object(y.h)("div",{class:t},this.state.resp.map((function(t){return Object(y.h)(y.a,{class:["movie-link","query-response"],href:t.href},Object(k.c)(t.movie))})))}}]),e}(y.i);n.d(e,"a",(function(){return D}));var D=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=l()(this,(t=f()(e)).call.apply(t,[this].concat(o))),g()(v()(n),"state",{value:""}),g()(v()(n),"onInput",(function(t){var e=(t.target.value||"").trim();document.title=e?"Search for ".concat(e):k.d,n.setState({value:e})})),g()(v()(n),"loadSearchResults",(function(){var t=(n.state.value||"").trim();t&&Object(k.g)(t),n.setState({value:""})})),n}return b()(e,t),c()(e,[{key:"componentWillMount",value:function(){R().startConn("suggestqueries")}},{key:"render",value:function(){return Object(y.h)(y.d,null,Object(y.h)(S.a,{id:"landing-search-component",onSubmit:this.loadSearchResults,wssResponse:Object(y.h)(W,{val:this.state.value}),onInput:this.onInput}))}}]),e}(y.i)},184:function(t,e,n){"use strict";var r=n(7),o=n(21),s=n(126),a=n(23),i=n(127),c="".startsWith,u=Math.min;r({target:"String",proto:!0,forced:!i("startsWith")},{startsWith:function(t){var e=String(a(this));s(t);var n=o(u(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return c?c.call(e,r,n):e.slice(n,n+r.length)===r}})},191:function(t,e,n){"use strict";n.r(e);n(30),n(34),n(33),n(57),n(82);var r=n(81),o=n.n(r),s=n(12),a=n.n(s),i=n(9),c=n.n(i),u=n(16),l=n.n(u),h=n(13),f=n.n(h),p=n(3),v=n.n(p),d=n(17),b=n.n(d),m=n(6),g=n.n(m),y=n(0),S=n(181),k=n(118),O=(n(79),n(125),n(184),n(15)),j=n.n(O),w=(n(55),n(27)),I=n.n(w),x=n(80),R=n(180),W="data:text/html;base64,PGh0bWw+PGJvZHkgc3R5bGU9Im1hcmdpbjphdXRvO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6Ym9sZCI+TG9hZGluZy4uLjwvYm9keT48L2h0bWw+",D=new R.a;console.log("video player cache:",D);var M=function(t){if(!t||"none"===t.toLowerCase())return null;var e;try{(e=new URL(t,"".concat(location.protocol,"//").concat(location.hostname))).protocol="https:",e=e.toString()}catch(n){e=t,t.startsWith("//")&&(e="https:".concat(e))}return e},N=function(){var t=I()(j.a.mark((function t(e){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("/api/movie/",!0,{id:e},{"content-type":"application/json"});case 2:return n=t.sent,t.next=5,n.json();case 5:if(!(r=t.sent).error&&r.movie_name){t.next=8;break}throw new Error;case 8:return t.abrupt("return",{movie:r.movie_name,urls:[r.url,r.alt1,r.alt2].map(M)});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=Object(y.h)("div",null,"No movie exists with the given ID"),C=function(){var t=I()(j.a.mark((function t(e){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=D.get(e))){t.next=7;break}return console.log("refreshing cache in background"),N(e).then((function(t){return D.set(e,t)})),t.abrupt("return",n);case 7:return t.next=9,N(e);case 9:return r=t.sent,D.set(e,r),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function L(t){return new URL(t).hostname}var _=n(26),A=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=l()(this,(t=f()(e)).call.apply(t,[this].concat(o))),g()(v()(n),"state",{src:W}),g()(v()(n),"componentDidUpdate",n.componentDidMount),g()(v()(n),"setSrc",(function(t){return n.setState({src:t})})),n}return b()(e,t),c()(e,[{key:"componentDidMount",value:function(){this.state.src===W&&this.props.URLs.length&&this.setState({src:this.props.URLs[0]})}},{key:"render",value:function(t){var e=this,n=t.URLs,r=t.movieName,o=t.id;return Object(y.h)(y.d,null,Object(y.h)("h2",{style:{fontWeight:"bold"}},Object(_.c)(r)),Object(y.h)(E,{id:o}),n.map((function(t){return Object(y.h)(F,{url:t,onClick:e.setSrc})})),Object(y.h)("iframe",{class:"frame-src",src:this.state.src}),n.map((function(t){return Object(y.h)(Z,{href:t})})))}}]),e}(y.i),E=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=l()(this,(t=f()(e)).call.apply(t,[this].concat(o))),g()(v()(n),"state",{hasSubtitles:null}),g()(v()(n),"css",{color:"var(--text-component)",display:"block",margin:"auto",marginBottom:"10px",width:"25%",textDecoration:"none",borderRadius:"10px"}),g()(v()(n),"componentWillUpdate",n.componentWillMount),n}return b()(e,t),c()(e,[{key:"componentWillMount",value:function(){var t=this;"boolean"!=typeof this.state.hasSubtitles&&(this.setState({hasSubtitles:!1}),x.a.get("/api/movie/has-subtitles?"+Object(_.k)({s:this.props.id})).then((function(t){return t.json()})).then((function(e){return t.setState({hasSubtitles:e.data})})))}},{key:"render",value:function(t,e){var n=t.id;return e.hasSubtitles?Object(y.h)("a",{class:"search-button",target:"_blank",style:this.css,href:"https://movies-get.herokuapp.com/api/get-subtitles/?".concat(Object(_.k)({s:n}))},"Download Subtitles"):Object(y.h)("a",{style:{display:"none"}})}}]),e}(y.i);function F(t){var e=t.url,n=t.onClick;return e?Object(y.h)("button",{onClick:function(){return n(e)},class:"url-selector-button",style:{cursor:"pointer"}},L(e)):null}function Z(t){var e=t.href;if(!e)return null;var n="/out?".concat(Object(_.k)({u:e}));return Object(y.h)(y.a,{href:n,class:["download-url-component","search-button"]},"Download from: ",L(e))}var G=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=l()(this,(t=f()(e)).call.apply(t,[this].concat(o))),g()(v()(n),"state",{badId:!1,URLArr:[],fetchingDetails:!1,movieName:""}),g()(v()(n),"componentDidUpdate",n.componentDidMount),n}return b()(e,t),c()(e,[{key:"render",value:function(t,e){var n=t.id,r=e.URLArr,o=e.badId,s=e.fetchingDetails,a=e.movieName;return o||!r||!r.length&&!s?U:s?Object(y.h)("div",{"data-fetch":JSON.stringify(this.props)},"Loading Movie Data",Object(y.h)("div",null,Object(y.h)(k.a))):Object(y.h)(A,{URLs:r,movieName:a,id:n})}},{key:"componentDidMount",value:function(t){var e=this,n=this.props.id;if(n||this.setState({badId:!0}),!(this.state.fetchingDetails||t&&t.id===this.props.id))return this.setState({URLArr:[],badId:!1,fetchingDetails:!0}),C(n).then((function(t){return e.setState({URLArr:t.urls,badId:!1,fetchingDetails:!1,movieName:t.movie})})).catch((function(t){return console.log(t)||e.setState({badId:!0,URLArr:[],fetchingDetails:!1})}))}}]),e}(y.i);n.d(e,"default",(function(){return P}));var P=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=l()(this,(t=f()(e)).call.apply(t,[this].concat(o))),g()(v()(n),"state",{badId:!1}),n}return b()(e,t),c()(e,[{key:"getChildren",value:function(t,e){return o()(t),e.badId?U:Object(y.h)(G,{id:this.movieId})}},{key:"render",value:function(t,e){return Object(y.h)(y.d,null,Object(y.h)(S.a),Object(y.h)("section",{data:"player-component"},this.getChildren(t,e)))}},{key:"movieId",get:function(){return new URLSearchParams(y.e.getQs).get("id")}}]),e}(y.i)}}]);