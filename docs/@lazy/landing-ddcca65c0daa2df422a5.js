(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{218:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s(8),o=s.n(n),a=s(41),c=s(3);class i extends a.a{constructor(){super(...arguments),o()(this,"state",{isFocused:!1,value:""}),o()(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),o()(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),o()(this,"onInput",t=>this.setState({value:t.target.value})),o()(this,"onSubmit",()=>this.props.onSubmit(this.state.value))}render(t,e){let{id:s,buttonText:n="Search",labelText:o="Search For Movies",onInput:a,wssResponse:i}=t,{isFocused:u,moveDown:h}=e;const l=["_animate",u?"moveup":"",h?"movedown":""];return Object(c.b)("div",{class:"search-component"},Object(c.b)("form",{action:"javascript:",onSubmit:this.onSubmit},Object(c.b)("label",{class:l,for:s},o),Object(c.b)(r,{onFocus:this.onFocus,onBlur:this.onBlur,id:s,onInput:t=>{this.onInput(t),null!=a&&a(t)}}),i,Object(c.b)("button",{class:"search-button"},n)))}}function r(t){let{onFocus:e,onBlur:s,onInput:n,id:o}=t;return Object(c.b)("input",{onFocus:e,onBlur:s,onInput:n,id:o,class:"paper-input"})}},220:function(t,e,s){"use strict";s.d(e,"a",(function(){return h})),s.d(e,"b",(function(){return b}));var n=s(8),o=s.n(n),a=s(3),c=s(41),i=s(212),r=s(96),u=s(43);function h(){return Object(a.b)(a.a,null,Object(a.b)("div",{style:{display:"block",marginTop:"50px"}},"Check some of these movies out!"),Object(a.b)(l))}class l extends c.a{constructor(){super(...arguments),o()(this,"state",{resp:[]})}componentWillMount(){r.a.get("/i/rec/").then(t=>t.json()).then(t=>{this.setState({resp:t.recommendations})})}render(t,e){let{resp:s=[]}=e;return Object(a.b)("div",{class:"rec-box"},s.map(t=>Object(a.b)(b,{data:t})))}}class b extends c.a{render(t){let{data:e={},customOnClick:s}=t;const n=Object(a.b)(a.a,null,Object(a.b)(p,{thumb:e.thumb?Object(u.f)(e.thumb).then(u.i):null}),Object(a.b)("span",{class:"rec-title"},Object(u.c)(e.movie)));return s?Object(a.b)("div",{class:"rec-wrapper",onClick:()=>s(e.id)},n):function(t,e){return t.id?Object(a.b)(i.a,{class:"rec-wrapper",href:Object(u.e)(t.id,t.movie)},e):Object(a.b)("span",{class:"rec-wrapper"},e)}(e,n)}}class p extends c.a{constructor(){super(...arguments),o()(this,"state",{thumb:""}),o()(this,"componentDidUpdate",this.componentDidMount)}componentDidMount(t){if(null==this.props.thumb)return this.setState(t=>null!=t&&t.thumb?{thumb:""}:null);this.props.thumb&&this.props.thumb.then&&(!this.state.thumb||t&&t.thumb!==this.props.thumb)&&this.props.thumb.then(t=>t&&this.setState({thumb:t}))}render(t,e){let{}=t,{thumb:s=""}=e;return Object(a.b)("div",{style:{backgroundImage:s?"url(".concat(s,")"):"none"},class:"rec-image"})}}},229:function(t,e,s){"use strict";var n=s(8),o=s.n(n),a=s(41),c=s(3),i=s(218),r=s(43),u=s(212);class h{__defaultOnMessage(t){if(["ping","pong"].includes(t.data))return;const e=JSON.parse(t.data);this._socketID=e.socket_id}startConn(t){return this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)?this.socket:new Promise((e,s)=>{this.socket=new WebSocket(Object(r.h)(t)),this.socket.onopen=()=>{this.socket.onmessage=this.__defaultOnMessage,e(this.socket)},this.socket.onerror=t=>s(t)})}close(){try{this.socket.close()}catch(t){console.warn(t)}}send(t){return this.socket.send(JSON.stringify(t))}sendString(t){return this.socket.send(t)}set onmessage(t){t!==this._onmessage&&(this._onmessage=t,this.socket.onmessage=t=>{const e=JSON.parse(t.data||"{}");return"ping"===e.type||"pong"===e.type?void 0:this._onmessage(e)})}get readyState(){return this.socket.readyState}get isUsable(){return!this.socket||[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}get isConnected(){return!!this.socket&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(this.socket.readyState)}}let l;const b=()=>(l||{}).isUsable?l:l=new h;let p;class d extends a.a{constructor(){super(...arguments),o()(this,"state",{resp:[],prevVal:""}),o()(this,"onMessage",t=>{t.data?this.setState({resp:t.data.map(t=>({movie:t.movie,href:Object(r.e)(t.id,t.movie)}))}):this.setState({resp:[]})}),o()(this,"componentWillUpdate",this.fetchResponses),o()(this,"componentWillMount",this.componentWillUpdate)}async fetchResponses(){const t=this.props.val;t!=this.state.prevVal&&t?(console.log("fetching"),this.setState({prevVal:t}),p=b(),await p.startConn("suggestqueries"),p.onmessage=this.onMessage,p.sendString(t)):this.state.resp.length&&!t&&this.setState({resp:[],prevVal:""})}render(){const t=["response-parent"];return this.state.resp.length&&t.push("has-data"),Object(c.b)("div",{class:t},this.state.resp.map(t=>Object(c.b)(u.a,{class:["movie-link","query-response"],href:t.href},Object(r.c)(t.movie))))}}s.d(e,"a",(function(){return m}));class m extends a.a{constructor(){super(...arguments),o()(this,"state",{value:""}),o()(this,"onInput",t=>{const e=(t.target.value||"").trim();document.title=e?"Search for ".concat(e):r.d,this.setState({value:e})}),o()(this,"loadSearchResults",()=>{const t=(this.state.value||"").trim();t&&Object(r.g)(t),this.setState({value:""})})}componentWillMount(){b().startConn("suggestqueries")}render(){return Object(c.b)(c.a,null,Object(c.b)(i.a,{id:"landing-search-component",onSubmit:this.loadSearchResults,wssResponse:Object(c.b)(d,{val:this.state.value}),onInput:this.onInput}))}}},250:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return h}));var n=s(3),o=s(212),a=s(41),c=(s(69),s(43)),i=s(229),r=s(220);function u(){return Object(n.b)("div",null,"NEW! Add a new movie to our databases by yourself",Object(n.b)(o.a,{href:"/media/add/",class:["banner-button","database-linker"]},"Here!"))}class h extends a.a{componentDidMount(){document.title=c.d}render(){return Object(n.b)("section",{data:"index"},Object(n.b)(u),Object(n.b)(i.a),Object(n.b)(r.a))}}}}]);