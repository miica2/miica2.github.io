import{a4 as T,a5 as Z,a6 as M,a7 as w,a8 as z,s as y,a9 as m,aa as S,g as b,M as N,ab as G,ac as H,a2 as Q,ad as V,ae as W,af as Y,ag as X,Q as C,ah as j,ai as x,aj as J,ak as k,$ as q,al as ee,X as re,am as ne,an as te,T as U,Z as ie,ao as se,ap as ae}from"./runtime.DhIpemO4.js";import{f as fe}from"./disclose-version.Cxjobn_W.js";function R(e,r=null,a){if(typeof e!="object"||e===null||T in e)return e;const f=H(e);if(f!==Z&&f!==M)return e;var i=new Map,v=Q(e),p=w(0);v&&i.set("length",w(e.length));var c;return new Proxy(e,{defineProperty(o,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&z();var s=i.get(n);return s===void 0?(s=w(t.value),i.set(n,s)):y(s,R(t.value,c)),!0},deleteProperty(o,n){var t=i.get(n);if(t===void 0)n in o&&i.set(n,w(m));else{if(v&&typeof n=="string"){var s=i.get("length"),u=Number(n);Number.isInteger(u)&&u<s.v&&y(s,u)}y(t,m),$(p)}return!0},get(o,n,t){var d;if(n===T)return e;var s=i.get(n),u=n in o;if(s===void 0&&(!u||(d=S(o,n))!=null&&d.writable)&&(s=w(R(u?o[n]:m,c)),i.set(n,s)),s!==void 0){var l=b(s);return l===m?void 0:l}return Reflect.get(o,n,t)},getOwnPropertyDescriptor(o,n){var t=Reflect.getOwnPropertyDescriptor(o,n);if(t&&"value"in t){var s=i.get(n);s&&(t.value=b(s))}else if(t===void 0){var u=i.get(n),l=u==null?void 0:u.v;if(u!==void 0&&l!==m)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return t},has(o,n){var l;if(n===T)return!0;var t=i.get(n),s=t!==void 0&&t.v!==m||Reflect.has(o,n);if(t!==void 0||N!==null&&(!s||(l=S(o,n))!=null&&l.writable)){t===void 0&&(t=w(s?R(o[n],c):m),i.set(n,t));var u=b(t);if(u===m)return!1}return s},set(o,n,t,s){var I;var u=i.get(n),l=n in o;if(v&&n==="length")for(var d=t;d<u.v;d+=1){var _=i.get(d+"");_!==void 0?y(_,m):d in o&&(_=w(m),i.set(d+"",_))}u===void 0?(!l||(I=S(o,n))!=null&&I.writable)&&(u=w(void 0),y(u,R(t,c)),i.set(n,u)):(l=u.v!==m,y(u,R(t,c)));var P=Reflect.getOwnPropertyDescriptor(o,n);if(P!=null&&P.set&&P.set.call(s,t),!l){if(v&&typeof n=="string"){var A=i.get("length"),g=Number(n);Number.isInteger(g)&&g>=A.v&&y(A,g+1)}$(p)}return!0},ownKeys(o){b(p);var n=Reflect.ownKeys(o).filter(u=>{var l=i.get(u);return l===void 0||l.v!==m});for(var[t,s]of i)s.v!==m&&!(t in o)&&n.push(t);return n},setPrototypeOf(){G()}})}function $(e,r=1){y(e,e.v+r)}const ue={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,a){return r in e.special||(e.special[r]=oe({get[r](){return e.props[r]}},r,Y)),e.special[r](a),j(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),j(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function he(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},ue)}const le={get(e,r){let a=e.props.length;for(;a--;){let f=e.props[a];if(x(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f)return f[r]}},set(e,r,a){let f=e.props.length;for(;f--;){let i=e.props[f];x(i)&&(i=i());const v=S(i,r);if(v&&v.set)return v.set(a),!0}return!1},getOwnPropertyDescriptor(e,r){let a=e.props.length;for(;a--;){let f=e.props[a];if(x(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f){const i=S(f,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){for(let a of e.props)if(x(a)&&(a=a()),a!=null&&r in a)return!0;return!1},ownKeys(e){const r=[];for(let a of e.props){x(a)&&(a=a());for(const f in a)r.includes(f)||r.push(f)}return r}};function pe(...e){return new Proxy({props:e},le)}function K(e){for(var r=N,a=N;r!==null&&!(r.f&(J|k));)r=r.parent;try{return q(r),e()}finally{q(a)}}function oe(e,r,a,f){var B;var i=(a&ee)!==0,v=!re||(a&ne)!==0,p=(a&te)!==0,c=(a&se)!==0,o=!1,n;p?[n,o]=fe(()=>e[r]):n=e[r];var t=(B=S(e,r))==null?void 0:B.set,s=f,u=!0,l=!1,d=()=>(l=!0,u&&(u=!1,c?s=C(f):s=f),s);n===void 0&&f!==void 0&&(t&&v&&V(),n=d(),t&&t(n));var _;if(v)_=()=>{var h=e[r];return h===void 0?d():(u=!0,l=!1,h)};else{var P=K(()=>(i?U:ie)(()=>e[r]));P.f|=W,_=()=>{var h=b(P);return h!==void 0&&(s=void 0),h===void 0?s:h}}if(!(a&Y))return _;if(t){var A=e.$$legacy;return function(h,E){return arguments.length>0?((!v||!E||A||o)&&t(E?_():h),h):_()}}var g=!1,I=!1,D=ae(n),O=K(()=>U(()=>{var h=_(),E=b(D);return g?(g=!1,I=!0,E):(I=!1,D.v=h)}));return i||(O.equals=X),function(h,E){if(arguments.length>0){const L=E?b(O):v&&p?R(h):h;return O.equals(L)||(g=!0,y(D,L),l&&s!==void 0&&(s=L),C(()=>b(O))),h}return b(O)}}const ce="modulepreload",de=function(e,r){return new URL(e,r).href},F={},me=function(r,a,f){let i=Promise.resolve();if(a&&a.length>0){const p=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),o=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.allSettled(a.map(n=>{if(n=de(n,f),n in F)return;F[n]=!0;const t=n.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!f)for(let d=p.length-1;d>=0;d--){const _=p[d];if(_.href===n&&(!t||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${s}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":ce,t||(l.as="script"),l.crossOrigin="",l.href=n,o&&l.setAttribute("nonce",o),document.head.appendChild(l),t)return new Promise((d,_)=>{l.addEventListener("load",d),l.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})}))}function v(p){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=p,window.dispatchEvent(c),!c.defaultPrevented)throw p}return i.then(p=>{for(const c of p||[])c.status==="rejected"&&v(c.reason);return r().catch(v)})};export{me as _,R as a,he as l,oe as p,pe as s};
