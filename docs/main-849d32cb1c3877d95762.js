!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={7:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+""+({0:"@lazy/add-media",1:"@lazy/all",2:"@lazy/landing",3:"@lazy/out",4:"@lazy/player-component",5:"@lazy/search-results",6:"@lazy/subtitles"}[e]||e)+"-"+{0:"17831776ed0a6528e62a",1:"de06eaebb86357312000",2:"9980078b0564f8b6d224",3:"a938a244b3e865c195b3",4:"38de7a62065844260586",5:"fb63b793ed41793ff3a8",6:"93a9293dcb0855026ab4"}[e]+".js"}(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;a.push([175,8]),n()}({0:function(e,t,n){"use strict";n.d(t,"m",function(){return X}),n.d(t,"c",function(){return q}),n.d(t,"h",function(){return D}),n.d(t,"d",function(){return E}),n.d(t,"j",function(){return D}),n.d(t,"b",function(){return Y}),n.d(t,"e",function(){return oe}),n.d(t,"k",function(){return ne}),n.d(t,"l",function(){return re}),n.d(t,"f",function(){return te}),n.d(t,"a",function(){return ae}),n.d(t,"g",function(){return ie});n(129),n(134),n(30),n(135),n(86),n(33),n(138),n(139),n(140),n(141),n(43),n(44),n(148),n(88),n(149),n(150),n(115),n(61),n(62);var r=n(8),o=n.n(r),a=n(83),i=n.n(a),u=n(5),l=n.n(u),c=n(42),s=n.n(c),d=n(17),p=n.n(d),f=n(12),h=n.n(f),m=n(18),v=n.n(m),y=n(11),b=n.n(y),_=n(16),g=n.n(_);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var j,k="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,x="keys"in Object;function O(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=[];return function e(t,a){var i=!0,u=!1,l=void 0;try{for(var c,s=t[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var d=c.value;Array.isArray(d)&&a>0?e(d,a-1):r&&null==d||o.push(n?n(d):d)}}catch(e){u=!0,l=e}finally{try{i||null==s.return||s.return()}finally{if(u)throw l}}}(e,Math.floor(t)||1),o}j=x?function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];e[o]=t[o]}return e}:function(e,t){for(var n in t)e[n]=t[n];return e};var C={},S=[],P={setAttribute:function(e,t,n){return t in e?e[t]=null==n?"":n:null==n?e.removeAttribute(t):e.setAttribute(t,n)}},A=function(e){return"o"===e[0]&&"n"===e[1]};function M(e,t){if(null!=t){var n,r,o;(r=null!=(n=t._vNode))&&(o=t._vNode._nextDomNode),(t.parentNode!==e||n._reorder)&&(null!=o?e.insertBefore(t,o):n._reorder||e.appendChild(t));var a=t.previousSibling,i=t.nextSibling;if(a!=i){if(null!=a){var u=a._vNode;null!=u&&u._nextDomNode!==t&&N(u,t,"_nextDomNode")}if(null!=i){var l=i._vNode;null!=l&&l._nextDomNode!==t&&N(l,t,"_prevDomNode")}r&&(n._prevDomNode=a,n._nextDomNode=i)}}}function N(e,t,n){null!=e&&(e[n]=t,N(e._prevVnode,t,n))}function D(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(null==e||"boolean"==typeof e)return null;t=null==t?{}:j({},t),r.length&&(r=O(r,1/0),t.children=r);var a=t.ref;a&&delete t.ref;var i=t.key;i&&delete t.key;var u={};for(var l in t)A(l)&&(u[l.substr(2).toLowerCase()]=t[l]);return I(e,t,u,i,a)}function E(){}function I(e,t,n,r,o){var a={type:e,props:t,events:n,key:r,_reorder:!1,ref:o,_children:null,_dom:null,_component:null,__uAttr:null,_nextDomNode:null,_prevDomNode:null,_prevVnode:null};return a.__uAttr=a}function L(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return I(null,String(e));if(Array.isArray(e))return D(E,null,e);if(null!=e._dom){var t=I(e.type,e.props,e.events,e.key,null);return t._dom=e._dom,t}return e}var U=function(e,t){if(e.__currentLifeCycle=t,null!=e[t])try{for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e[t].apply(e,r)}catch(t){if(null==e.componentDidCatch)throw t;e.componentDidCatch(t)}};function R(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e&&(e=U.apply(void 0,[e,t].concat(r)))}function T(e){if(e!==C&&null!=e){e._prevVnode&&T(e._prevVnode);var t=e._dom,n=e._component;if(R(n,"componentWillUnmount",!0),null!=n&&(n.base=n._vnode=null),t){if(null!=e){null!=e._nextDomNode&&N(e._nextDomNode._vNode,null,"_prevDomNode"),null!=e._prevDomNode&&N(e._prevDomNode._vNode,null,"_nextDomNode");var r=!0,o=!1,a=void 0;try{for(var i,u=(e._children||S)[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){T(i.value)}}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}e._prevVnode=e._component=e._dom=e._prevDomNode=e._nextDomNode=null}if(Array.isArray(t))for(var l;l=e._children.pop();)V(l);else V(t);t.onclick=t._component=t._listeners=t._prevVnode=t._vNode=null}}}function V(e){var t=e.parentNode;t&&t.removeChild(e)}function z(e){for(var t;t=e.pop();)R(t,"componentDidMount"),t._didMount=!0}function J(e,t,n,r){var o,a=e.type;if(r)"string"==typeof e.props?o=document.createTextNode(e.props):W(o=document.createElement(a),e,C);else{if(a!==t.type)return J(e,null,null,!0);if(o=n,n instanceof Text){var i=e.props;n.nodeValue!==i&&(n.nodeValue=i)}else W(o,e,t)}return null!=e._prevVnode&&(e._prevVnode._dom=o),o}var H=function(e){return"key"!==e&&"children"!==e};function W(e,t,n){if(!(e instanceof Text)){for(var r=t.props,o=e.attributes,a=t.events,i=null!=n?n.events:C,u=0;u<o.length;u++){var l=o[u].name;l in r||P.setAttribute(e,l,null)}for(var c in r)if(!A(c)&&H(c)){var s=r[c],d=c in e?e[c]:(o[c]||C).value;if("className"===(c="class"===c?"className":c)&&Array.isArray(s)&&(s=s.join(" ")),"style"!==c)d!==s&&P.setAttribute(e,c,s);else{var p=e.style;if("string"==typeof s)p.cssText=s;else for(var f in"string"==typeof d?p.cssText="":d&&(d.cssText=""),s){var h=s[f];d&&h===d[f]||(p[f]=h)}}}!function(e,t,n){if(e!=t){for(var r in null==n._listeners&&(n._listeners={},n.onclick=E),null==t&&(t=C),null==e&&(e=C),e){var o=e[r];t[r]!==o&&null!=o&&(n.addEventListener(r,B),n._listeners[r]=o)}for(var a in t)null==e[a]&&(delete n._listeners[a],n.removeEventListener(a,B))}}(a,i,e)}}function B(e){return this._listeners[e.type](e)}function F(e,t,n,r,o,a,i){for(var u=e._children.length,l=t.length,c=[],s=0;s<Math.max(u,l);s++){var d=e._children[s],p=void 0,f=t[s];if(null!=d){if(null==f&&null!=(p=t[s+1])){var h=Array.isArray(p._dom)?p._dom[0]:p._dom;d._nextDomNode=h}var m=Q(n,d,f,r,o,a,i);if(Array.isArray(m)){var v=!0,y=!1,b=void 0;try{for(var _,g=m[Symbol.iterator]();!(v=(_=g.next()).done);v=!0){var w=_.value;M(n,w),c.push(w)}}catch(e){y=!0,b=e}finally{try{v||null==g.return||g.return()}finally{if(y)throw b}}}else M(n,m),c.push(m)}else null!=f&&T(f)}return c}var G=[],q=function(){function e(t,n){b()(this,e),this.props=t,this.context=n}return g()(e,[{key:"render",value:function(e,t){}},{key:"setState",value:function(e){var t,n="function"==typeof e?e=e(this._nextState,this.props):e;null!=n&&(this._nextState=j({},this.state||C),this._oldState=j({},this._nextState),j(this._nextState,n),(t=this)._dirty=!0,1===G.push(t)&&(null!=window.requestAnimationFrame?window.requestAnimationFrame(Z):k(Z)),j(this.state,this._nextState||C))}},{key:"forceUpdate",value:function(e){var t=this.parentDom,n=[];if(t){var r=this._vnode;this.base=Q(t,r,r,this.context,n,this,!1!==e),this.base instanceof Node&&!this.base.parentNode&&M(t,this.base)}e&&e(),z(n)}}]),e}();function Z(){var e;for(G.sort(function(e,t){return e._depth-t._depth});e=G.pop();)e._nextState=null,e._dirty=!1,e.forceUpdate(!1)}function K(e,t,n){return this.constructor(e,n)}function Q(e,t,n,r,o,a,i){if("boolean"==typeof t&&(t=null),null!=n&&null!=t&&null==t._nextDomNode&&(t._nextDomNode=n._nextDomNode),null==n||null==t||n.type!==t.type||n.key!==t.key){if(null!=n&&n!==C&&T(n),null==t)return null;n=C}var u=n===C;if(t.__uAttr!==t)return console.warn("component not of expected type =>",t),null;t._children=O(t.props&&t.props.children||[],1/0,L);var l=t.type;if(l===E||n.type===E)return F(t,u?S:n._children||S,e,r,o,a,i);if("function"==typeof l){var c,s;if(c=function(e,t,n,r,o,a,i){var u,l,c,s=e.type;if(t._component){if((u=e._component=t._component).base=e._dom=t._dom,u.props=e.props,u.context=o,c=!1,!a)if(null!=u.shouldComponentUpdate&&!1!==u.shouldComponentUpdate(e.props,u.state));else if(null!=u.shouldComponentUpdate)return C}else c=!0,s.prototype&&s.prototype.render?(u=e._component=new s(e.props,o),r.push(u)):(u=new q(e.props,o),e._component=null,u.constructor=s,u.render=K);return u.parentDom=n,null==u.state&&(u.state={}),u._nextState=j({},u.state),null!=s.getDerivedStateFromProps&&(j(u._nextState,s.getDerivedStateFromProps(e.props,u._nextState)||C),j(u._oldState||(u._oldState={}),u._nextState)),c?R(u,"componentWillMount"):R(u,"componentWillUpdate",e.props,u._nextState,o),u.state=u._nextState,(l=u._prevVnode=L(u.render(e.props,u.state)))&&(l._dom=e._dom,l._reorder=e._reorder),u._depth=i?1+~~i._depth:0,l}(t,n,e,o,r,i,a),null!=t._component&&(t._component._vnode=t),c===C)return null;if(s=t._dom=Q(e,c,"_prevVnode"in n?n._prevVnode:n,r,o,t._component,i),null==c)return;return c&&(c._dom=s),null!=t._component&&(t._component.base=t._dom),R(t._component,"componentDidUpdate",n.props,(n._component||C)._oldState),null!=n._component&&delete n._component._oldState,t._prevVnode=c,null!=t._dom&&(t._dom._vNode=t),t._dom}return t._dom=u?J(t,null,null,!0):J(t,n,n._dom,!1),null!=a&&(a.base=t._dom),t._dom._vNode=t,F(t,u?S:n._children||S,t._dom,r,o,t._component,i),t._dom}function X(e,t){var n=D(E,null,[e]),r=[],o=t._oldVnode;t._oldVnode=e,Q(t,n,o,{},r,null==o?null:o._component,!1),z(r)}var Y=function(e){function t(e,n){var r;b()(this,t);var o=e.componentPromise,a=e.fallbackComponent,i=s()(e,["componentPromise","fallbackComponent"]);return(r=p()(this,h()(t).call(this,i,n))).state={ready:!1,componentPromise:o,finalComponent:null,fallbackComponent:a},r}return v()(t,e),g()(t,[{key:"render",value:function(e,t){var n=e.eager,r=void 0===n||n,o=e.loadComponent,a=void 0!==o&&o,i=s()(e,["eager","loadComponent"]),u=t.ready,l=t.finalComponent;if(!r&&!a||u||this.loadComponent(),u)return D(l,i);var c=Object.assign({},i);return null!=this.state.fallbackComponent?D(this.state.fallbackComponent,c):$}},{key:"loadComponent",value:function(){var e=this;return this.state.componentPromise().then(function(t){e.setState({ready:!0,finalComponent:t})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t||{};return n.componentPromise===e.componentPromise?n:(null!=e.componentPromise&&(n.componentPromise=e.componentPromise,n.ready=!1,n.finalComponent=null),n)}}]),t}(q),$=D("div",null,"Loading.."),ee=[],te={subscribe(e){ee.includes(e)||ee.push(e)},unsubscribe(e){for(var t=0;t<ee.length;t++)if(ee[t]===e)return ee.splice(t,1)},emit(e,t){var n=!0,r=!1,o=void 0;try{for(var a,i=ee[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){(0,a.value)(e,t)}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}},unsubscribeAll(){ee.length=0}};function ne(e){window.history.pushState(C,document.title,e),te.emit(e,{type:"load",native:!1})}function re(e){window.history.replaceState(C,document.title,e),te.emit(e,{type:"redirect",native:!1})}var oe=function(e){function t(e,n){var r;b()(this,t);var o=e.children,a=e.fallbackComponent,u=s()(e,["children","fallbackComponent"]);r=p()(this,h()(t).call(this,u,n)),a=a||r._notFoundComponent.bind(l()(r)),r.state={routes:[],fallbackComponent:a},r.initComponents(o);var c=r.getCurrentComponent(),d=i()(c,2),f=d[0],m=d[1];return r.component=f,r.match=m,r._routeChangeHandler=r._routeChangeHandler.bind(l()(r)),r}return v()(t,e),g()(t,[{key:"componentWillMount",value:function(){te.subscribe(this._routeChangeHandler),window.addEventListener("popstate",te.emit)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",te.emit),this.props.destroySubscriptionOnUnmount&&te.unsubscribeAll()}},{key:"absolute",value:function(e){return new URL(e||"","".concat(location.protocol,"//").concat(location.host)).toString()}},{key:"getCurrentComponent",value:function(){return this.getPathComponent(t.getPath)||[]}},{key:"_routeChangeHandler",value:function(){var e=this.getCurrentComponent(),t=i()(e,2),n=t[0],r=t[1];this.component=this.match=null,this.setState({component:n,match:r})}},{key:"_notFoundComponent",value:function(){return D("div",null,'The Requested URL "'.concat(this.absolute(t.getPath),'" was not found'))}},{key:"getPathComponent",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=this.state.routes[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value,u=i.regex,l=i.component,c=u.exec(e);if(c)return[l,c]}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return[]}},{key:"initComponents",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value;null!=i.props&&null!=i.props.path&&this.state.routes.push({regex:i.props.path,component:i})}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}}],[{key:"getPath",get:function(){return location.pathname}},{key:"getQs",get:function(){return location.search}}]),g()(t,[{key:"render",value:function(){var e;return(e=null!=this.state.component&&null!=this.state.match?this.state.component:this.component?this.component:D(this.state.fallbackComponent,this.props)).__uAttr||(e=D(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({match:this.state.match},this.props))),D(E,null,e)}}]),t}(q);function ae(e){var t=e.native,n=e.href,r=e.onClick,o=s()(e,["native","href","onClick"]);return o.href=n,t||null==n||(o.onClick=function(t){return function(e,t,n){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),ne(t),null!=n&&n(e,t))}(t,e.href,r)}),D("a",o)}function ie(e){return RegExp("^".concat(e,"(/?)$"))}t.i=q},119:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r,o=n(11),a=n.n(o),i=n(17),u=n.n(i),l=n(12),c=n.n(l),s=n(18),d=n.n(s),p=n(121),f=n.n(p),h=n(0);if(window.customElements){var m=document.createElement("template");m.innerHTML='<style>.ripple-spinner{display:inline-block;position:relative;width:64px;height:64px}.ripple-spinner div{position:absolute;border:4px solid var(--primary-color);opacity:1;border-radius:50%;-webkit-animation:ripple-spinner 1s cubic-bezier(0,.2,.8,1) infinite;animation:ripple-spinner 1s cubic-bezier(0,.2,.8,1) infinite}div[delayed]{-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes ripple-spinner{0%{top:28px;left:28px;width:0;height:0;opacity:1}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}@keyframes ripple-spinner{0%{top:28px;left:28px;width:0;height:0;opacity:1}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}</style><div class="ripple-spinner"><div></div><div delayed></div></div>\n  ',window.customElements.define("loading-spinner",function(e){function t(){var e;a()(this,t),e=u()(this,c()(t).call(this));var n=m.content.cloneNode(!0);return e.attachShadow({mode:"open"}).appendChild(n),e}return d()(t,e),t}(f()(HTMLElement))),r=Object(h.h)("loading-spinner",{height:100,width:100})}else r="Connecting to the server";function v(){return Object(h.h)(h.d,null,r)}},128:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var r=n(0),o=(n(162),n(30),n(85)),a=n.n(o),i=n(11),u=n.n(i),l=n(16),c=n.n(l),s=n(17),d=n.n(s),p=n(12),f=n.n(p),h=n(5),m=n.n(h),v=n(18),y=n.n(v),b=n(8),_=n.n(b),g=(n(163),n(59),n(115),n(120)),w=n(58);var j=JSON.parse(document.getElementById("ui-experiments").textContent),k=function(e){function t(){var e,n,r,o;u()(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=d()(this,(e=f()(t)).call.apply(e,[this].concat(i))),_()(m()(n),"state",{experiments:(r=j.experiments,o={},r.map(function(e){o[e.id]=e}),o),showModal:!1,addStyleElement:!1}),_()(m()(n),"_toggleModal",function(){return n.setState(function(e){return{showModal:!e.showModal}})}),_()(m()(n),"_updateConf",function(e){return n.setState({experiments:e})}),n}return y()(t,e),c()(t,[{key:"_reactToPrefChanges",value:function(e){var t=!!this.state.experiments[e].data.value.current;switch(e){case"FONT.CASING.EXPERIMENT":this.state.addStyleElement!==t&&this.setState({addStyleElement:t})}}},{key:"componentDidUpdate",value:function(){this.state.showModal?document.body.style.overflow="hidden":document.body.style.overflow="unset",Object(w.a)(this.state.experiments).forEach(this._reactToPrefChanges,this)}},{key:"render",value:function(){return Object(r.j)(r.d,null,Object(r.j)("button",{class:"toggle-option",onClick:this._toggleModal},"UI Experiments"),this.state.showModal&&Object(r.j)(x,{experiments:this.state.experiments,updateConf:this._updateConf,toggle:this._toggleModal}),this.state.addStyleElement&&Object(r.j)("style",null,"*{text-transform:lowercase !important}"))}}]),t}(r.c);function x(e){var t=e.experiments,n=e.updateConf,o=e.toggle;function a(e){var r=e.target.dataset,o=r.id,a=!JSON.parse(r.value).current;t[o].data.value.current=a,n(t)}return Object(r.j)("div",{class:"modal-ui-selector"},Object(r.j)("div",null,"Current Experiments",Object(g.a)(t).map(function(e){return Object(r.j)("div",{data:JSON.stringify(e)},Object(r.j)("div",{class:"expirement-opts"},e.displayName,Object(r.j)("div",{class:"info-text"},e.additionalText),Object(r.j)("div",{class:"current-exp"},"Current Value:",Object(r.j)("span",{class:"data-value"},String(e.data.value.current))),Object(r.j)("div",{class:"c-edit"},Object(r.j)("button",{class:"search-button","data-id":e.id,"data-value":JSON.stringify(e.data.value),onClick:a},"Toggle"))))}),Object(r.j)("button",{class:"_done",onClick:o},"Done")))}var O="ontouchstart"in window||navigator.maxTouchPoints;function C(e){var t=e.preferences,n=e.setPreferences,o=e.removeMenu,a=e.showMenu;return Object(r.j)(r.d,null,Object(r.j)("div",S({class:"mask",onClick:o},a)),Object(r.j)("div",S({id:"preference-component"},a),Object(r.j)("div",null,"Preferences"),Object(r.j)("button",{class:"toggle-option",onClick:function(){return n("darkMode",!t.darkMode)}},"Dark Mode is ",t.darkMode?"On":"Off"),!!O&&Object(r.j)("button",{class:"toggle-option",onClick:function(){return n("zoom",!t.zoom)}},"Zoom is ",t.zoom?"Enabled":"Disabled"),Object(r.j)(k)))}var S=function(e,t){return t||(e.hidden=!0),e},P=function(e){function t(){var e,n;u()(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=d()(this,(e=f()(t)).call.apply(e,[this].concat(a))),_()(m()(n),"state",{currentUrl:r.e.getPath,showMenu:!1,preferences:{darkMode:!1,zoom:!1}}),_()(m()(n),"onURLChange",function(){return n.setState({currentUrl:r.e.getPath})}),_()(m()(n),"setPreferences",function(e,t){return n.setState(function(n){n.preferences[e]=t;var r=JSON.parse(localStorage.getItem("prefs")||"{}");return r[e]=t,localStorage.setItem("prefs",JSON.stringify(r)),n})}),_()(m()(n),"toggleMenu",function(){return n.setState(function(e){return{showMenu:!e.showMenu}})}),n}return y()(t,e),c()(t,[{key:"componentWillMount",value:function(){r.f.subscribe(this.onURLChange)}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("prefs")||"{}");this.setState(function(){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];t[o]=e[o]}return{preferences:t}})}},{key:"componentDidUpdate",value:function(){var e=this.state;!function(e){var t=document.body.getAttribute("dark"),n=e.preferences.darkMode;if(n&&!t)return document.body.setAttribute("dark",!0);!n&&t&&document.body.removeAttribute("dark")}(e),function(e){var t=e.preferences.zoom,n=document.querySelector("meta[name='viewport']"),r="width=device-width,initial-scale=1";console.log(t),n.setAttribute("content",t?r:r+",user-scalable=no")}(e)}},{key:"render",value:function(e,t){a()(e);var n=t.currentUrl,o=t.showMenu,i=t.preferences;return Object(r.h)(r.d,null,Object(r.h)("header",null,Object(r.h)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiPjwvcGF0aD48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiIGZpbGw9IndoaXRlIj48L3BhdGg+PC9zdmc+",alt:"menu button",style:{position:"fixed",left:0,cursor:"pointer"},onClick:this.toggleMenu}),"/"!==n&&Object(r.h)(r.a,{href:"/",class:["banner-button","router-link"]},"Home Page"),"/all"!==n&&Object(r.h)(r.a,{href:"/all",class:["banner-button","router-link"]},"All Movies")),Object(r.h)(C,{showMenu:o,preferences:i,setPreferences:this.setPreferences,removeMenu:this.toggleMenu}))}}]),t}(r.i);n(33),n(43),n(44),n(61),n(62);var A=n(84),M=n(25),N=n(119);function D(e){var t=e.onRetryClick;return Object(r.h)("div",null,"An Error Occured while connecting to the server",Object(r.h)("button",{class:"reload-connection",onClick:t},"Click here to try again"))}function E(){return Object(r.h)("div",null,"The Requested URL was not found")}var I=function(e){return e.default},L={"/":function(){return n.e(2).then(n.bind(null,187)).then(I)},"/search":function(){return n.e(5).then(n.bind(null,188)).then(I)},"/all":function(){return n.e(1).then(n.bind(null,189)).then(I)},"/watch":function(){return n.e(4).then(n.bind(null,192)).then(I)},"/media/add":function(){return n.e(0).then(n.bind(null,193)).then(I)},"/subs":function(){return n.e(6).then(n.bind(null,190)).then(I)},"/out":function(){return n.e(3).then(n.bind(null,191)).then(I)}},U=function(e){function t(){var e,n;u()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=d()(this,(e=f()(t)).call.apply(e,[this].concat(o))),_()(m()(n),"state",{hasServerResponse:!1,isContentLoadable:!1,errorComponent:D,hasPrefetchedComponents:!1}),_()(m()(n),"_onMount",function(){return n.state.hasPrefetchedComponents||(n._prefetchComponents(),n.setState({hasPrefetchedComponents:!0})),A.a.get("/collect/")}),_()(m()(n),"componentWillMount",function(){n.state.hasServerResponse&&n.setState({hasServerResponse:!1}),Object(M.m)(n._onMount,3,500).then(function(){return n.setState({hasServerResponse:!0,isContentLoadable:!0})}).catch(function(){return n.setState({hasServerResponse:!0,isContentLoadable:!1})})}),n}return y()(t,e),c()(t,[{key:"_prefetchComponents",value:function(){console.log("prefetching sources");for(var e=0,t=Object.keys(L);e<t.length;e++){var n=t[e];(0,L[n])()}}},{key:"componentDidMount",value:function(){var e,t=r.e.getQs;(e=new URLSearchParams(t).get("__loader"))&&Object(r.l)(e)}},{key:"render",value:function(e,t){return t.hasServerResponse?t.isContentLoadable?Object(r.h)(r.e,{fallbackComponent:E},Object.keys(L).map(function(e){return Object(r.h)(r.b,{componentPromise:L[e],path:Object(r.g)(e)})})):Object(r.h)(t.errorComponent,{onRetryClick:this.componentWillMount}):Object(r.h)(r.d,null,Object(r.h)(N.a),Object(r.h)("div",null,"Connecting to the server"))}}]),t}(r.i),R=(n(128),n(170),n(171),n(172),n(173),n(174),Object(r.h)(function(){return Object(r.h)(r.d,null,Object(r.h)(P),Object(r.h)("main",{class:"center"},Object(r.h)(U)))})),T=document.getElementById("app-root");T.removeAttribute("style"),Object(r.m)(R,T),window.addEventListener("load",function(){document.head.appendChild(Object(M.b)(document.createElement("link"),{rel:"stylesheet",href:"https://fonts.pycode.tk/open-sans.css"}))},{once:!0})},25:function(e,t,n){"use strict";n.d(t,"g",function(){return l}),n.d(t,"m",function(){return d}),n.d(t,"a",function(){return p}),n.d(t,"k",function(){return f}),n.d(t,"i",function(){return m}),n.d(t,"f",function(){return y}),n.d(t,"n",function(){return b}),n.d(t,"j",function(){return _}),n.d(t,"h",function(){return g}),n.d(t,"l",function(){return w}),n.d(t,"c",function(){return x}),n.d(t,"e",function(){return O}),n.d(t,"d",function(){return C}),n.d(t,"b",function(){return S});n(30),n(86),n(33),n(59),n(164),n(43),n(44),n(88),n(122),n(127),n(124),n(61),n(62);var r=n(15),o=n.n(r),a=(n(60),n(26)),i=n.n(a),u=n(0),l="Watch Movies on Movies-Get",c=window.location.host.includes("localhost")?"localhost:5000":"movies-get.herokuapp.com",s=function(e){try{return e.replace(/([^\w]|_)/g,"-").replace(/--/g,"-")}catch(t){console.log(e)}},d=function(){var e=i()(o.a.mark(function e(t,n){var r,a,i,u=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=u.length>2&&void 0!==u[2]?u[2]:100,i=0;case 2:if(!(i<n)){e.next=17;break}return e.prev=3,e.next=6,t();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(3),a=e.t0;case 12:return e.next=14,new Promise(function(e){return setTimeout(e,r)});case 14:i++,e.next=2;break;case 17:throw a;case 18:case"end":return e.stop()}},e,null,[[3,9]])}));return function(t,n){return e.apply(this,arguments)}}(),p="".concat(window.location.protocol,"//").concat(c),f=function(e){return"".concat("https:"===window.location.protocol?"wss://":"ws://").concat(c,"/").concat(e)},h=null,m=function(){var e=i()(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,new Promise(function(e,t){if("boolean"==typeof h)return e(h);var n=new Image;n.onload=function(){var t=1===n.naturalHeight&&1===n.naturalWidth;h=t,e(t)},n.onerror=function(){return e(!1)},n.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="});case 4:if(!e.sent){e.next=11;break}return(n=t.split("."))[n.length-1]="webp",e.abrupt("return",n.join("."));case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=document.createElement("textarea"),y=function(e){return e?(v.innerHTML=e,v.value):""},b=function(e){return window.URLSearchParams?new URLSearchParams(e).toString():"".concat(Object.keys(e).map(function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))}).join("&"))};function _(e){Object(u.k)("/search?".concat(b({q:e})))}function g(e,t){return"/watch?".concat(b({id:e,movie:s(t)}))}function w(e){if(!e)return e;var t=e.split("/upload/");return t[1]=t[1].split("/"),t[1]="w_150,h_200/"+t[1][1],t.join("/upload/")}var j="Map"in self,k=function(e){return j&&e instanceof Map};function x(){return j?new Map:{}}function O(e,t,n){return k(e)?e.set(t,n):e[t]=n}function C(e,t){return k(e)?e.get(t):e[t]}function S(e,t){if(Object.keys){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];e[o]=t[o]}return e}for(var a in t)e[a]=t[a];return e}},84:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(30),n(43),n(44);var r=n(15),o=n.n(r),a=(n(60),n(26)),i=n.n(a),u=n(25),l={get(e){var t=arguments;return i()(o.a.mark(function n(){var r,a,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=!(t.length>1&&void 0!==t[1])||t[1],a=t.length>2&&void 0!==t[2]?t[2]:{},i=r?"".concat(u.a).concat(e):e,n.next=5,fetch(i,{headers:a,credentials:"include"});case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}},n)}))()},post(e){var t=arguments;return i()(o.a.mark(function n(){var r,a,i,l,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=!(t.length>1&&void 0!==t[1])||t[1],a=t.length>2?t[2]:void 0,i=t.length>3&&void 0!==t[3]?t[3]:{"content-type":"application/x-www-form-urlencoded"},c="application/json"===i["content-type"].toLowerCase()&&"object"==typeof a?JSON.stringify(a):a,l=r?"".concat(u.a).concat(e):e,n.next=7,fetch(l,{method:"post",body:c,headers:i,credentials:"include"});case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}},n)}))()}}}});