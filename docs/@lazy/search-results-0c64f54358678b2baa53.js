(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},175:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(30);var r=n(11),o=n.n(r),s=n(15),i=n.n(s),u=n(16),a=n.n(u),c=n(12),h=n.n(c),l=n(5),f=n.n(l),p=n(17),v=n.n(p),d=n(6),b=n.n(d),m=n(0),y=function(t){function e(){var t,n;o()(this,e);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return n=a()(this,(t=h()(e)).call.apply(t,[this].concat(s))),b()(f()(n),"state",{isFocused:!1,value:""}),b()(f()(n),"onFocus",(function(){return!n.state.value&&n.setState({isFocused:!0,moveDown:!1})})),b()(f()(n),"onBlur",(function(){return!n.state.value&&n.setState({isFocused:!1,moveDown:!0})})),b()(f()(n),"onInput",(function(t){return n.setState({value:t.target.value})})),b()(f()(n),"onSubmit",(function(){return n.props.onSubmit(n.state.value)})),n}return v()(e,t),i()(e,[{key:"render",value:function(t,e){var n=this,r=t.id,o=t.buttonText,s=void 0===o?"Search":o,i=t.labelText,u=void 0===i?"Search For Movies":i,a=t.onInput,c=t.wssResponse,h=["_animate",e.isFocused?"moveup":"",e.moveDown?"movedown":""];return Object(m.h)("div",{class:"search-component"},Object(m.h)("form",{action:"javascript:",onSubmit:this.onSubmit},Object(m.h)("label",{class:h,for:r},u),Object(m.h)(g,{onFocus:this.onFocus,onBlur:this.onBlur,id:r,onInput:function(t){n.onInput(t),null!=a&&a(t)}}),c,Object(m.h)("button",{class:"search-button"},s)))}}]),e}(m.i);function g(t){var e=t.onFocus,n=t.onBlur,r=t.onInput,o=t.id;return Object(m.h)("input",{onFocus:e,onBlur:n,onInput:r,id:o,class:"paper-input"})}},176:function(t,e,n){"use strict";n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return w}));n(30),n(78);var r=n(80),o=n.n(r),s=n(11),i=n.n(s),u=n(15),a=n.n(u),c=n(16),h=n.n(c),l=n(12),f=n.n(l),p=n(5),v=n.n(p),d=n(17),b=n.n(d),m=n(6),y=n.n(m),g=n(0),k=n(79),O=n(26);function S(){return Object(g.h)(g.d,null,Object(g.h)("div",{style:{display:"block",marginTop:"50px"}},"Check some of these movies out!"),Object(g.h)(j))}var j=function(t){function e(){var t,n;i()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=h()(this,(t=f()(e)).call.apply(t,[this].concat(o))),y()(v()(n),"state",{resp:[]}),n}return b()(e,t),a()(e,[{key:"componentWillMount",value:function(){var t=this;k.a.get("/i/rec/").then((function(t){return t.json()})).then((function(e){t.setState({resp:e.recommendations})}))}},{key:"render",value:function(t,e){var n=e.resp,r=void 0===n?[]:n;return Object(g.h)("div",{class:"rec-box"},r.map((function(t){return Object(g.h)(w,{data:t})})))}}]),e}(g.i),w=function(t){function e(){return i()(this,e),h()(this,f()(e).apply(this,arguments))}return b()(e,t),a()(e,[{key:"render",value:function(t){var e=t.data,n=void 0===e?{}:e,r=t.customOnClick,o=Object(g.h)(g.d,null,Object(g.h)(x,{thumb:n.thumb?Object(O.f)(n.thumb).then(O.i):null}),Object(g.h)("span",{class:"rec-title"},Object(O.c)(n.movie)));return r?Object(g.h)("div",{class:"rec-wrapper",onClick:function(){return r(n.id)}},o):Object(g.h)(g.a,{class:"rec-wrapper",href:n.id?Object(O.e)(n.id,n.movie):null},o)}}]),e}(g.i),x=function(t){function e(){var t,n;i()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=h()(this,(t=f()(e)).call.apply(t,[this].concat(o))),y()(v()(n),"state",{thumb:""}),y()(v()(n),"componentDidUpdate",n.componentDidMount),n}return b()(e,t),a()(e,[{key:"componentDidMount",value:function(t){var e=this;if(null==this.props.thumb)return this.setState((function(t){return null!=t&&t.thumb?{thumb:""}:null}));this.props.thumb&&this.props.thumb.then&&(!this.state.thumb||t&&t.thumb!==this.props.thumb)&&this.props.thumb.then((function(t){return t&&e.setState({thumb:t})}))}},{key:"render",value:function(t,e){o()(t);var n=e.thumb,r=void 0===n?"":n;return Object(g.h)("div",{style:{backgroundImage:r?"url(".concat(r,")"):"none"},class:"rec-image"})}}]),e}(g.i)},177:function(t,e,n){"use strict";var r=n(7),o=n(178).trim;r({target:"String",proto:!0,forced:n(179)("trim")},{trim:function(){return o(this)}})},178:function(t,e,n){var r=n(23),o="["+n(174)+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},179:function(t,e,n){var r=n(3),o=n(174);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},180:function(t,e,n){"use strict";var r=n(10);let o=Object(r.e)();const s=Object(r.b)("Map",o),i=(Object(r.b)("Set",o),Object(r.b)("WeakMap",o)&&Object(r.b)("WeakSet",o),"__@@map"),u=t=>t!=t,a=(t,e)=>t===e||u(t)&&u(e),c=t=>0===t?0:t;let h,l,f;if("undefined"!=typeof Symbol){function p(t,e){const n=t[i];let r=0;const o=n.length,s=e?0:1;return{[Symbol.iterator]:function(){return this},next:function(){return r<o?{value:n[r++][s],done:!1}:{value:void 0,done:!0}}}}h=function(){return this[i][Symbol.iterator]()},l=function(){return p(this,!1)},f=function(){return p(this,!0)}}else h=f=l=function(){console.warn("no symbol support")};var v={keys:f,values:l,entries:h},d=n(83);function b(t,e){for(const n of t[i])if(a(n[0],e))return n;return null}function m(t,e){if(n=t,!(null!=(r=e)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r))throw new TypeError("Cannot call a class as a function");var n,r}const y=function t(e,n){return!n&&s?new Map(e):(m(this,t),this[i]=[],function(t,e){if(null!=e){if(!Object(r.d)(e))throw new Error("value:"+String(e)+" is not iterable");for(const n of e){if(!n||2!==n.length)throw new Error("invalid arg");t.set(n[0],n[1])}}}(this,e),this)};var g;(g=y).prototype.set=function(t,e){const n=b(this,t);return n?n[1]=e:this[i].push([c(t),e]),this},g.prototype.has=function(t){return!!b(this,t)},g.prototype.delete=function(t){let e=!1;return this[i]=this[i].filter(n=>{const r=!a(n[0],t);return r||(e=!0),r}),e},g.prototype.get=function(t){const e=b(this,t);return e?e[1]:void 0},g.prototype.forEach=function(t,e){for(const n of this[i]){const r=n[1],o=n[0],s=this;e?t.call(e,r,o,s):t(r,o,s)}},g.prototype.clear=function(){this[i].length=0},Object.defineProperty(g.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[i].length}}),"undefined"!=typeof Symbol&&(g.prototype[Symbol.iterator]=v.entries,g.prototype[Symbol.toStringTag]="Map"),Object(d.a)(g.prototype,v),y[Symbol.species]=y;e.a=y},181:function(t,e,n){"use strict";n(30),n(177);var r,o,s=n(11),i=n.n(s),u=n(15),a=n.n(u),c=n(16),h=n.n(c),l=n(12),f=n.n(l),p=n(5),v=n.n(p),d=n(17),b=n.n(d),m=n(6),y=n.n(m),g=n(0),k=n(175),O=n(26),S=(n(78),n(14)),j=n.n(S),w=(n(55),n(27)),x=n.n(w),q=(n(81),n(33),n(43),n(121),function(){function t(){i()(this,t)}return a()(t,[{key:"__defaultOnMessage",value:function(t){if(!["ping","pong"].includes(t.data)){var e=JSON.parse(t.data);this._socketID=e.socket_id}}},{key:"startConn",value:function(t){var e=this;return this.socket&&this.socket.readyState===WebSocket.OPEN?this.socket:new Promise((function(n,r){e.socket=new WebSocket(Object(O.h)(t)),e.socket.onopen=function(){e.socket.onmessage=e.__defaultOnMessage,n(e.socket)},e.socket.onerror=function(t){return r(t)}}))}},{key:"close",value:function(){try{this.socket.close()}catch(t){console.warn(t)}}},{key:"send",value:function(t){return this.socket.send(JSON.stringify(t))}},{key:"sendString",value:function(t){return this.socket.send(t)}},{key:"onmessage",set:function(t){var e=this;t!==this._onmessage&&(this._onmessage=t,this.socket.onmessage=function(t){var n=JSON.parse(t.data||"{}");return"ping"===n.type||"pong"===n.type?void 0:e._onmessage(n)})}},{key:"readyState",get:function(){return this.socket.readyState}},{key:"isUsable",get:function(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}},{key:"isConnected",get:function(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}}]),t}()),E=function(){return(r||{}).isUsable?r:r=new q},M=function(t){function e(){var t,n;i()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=h()(this,(t=f()(e)).call.apply(t,[this].concat(o))),y()(v()(n),"state",{resp:[],prevVal:""}),y()(v()(n),"onMessage",(function(t){t.data?n.setState({resp:t.data.map((function(t){return{movie:t.movie,href:Object(O.e)(t.id,t.movie)}}))}):n.setState({resp:[]})})),y()(v()(n),"componentWillUpdate",n.fetchResponses),y()(v()(n),"componentWillMount",n.fetchResponses),n}var n;return b()(e,t),a()(e,[{key:"fetchResponses",value:(n=x()(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.val,n=this.state.prevVal,e!=n&&e){t.next=5;break}return this.state.resp.length&&!e&&this.setState({resp:[],prevVal:""}),t.abrupt("return");case 5:return console.log("fetching"),this.setState({prevVal:e}),o=E(),t.next=10,o.startConn("suggestqueries");case 10:o.onmessage=this.onMessage,o.sendString(e);case 12:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var t=["response-parent"];return this.state.resp.length&&t.push("has-data"),Object(g.h)("div",{class:t},this.state.resp.map((function(t){return Object(g.h)(g.a,{class:["movie-link","query-response"],href:t.href},Object(O.c)(t.movie))})))}}]),e}(g.i);n.d(e,"a",(function(){return F}));var F=function(t){function e(){var t,n;i()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=h()(this,(t=f()(e)).call.apply(t,[this].concat(o))),y()(v()(n),"state",{value:""}),y()(v()(n),"onInput",(function(t){var e=(t.target.value||"").trim();document.title=e?"Search for ".concat(e):O.d,n.setState({value:e})})),y()(v()(n),"loadSearchResults",(function(){var t=(n.state.value||"").trim();t&&Object(O.g)(t),n.setState({value:""})})),n}return b()(e,t),a()(e,[{key:"componentWillMount",value:function(){E().startConn("suggestqueries")}},{key:"render",value:function(){return Object(g.h)(g.d,null,Object(g.h)(k.a,{id:"landing-search-component",onSubmit:this.loadSearchResults,wssResponse:Object(g.h)(M,{val:this.state.value}),onInput:this.onInput}))}}]),e}(g.i)},182:function(t,e,n){var r=n(7),o=n(123);r({target:"Array",stat:!0,forced:!n(122)((function(t){Array.from(t)}))},{from:o})},183:function(t,e,n){"use strict";n.d(e,"b",(function(){return M})),n.d(e,"a",(function(){return F}));n(30),n(182),n(78);var r=n(11),o=n.n(r),s=n(15),i=n.n(s),u=n(16),a=n.n(u),c=n(12),h=n.n(c),l=n(5),f=n.n(l),p=n(17),v=n.n(p),d=n(6),b=n.n(d),m=n(14),y=n.n(m),g=(n(55),n(27)),k=n.n(g),O=n(0),S=n(79),j=n(26),w=n(176),x=new(n(180).a),q=function(){var t=k()(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.post("/api/data/search/",!0,Object(j.k)({q:e}));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();console.log("Search-results cache:",x);var E=function(){var t=k()(y.a.mark((function t(e){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(e||"").toLowerCase(),t.prev=1,!(n=x.get(e))){t.next=7;break}return console.log("refreshing cache in background"),q(e).then((function(t){return x.set(e,t)})),t.abrupt("return",n);case 7:return t.next=9,q(e);case 9:return r=t.sent,x.set(e,r),t.abrupt("return",r);case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",{hasError:!0});case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}(),M={data:{thumb:""}},F=function(t){function e(){var t,n;o()(this,e);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return n=a()(this,(t=h()(e)).call.apply(t,[this].concat(s))),b()(f()(n),"state",{resp:[],fetchingPromise:null,isFetching:!1,showGhost:!0}),b()(f()(n),"showResults",(function(t){return t.hasError?n.setState({hasError:!0,resp:[],fetchingPromise:null,isFetching:!1,showGhost:!1}):n.setState({resp:{data:t.movies,q:n.props.q},showGhost:!1,isFetching:!1,fetchingPromise:null})})),n}return v()(e,t),i()(e,[{key:"componentDidMount",value:function(){this.setState({isFetching:!0,fetchingPromise:E(this.props.q).then(this.showResults),showGhost:!0})}},{key:"componentDidUpdate",value:function(t){(!this.state.isFetching&&this.props.q!==this.state.resp.q||(t||{}).q!==this.props.q)&&this.setState({isFetching:!0,hasError:!1,fetchingPromise:E(this.props.q).then(this.showResults),showGhost:!0})}},{key:"render",value:function(t,e){var n=t.q,r=t.customOnClick,o=e.showGhost,s=e.resp;return e.hasError?Object(O.h)("div",null,"An Error occured"):o?Object(O.h)("div",{class:"rec-box"},Array.from({length:5},(function(){return Object(O.h)(w.b,M)}))):s.data&&s.data.length?Object(O.h)("div",{class:"rec-box"},s.data.map((function(t){return Object(O.h)(w.b,{data:t,customOnClick:r})}))):Object(O.h)("div",null,'No Results found for:"',n,'"')}}]),e}(O.i)},187:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));n(34),n(33),n(56),n(82);var r=n(11),o=n.n(r),s=n(16),i=n.n(s),u=n(12),a=n.n(u),c=n(5),h=n.n(c),l=n(15),f=n.n(l),p=n(17),v=n.n(p),d=n(6),b=n.n(d),m=n(0),y=n(181),g=n(183),k=function(t){function e(t){var n;return o()(this,e),n=i()(this,a()(e).call(this,t)),b()(h()(n),"componentWillUpdate",n.componentDidMount),n}return v()(e,t),f()(e,[{key:"componentDidMount",value:function(){document.title="Search for ".concat(this.query)}},{key:"query",get:function(){return new URLSearchParams(m.e.getQs).get("q")}}]),f()(e,[{key:"render",value:function(){return Object(m.h)(m.d,null,Object(m.h)(y.a),Object(m.h)("section",{data:"search-results"},Object(m.h)(g.a,{q:this.query})))}}]),e}(m.i)}}]);