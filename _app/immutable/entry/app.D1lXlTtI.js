const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DtLy0oQS.js","../chunks/preload-helper.C8AysdKH.js","../chunks/runtime.r1WCR3Wd.js","../chunks/disclose-version.UQu7LZ6h.js","../chunks/attributes.v2oJKZik.js","../chunks/utils.BsEMemth.js","../chunks/index-client.B-CySuO5.js","../chunks/render.D0E61WdG.js","../chunks/if.B1j9o2nW.js","../chunks/stores.TGUyitde.js","../chunks/entry.BJbkUCkq.js","../chunks/control.CYgJF_JY.js","../chunks/mediaQuery.CCBsDU7x.js","../chunks/legacy.kSRMnq6f.js","../chunks/Icon.fpBpUcbt.js","../assets/0.hCWRT3z_.css","../nodes/1.DfhsxUeV.js","../nodes/2.jWlrjjkZ.js","../chunks/index.CzR0xuCU.js","../chunks/svelte-component.C3BxzTRm.js","../assets/2.fwOTqz09.css","../assets/image.J39rOtb8.css","../nodes/3.BItVeWHm.js","../chunks/dynamic-import-helper.BheWnx7M.js","../chunks/image.BVlKZ4XJ.js","../chunks/class.BGlPkJoe.js","../chunks/youtube.svelte_svelte_type_style_lang.C2KVKcM-.js","../assets/youtube.CEqHX-Oh.css","../assets/3.B6UR8u1-.css","../nodes/4.BxdGK7DO.js","../assets/docs.Snug08M9.css","../nodes/5.DNwW3ys7.js","../nodes/6.DoGn-tkc.js","../chunks/doubleColumns.B3TZMj6f.js","../assets/doubleColumns.BaBP7To9.css","../assets/6.B31TuowX.css"])))=>i.map(i=>d[i]);
var p=e=>{throw TypeError(e)};var q=(e,t,r)=>t.has(e)||p("Cannot "+r);var c=(e,t,r)=>(q(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?p("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),A=(e,t,r,i)=>(q(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{p as D,a as H,_ as g}from"../chunks/preload-helper.C8AysdKH.js";import{aC as J,aD as K,R as N,a2 as U,a3 as W,g as _,s as O,aE as X,a0 as Z,ap as $,p as tt,P as et,Q as rt,aF as st,f as x,w as at,a as ot,aG as L,O as k,c as it,t as nt,r as ct}from"../chunks/runtime.r1WCR3Wd.js";import{h as ut,m as mt,u as ft,s as _t}from"../chunks/render.D0E61WdG.js";import{c as w,a as y,t as F,g as dt}from"../chunks/disclose-version.UQu7LZ6h.js";import{i as I}from"../chunks/if.B1j9o2nW.js";import{c as V}from"../chunks/svelte-component.C3BxzTRm.js";import{o as lt}from"../chunks/index-client.B-CySuO5.js";function B(e,t){return e===t||(e==null?void 0:e[W])===t}function C(e={},t,r,i){return J(()=>{var o,n;return K(()=>{o=n,n=[],N(()=>{e!==r(...n)&&(t(e,...n),o&&B(r(...o),e)&&t(null,...o))})}),()=>{U(()=>{n&&B(r(...n),e)&&t(null,...n)})}}),e}function ht(e){return class extends gt{constructor(t){super({component:e,...t})}}}var d,u;class gt{constructor(t){T(this,d);T(this,u);var n;var r=new Map,i=(s,a)=>{var l=$(a);return r.set(s,l),l};const o=new Proxy({...t.props||{},$$events:{}},{get(s,a){return _(r.get(a)??i(a,Reflect.get(s,a)))},has(s,a){return _(r.get(a)??i(a,Reflect.get(s,a))),Reflect.has(s,a)},set(s,a,l){return O(r.get(a)??i(a,l),l),Reflect.set(s,a,l)}});A(this,u,(t.hydrate?ut:mt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((n=t==null?void 0:t.props)!=null&&n.$$host)||t.sync===!1)&&X(),A(this,d,o.$$events);for(const s of Object.keys(c(this,u)))s==="$set"||s==="$destroy"||s==="$on"||Z(this,s,{get(){return c(this,u)[s]},set(a){c(this,u)[s]=a},enumerable:!0});c(this,u).$set=s=>{Object.assign(o,s)},c(this,u).$destroy=()=>{ft(c(this,u))}}$set(t){c(this,u).$set(t)}$on(t,r){c(this,d)[t]=c(this,d)[t]||[];const i=(...o)=>r.call(this,...o);return c(this,d)[t].push(i),()=>{c(this,d)[t]=c(this,d)[t].filter(o=>o!==i)}}$destroy(){c(this,u).$destroy()}}d=new WeakMap,u=new WeakMap;const kt={};var vt=F('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),yt=F("<!> <!>",1);function Et(e,t){tt(t,!0);let r=D(t,"components",23,()=>[]),i=D(t,"data_0",3,null),o=D(t,"data_1",3,null);et(()=>t.stores.page.set(t.page)),rt(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),o(),t.stores.page.notify()});let n=L(!1),s=L(!1),a=L(null);lt(()=>{const h=t.stores.page.subscribe(()=>{_(n)&&(O(s,!0),st().then(()=>{O(a,H(document.title||"untitled page"))}))});return O(n,!0),h});const l=k(()=>t.constructors[1]);var M=yt(),S=x(M);I(S,()=>t.constructors[1],h=>{var f=w();const E=k(()=>t.constructors[0]);var P=x(f);V(P,()=>_(E),(v,b)=>{C(b(v,{get data(){return i()},get form(){return t.form},children:(m,Pt)=>{var j=w(),Q=x(j);V(Q,()=>_(l),(Y,z)=>{C(z(Y,{get data(){return o()},get form(){return t.form}}),R=>r()[1]=R,()=>{var R;return(R=r())==null?void 0:R[1]})}),y(m,j)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),y(h,f)},h=>{var f=w();const E=k(()=>t.constructors[0]);var P=x(f);V(P,()=>_(E),(v,b)=>{C(b(v,{get data(){return i()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),y(h,f)});var G=at(S,2);I(G,()=>_(n),h=>{var f=vt(),E=it(f);I(E,()=>_(s),P=>{var v=dt();nt(()=>_t(v,_(a))),y(P,v)}),ct(f),y(h,f)}),y(e,M),ot()}const wt=ht(Et),It=[()=>g(()=>import("../nodes/0.DtLy0oQS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),()=>g(()=>import("../nodes/1.DfhsxUeV.js"),__vite__mapDeps([16,3,2,13,7,5,9,10,11]),import.meta.url),()=>g(()=>import("../nodes/2.jWlrjjkZ.js"),__vite__mapDeps([17,1,2,3,18,11,13,19,20,21]),import.meta.url),()=>g(()=>import("../nodes/3.BItVeWHm.js"),__vite__mapDeps([22,1,2,3,23,18,11,7,5,8,4,24,13,21,19,25,6,26,14,27,28]),import.meta.url),()=>g(()=>import("../nodes/4.BxdGK7DO.js"),__vite__mapDeps([29,1,2,3,8,19,6,10,11,12,13,4,5,14,30]),import.meta.url),()=>g(()=>import("../nodes/5.DNwW3ys7.js"),__vite__mapDeps([31,1,2,3,23,18,11,7,5,8,4,19,6,10,12,13,30]),import.meta.url),()=>g(()=>import("../nodes/6.DoGn-tkc.js"),__vite__mapDeps([32,1,2,3,13,33,7,5,8,25,34,24,4,21,14,35]),import.meta.url)],Vt=[],Ct={"/":[2],"/characters/[slug]":[3],"/docs/rinrename":[4],"/docs/unreal-characters/[slug]":[5],"/tools/blender/rinrename":[6]},Mt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Ct as dictionary,Mt as hooks,kt as matchers,It as nodes,wt as root,Vt as server_loads};