!function(e){function t(t){for(var o,i,c=t[0],l=t[1],a=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={14:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({0:"/@lazy/add-media",2:"@lazy/all",4:"@lazy/landing",6:"@lazy/out",8:"@lazy/player-component",10:"@lazy/search-results",12:"@lazy/subtitles"}[e]||e)+"-"+{0:"1510f9c1bde1ae72dfdf",2:"a9b181fcfe227038084c",4:"04495a88f3243ce0e10c",6:"724b2a530e26dc37a1b1",8:"f10d014347a19c94cb41",10:"65adee51016b2661c089",12:"a157356ee57fc0ad6bee"}[e]+".js"}(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(a);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,n[1](l)}r[e]=void 0}};var a=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var u=l;s.push([243,16]),n()}({1:function(e,t,n){"use strict";n.d(t,"m",(function(){return U})),n.d(t,"c",(function(){return E})),n.d(t,"h",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"j",(function(){return g})),n.d(t,"b",(function(){return R})),n.d(t,"e",(function(){return F})),n.d(t,"k",(function(){return J})),n.d(t,"l",(function(){return W})),n.d(t,"f",(function(){return H})),n.d(t,"a",(function(){return B})),n.d(t,"g",(function(){return G}));n(211),n(223);var o=n(7),r=n.n(o),s=(n(227),n(231),n(167),n(55)),i=n.n(s);n(121);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}const l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a="keys"in Object;let u;function d(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=[],s=(e,t)=>{for(const i of e)Array.isArray(i)&&t>0?s(i,t-1):o&&null==i||r.push(n?n(i):i)};return s(e,Math.floor(t)||1),r}u=a?(e,t)=>{for(const n of Object.keys(t))e[n]=t[n];return e}:(e,t)=>{for(const n in t)e[n]=t[n];return e};const p={},h=[],f={setAttribute:(e,t,n)=>t in e?e[t]=null==n?"":n:null==n?e.removeAttribute(t):e.setAttribute(t,n)},m=e=>"o"===e[0]&&"n"===e[1];function b(e,t){if(null==t)return;let n,o,r;(o=null!=(n=t._vNode))&&(r=t._vNode._nextDomNode),(t.parentNode!==e||n._reorder)&&(null!=r?e.insertBefore(t,r):n._reorder||e.appendChild(t));const s=t.previousSibling,i=t.nextSibling;if(s!=i){if(null!=s){const e=s._vNode;null!=e&&e._nextDomNode!==t&&_(e,t,"_nextDomNode")}if(null!=i){const e=i._vNode;null!=e&&e._nextDomNode!==t&&_(e,t,"_prevDomNode")}o&&(n._prevDomNode=s,n._nextDomNode=i)}}function _(e,t,n){null!=e&&(e[n]=t,_(e._prevVnode,t,n))}function g(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];if(null==e||"boolean"==typeof e)return null;t=null==t?{}:u({},t),o.length&&(o=d(o,1/0),t.children=o);const s=t.ref;s&&delete t.ref;const i=t.key;i&&delete t.key;const c={};for(const e in t)m(e)&&(c[e.substr(2).toLowerCase()]=t[e]);return y(e,t,c,i,s)}function v(){}function y(e,t,n,o,r){const s={type:e,props:t,events:n,key:o,_reorder:!1,ref:r,_children:null,_dom:null,_component:null,__uAttr:null,_nextDomNode:null,_prevDomNode:null,_prevVnode:null};return s.__uAttr=s}function j(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return y(null,String(e));if(Array.isArray(e))return g(v,null,e);if(null!=e._dom){const t=y(e.type,e.props,e.events,e.key,null);return t._dom=e._dom,t}return e}const w=function(e,t){if(e.__currentLifeCycle=t,null!=e[t])try{for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];e[t](...o)}catch(t){if(null==e.componentDidCatch)throw t;e.componentDidCatch(t)}};function O(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];e&&(e=w(e,t,...o))}function C(e){if(e===p||null==e)return;e._prevVnode&&C(e._prevVnode);const t=e._dom,n=e._component;if(O(n,"componentWillUnmount",!0),null!=n&&(n.base=n._vnode=null),t){if(null!=e){null!=e._nextDomNode&&_(e._nextDomNode._vNode,null,"_prevDomNode"),null!=e._prevDomNode&&_(e._prevDomNode._vNode,null,"_nextDomNode");for(const t of e._children||h)C(t);e._prevVnode=e._component=e._dom=e._prevDomNode=e._nextDomNode=null}if(Array.isArray(t)){let t;for(;t=e._children.pop();)x(t)}else x(t);t.onclick=t._component=t._listeners=t._prevVnode=t._vNode=null}}function x(e){const t=e.parentNode;t&&t.removeChild(e)}function S(e){let t;for(;t=e.pop();)O(t,"componentDidMount"),t._didMount=!0}function k(e,t,n,o){let r;const s=e.type;if(o)"string"==typeof e.props?r=document.createTextNode(e.props):A(r=document.createElement(s),e,p);else{if(s!==t.type)return k(e,null,null,!0);if(r=n,n instanceof Text){const t=e.props;n.nodeValue!==t&&(n.nodeValue=t)}else A(r,e,t)}return null!=e._prevVnode&&(e._prevVnode._dom=r),r}const P=e=>"key"!==e&&"children"!==e;function A(e,t,n){if(e instanceof Text)return;const o=t.props,r=e.attributes,s=t.events,i=null!=n?n.events:p;for(let t=0;t<r.length;t++){const n=r[t].name;n in o||f.setAttribute(e,n,null)}for(let t in o){if(m(t)||!P(t))continue;let n=o[t];const s=t in e?e[t]:(r[t]||p).value;if("className"===(t="class"===t?"className":t)&&Array.isArray(n)&&(n=n.join(" ")),"style"!==t)s!==n&&f.setAttribute(e,t,n);else{const t=e.style;if("string"==typeof n)t.cssText=n;else{"string"==typeof s?t.cssText="":s&&(s.cssText="");for(const e in n){const o=n[e];s&&o===s[e]||(t[e]=o)}}}}!function(e,t,n){if(e!=t){null==n._listeners&&(n._listeners={},n.onclick=v),null==t&&(t=p),null==e&&(e=p);for(const o in e){const r=e[o];t[o]!==r&&null!=r&&(n.addEventListener(o,M),n._listeners[o]=r)}for(const o in t)null==e[o]&&(delete n._listeners[o],n.removeEventListener(o,M))}}(s,i,e)}function M(e){return this._listeners[e.type](e)}function N(e,t,n,o,r,s,i){const c=e._children.length,l=t.length,a=[];for(let u=0;u<Math.max(c,l);u++){const c=e._children[u];let l,d=t[u];if(null==c){null!=d&&C(d);continue}if(null==d&&null!=(l=t[u+1])){const e=Array.isArray(l._dom)?l._dom[0]:l._dom;c._nextDomNode=e}const p=I(n,c,d,o,r,s,i);if(Array.isArray(p))for(const e of p)b(n,e),a.push(e);else b(n,p),a.push(p)}return a}const D=[];class E{constructor(e,t){this.props=e,this.context=t}render(e,t){}setState(e){const t="function"==typeof e?e=e(this._nextState,this.props):e;var n;null!=t&&(this._nextState=u({},this.state||p),this._oldState=u({},this._nextState),u(this._nextState,t),(n=this)._dirty=!0,1===D.push(n)&&(null!=window.requestAnimationFrame?window.requestAnimationFrame(L):l(L)),u(this.state,this._nextState||p))}forceUpdate(e){const t=this.parentDom,n=[];if(t){const o=this._vnode;this.base=I(t,o,o,this.context,n,this,!1!==e),this.base instanceof Node&&!this.base.parentNode&&b(t,this.base)}e&&e(),S(n)}}function L(){let e;for(D.sort((e,t)=>e._depth-t._depth);e=D.pop();)e._nextState=null,e._dirty=!1,e.forceUpdate(!1)}function T(e,t,n){return this.constructor(e,n)}function I(e,t,n,o,r,s,i){if("boolean"==typeof t&&(t=null),null!=n&&null!=t&&null==t._nextDomNode&&(t._nextDomNode=n._nextDomNode),null==n||null==t||n.type!==t.type||n.key!==t.key){if(null!=n&&n!==p&&C(n),null==t)return null;n=p}const c=n===p;if(t.__uAttr!==t)return console.warn("component not of expected type =>",t),null;t._children=d(t.props&&t.props.children||[],1/0,j);const l=t.type;if(l===v||n.type===v)return N(t,c?h:n._children||h,e,o,r,s,i);if("function"==typeof l){let c,l;if(c=function(e,t,n,o,r,s,i){let c,l,a;const d=e.type;if(t._component){if((c=e._component=t._component).base=e._dom=t._dom,c.props=e.props,c.context=r,a=!1,!s)if(null!=c.shouldComponentUpdate&&!1!==c.shouldComponentUpdate(e.props,c.state));else if(null!=c.shouldComponentUpdate)return p}else a=!0,d.prototype&&d.prototype.render?(c=e._component=new d(e.props,r),o.push(c)):(c=new E(e.props,r),e._component=null,c.constructor=d,c.render=T);return c.parentDom=n,null==c.state&&(c.state={}),c._nextState=u({},c.state),null!=d.getDerivedStateFromProps&&(u(c._nextState,d.getDerivedStateFromProps(e.props,c._nextState)||p),u(c._oldState||(c._oldState={}),c._nextState)),a?O(c,"componentWillMount"):O(c,"componentWillUpdate",e.props,c._nextState,r),c.state=c._nextState,(l=c._prevVnode=j(c.render(e.props,c.state)))&&(l._dom=e._dom,l._reorder=e._reorder),c._depth=i?1+~~i._depth:0,l}(t,n,e,r,o,i,s),null!=t._component&&(t._component._vnode=t),c===p)return null;if(l=t._dom=I(e,c,"_prevVnode"in n?n._prevVnode:n,o,r,t._component,i),null==c)return;return c&&(c._dom=l),null!=t._component&&(t._component.base=t._dom),O(t._component,"componentDidUpdate",n.props,(n._component||p)._oldState),null!=n._component&&delete n._component._oldState,t._prevVnode=c,null!=t._dom&&(t._dom._vNode=t),t._dom}return t._dom=c?k(t,null,null,!0):k(t,n,n._dom,!1),null!=s&&(s.base=t._dom),t._dom._vNode=t,N(t,c?h:n._children||h,t._dom,o,r,t._component,i),t._dom}function U(e,t){const n=g(v,null,[e]),o=[],r=t._oldVnode;t._oldVnode=e,I(t,n,r,{},o,null==r?null:r._component,!1),S(o)}class R extends E{constructor(e,t){const{componentPromise:n,fallbackComponent:o}=e;super(i()(e,["componentPromise","fallbackComponent"]),t),this.state={ready:!1,componentPromise:n,finalComponent:null,fallbackComponent:o}}static getDerivedStateFromProps(e,t){const n=t||{};return n.componentPromise===e.componentPromise?n:(null!=e.componentPromise&&(n.componentPromise=e.componentPromise,n.ready=!1,n.finalComponent=null),n)}render(e,t){let{eager:n=!0,loadComponent:o=!1}=e,r=i()(e,["eager","loadComponent"]),{ready:s,finalComponent:c}=t;if(!n&&!o||s||this.loadComponent(),s)return g(c,r);const l=Object.assign({},r);return null!=this.state.fallbackComponent?g(this.state.fallbackComponent,l):V}loadComponent(){return this.state.componentPromise().then(e=>{this.setState({ready:!0,finalComponent:e})})}}const V=g("div",null,"Loading.."),z=[],H={subscribe(e){z.includes(e)||z.push(e)},unsubscribe(e){for(let t=0;t<z.length;t++)if(z[t]===e)return z.splice(t,1)},emit(e,t){for(const n of z)n(e,t)},unsubscribeAll(){z.length=0}};function J(e){window.history.pushState(p,document.title,e),H.emit(e,{type:"load",native:!1})}function W(e){window.history.replaceState(p,document.title,e),H.emit(e,{type:"redirect",native:!1})}class F extends E{componentWillMount(){H.subscribe(this._routeChangeHandler),window.addEventListener("popstate",H.emit)}componentWillUnmount(){window.removeEventListener("popstate",H.emit),this.props.destroySubscriptionOnUnmount&&H.unsubscribeAll()}absolute(e){return new URL(e||"","".concat(location.protocol,"//").concat(location.host)).toString()}getCurrentComponent(){return this.getPathComponent(F.getPath)||[]}_routeChangeHandler(){const[e,t]=this.getCurrentComponent();this.component=this.match=null,this.setState({component:e,match:t})}_notFoundComponent(){return g("div",null,'The Requested URL "'.concat(this.absolute(F.getPath),'" was not found'))}static get getPath(){return location.pathname}static get getQs(){return location.search}getPathComponent(e){for(const t of this.state.routes){const{regex:n,component:o}=t,r=n.exec(e);if(r)return[o,r]}return[]}initComponents(e){for(const t of e)null!=t.props&&null!=t.props.path&&this.state.routes.push({regex:t.props.path,component:t})}constructor(e,t){let{children:n,fallbackComponent:o}=e;super(i()(e,["children","fallbackComponent"]),t),o=o||this._notFoundComponent.bind(this),this.state={routes:[],fallbackComponent:o},this.initComponents(n);const[r,s]=this.getCurrentComponent();this.component=r,this.match=s,this._routeChangeHandler=this._routeChangeHandler.bind(this)}render(){let e;return(e=null!=this.state.component&&null!=this.state.match?this.state.component:this.component?this.component:g(this.state.fallbackComponent,this.props)).__uAttr||(e=g(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({match:this.state.match},this.props))),g(v,null,e)}}function B(e){const{native:t,href:n,onClick:o}=e,r=i()(e,["native","href","onClick"]);return r.href=n,t||null==n||(r.onClick=t=>(function(e,t,n){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),J(t),null!=n&&n(e,t))})(t,e.href,o)),g("a",r)}function G(e){return RegExp("^".concat(e,"(/?)$"))}t.i=E},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(34);const r={async get(e){let t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t=n?"".concat(o.a).concat(e):e,await fetch(t,{headers:r,credentials:"include"})},async post(e){let t,n,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"content-type":"application/x-www-form-urlencoded"};return n="application/json"===i["content-type"].toLowerCase()&&"object"==typeof s?JSON.stringify(s):s,t=r?"".concat(o.a).concat(e):e,await fetch(t,{method:"post",body:n,headers:i,credentials:"include"})}}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(1);let r;if(window.customElements){const e="size",t=document.createElement("template");t.innerHTML='<style>.spinner{margin:auto;height: 50px; width: 50px; animation: rotate 0.8s infinite linear; border: 6px solid var(--background-color); border-right-color: var(--primary-color); border-radius: 50%;}@keyframes rotate{from{transform: rotate(0deg);}to{transform: rotate(360deg);}}</style><div class="spinner"></div>';const n=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;Object.defineProperty(e,n,{enumerable:!0,get(){const e=this.getAttribute(t);return null===e?"":e},set(e){this.setAttribute(t,e)}})};window.customElements.define("loading-spinner",class extends HTMLElement{constructor(){super();const o=t.content.cloneNode(!0),r=this.attachShadow({mode:"open"});r.appendChild(o),n(this,e),this.div=r.querySelector(".spinner")}static get observedAttributes(){return[e]}attributeChangedCallback(t,n,o){if(t===e&&o!==n){const e=this.div.style;e.height=e.width="string"==typeof o&&o.includes("px")?o:"".concat(o,"px")}}}),r=Object(o.h)("loading-spinner",{size:55})}else r="Connecting to the server";function s(){return Object(o.h)(o.d,null,r)}},243:function(e,t,n){"use strict";n.r(t);var o=n(1),r=(n(93),n(7)),s=n.n(r),i=n(32),c=(n(94),n(152));function l(e){const t={};return e.map(e=>{t[e.id]=e}),t}const a=window.__uiExperiments;class u extends o.c{constructor(){super(...arguments),s()(this,"state",{experiments:l(a.experiments),showModal:!1,addStyleElement:!1}),s()(this,"_toggleModal",()=>this.setState(e=>({showModal:!e.showModal}))),s()(this,"_updateConf",e=>this.setState({experiments:e}))}_reactToPrefChanges(e){const t=!!this.state.experiments[e].data.value.current;switch(e){case"FONT.CASING.EXPERIMENT":this.state.addStyleElement!==t&&this.setState({addStyleElement:t})}}componentDidUpdate(){this.state.showModal?document.body.style.overflow="hidden":document.body.style.overflow="unset",Object(i.a)(this.state.experiments).forEach(this._reactToPrefChanges,this)}render(){return Object(o.j)(o.d,null,Object(o.j)("button",{class:"toggle-option",onClick:this._toggleModal},"UI Experiments"),this.state.showModal&&Object(o.j)(d,{experiments:this.state.experiments,updateConf:this._updateConf,toggle:this._toggleModal}),this.state.addStyleElement&&Object(o.j)("style",null,"*{text-transform:lowercase !important}"))}}function d(e){let{experiments:t,updateConf:n,toggle:r}=e;function s(e){const o=e.target.dataset,r=o.id,s=!JSON.parse(o.value).current;t[r].data.value.current=s,n(t)}return Object(o.j)("div",{class:"modal-ui-selector"},Object(o.j)("div",null,"Current Experiments",Object(c.a)(t).map(e=>Object(o.j)("div",{data:JSON.stringify(e)},Object(o.j)("div",{class:"expirement-opts"},e.displayName,Object(o.j)("div",{class:"info-text"},e.additionalText),Object(o.j)("div",{class:"current-exp"},"Current Value:",Object(o.j)("span",{class:"data-value"},String(e.data.value.current))),Object(o.j)("div",{class:"c-edit"},Object(o.j)("button",{class:"search-button","data-id":e.id,"data-value":JSON.stringify(e.data.value),onClick:s},"Toggle"))))),Object(o.j)("button",{class:"_done",onClick:r},"Done")))}const p="ontouchstart"in window||navigator.maxTouchPoints;function h(e){let{preferences:t,setPreferences:n,removeMenu:r,showMenu:s}=e;return Object(o.j)(o.d,null,Object(o.j)("div",f({class:"mask",onClick:r},s)),Object(o.j)("div",f({id:"preference-component"},s),Object(o.j)("div",null,"Preferences"),Object(o.j)("button",{class:"toggle-option",onClick:()=>n("darkMode",!t.darkMode)},"Dark Mode is ",t.darkMode?"On":"Off"),!!p&&Object(o.j)("button",{class:"toggle-option",onClick:()=>n("zoom",!t.zoom)},"Zoom is ",t.zoom?"Enabled":"Disabled"),Object(o.j)(u)))}const f=(e,t)=>(t||(e.hidden=!0),e),m="(prefers-color-scheme: dark)";class b extends o.i{constructor(){super(...arguments),s()(this,"state",{currentUrl:o.e.getPath,showMenu:!1,preferences:{darkMode:!1,zoom:!1}}),s()(this,"onURLChange",()=>this.setState({currentUrl:o.e.getPath})),s()(this,"setPreferences",(e,t)=>this.setState(n=>{n.preferences[e]=t;const o=JSON.parse(localStorage.getItem("prefs")||"{}");return o[e]=t,localStorage.setItem("prefs",JSON.stringify(o)),n})),s()(this,"toggleMenu",()=>this.setState(e=>({showMenu:!e.showMenu})))}componentWillMount(){o.f.subscribe(this.onURLChange)}componentDidMount(){const e=JSON.parse(localStorage.getItem("prefs")||"{}");let t;window.matchMedia&&(t=window.matchMedia(m))&&(e.darkMode=t.matches,t.addEventListener("change",e=>{this.setPreferences("dark",e.matches)}));const n={};for(const t of Object(i.a)(e))n[t]=e[t];this.setState({preferences:n})}componentDidUpdate(){const e=this.state;!function(e){const t=document.body.getAttribute("dark"),n=e.preferences.darkMode;if(n&&!t)return document.body.setAttribute("dark",!0);!n&&t&&document.body.removeAttribute("dark")}(e),function(e){const t=e.preferences.zoom,n=document.querySelector("meta[name='viewport']"),o="width=device-width,initial-scale=1";console.log(t),n.setAttribute("content",t?o:o+",user-scalable=no")}(e)}render(e,t){let{}=e,{currentUrl:n,showMenu:r,preferences:s}=t;return Object(o.h)(o.d,null,Object(o.h)("header",null,Object(o.h)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiPjwvcGF0aD48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiIGZpbGw9IndoaXRlIj48L3BhdGg+PC9zdmc+",alt:"menu button",style:{position:"fixed",left:0,cursor:"pointer"},onClick:this.toggleMenu}),"/"!==n&&Object(o.h)(o.a,{href:"/",class:["banner-button","router-link"]},"Home Page"),"/all"!==n&&Object(o.h)(o.a,{href:"/all",class:["banner-button","router-link"]},"All Movies")),Object(o.h)(h,{showMenu:r,preferences:s,setPreferences:this.setPreferences,removeMenu:this.toggleMenu}))}}n(121);var _=n(114),g=n(34),v=n(148);function y(e){let{onRetryClick:t}=e;return Object(o.h)("div",null,"An Error Occured while connecting to the server",Object(o.h)("button",{class:"reload-connection",onClick:t},"Click here to try again"))}function j(){return Object(o.h)("div",null,"The Requested URL was not found")}const w=(window.__appConfig||{}).SHOULD_PREFETCH_MODULES,O=e=>e.default,C={"/":()=>n.e(4).then(n.bind(null,262)).then(O),"/search":()=>n.e(10).then(n.bind(null,263)).then(O),"/all":()=>n.e(2).then(n.bind(null,264)).then(O),"/watch":()=>n.e(8).then(n.bind(null,267)).then(O),"/media/add":()=>n.e(0).then(n.bind(null,269)).then(O),"/subs":()=>n.e(12).then(n.bind(null,265)).then(O),"/out":()=>n.e(6).then(n.bind(null,266)).then(O)};class x extends o.i{constructor(){super(...arguments),s()(this,"state",{hasServerResponse:!1,isContentLoadable:!1,errorComponent:y,hasPrefetchedComponents:!1}),s()(this,"_onMount",()=>(this.state.hasPrefetchedComponents||(w&&this._prefetchComponents(),this.setState({hasPrefetchedComponents:!0})),_.a.get("/collect/"))),s()(this,"componentWillMount",()=>{this.state.hasServerResponse&&this.setState({hasServerResponse:!1}),Object(g.j)(this._onMount,3,500).then(()=>this.setState({hasServerResponse:!0,isContentLoadable:!0})).catch(()=>this.setState({hasServerResponse:!0,isContentLoadable:!1}))})}_prefetchComponents(){console.log("prefetching sources");for(const e of Object.keys(C)){(0,C[e])()}}componentDidMount(){const e=o.e.getQs;let t;(t=new URLSearchParams(e).get("__loader"))&&Object(o.l)(t)}render(e,t){return t.hasServerResponse?t.isContentLoadable?Object(o.h)(o.e,{fallbackComponent:j},Object.keys(C).map(e=>Object(o.h)(o.b,{componentPromise:C[e],path:Object(o.g)(e)}))):Object(o.h)(t.errorComponent,{onRetryClick:this.componentWillMount}):Object(o.h)(o.d,null,Object(o.h)(v.a),Object(o.h)("div",null,"Connecting to the server"))}}n(81),n(95),n(96),n(97),n(98),n(99);const S=Object(o.h)(()=>Object(o.h)(o.d,null,Object(o.h)(b),Object(o.h)("main",{class:"center"},Object(o.h)(x)))),k=document.getElementById("app-root");k.removeAttribute("style"),Object(o.m)(S,k),window.addEventListener("load",()=>{document.head.appendChild(Object(g.b)(document.createElement("link"),{rel:"stylesheet",href:"https://fonts.pycode.tk/open-sans.css"}))},{once:!0})},34:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return _})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return v}));n(162),n(168);var o=n(1),r=n(119);n.d(t,"b",(function(){return r.a}));var s=n(153);const i="Watch Movies on Movies-Get",c=s.a,l=window.location.host.includes("localhost")?"localhost:5000":"movies-get.herokuapp.com",a=e=>{try{return e.replace(/([^\w]|_)/g,"-").replace(/--/g,"-")}catch(t){console.log(e)}},u=async function(e,t){let n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=0;for(;r<t;){try{return await e()}catch(e){n=e}await new Promise(e=>setTimeout(e,o)),r++}throw n},d="".concat(window.location.protocol,"//").concat(l),p=e=>"".concat("https:"===window.location.protocol?"wss://":"ws://").concat(l,"/").concat(e);let h=null;const f=async e=>{if(!e)return e;if(await(()=>new Promise((e,t)=>{if("boolean"==typeof h)return e(h);const n=new Image;n.onload=()=>{const t=1===n.naturalHeight&&1===n.naturalWidth;h=t,e(t)},n.onerror=()=>e(!1),n.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}))()){const t=e.split(".");return t[t.length-1]="webp",t.join(".")}return e},m=document.createElement("textarea"),b=e=>e?(m.innerHTML=e,m.value):"";function _(e){Object(o.k)("/search?".concat(c({q:e})))}function g(e,t){return"/watch?".concat(c({id:e,movie:a(t)}))}function v(e){if(!e)return e;const t=e.split("/upload/");return t[1]=t[1].split("/"),t[1]="w_150,h_200/".concat(t[1][1]),t.join("/upload/")}},81:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}});