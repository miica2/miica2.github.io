import{a,t as i}from"./disclose-version.nU4ocUCp.js";import{f as g,w as r,x as h}from"./runtime.DuHzcu-5.js";import{i as l}from"./if.COq7B9UT.js";import{p as s}from"./preload-helper.CViKSEXs.js";import C from"./meryl-changelog.C01edQEo.js";import{A}from"./admonitions.CbPheKMP.js";import{H as S,I as G}from"./youtube.svelte_svelte_type_style_lang.BRifyMv5.js";import{D as L}from"./doubleColumns.dlKXo9Bq.js";const re={character_name:"Meryl",cover_image:"meryl-cover.jpg",gallery:["meryl-cover.jpg","featured-image.jpg","gallery-preview1.png","gallery-preview1b.png","gallery-preview2.png","gallery-preview2b.png","gallery-preview3-customize-looks.png","gallery-preview3-customize-looks-back.png","gallery-preview4-facial.png","gallery-preview5-skin-colors.png","gallery-preview6-gameplay-test.png","gallery-preview7-hairs.png","gallery-preview7-hairs.png","gallery-preview8-body.png","gallery-preview9-weapons.png","gallery-preview10-ears.png","gallery-preview11-fingernails.png","gallery-preview12-scale.png","gallery-preview13-skeleton.png","gallery-preview14-physic-assets.png","gallery-preview15-preview-map.png"],youtube:{"UE Apprentice Witch Girl - Meryl Showcase":"54WlGsCpfjo","UE Apprentice Witch Girl - Meryl Asset Overview":"w5Ii1Vk1nZI"},polycount:{Meryl1:"48.6k",Meryl2:"52k",Meryl3:"53.9k",Fullbody:"32.6k",Hair1:"4.8k",Hair2:"6k",Hair3:"7.2k",Hair4:"6.6k",Hair5:"7.2k",Hat1:"2.2k",Hat2:"2.1k",Hat3:"3.8k",Staff1:"6.8k",Staff2:"1.2k",Top1:"8.6k",Top2:"8k",Top3:"10.6k",Skirt1:"8.3k",Skirt2:"3.2k",Skirt3:"10.4k",Bloomers:"1.2k",Stockings:"3.7k",Boots1:"4.2k",Boots2:"4.3k",Shoe1:"3k"}};var P=i('<ul><li>Clothing is setup for the hairs and skirt</li> <li>Modular Hairs, Hats (only Hat1 and Hat3) and Skirts with additional bones for you to create a much better looking simulation with <a href="https://github.com/pafuhana1213/KawaiiPhysics" rel="nofollow">KawaiiPhysics</a> and <a href="https://github.com/SPARK-inc/SPCRJointDynamicsUE4" rel="nofollow">SPCR Joint Dynamics</a></li></ul>'),j=i("<ul><li>Only Basic Idle, Walk, Run, Jump_Start, Jump_Loop, Jump_End (Retargeted from UE4’s Mannequin’s Animation)</li> <li>There are also a few Idle animations retargeted from Paragon characters (Yin, Shinbi, Aurora) and Echo, but they are just for demo purposes</li> <li>There is a Smile Blink Animation that you can use to add on top of other animations (using Additive in Anim Graph)</li> <li>T-Pose is provided for animation retargeting.</li></ul>"),J=i("<ul><li><strong>PBR</strong> (Physically Based Rendering) Metallic/Roughness Textures</li> <li>Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)</li> <li>Basic Texture Set: <strong>Diffuse</strong> (T_***_D,) <strong>Metallic Roughness AO</strong> (T_***_MRAO), <strong>Normal</strong> (T_***_N)</li> <li>T_***_MRAO textures pack 3 channels: Metallic in Red Channel, Roughness in Green Channel, and AO in Blue Channel</li> <li>Some mesh has <strong>RGB</strong> Texture (T_***_RGB) that are used in the material to adjust colors.</li></ul> <p><strong>Texture Resolutions</strong></p> <ul><li>Body 4k, Head 2k, Teeth Tongue 2k, Eyes Eyeshadow Eyebrow Eyelashes 1k</li> <li>Hairs 4k</li> <li>Clothes 2k</li> <li>Weapons 2k</li></ul> <p><strong>Body</strong></p> <ul><li>Diffuse, Normal, Roughness and AO textures.</li></ul> <p><strong>Eyes</strong></p> <ul><li>Diffuse, Normal and Specular</li></ul> <p><strong>Hairs</strong></p> <ul><li>Albedo, Alpha, Depth, Direction, ID and Root</li></ul> <p><strong>Cloth</strong></p> <ul><li>10 Cloth Texture Sets: Accessory1, Belt, Boots, Cap, Hoodie Jacket, Jacket, Jeans, Long Boots, Sunglasses, Tanktop (All 2k Textures)</li></ul>",1),U=i('<ul><li>There are Basic Materials (<code>MA_Generic</code>) and materials with additional features to do color adjustments (<code>MA_Generic_Tint</code>). (MA = Master Material)</li> <li>Skin material has parameters to change fingernail color, scalp color. Can also change skin color, color brightness, desaturate, roughness or specular intensity.</li> <li>Lia and Shenya share some common materials, you can check out ❝ <a href="https://youtu.be/1-QuyVHN56Q" rel="nofollow">Lia Asset Overview</a> ❞ to see some examples.</li></ul> <p><strong>Eyes</strong></p> <ul><li>Eye material has parameters to change eye color.</li> <li>There is also a Duo eyes material to give each eye a different color.</li> <li>For cinematic, Metahuman eyes shader looks much better and it is used in the showcase video. You can migrate the metahuman shader and apply it to Lia’s eye, and then adjust the iris size a little bit, they will look like in the showcase video.</li> <li>Eyes shadow opacity can be adjusted.</li></ul>',1),F=i("<p>Meryl 3.0 (August 2023 update) is incompatible with older 2022 version. Please backup your project before you replace or update old Meryl in already working project because there are too many changes (in names, paths, etc), you probably need to delete the old Meryl and resetup everything.</p> <p>Sorry for the inconvenience 🙏</p>",1),W=i('<!> <!> <ul><li><strong>No LOD</strong> (the LOD in previous version has been removed)</li> <li><strong>No Blueprints</strong></li> <li><strong>No Animations</strong> (only some retargeted for demo purposes)</li></ul> <p><strong>Updates</strong></p> <ul><li>2024-08-26: Fix broken blendshapes specific to UE5.4</li> <li>2023-11-11: <a href="https://miica37.github.io/docs/meryl/changelog/#meryl-32" rel="nofollow">Meryl 3.2</a> (Fixed some skinning issues; Update freckles; Add Eye makeup; etc…)</li> <li>2023-09-06: <a href="https://miica37.github.io/docs/meryl/changelog/#meryl-31" rel="nofollow">Meryl 3.1</a> (Added back previous face; freckles; beauty spot; lips tint; etc…)</li> <li>2023-08-14: <a href="https://miica37.github.io/docs/meryl/changelog/" rel="nofollow">Mery 3.0</a> (1 new outfit; 1 new hairstyle; update preview level; etc…)</li></ul>',1),K=i("<p>Meryl is using an older naming convention than Shenya (Oct 2023 Update).</p>"),X=i("<p><code>hair1_front_c</code><sup>(5)</sup>, <code>hair1_front_r</code><sup>(5)</sup>, <code>hair1_front_l</code><sup>(5)</sup>, <code>hair1_side_r</code><sup>(5)</sup>, <code>hair1_side_l</code><sup>(5)</sup>, <code>hair1_back1_r</code><sup>(5)</sup>, <code>hair1_back2_r</code><sup>(5)</sup>, <code>hair1_back3_r</code><sup>(5)</sup>, <code>hair1_back1_l</code><sup>(5)</sup>, <code>hair1_back2_l</code><sup>(5)</sup>, <code>hair1_back3_l</code><sup>(5)</sup><br>(55 Additional Bones)</p>"),z=i("<!> <!> <p><code>hair1_front_01_c</code> is the root bone while <code>hair1_front_c_end</code> is the end bone. The end bone is not weighted, which means it doesn’t affect anything no matter how it transforms.</p> <!> <p>In the naming convention below, I will use this format: <code>hair1_front_c</code><sup>(5)</sup>. The superscript <sup>(5)</sup> indicates there are 5 bones in this chain.</p> <p>For skirts I am using another naming convention:</p> <p>Skirt Example: <code>S01</code><sup>(5)</sup> is a chain of 5 bones: <code>S01_01</code>, <code>S01_02</code>, <code>S01_03</code>, <code>S01_04</code>, <code>S01_end</code></p> <p>The naming for skirt bones is different from the hairs because for hairs I use KawaiiPhysics while for skirts I use SPCR Joint Dynamics. SPCRJointDynamics expect the joint chains to form a loop, so <code>S01</code> starts from the front left of the character and it goes counter clockwise to the back then to the front right of the character <code>S10</code>.</p> <!>",1),Y=i("<!> <!> <!> <!> <!> <!> <!>",1);function ie(T,t){let M=s(t,"CLOTHING",8,!1),E=s(t,"ANIMATIONS",8,!1),N=s(t,"TEXTURES",8,!1),H=s(t,"MATERIALS",8,!1),R=s(t,"EXTRA_NOTES",8,!1),I=s(t,"ADDITIONAL_BONES",8,!1),O=s(t,"CHANGE_LOG",8,!1);var m=Y(),y=g(m);l(y,M,e=>{var o=P();a(e,o)});var f=r(y,2);l(f,E,e=>{var o=j();a(e,o)});var _=r(f,2);l(_,N,e=>{var o=J();h(20),a(e,o)});var k=r(_,2);l(k,H,e=>{var o=U();h(4),a(e,o)});var v=r(k,2);l(v,R,e=>{var o=W(),n=g(o);A(n,{title:"Ignore this if your Meryl is last updated during 2024",children:(p,b)=>{var d=F();h(2),a(p,d)},$$slots:{default:!0}});var c=r(n,2);S(c,{title:"⚠️ Notes",level:"3"}),h(6),a(e,o)});var w=r(v,2);l(w,I,e=>{var o=z(),n=g(o);A(n,{title:"Bones naming",children:(d,D)=>{var u=K();a(d,u)},$$slots:{default:!0}});var c=r(n,2);S(c,{title:"How to read the list below? Take Hair1 as an example:",level:"4"});var p=r(c,4);G(p,{src:"/images/meryl/dynamic-meshes/bones-naming-example.jpg",alt:"Bones Naming Example"});var b=r(p,10);L(b,{title:"DYN_Hair1",column1:u=>{var x=X();a(u,x)},column2:u=>{},$$slots:{column1:!0,column2:!0}}),a(e,o)});var B=r(w,2);l(B,O,e=>{C(e)}),a(T,m)}export{ie as default,re as metadata};