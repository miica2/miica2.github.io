import{a as n,t as i}from"./disclose-version.UQu7LZ6h.js";import{i as we}from"./legacy.kSRMnq6f.js";import{p as Re,f as c,w as e,a as Ie,x as me}from"./runtime.r1WCR3Wd.js";import{p as Ke}from"./preload-helper.C8AysdKH.js";import{a as ye}from"./index-client.B-CySuO5.js";import{P as Se,C as ue}from"./collapsible.DduFJSQQ.js";import{A as l}from"./admonitions.COOo_zB2.js";import{I as t}from"./image.BVlKZ4XJ.js";import{Y as fe}from"./youtube.7AIOhL8B.js";import{H as a}from"./youtube.svelte_svelte_type_style_lang.C2KVKcM-.js";const Je={title:"Animations Retargeting"};var $e=i('<p>The <a href="https://docs.unrealengine.com/5.3/en-US/animation-retargeting-in-unreal-engine/" rel="nofollow">Unreal Engine Documentation on Animation Retargeting</a> can be a useful introduction for beginners.</p>'),Ue=i('<p>Unreal Engine Documentation on <a href="https://docs.unrealengine.com/5.3/en-US/retargeting-bipeds-with-ik-rig-in-unreal-engine/" rel="nofollow">Retargeting Bipeds with IK Rig</a> (Basic Overview)</p> <p>Unreal Engine Documentation on <a href="https://docs.unrealengine.com/5.3/en-US/retargeting-bipeds-with-ik-rig-in-unreal-engine/" rel="nofollow">IK Rig Retargeting</a> (Detailed description of all the settings)</p>',1),Ce=i("<p>Creating an IK Rig can be daunting because of many steps it involved, I find that I can just duplicate an existing IK Rig and change the <strong>Preview Skeletal Mesh</strong> inside and it * <em>should</em> * works the same (WARNING: I haven’t do test to confirm they are exactly the same, but things looks fine and also works fine when I just duplicate)</p>"),Ee=i("<p>You can create keyboard shortcuts in <strong>Editor Preferences</strong> to speed up the process. For example, we can use hotkey <kbd>C</kbd> to create New Retarget Chain.</p> <!>",1),Pe=i("<p>Make sure the name is the <u>same across all your different IK Rigs</u> so later on when we do chain-mapping (in the retargeter), the program will have no problem matching the same name.</p>"),je=i("<p>Make sure the <strong>Start Bone</strong> and <strong>End Bone</strong> is set to the correct joint, as it can be hard to debug this later. Also check the “IK Rig Output Log” for any errors.</p> <p>When mirroring the finger chains, UE5.2 didn’t mirror them correctly and I have to fix it.</p> <!>",1),Te=i("<ul><li>Look for the name while ignoring “ik_” (eg. ik_<strong>foot_root</strong> -> FootRoot)</li> <li>“Left” and “Right” is at the start of the name (eg. ik_foot_l -> <strong>Left</strong>Foot )</li> <li>Replace ”_l” with “Left” (eg. ik_foot_l -> <strong>Left</strong>Foot )</li> <li>All the names ended in “IK” (eg. ik_foot_l -> LeftFoot<strong>IK</strong> )</li></ul>"),Ae=i("<p>The setup below is a mimic of the setup from the stock UE4 Mannuquin IK Rig, so follow along if your character uses the same UE4 Mannequin skeleton.</p>"),Be=i("<p>The solver that we are going to create is called the “Full Body IK” solver. Without it, we won’t be able to use IK when we are inside the IK Retargeter.</p> <p>*This only applies to your <u><strong><em>Target</em></strong></u> IK Rig. For your <strong><em>Source</em></strong> IK Rig, I don’t think you need to create any solver for it though.</p> <!>",1),De=i('<p>Create <u>Full Body IK</u> solver and <u>Set Root Bone on Selected Solver</u>.</p> <!> <!> <p>Create 4 IK Goals (on the hand_l, hand_r, foot_l, foot_r).</p> <p>Tips: Hotkey <kbd>Ctrl + N</kbd></p> <!> <p>Drag the foot goals to go under ball joints.</p> <!> <p>The foots got broken. Reset the foots goal Transforms to fix it.</p> <!> <!> <p>Create <strong>Bone Settings</strong> for the <u>pelvis</u>, <u>spines</u>, <u>clavicles</u>, <u>thighs</u> and <u>calves</u>.</p> <!> <p>Set <strong>Rotation Stiffness</strong> on <u>Pelvis</u>, all the <u>Spines</u> and <u>Clavicles</u>, with the following values:</p> <table class="uk-table"><thead><tr><th>Bone Name</th><th>Bone Rotation Stiffness</th></tr></thead><tbody><tr><td>pelvis</td><td>1</td></tr><tr><td>spine_01</td><td>0.784</td></tr><tr><td>spine_02</td><td>0.928</td></tr><tr><td>spine_03</td><td>0.936</td></tr><tr><td>clavicle_l</td><td>1</td></tr><tr><td>clavicle_r</td><td>1</td></tr></tbody></table> <!> <p>Set <strong>Preferred Angles</strong> on <u>thighs</u> and <u>calfs</u>, with the following values</p> <table class="uk-table"><thead><tr><th>Bone Name</th><th>Bone Preferrred Angles</th></tr></thead><tbody><tr><td>thigh_l, thigh_r</td><td>(0, 0, -90)</td></tr><tr><td>calf_l, calf_r</td><td>(0, 0, 90)</td></tr></tbody></table> <!>',1),Fe=i("<p>Finally, last check on the chain’s naming and see if the chain point to the correct bones (eg. LeftRing: <code>ring_01_l</code> -> <code>ring_03_l</code> (correct), LeftRing: <code>ring_01_l</code> -> <code>ring_*02*_l</code> (incorrect)).</p> <!>",1),Me=i("<p>I use the format of “RTG_<code>&#123;source&#125;</code>_to_<code>&#123;target&#125;</code>”, eg. <code>RTG_UE4Mannequin_to_Shenya</code>.</p> <p><code>&#123;source&#125;</code> is the character that we want to copy animations from, <code>&#123;target&#125;</code> is the character that wants to have the new animations.</p>",1),Le=i("<p>Note that the interface is a bit different between UE5.2 and UE5.3. In UE 5.2, you want to press on the “Show Retarget Pose” green button ; In UE5.3, you click on the 3 vertical dots and select “Showing Retarget Pose”.</p> <!>",1),Ne=i('<!> <!> <blockquote><p>Animation Retargeting is a feature that allows animations to be reused between characters that use the <u>same Skeleton</u> asset but <u>may have vastly different proportions</u>.</p></blockquote> <!> <p>Before retargeting is applied, you can already use animations between any Skeletal Meshes that share the <strong>same Skeleton</strong> asset (check out UE5’s <a href="https://docs.unrealengine.com/5.3/en-US/skeletons-in-unreal-engine/#compatibleskeletons" rel="nofollow">Compatible Skeletons feature</a>).</p> <p>That means you don’t have to do any retargeting to characters that have the <strong>exact same skeleton and same skeleton proportion</strong> (you can use <a href="https://docs.unrealengine.com/5.3/en-US/skeletons-in-unreal-engine/#compatibleskeletons" rel="nofollow">Compatible Skeletons</a>).</p> <p>But for Rabbit Heart characters, they all have a different proportion from the UE4 and UE5 Mannequin, so retargeting is needed to convert the animation from one proportion to another proportion.</p> <!> <br> <br> <!> <!> <p>In UE5, you need to use <a href="https://docs.unrealengine.com/5.3/en-US/ik-rig-animation-retargeting-in-unreal-engine/" rel="nofollow">IK Rig + IK Retargeter</a>, the setup is a bit more involved, but it offers more robust retarget capabilities than UE4.</p> <!> <p>The process looks like this:</p> <!> <ol><li><a href="#create-ik-rig">Create/Prepare IK Rig for both source and target characters</a>.</li> <li><a href="#create-ik-retargeter">Create an IK Retargeter</a>, select the two IK Rigs when prompted (UE5.2, for UE5.3 manually select them in the Details panels). Tweak settings and export animation from inside the <strong>IK Retargeter window</strong> (see the picture below).</li></ol> <!> <p>Check out this video to see the retargeting process for Shenya in UE5 (this video should also applies to other Rabbit Heart characters).</p> <!> <p>Part 2 (An update to video above):</p> <!> <br> <!> <!> <!> <!> <!> <p>The Third Person Content Pack contains the stock IK Rig for UE4 and UE5 Mannequins that we can duplicate and use. The IK Rigs for the UE4 and UE5 mannequins are located in their own <code>Rigs</code> folder.</p> <!> <p>Since Rabbit Heart characters are using the same skeleton as UE4’s Mannequin, you can duplicate the UE4 IK Rig <code>IK_UE4_Mannequin</code> and just change the <strong>Preview Skeletal Mesh</strong> to one of my character.</p> <!> <br> <!> <!> <!> <!> <p>Give it a meaningful name and double click the asset to open up the IK Rig Window</p> <!> <p>The Window is empty when first created, <strong>select your skeletal mesh</strong> in the details panel to load it.</p> <!> <!> <!> <!> <p>These are a list of chains we need to create.</p> <!> <!> <u>Select the <b>Left</b> joint chains</u> and <u><b>Mirror</b> them</u> to create the Right side. <!> <!> <p>Create chains for the IK bones. There are 7 of them. These are <strong><em>optional</em></strong> since <a href="https://forums.unrealengine.com/t/ik-retargeter-is-not-retargeting-ik-bone-information/" rel="nofollow">UE is not able to retarget IK bones properly</a>. I haven’t have success with retargeting IK bones, please let me know if you have any solutions.</p> <p>There’s a <a href="https://www.unrealengine.com/marketplace/en-US/product/free-bone-snapper" rel="nofollow"><strong>Free</strong> plugin that can retarget IK bones: Free Bone Snapper</a>. (<a href="https://www.youtube.com/watch?v=G398nh4XnCM" rel="nofollow">Video</a>)</p> <!> <!> <!> <!> <br> <!> <br> <!> <br> <!> <!> <br> <!> <p>After we got both IK Rigs for the source and target character, create an <strong>IK Retargeter</strong>. Right click in the Content Browser, select <code>Animation &gt; IK Rig &gt; IK Retargeter</code></p> <!> <!> <p>Double click the IK Retargeter asset to open the IK Retargeter Window.</p> <!> <!> <!> <!> <!> <!> <!>',1);function Ze(ve,p){Re(p,!1);let _e=Ke(p,"callbackAfterUpdate",8);ye(()=>{_e()()}),we();var m=Ne(),u=c(m);Se(u,{title:"Animations Retargeting"});var f=e(u,2);l(f,{title:"Official Documentations",type:"Docs",children:(o,s)=>{var r=$e();n(o,r)},$$slots:{default:!0}});var v=e(f,4);t(v,{src:"/images/common/retargeting/character-lineup.jpg",alt:"Character Lineup.>>Showing the different proportions among Rabbit Heart characters"});var _=e(v,8);t(_,{src:"/images/common/retargeting/retarget-before-after.webp",alt:"Retarget Before After",width:"70%"});var b=e(_,6);a(b,{title:"Retargeting in Unreal Engine 5",level:"2"});var k=e(b,2);l(k,{title:"Official Documentations",type:"Docs",children:(o,s)=>{var r=Ue();me(2),n(o,r)},$$slots:{default:!0}});var w=e(k,4);a(w,{title:"Process Summary",level:"3"});var R=e(w,4);t(R,{src:"/images/common/retargeting/ue5-retarget-process.jpg",alt:"UE5 Retarget Process"});var I=e(R,4);t(I,{src:"/images/common/retargeting/ik-retargeter-window.jpg",alt:"IK Retargeter Window"});var K=e(I,4);fe(K,{code:"SrzN_egLZYk",scale:"1"});var y=e(K,4);fe(y,{code:"X6ur4suLaAo",scale:"1"});var S=e(y,4);a(S,{title:"Create IK Rig",level:"3"});var $=e(S,2);a($,{title:"Option 1: Duplicate Existing IK Rig",level:"4"});var U=e($,2);l(U,{title:"Tips",type:"tip",children:(o,s)=>{var r=Ce();n(o,r)},$$slots:{default:!0}});var C=e(U,2);a(C,{title:"Get Stock IK Rig from Third Person Content Pack",level:"5"});var E=e(C,2);t(E,{src:"/images/common/retargeting/add-content-pack.jpg",alt:"Add Feature or Content Pack"});var P=e(E,4);t(P,{src:"/images/common/retargeting/stock-ik-rig-location.webp",alt:"Stock IK Rig Location"});var j=e(P,4);t(j,{src:"/images/common/retargeting/duplicate-ue4-ik-rig.webp",alt:"Duplicate UE4 IK Rig"});var T=e(j,4);a(T,{title:"Option 2: Create IK Rig from Scratch",level:"4"});var A=e(T,2);ue(A,{title:"Tips: Create Keyboard Shortcuts",children:(o,s)=>{l(o,{title:"Tips: Create Keyboard Shortcuts",type:"tip",children:(r,g)=>{var d=Ee(),h=e(c(d),2);t(h,{src:"/images/common/retargeting/create-keyboard-shortcuts-for-ik-rig.jpg",alt:"Create Keyboard Shortcuts for IK Rig"}),n(r,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var B=e(A,2);a(B,{title:"0. Right click in the Content Browser, select `Animation > IK Rig > IK Rig`",level:"5"});var D=e(B,2);t(D,{src:"/images/common/retargeting/create-ik-rig-menu.jpg",alt:"Create IK Rig with Menu"});var F=e(D,4);t(F,{src:"/images/common/retargeting/ik-rig-asset-thumbnail.jpg",alt:"IK Rig Asset Thumbnail"});var M=e(F,4);t(M,{src:"/images/common/retargeting/set-skeletal-mesh.jpg",alt:"Set Skeletal Mesh"});var L=e(M,2);a(L,{title:"1. Set Retarget Root on **pelvis** (first thing first!).",level:"5"});var N=e(L,2);t(N,{src:"/images/common/retargeting/set-retarget-root.jpg",alt:"Set Retarget Root"});var x=e(N,2);a(x,{title:"2. Create Retarget Chains",level:"5"});var q=e(x,4);t(q,{src:"/images/common/retargeting/joint-chain-list.jpg",alt:"Joint Chain List"});var O=e(q,2);l(O,{title:"Double Check Naming",type:"warning",children:(o,s)=>{var r=Pe();n(o,r)},$$slots:{default:!0}});var G=e(O,6);t(G,{src:"/images/common/retargeting/mirror-chain.jpg",alt:"Mirror Chain"});var W=e(G,2);l(W,{title:"Double Check Start Bone & End Bone",type:"warning",children:(o,s)=>{var r=je(),g=e(c(r),4);t(g,{src:"/images/common/retargeting/mirror-chain-error.jpg",alt:"IK Rig Output Log shows an error when we mirror the chains (UE5.2)"}),n(o,r)},$$slots:{default:!0}});var H=e(W,6);t(H,{src:"/images/common/retargeting/ik-chains.jpg",alt:"IK Chains to create"});var Y=e(H,2);l(Y,{title:"IK Naming Tips",type:"tip",children:(o,s)=>{var r=Te();n(o,r)},$$slots:{default:!0}});var V=e(Y,2);a(V,{title:"3. Setup IK Solver",level:"5"});var X=e(V,2);l(X,{title:"Note",children:(o,s)=>{var r=Ae();n(o,r)},$$slots:{default:!0}});var z=e(X,4);l(z,{title:"Why create the IK Solver?",children:(o,s)=>{var r=Be(),g=e(c(r),4);t(g,{src:"/images/common/retargeting/ik-vs-no-ik.webp",alt:"IK On VS OK Off"}),n(o,r)},$$slots:{default:!0}});var J=e(z,4);ue(J,{title:"Setup IK Solver",children:(o,s)=>{var r=De(),g=e(c(r),2);t(g,{src:"/images/common/retargeting/create-full-body-ik-solver.jpg",alt:"Create Full Body IK Solver"});var d=e(g,2);t(d,{src:"/images/common/retargeting/set-root-bone-on-solver.jpg",alt:"Set Root Bone on Solver"});var h=e(d,6);t(h,{src:"/images/common/retargeting/create-ik-goals.jpg",alt:"Create IK Goals"});var ge=e(h,4);t(ge,{src:"/images/common/retargeting/drag-foot-l-goal.webp",alt:"Drag foot_l goal to under ball_l"});var ce=e(ge,4);t(ce,{src:"/images/common/retargeting/broken-foot.jpg",alt:"Broken Foot"});var de=e(ce,2);t(de,{src:"/images/common/retargeting/reset-foot-goal-transforms.jpg",alt:"Reset Foot Goal's Transforms in the Details panel"});var he=e(de,4);t(he,{src:"/images/common/retargeting/create-fullbodyik-bone-settings.webp",alt:"Create Fullbody IK Bone Settings"});var pe=e(he,6);t(pe,{src:"/images/common/retargeting/set-rotation-stiffness.jpg",alt:"Set Rotation Stiffness"});var ke=e(pe,6);t(ke,{src:"/images/common/retargeting/set-preferred-angles.jpg",alt:"Set Preferred Angles"}),n(o,r)},$$slots:{default:!0}});var Z=e(J,4);a(Z,{title:"4. Done",level:"5"});var Q=e(Z,2);l(Q,{title:"Final Check",type:"warning",children:(o,s)=>{var r=Fe(),g=e(c(r),2);t(g,{src:"/images/common/retargeting/check-naming-and-bones-hierarchy.jpg",alt:"Check chain names and bones"}),n(o,r)},$$slots:{default:!0}});var ee=e(Q,4);a(ee,{title:"Create IK Retargeter",level:"3"});var te=e(ee,4);t(te,{src:"/images/common/retargeting/create-ik-retargeter-menu.jpg",alt:"Set Preferred Angles"});var re=e(te,2);l(re,{title:"Naming Convention",children:(o,s)=>{var r=Me();me(2),n(o,r)},$$slots:{default:!0}});var oe=e(re,4);a(oe,{title:"1. Select the source and target IK Rig in the Details panel.",level:"4"});var ae=e(oe,2);t(ae,{src:"/images/common/retargeting/ik-retargeter-window2.jpg",alt:"IK Retargeter Window"});var ne=e(ae,2);a(ne,{title:"2. Switch to Retarget Pose",level:"4"});var ie=e(ne,2);l(ie,{title:"Difference between UE5.2 VS UE5.3",children:(o,s)=>{var r=Le(),g=e(c(r),2);t(g,{src:"/images/common/retargeting/retargeter-versions.jpg",alt:"IK Retargeter Interface difference between UE5.2 & UE5.3"}),n(o,r)},$$slots:{default:!0}});var se=e(ie,2);a(se,{title:"3. Import Pose Asset",level:"4"});var le=e(se,2);t(le,{src:"/images/common/retargeting/import-pose-asset.jpg",alt:"Import Pose Asset"});var be=e(le,2);t(be,{src:"/images/common/retargeting/select-pose-asset.jpg",alt:"Select Pose Asset"}),n(ve,m),Ie()}export{Ze as default,Je as metadata};