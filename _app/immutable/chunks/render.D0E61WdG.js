import{y as m,z as L,A as I,B as O,C as g,v as h,u as E,j as b,n as _,D as C,F as H,G as M,I as Y,J as j,K as S,L as V,h as $,p as k,i as w,M as z,a as B,N as F}from"./runtime.r1WCR3Wd.js";import{a as G,r as N,h as y,i as J}from"./utils.BsEMemth.js";import{d as K}from"./disclose-version.UQu7LZ6h.js";function U(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function W(t,e){return A(t,e)}function X(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var a=L(n);a&&(a.nodeType!==8||a.data!==I);)a=O(a);if(!a)throw g;h(!0),E(a),b();const o=A(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==C)throw H(),g;return h(!1),o}catch(o){if(o===g)return e.recover===!1&&M(),m(),Y(n),h(!1),W(t,e);throw o}finally{h(l),E(u)}}const d=new Map;function A(t,{target:e,anchor:n,props:l={},events:u,context:a,intro:o=!0}){m();var v=new Set,p=i=>{for(var r=0;r<i.length;r++){var s=i[r];if(!v.has(s)){v.add(s);var f=J(s);e.addEventListener(s,y,{passive:f});var T=d.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),d.set(s,1)):d.set(s,T+1)}}};p(j(G)),N.add(p);var c=void 0,D=S(()=>{var i=n??e.appendChild(V());return $(()=>{if(a){k({});var r=F;r.c=a}u&&(l.$$events=u),w&&K(i,null),c=t(i,l)||{},w&&(z.nodes_end=_),a&&B()}),()=>{var f;for(var r of v){e.removeEventListener(r,y);var s=d.get(r);--s===0?(document.removeEventListener(r,y),d.delete(r)):d.set(r,s)}N.delete(p),R.delete(c),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return R.set(c,D),c}let R=new WeakMap;function Z(t){const e=R.get(t);e&&e()}export{X as h,W as m,U as s,Z as u};