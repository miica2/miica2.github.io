import{d as h,a as i,t as P}from"./disclose-version.Do2iSzkk.js";import{f as v,p as I,z as f,s as x,t as q,a as S,U as B,c as p,o as r,r as _}from"./runtime.CrPFOO77.js";import{s as H}from"./render.B6umeER4.js";import{I as $,a as d,s as b}from"./Icon.Dj6kOuoI.js";import{c as T}from"./svelte-component.BYaHAWUA.js";import{i as U}from"./lifecycle.CihHcJ6N.js";import{l as m,s as u,p as w}from"./preload-helper.BcBSI5FE.js";/* empty css                                                  */function V(a,e){const n=m(e,["children","$$slots","$$events","$$legacy"]);$(a,u({name:"book-open-text"},()=>n,{iconNode:[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]],children:(l,c)=>{var t=h(),o=v(t);d(o,e,"default",{}),i(l,t)},$$slots:{default:!0}}))}function Z(a,e){const n=m(e,["children","$$slots","$$events","$$legacy"]);$(a,u({name:"info"},()=>n,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]],children:(l,c)=>{var t=h(),o=v(t);d(o,e,"default",{}),i(l,t)},$$slots:{default:!0}}))}function j(a,e){const n=m(e,["children","$$slots","$$events","$$legacy"]);$(a,u({name:"message-circle-warning"},()=>n,{iconNode:[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]],children:(l,c)=>{var t=h(),o=v(t);d(o,e,"default",{}),i(l,t)},$$slots:{default:!0}}))}function D(a,e){const n=m(e,["children","$$slots","$$events","$$legacy"]);$(a,u({name:"sparkles"},()=>n,{iconNode:[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]],children:(l,c)=>{var t=h(),o=v(t);d(o,e,"default",{}),i(l,t)},$$slots:{default:!0}}))}function E(a,e){const n=m(e,["children","$$slots","$$events","$$legacy"]);$(a,u({name:"square-menu"},()=>n,{iconNode:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]],children:(l,c)=>{var t=h(),o=v(t);d(o,e,"default",{}),i(l,t)},$$slots:{default:!0}}))}var F=P('<div><div class="admonition uk-card uk-card-default uk-card-body svelte-1vtl4c7"><div class="uk-card-title svelte-1vtl4c7"><!> <span class="title svelte-1vtl4c7"> </span></div> <div class="content svelte-1vtl4c7"><!></div></div></div>');function Y(a,e){I(e,!1);let n=w(e,"title",8,"Title"),s=w(e,"type",8,"Info"),l=w(e,"width",8,"100%");const c={docs:{title_color:"#004bcc",title_bg_color:"#dbe8ff",content_bg_color:"#ecf3ff",component:V},info:{title_color:"#004bcc",title_bg_color:"#dbe8ff",content_bg_color:"#ecf3ff",component:Z},tip:{title_color:"#226e41",title_bg_color:"#ccf4dc",content_bg_color:"#e9f9e9",component:D},warning:{title_color:"#ff9100",title_bg_color:"#ffeac7",content_bg_color:"#fff4e5",component:j},reference:{title_color:"#030005",title_bg_color:"#d6d6d6",content_bg_color:"#e9e9e9",component:E}};let t=B(null);s().toLowerCase()==="info"?f(t,c.info):s().toLowerCase()==="docs"?f(t,c.docs):s().toLowerCase()==="warning"?f(t,c.warning):s().toLowerCase()==="tip"?f(t,c.tip):s().toLowerCase()==="reference"&&f(t,c.reference),U();var o=F(),M=p(o),g=p(M),k=p(g);T(k,()=>r(t).component,(A,C)=>{C(A,{get color(){return r(t).title_color}})});var N=x(k,2),L=p(N);_(N),_(g);var y=x(g,2),z=p(y);d(z,e,"default",{}),_(y),_(M),_(o),q(()=>{b(o,"style",`width:${l()??""}`),b(M,"style",`border: 1px solid ${r(t).title_bg_color??""}`),b(g,"style",`color:${r(t).title_color??""}; background-color:${r(t).title_bg_color??""}`),H(L,n()),b(y,"style",`background-color: ${r(t).content_bg_color??""}`)}),i(a,o),S()}export{Y as A};