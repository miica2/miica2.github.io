const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BmL9R1ef.js","../chunks/preload-helper.BcBSI5FE.js","../chunks/runtime.CrPFOO77.js","../chunks/disclose-version.Do2iSzkk.js","../chunks/Icon.Dj6kOuoI.js","../chunks/render.B6umeER4.js","../chunks/lifecycle.CihHcJ6N.js","../chunks/header.uOPfOWAV.js","../chunks/stores.D5hT3Bzb.js","../chunks/entry.CLqQVZ4O.js","../chunks/control.CYgJF_JY.js","../assets/header.CMz6Dkbz.css","../assets/0.pyt-uBZm.css","../nodes/1.Bvk1MsXd.js","../nodes/2.BquoalhH.js","../assets/2.T6YH40Rf.css","../nodes/3.C-ZwdjAt.js","../chunks/index.BcCMpl4b.js","../chunks/image.Jp-1ckag.js","../chunks/youtube.svelte_svelte_type_style_lang.DeWlfTj1.js","../assets/youtube.C2Ieiejs.css","../assets/image.BW2d3tCU.css","../chunks/svelte-component.BYaHAWUA.js","../assets/3.CZ4d3TuR.css","../nodes/4.PhxhaoF6.js","../nodes/5.MW2Dh_N0.js","../assets/5.BS8CH3F4.css"])))=>i.map(i=>d[i]);
var B=e=>{throw TypeError(e)};var Y=(e,t,r)=>t.has(e)||B("Cannot "+r);var c=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),A=(e,t,r)=>t.has(e)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),T=(e,t,r,i)=>(Y(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{p as k,o as J,c as K,i as L,_ as v}from"../chunks/preload-helper.BcBSI5FE.js";import{Y as N,Z as Q,l as U,A as W,_ as X,o as l,z as b,$ as p,B as $,y as tt,p as et,u as rt,j as st,a0 as at,f as R,s as ot,a as it,a1 as w,a2 as D,c as nt,t as ct,r as ut}from"../chunks/runtime.CrPFOO77.js";import{h as ft,m as dt,u as lt,s as _t}from"../chunks/render.B6umeER4.js";import{d as I,a as y,t as z,b as mt}from"../chunks/disclose-version.Do2iSzkk.js";import{c as V}from"../chunks/svelte-component.BYaHAWUA.js";function q(e,t){return e===t||(e==null?void 0:e[X])===t}function j(e={},t,r,i){return N(()=>{var o,n;return Q(()=>{o=n,n=[],U(()=>{e!==r(...n)&&(t(e,...n),o&&q(r(...o),e)&&t(null,...o))})}),()=>{W(()=>{n&&q(r(...n),e)&&t(null,...n)})}}),e}function ht(e){return class extends gt{constructor(t){super({component:e,...t})}}}var _,u;class gt{constructor(t){A(this,_);A(this,u);var n;var r=new Map,i=(s,a)=>{var m=tt(a);return r.set(s,m),m};const o=new Proxy({...t.props||{},$$events:{}},{get(s,a){return l(r.get(a)??i(a,Reflect.get(s,a)))},has(s,a){return l(r.get(a)??i(a,Reflect.get(s,a))),Reflect.has(s,a)},set(s,a,m){return b(r.get(a)??i(a,m),m),Reflect.set(s,a,m)}});T(this,u,(t.hydrate?ft:dt)(t.component,{target:t.target,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((n=t==null?void 0:t.props)!=null&&n.$$host)||t.sync===!1)&&p(),T(this,_,o.$$events);for(const s of Object.keys(c(this,u)))s==="$set"||s==="$destroy"||s==="$on"||$(this,s,{get(){return c(this,u)[s]},set(a){c(this,u)[s]=a},enumerable:!0});c(this,u).$set=s=>{Object.assign(o,s)},c(this,u).$destroy=()=>{lt(c(this,u))}}$set(t){c(this,u).$set(t)}$on(t,r){c(this,_)[t]=c(this,_)[t]||[];const i=(...o)=>r.call(this,...o);return c(this,_)[t].push(i),()=>{c(this,_)[t]=c(this,_)[t].filter(o=>o!==i)}}$destroy(){c(this,u).$destroy()}}_=new WeakMap,u=new WeakMap;const kt={};var vt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),yt=z("<!> <!>",1);function Et(e,t){et(t,!0);let r=k(t,"components",23,()=>[]),i=k(t,"data_0",3,null),o=k(t,"data_1",3,null);rt(()=>t.stores.page.set(t.page)),st(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),o(),t.stores.page.notify()});let n=w(!1),s=w(!1),a=w(null);J(()=>{const h=t.stores.page.subscribe(()=>{l(n)&&(b(s,!0),at().then(()=>{b(a,K(document.title||"untitled page"))}))});return b(n,!0),h});const m=D(()=>t.constructors[1]);var C=yt(),M=R(C);L(M,()=>t.constructors[1],h=>{var d=I();const E=D(()=>t.constructors[0]);var P=R(d);V(P,()=>l(E),(g,O)=>{j(O(g,{get data(){return i()},get form(){return t.form},children:(f,Pt)=>{var S=I(),F=R(S);V(F,()=>l(m),(G,H)=>{j(H(G,{get data(){return o()},get form(){return t.form}}),x=>r()[1]=x,()=>{var x;return(x=r())==null?void 0:x[1]})}),y(f,S)},$$slots:{default:!0}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),y(h,d)},h=>{var d=I();const E=D(()=>t.constructors[0]);var P=R(d);V(P,()=>l(E),(g,O)=>{j(O(g,{get data(){return i()},get form(){return t.form}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),y(h,d)});var Z=ot(M,2);L(Z,()=>l(n),h=>{var d=vt(),E=nt(d);L(E,()=>l(s),P=>{var g=mt();ct(()=>_t(g,l(a))),y(P,g)}),ut(d),y(h,d)}),y(e,C),it()}const Lt=ht(Et),wt=[()=>v(()=>import("../nodes/0.BmL9R1ef.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>v(()=>import("../nodes/1.Bvk1MsXd.js"),__vite__mapDeps([13,3,2,5,6,8,9,10]),import.meta.url),()=>v(()=>import("../nodes/2.BquoalhH.js"),__vite__mapDeps([14,3,2,15]),import.meta.url),()=>v(()=>import("../nodes/3.C-ZwdjAt.js"),__vite__mapDeps([16,1,2,17,10,3,5,4,6,18,19,20,21,22,23]),import.meta.url),()=>v(()=>import("../nodes/4.PhxhaoF6.js"),__vite__mapDeps([24,3,2]),import.meta.url),()=>v(()=>import("../nodes/5.MW2Dh_N0.js"),__vite__mapDeps([25,1,2,17,10,3,5,4,6,22,9,7,8,11,26]),import.meta.url)],Dt=[],It={"/":[2],"/characters/[slug]":[3],"/docs/unreal-characters":[4],"/docs/unreal-characters/[slug]":[5]},Vt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{It as dictionary,Vt as hooks,kt as matchers,wt as nodes,Lt as root,Dt as server_loads};