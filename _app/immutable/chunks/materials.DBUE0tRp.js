import{a as o,t as n}from"./disclose-version.2axuXmvt.js";import{p as Y,f as d,C as e,a as q,D as C}from"./runtime.PD3e5Y_O.js";import{i as J}from"./lifecycle.BuVRrBkc.js";import{p as N}from"./preload-helper.CyVkl5Y8.js";import{P as z}from"./collapsible.CWsgH6dY.js";import{A as s}from"./admonitions.ChS9_2MB.js";import{I as a}from"./image.Baw9Xs4c.js";import{H as i}from"./youtube.svelte_svelte_type_style_lang.Ce7lHqz_.js";import{a as K}from"./index-client.DYpWUXAt.js";const ce={title:"Materials"};var L=n('<p>”<mark>MA_</mark>” is the prefix for <mark><strong>MA</strong>ster Materials</mark>. Master materials <span class="smaller-font">(other than MA_Transparent*)</span> are not meant to be used as it is and should be instanced.</p> <p>”<mark>MI_</mark>” is the prefix for <mark>Instanced Materials</mark>.</p> <small>* You can use <b>MA_Transparent</b> to temporarily and quickly hide objects in the scene.</small>',1),Q=n("<p><code>MA_Generic_Masked</code> inherited all the parameters from <code>MA_Generic</code></p>"),W=n("<p>There is a material called <code>MA_Vertex_Color_Display</code> in <code>Demo &gt; Background_Assets &gt; Materials</code> that you can use directly to see the vertex color of a mesh.</p>"),X=n("<p><code>MA_Generic_Tint</code> inherited all the parameters from <code>MA_Generic</code></p>"),Z=n("<p>The order of process looks like this:</p> <!> <p>Power is the math’s power, and the <strong>Power</strong> node of the material graph. The color value change exponentially when adjusting the value. I don’t understand math and somehow reducing the value towards 0 (or negatives) brighten up the color while increasing it darkens the color.</p> <p>The reason Power2 exists is because sometimes I couldn’t get a near total black color using Power1. If I remove Power1 and just use Power2, the effect is different, that’s why I use the two of them. Most of the time though, I think you can untick Power2 and just use Power1.</p>",1),ee=n("<p>In cases where the RGB map is not provided, like for the skirt (or the gloves) for example, you can use <code>T_Uniform_RGB</code> map to tint the whole mesh. <em>You can also use it for Meryl hairs</em>.</p> <!> <!>",1),ae=n('<!> <p>These are some of the materials. <code>MA_Generic</code> and its variations (masked, tint and masked+tint) is commonly used for the clothing on the character.</p> <!> <!> <br> <!> <!> <br> <!> <!> <p>Besides masking (hiding a part of mesh), it’s also used by the caps or hats to disable their shadows</p> <!> <p>The masking only works if the mesh has vertex colors (red, green or blue).</p> <!> <!> <!> <p>The Shadow parameter can be used to turn shadow on and off (Value <mark>0.0</mark> == Shadow <mark>Off</mark>, Value <mark>1.0</mark> == Shadow <mark>On</mark>. The value can only be either 1.0 or 0.0, values in between doesn’t work unfortunately)</p> <!> <!> <!> <br> <!> <!> <!> <!> <p>This material uses the provided RGB map to tint different areas with different colors.</p> <!> <!> <br> <!> <p>Just a combination of <code>MA_Generic_Tint</code> and <code>MA_Generic_Masked</code></p> <br> <hr> <h2 id="skin-materials">Skin Materials</h2> <!> <br> <!> <!> <!> <!>',1);function pe(D,c){Y(c,!1);let E=N(c,"callbackAfterUpdate",8);K(()=>{E()()}),J();var p=ae(),h=d(p);z(h,{title:"Materials"});var _=e(h,4);a(_,{src:"/images/common/materials/materials-diagram.jpg",alt:"Materials diagram"});var f=e(_,2);s(f,{title:"Naming Conventions",children:(r,l)=>{var t=L();C(4),o(r,t)},$$slots:{default:!0}});var g=e(f,4);i(g,{title:"MA_Generic",level:"3"});var u=e(g,2);a(u,{src:"/images/common/materials/ma-generic-parameters.jpg",alt:"MA_Generic Parameters"});var v=e(u,4);i(v,{title:"MA_Generic_Masked",level:"3"});var k=e(v,2);s(k,{title:"Extends MA_Generic",children:(r,l)=>{var t=Q();o(r,t)},$$slots:{default:!0}});var M=e(k,4);a(M,{src:"/images/common/materials/ma-generic-masked-parameters.jpg",alt:"MA_Generic_Masked Parameters"});var w=e(M,4);a(w,{src:"/images/common/materials/vertex-color-meshes.jpg",alt:"Vertex Color Meshes"});var b=e(w,2);s(b,{title:"Display the vertex color of the mesh with this material!",children:(r,l)=>{var t=W();o(r,t)},$$slots:{default:!0}});var A=e(b,2);i(A,{title:"Hide Shadows",level:"4"});var $=e(A,4);a($,{src:"/images/common/materials/shadow-parameter.jpg",alt:"Shadow Parameter"});var P=e($,2);a(P,{src:"/images/common/materials/hat-shadow-on-off.webp",alt:"Hat Shadow On/Off"});var y=e(P,2);s(y,{title:"Be aware! It will also affect ground shadow!",type:"warning",children:(r,l)=>{a(r,{src:"/images/common/materials/ground-shadow-on-off.webp",alt:"Ground Shadow On/Off"})},$$slots:{default:!0}});var G=e(y,4);i(G,{title:"MA_Generic_Tint",level:"3"});var T=e(G,2);s(T,{title:"Extends MA_Generic",children:(r,l)=>{var t=X();o(r,t)},$$slots:{default:!0}});var x=e(T,2);a(x,{src:"/images/common/materials/ma-generic-tint-parameters.jpg",alt:"MA_Generic_Tint Parameters"});var j=e(x,2);s(j,{title:"Power1? Power2",children:(r,l)=>{var t=Z(),m=e(d(t),2);a(m,{src:"/images/common/materials/tint-material-process.jpg",alt:"Tint Material Process"}),C(4),o(r,t)},$$slots:{default:!0}});var I=e(j,4);a(I,{src:"/images/common/materials/rgb-tint-texture.jpg",alt:"RGB Tint Texture"});var S=e(I,2);s(S,{title:"Uses of T_Uniform_RGB",children:(r,l)=>{var t=ee(),m=e(d(t),2);a(m,{src:"/images/common/materials/skirt-highlight.jpg",alt:"Skirt Highlight"});var F=e(m,2);a(F,{src:"/images/common/materials/uniform-rgb-map.jpg",alt:"Uniform RGB Map"}),o(r,t)},$$slots:{default:!0}});var B=e(S,4);i(B,{title:"MA_Generic_Tint_Masked",level:"3"});var U=e(B,10);a(U,{src:"/images/common/materials/skin-materials-diagram.jpg",alt:"Skin Materials diagram"});var O=e(U,4);i(O,{title:"MA_Fullbody",level:"3"});var R=e(O,2);a(R,{src:"/images/common/materials/ma-full-body-parameters.jpg",alt:"MA_Fullbody Parameters"});var H=e(R,2);i(H,{title:"Eye Makeup Tint",level:"4"});var V=e(H,2);a(V,{src:"/images/meryl/changelog/2023-11-08/eye-makeup.webp",alt:"Eye makeup tint"}),o(D,p),q()}export{pe as default,ce as metadata};
