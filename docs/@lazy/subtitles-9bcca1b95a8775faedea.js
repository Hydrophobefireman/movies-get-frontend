(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{214:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n(8),o=n.n(s),r=n(43),i=n(3);class c extends r.a{constructor(){super(...arguments),o()(this,"state",{isFocused:!1,value:""}),o()(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),o()(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),o()(this,"onInput",t=>this.setState({value:t.target.value})),o()(this,"onSubmit",()=>this.props.onSubmit(this.state.value))}render(t,e){let{id:n,buttonText:s="Search",labelText:o="Search For Movies",onInput:r,wssResponse:c}=t,{isFocused:u,moveDown:h}=e;const l=["_animate",u?"moveup":"",h?"movedown":""];return Object(i.b)("div",{class:"search-component"},Object(i.b)("form",{action:"javascript:",onSubmit:this.onSubmit},Object(i.b)("label",{class:l,for:n},o),Object(i.b)(a,{onFocus:this.onFocus,onBlur:this.onBlur,id:n,onInput:t=>{this.onInput(t),null!=r&&r(t)}}),c,Object(i.b)("button",{class:"search-button"},s)))}}function a(t){let{onFocus:e,onBlur:n,onInput:s,id:o}=t;return Object(i.b)("input",{onFocus:e,onBlur:n,onInput:s,id:o,class:"paper-input"})}},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return b}));var s=n(8),o=n.n(s),r=n(3),i=n(43),c=n(208),a=n(96),u=n(23);function h(){return Object(r.b)(r.a,null,Object(r.b)("div",{style:{display:"block",marginTop:"50px"}},"Check some of these movies out!"),Object(r.b)(l))}class l extends i.a{constructor(){super(...arguments),o()(this,"state",{resp:[]})}componentWillMount(){a.a.get("/i/rec/").then(t=>t.json()).then(t=>{this.setState({resp:t.recommendations})})}render(t,e){let{resp:n=[]}=e;return Object(r.b)("div",{class:"rec-box"},n.map(t=>Object(r.b)(b,{data:t})))}}class b extends i.a{render(t){let{data:e={},customOnClick:n}=t;const s=Object(r.b)(r.a,null,Object(r.b)(p,{thumb:e.thumb?Object(u.f)(e.thumb).then(u.i):null}),Object(r.b)("span",{class:"rec-title"},Object(u.c)(e.movie)));return n?Object(r.b)("div",{class:"rec-wrapper",onClick:()=>n(e.id)},s):function(t,e){return t.id?Object(r.b)(c.a,{class:"rec-wrapper",href:Object(u.e)(t.id,t.movie)},e):Object(r.b)("span",{class:"rec-wrapper"},e)}(e,s)}}class p extends i.a{constructor(){super(...arguments),o()(this,"state",{thumb:""}),o()(this,"componentDidUpdate",this.componentDidMount)}componentDidMount(t){if(null==this.props.thumb)return this.setState(t=>null!=t&&t.thumb?{thumb:""}:null);this.props.thumb&&this.props.thumb.then&&(!this.state.thumb||t&&t.thumb!==this.props.thumb)&&this.props.thumb.then(t=>t&&this.setState({thumb:t}))}render(t,e){let{}=t,{thumb:n=""}=e;return Object(r.b)("div",{style:{backgroundImage:n?"url(".concat(n,")"):"none"},class:"rec-image"})}}},217:function(t,e,n){"use strict";var s=n(10);let o=Object(s.e)();const r=Object(s.b)("Map",o),i=(Object(s.b)("Set",o),Object(s.b)("WeakMap",o)&&Object(s.b)("WeakSet",o),"__@@map"),c=t=>t!=t,a=(t,e)=>t===e||c(t)&&c(e),u=t=>0===t?0:t;let h,l,b;if("undefined"!=typeof Symbol){function p(t,e){const n=t[i];let s=0;const o=n.length,r=e?0:1;return{[Symbol.iterator]:function(){return this},next:function(){return s<o?{value:n[s++][r],done:!1}:{value:void 0,done:!0}}}}h=function(){return this[i][Symbol.iterator]()},l=function(){return p(this,!1)},b=function(){return p(this,!0)}}else h=b=l=function(){console.warn("no symbol support")};var d={keys:b,values:l,entries:h},m=n(100);function f(t,e){const n=t[i],s=n.length;for(let t=0;t<s;t++){const s=n[t];if(a(s[0],e))return s}return null}function w(t,e){if(n=t,!(null!=(s=e)&&"undefined"!=typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](n):n instanceof s))throw new TypeError("Cannot call a class as a function");var n,s}const j=function t(e,n){return w(this,t),!n&&r?new Map(e):(this[i]=[],function(t,e){if(null==e)return;if(!Object(s.d)(e))throw new Error("value:"+String(e)+" is not iterable");const n=e.length;for(let s=0;s<n;s++){const n=e[s];if(!n||2!==n.length)throw new Error("invalid arg");t.set(n[0],n[1])}}(this,e),this)};var v;(v=j).prototype.set=function(t,e){const n=f(this,t);return n?n[1]=e:this[i].push([u(t),e]),this},v.prototype.has=function(t){return!!f(this,t)},v.prototype.delete=function(t){let e=!1;return this[i]=this[i].filter(n=>{const s=!a(n[0],t);return s||(e=!0),s}),e},v.prototype.get=function(t){const e=f(this,t);return e?e[1]:void 0},v.prototype.forEach=function(t,e){const n=this[i],s=n.length;for(let o=0;o<s;o++){const s=n[o],r=s[1],i=s[0],c=this;e?t.call(e,r,i,c):t(r,i,c)}},v.prototype.clear=function(){this[i].length=0},Object.defineProperty(v.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[i].length}}),"undefined"!=typeof Symbol&&(v.prototype[Symbol.iterator]=d.entries,v.prototype[Symbol.toStringTag]="Map"),Object(m.a)(v.prototype,d),j[Symbol.species]=j;e.a=j},223:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return d}));var s=n(8),o=n.n(s),r=n(43),i=n(3),c=n(96),a=n(23),u=n(216);const h=new(n(217).a),l=async t=>{const e=await c.a.post("/api/data/search/",!0,Object(a.k)({q:t}));return await e.json()};console.log("Search-results cache:",h);const b=async t=>{t=(t||"").toLowerCase();try{const e=h.get(t);if(e)return console.log("refreshing cache in background"),l(t).then(e=>h.set(t,e)),e;const n=await l(t);return h.set(t,n),n}catch(t){return{hasError:!0}}},p={data:{thumb:""}};class d extends r.a{constructor(){super(...arguments),o()(this,"state",{resp:[],fetchingPromise:null,isFetching:!1,showGhost:!0}),o()(this,"showResults",t=>t.hasError?this.setState({hasError:!0,resp:[],fetchingPromise:null,isFetching:!1,showGhost:!1}):this.setState({resp:{data:t.movies,q:this.props.q},showGhost:!1,isFetching:!1,fetchingPromise:null}))}componentDidMount(){this.setState({didMount:!0,isFetching:!0,fetchingPromise:b(this.props.q).then(this.showResults),showGhost:!0})}componentDidUpdate(t){(!this.state.isFetching&&this.props.q!==this.state.resp.q||(t||{}).q!==this.props.q)&&this.setState({isFetching:!0,hasError:!1,fetchingPromise:b(this.props.q).then(this.showResults),showGhost:!0})}render(t,e){let{q:n,customOnClick:s}=t,{showGhost:o,resp:r,hasError:c}=e;return c?Object(i.b)("div",null,"An Error occured"):o?Object(i.b)("div",{class:"rec-box"},Array.from({length:5},()=>Object(i.b)(u.b,p))):r.data&&r.data.length?Object(i.b)("div",{class:"rec-box"},r.data.map(t=>Object(i.b)(u.b,{data:t,customOnClick:s}))):Object(i.b)("div",null,'No Results found for:"',n,'"')}}},249:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var s=n(8),o=n.n(s),r=(n(156),n(43)),i=n(3),c=n(214),a=n(96),u=n(223);const h=new TextDecoder,l=t=>{return h.decode(t).replace(/\r\n/g,"\n")};class b extends r.a{constructor(){super(...arguments),o()(this,"handleClick",async t=>{const e=await new Promise(t=>{const e=document.createElement("input");e.type="file",e.onchange=e=>{let{target:{files:n}}=e;return t(new Response(n[0]).arrayBuffer())},e.click()}),n=l(e),s=await a.a.post("/_/api/experiments/subtitle-remote-upload",!0,{mid:t,subs:n},{"content-type":"application/json"}),o=await s.text();return alert("Response:".concat(o))}),o()(this,"handleSubmit",async t=>{this.setState({showResults:!0,v:t})})}render(t,e){let{}=t,{showResults:n,v:s}=e;return Object(i.b)(i.a,null,Object(i.b)(c.a,{id:"add-subtitles",onSubmit:this.handleSubmit}),n?Object(i.b)(u.a,{q:s,customOnClick:this.handleClick}):null)}}}}]);