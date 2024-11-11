import{a as t,t as i}from"./disclose-version.2axuXmvt.js";import{f as u,C as o,D as c}from"./runtime.PD3e5Y_O.js";import{i as n}from"./if.7P34MCna.js";import{p as r}from"./preload-helper.CyVkl5Y8.js";import U from"./shenya-changelog._5R9gRIV.js";import{A as F}from"./admonitions.ChS9_2MB.js";import{I as E}from"./image.Baw9Xs4c.js";import{H as h}from"./youtube.svelte_svelte_type_style_lang.Ce7lHqz_.js";import{D as z}from"./doubleColumns.D4yZg4tW.js";const ue={character_name:"Shenya",cover_image:"shenya-cover.jpg",gallery:["shenya-cover.jpg","featured-image.jpg","gallery-preview1.png","gallery-preview1b.png","gallery-preview2.png","gallery-preview3-customize-looks.png","gallery-preview3-customize-looks-back.png","gallery-preview4-facial.png","gallery-preview6-gameplay-test.png","gallery-preview7-hairs.png","gallery-preview8-body.png","gallery-preview9-weapons.png","gallery-preview12-scale.png","gallery-preview13-skeleton.png","gallery-preview14-physic-assets.png","gallery-preview15-preview-map.png"],youtube:{"UE Casual Female - Shenya Showcase":"OfM1V1eI1jI","UE Casual Female - Sehnya Asset Overview":"nUcbepp6P_k","Using Kawaii Physics with Rabbit Heart Character Shenya":"HkaO96Ox8yg"},polycount:{"Shenya 1 (Jacket + Long Jeans Outfit)":"71.2k","Shenya 2 (Hoodie Jacket + Short Jeans Outfit)":"65.5k",Fullbody:"38.4k",Hair1:"13.2k",Hair2:"15.3k",Hair3:"12.7k",Hair4:"15.6k",Tanktop:"2.7k",Jacket:"13.4k",Hoodie:"Jacket(9k",Jeans:"7.6k",Short:"Jeans(4k",Cap:"1.5k",Belt:"1.7k",Boots:"7k","Long Boots":"9.6k",Sunglasses:"1.7k","Accessory1 (Includes 3 necklaces, 2 earrings and 1 bracelets; Hide or unhide parts using material)":"2.8k","Baseball Bat":"0.5k"},specs:["skeleton","morph-targets","clothing","animations","textures","materials","extra-notes"]};var K=i("<ul><li>Epic UE4 Mannequin Skeleton (No Additional Bones)</li> <li>Modular Jacket, Hair1, Hair2, Hair3 and Hair4 has additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems</li></ul>"),X=i('<ul><li>Head has all Apple Blendshapes (<a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/" rel="nofollow">refer to Apple’s ARKit</a>) and can be used with the LiveLink plugin.</li> <li>Please note that currently, there is no blueprint setup for LiveLink, and the blendshapes have not been tested due to the lack of access to Apple device</li></ul>'),q=i("<ul><li>Clothing is setup for the hairs and enabled by default.</li> <li>Includes Modular Hairs with additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems</li></ul>"),Q=i("<ul><li>Includes basic movement animations: Idle, Walk, Run, Jump_Start, Jump_Loop, and Jump Jump_End (retargeted from UE4 Mannequin animations).</li> <li>Additional demo idle animations retargeted from Paragon character Aurora and Echo are provided.</li> <li>Includes a smile-and-blink animation (<code>Anim_Shenya_Smile_Blink</code>) that can be applied additively in the Anim Graph.</li> <li>Includes a few poses (T-Pose & A-Pose) for animation retargeting.</li></ul>"),V=i("<ul><li><strong>PBR</strong> (Physically Based Rendering) Metallic/Roughness Textures</li> <li>Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)</li> <li>Basic Texture Set: <strong>Diffuse</strong> (T_***_D,) <strong>Metallic Roughness AO</strong> (T_***_MRAO), <strong>Normal</strong> (T_***_N)</li> <li>T_***_MRAO textures pack 3 channels: Metallic in Red Channel, Roughness in Green Channel, and AO in Blue Channel</li> <li>Some mesh has <strong>RGB</strong> Texture (T_***_RGB) that are used in the material to adjust colors.</li></ul> <p><strong>Texture Resolutions</strong></p> <ul><li>Body 4k, Head 2k, Eyes Eyeshadow 1k</li> <li>Hairs 2k</li> <li>Clothes 2k</li> <li>Staffs (Weapons) 2k</li></ul> <p><strong>Body</strong></p> <ul><li>Diffuse, Normal and Roughness textures.</li></ul> <p><strong>Eyes</strong></p> <ul><li>Diffuse, Normal, Specular and Height (for ParallexOcclusion)</li></ul> <p><strong>Cloth, Hairs and Staffs</strong></p> <ul><li>2k Diffuse, Normal, MRAO, RGB (Tint mask)</li> <li>2 Staffs Texture Sets: Staff1, Staff2</li> <li>5 Cloth Texture Sets: Hair1 to Hair5</li> <li>14 Cloth Texture Sets: Bloomers, Boots1, Boots2, Gloves, Hat1, Hat2, Hat3, Shoe1, Skirt1, Skirt2, Skirt3, Tops1, Tops2, Tops3</li></ul>",1),W=i('<ul><li>Includes basic master materials (MA_Generic) and specialized variants for masking (<code>MA_Generic_Masked</code>), color adjustments (<code>MA_Generic_Tint</code>), or both (<code>MA_Generic_Tint_Masked</code>).</li> <li>Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.</li> <li>Meryl and Lia (my other character) share many of the same materials. Check out <a href="https://youtu.be/1-QuyVHN56Q" rel="nofollow">Lia Asset Overview</a> for some demos on the materials.</li></ul> <p><strong>Eyes</strong></p> <ul><li>Eye material includes parameters for adjusting eye color and cornea size.</li> <li>A Duo eye material allows each eye to have a different color.</li> <li>For cinematic quality, the showcase video uses the Metahuman eye shader. You can migrate the shader, apply it to Shenya’s eyes, and adjust the iris size for a similar look. More info about using Metahuman Eyes <a href="https://miica37.github.io/docs/unreal-characters/metahuman-eyes/" rel="nofollow">here</a>.</li> <li>Eye shadow opacity can be customized.</li></ul>',1),Y=i('<!> <ul><li><strong>No LOD</strong> (the LOD in previous version has been removed)</li> <li><strong>No Blueprints</strong></li> <li><strong>No Animations</strong> (only some retargeted for demo purposes)</li></ul> <p><strong>Updates</strong></p> <ul><li>2024-08-26: Fix broken blendshapes specific to UE5.4</li> <li>2023-10-17: <a href="https://miica37.github.io/docs/shenya/changelog/#shenya-30" rel="nofollow">Shenya 3.0</a> (Adjust face, body, skinning, materials, preview level, etc. Rework 2 existing hairs and added two new hairs. Added Accessory and a baseball bat. Added Tpose and some other poses.)</li></ul>',1),Z=i("<p>In the Oct 2023 update of naming convention to the bones, I have switched to use <strong>SC_</strong> (which stands for Skeleton Chain) as the prefix to all bones.</p> <p>I might change this again in the future if I found a better way to name them.</p>",1),$=i("<p><code>hair1_front_c</code><sup>(5)</sup>, <code>hair1_front_r</code><sup>(5)</sup>, <code>hair1_front_l</code><sup>(5)</sup>, <code>hair1_side_r</code><sup>(5)</sup>, <code>hair1_side_l</code><sup>(5)</sup>, <code>hair1_back1_r</code><sup>(5)</sup>, <code>hair1_back2_r</code><sup>(5)</sup>, <code>hair1_back3_r</code><sup>(5)</sup>, <code>hair1_back1_l</code><sup>(5)</sup>, <code>hair1_back2_l</code><sup>(5)</sup>, <code>hair1_back3_l</code><sup>(5)</sup><br>(55 Additional Bones)</p>"),ee=i("<!> <!> <!> <sub>SC_01_01</sub> is the root joint while <sub>SC_01_end</sub> is the end joint. The end joint is not weighted, which means it doesn't affect anything no matter how it transforms. <!> <p>The first joint chain (<sub>SC_01</sub>) starts from the left front side of the character and ends at the right front side of the character (<sub>SC_07</sub>) (It goes counter-clockwise, if looking from the top of the character)</p> <!> <p>In the naming convention below, I will use this format: <sub>SC_01</sub><sup>(5)</sup> which indicates a joint chain of 5 (<sup>(5)</sup>) joints.</p> <!>",1),ae=i("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function he(O,s){let N=r(s,"SKELETON",8,!1),I=r(s,"MORPH_TARGETS",8,!1),M=r(s,"CLOTHING",8,!1),C=r(s,"ANIMATIONS",8,!1),R=r(s,"TEXTURES",8,!1),B=r(s,"MATERIALS",8,!1),x=r(s,"EXTRA_NOTES",8,!1),L=r(s,"ADDITIONAL_BONES",8,!1),G=r(s,"CHANGE_LOG",8,!1);var p=ae(),m=u(p);n(m,N,e=>{var a=K();t(e,a)});var g=o(m,2);n(g,I,e=>{var a=X();t(e,a)});var f=o(g,2);n(f,M,e=>{var a=q();t(e,a)});var _=o(f,2);n(_,C,e=>{var a=Q();t(e,a)});var v=o(_,2);n(v,R,e=>{var a=V();c(16),t(e,a)});var y=o(v,2);n(y,B,e=>{var a=W();c(4),t(e,a)});var k=o(y,2);n(k,x,e=>{var a=Y(),l=u(a);h(l,{title:"⚠️ Notes",level:"3"}),c(6),t(e,a)});var b=o(k,2);n(b,L,e=>{var a=ee(),l=u(a);h(l,{title:"Additional Bones for Dynamic Meshes",level:"3"});var S=o(l,2);F(S,{title:"Naming Conventions",children:(H,P)=>{var d=Z();c(2),t(H,d)},$$slots:{default:!0}});var w=o(S,2);h(w,{title:"How to read the list below? Take Hair1 as an example:",level:"4"});var A=o(w,6);E(A,{src:"/images/shenya/bones/bones-naming-example.jpg",alt:"Bones naming example"});var T=o(A,4);E(T,{src:"/images/shenya/bones/bones-chain-direction2.jpg",alt:"Bones chain direction"});var D=o(T,4);z(D,{title:"DYN_Hair1",column1:d=>{var J=$();t(d,J)},column2:d=>{},$$slots:{column1:!0,column2:!0}}),t(e,a)});var j=o(b,2);n(j,G,e=>{U(e)}),t(O,p)}export{he as default,ue as metadata};