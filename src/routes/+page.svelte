
<script lang="ts">
	import * as config from '$lib/config'
</script>

<div class="cover ANIM_fadeOut">
	<div class="cover__image ANIM_scaleCycle"></div>
	<a class="cover__title animate-pulse" href="#characters" uk-scroll>Rabbit Heart,</a>
	<div class="cover__subtitles">
		<div>
			We <span class="font-extrabold text-3xl">Love</span> Characters
		</div>
		<div style="animation-delay: 5s;">
			We <span class="font-extrabold text-3xl">Create</span> Characters
		</div>
	</div>
</div>

<div class="content-grid-home" style="margin-top:10rem; row-gap: 8rem;">
	
	<div class="flex flex-col items-center justify-center gap-8 ANIM_fadeOut">
		<div class="section-header ml-auto" id="characters">Characters I made</div>
		<div class="text-2xl ml-auto">For <a href="https://kit.svelte.dev">Unreal Engine</a></div>
	
		<div class="uk-child-width-1-3@m" uk-grid style="width:70%;">
			<img src="/images/front-page/meryl-card.jpg" alt="" style="">
			<img src="/images/front-page/shenya-card.jpg" alt="" style="">
			<img src="/images/front-page/lia-card.jpg" alt="" style="">
			<img src="/images/front-page/aren-card.jpg" alt="" style="">
		</div>
	</div>

	<hr>
	
	<div class="flex flex-col items-center justify-center gap-8 ANIM_fadeOut">
		<div class="section-header ml-auto">Tools</div>

		<div class="tools-section">
			<div class="">
				<p>W.I.P</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eligendi temporibus, non iste distinctio tempora quos officia? Eligendi hic unde corrupti magni corporis assumenda eos dolore nisi dignissimos sunt! Assumenda.</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</div>

			<div class="text-right" style="width:100%">
				<div class="text-3xl">RIn.Rename</div>
				<div class="text-xl mr-auto">For <a href="https://kit.svelte.dev">Blender</a></div>
			</div>
		</div>

	</div>

	<hr>

	<div class="flex flex-col items-center justify-center gap-8">
		<div class="section-header mr-auto">Updates</div>
		<div class="update-section">
			<ul class="uk-list">
				<li>09-20-2024 – Utility DCTL – UPDATE (DCTLs)</li>
				<li>07-30-2024 – Articles (Web)</li>
				<li>06-24-2024 – Aspect Ratio Calculator (Tools)</li>
				<li>06-09-2024 – Color Palette (DCTLs)</li>
				<li>06-01-2024 – Color Shaper (DCTLs)</li>
			</ul>

			<div class="bubble-section">
				<div class="float-bubble" uk-tooltip="Text Bubble Credit > Design by kirsten allen (codepen)">
					<img style="width:7rem" src="/images/front-page/avatar-circle.png" alt="">
					<br>
					Hi, I am miica, a 3d Character Artist. <br>
					I am currently exploring the world of 3d and games development. <br>
					<br>
					Welcome to my website :)
				</div>
				<div uk-scrollspy="cls: uk-animation-fade; repeat: true">
					<!-- <img class="size-25" src="/images/front-page/avatar-circle.png" alt=""> -->
				</div>
			</div>

		</div>
	</div>

<p>&nbsp;</p>

</div> <!-- END OF CONTENT-GRID-HOME -->

<style>

	div.tools-section {
		display: grid;
		grid-auto-flow: column;
		width: 100%;
		grid-template-columns: 3fr 1fr;

		@media (max-width:900px) {
			display: flex;
			flex-direction: column;
		}
	}

	div.update-section {
		display: grid;
		grid-auto-flow: column;
		width: 100%;
		grid-template-columns: 2fr 2fr;

		@media (max-width:900px) {
			display: flex;
			flex-direction: column;
		}
	}

	.bubble-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: -5rem;

		@media (max-width:900px) {
			margin-top: 5rem;
		}
	}



	/*
		-----------------------
			FLOAT BUBBLE (https://codepen.io/kirstenallen/details/MWwPYYm)
		-----------------------
	*/
	:root {
		--color-blue: #6ec0f2;
		--color-beige: #ffdac148;
	}
	
	div.float-bubble {
		width:60%;
		font-size:1.3rem;
		transform: translatey(0px);
		animation: float 5s ease-in-out infinite;
		padding: 50px;
		border-radius: 11px;
		position: relative;
		box-shadow: 20px 20px var(--color-blue);
	}
	div.float-bubble:after {
		transform: translatey(0px);
		animation: float2 5s ease-in-out infinite;
		content: ".";
		font-weight: bold;
		-webkit-text-fill-color: var(--color-beige);
		text-shadow: 22px 22px var(--color-blue);
		text-align: left;
		font-size: 55px;
		width: 55px;
		height: 11px;
		line-height: 30px;
		border-radius: 11px;
		background-color: var(--color-beige);
		position: absolute;
		display: block;
		bottom: -30px;
		left: 0;
		box-shadow: 22px 22px var(--color-blue);
		z-index: -2;
	}

	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}

	@keyframes float2 {
		0% {
			line-height: 30px;
			transform: translatey(0px);
		}
		55% {
			transform: translatey(-20px);
		}
		60% {
			line-height: 10px;
		}
		100% {
			line-height: 30px;
			transform: translatey(0px);
		}
	}






	/*
		-----------------------
			CONTENT GRID
		-----------------------
	*/
	.bona {
		font-family: 'Bona Nova SC';
	}

	.section-header {
		font-family: 'Bona Nova SC';
		font-size: 4.5em;
		line-height: 1;
	}

	.content-grid-home {
		--padding-inline: 2rem;

		display: grid;
		grid-template-columns:
			[full-width-start]
				/* minmax(var(--padding-inline), 1fr) */
				1fr
						/* [content-start] minmax( 100% - (var(--padding-inline) * 2), 7fr ) [content-end] */
						[content-start] 4fr [content-end]
				/* minmax(var(--padding-inline), 1fr) */
				1fr
			[full-width-end];
		row-gap: 6rem;
	}

	.content-grid-home > :not(.full-width),
	.full-width > :not(.full-width) {
		grid-column: content;
	}

	hr {
		border-top: 2px solid var(--logo-color);
		 width: 50%;
		 margin: auto;
	}

	.shadow {
  	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
	}

	@keyframes fadeIn {
			0%		    { opacity: 0; -webkit-filter: blur(10px); }
			45%, 100%	{ opacity: 1; -webkit-filter: blur(0px);}
	}

	@keyframes shrink {
			25%		{ width: 50%; }
			85%		{ width:  4%; }
			100%	{ width:  4%; }
	}

	@keyframes letterSpacing {
			0%		    { letter-spacing: 0.5rem; opacity: 0; }
			80%, 100%	{ letter-spacing: 0.1rem; opacity: 1; }
	}

	/* animation-timeline DOESN'T WORK ON FIREFOX */
	@supports (animation-timeline: auto){
		hr {
			width: 100%;
			animation: shrink linear forwards;  
			animation-timeline: view();
			/* animation-range: exit 100px; */
		}

		.section-header {
			animation: letterSpacing linear forwards;
			animation-timeline: view();
		}

		.ANIM_fadeIn {
			animation: fadeIn linear forwards;
			animation-timeline: view();
		}
	}

	/*
		-----------------------
			COVER & COVER IMAGE
		-----------------------
	*/
	.cover {
		position: relative;
		width: 100%;
		height: 100svb;
		overflow: hidden;
		container-type: inline-size;
		container-name: hero;
		display: flex;
		flex-direction: column;
		gap: 0;
		justify-content: center;
		align-items: center;
	}

	.cover__image {
		/* background-image: url('images/a-simple-digital-wallpaper-minimalist-free-photo.jpg'); */
		background-image: url('/images/cover.jpg');
		position: absolute;
		overflow: hidden;
		top: 0px;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		background-repeat: no-repeat;
		background-position: center;
		-webkit-background-size: cover;
		background-size: cover;
		/* opacity: 0; */
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
	}

	.cover__image::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 1;
		pointer-events: none;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, var(--bg-color) 100%);
	}

	.cover__title {
		font-family: 'Bona Nova SC', serif;
		font-size: 4rem;
		font-weight: 400;
		font-style: italic;
		color: #fff;
		transition: scale 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cover__title:hover {
		/* color: red; */
		text-shadow:1px 1px 30px #fff, 1px 1px 10px #ccc;
		scale: 1.1;
	}

	.cover__subtitles {
		display: grid;
	}

	.cover__subtitles > * {
		grid-row: 1;
		grid-column: 1;
		text-decoration: underline;
		letter-spacing: .1rem;
		font-size: 1.4rem;
		color: #493a2d;
		margin-top: -.5rem;
		font-weight: 500;
		opacity: 0;
		text-shadow: 1px 1px 30px #fff;
	}

	/*
		-----------------------
			COVER ANIMATIONS
		-----------------------
	*/
	@supports (animation-timeline: auto){
		.ANIM_fadeOut {
			animation: fadeOut linear forwards;
			animation-timeline: view();  /* DOESN'T WORK ON FIREFOX */
			animation-range: exit 100px;
		}
	}
	
	@keyframes fadeOut {
		  /* to { opacity: 0; } */
			25%		{ opacity: 1; }
			85%		{ opacity: 0; }
			100%	{ opacity: 0; }
	}

	@keyframes scaleCycle {
		  0%	{scale: 1.1; -webkit-filter: blur(10px);}
		 50%	{scale: 1.0; -webkit-filter: blur( 0px);}
		100%	{scale: 1.1; -webkit-filter: blur(10px);}
	}

	.ANIM_scaleCycle {
		animation: scaleCycle;
		animation-duration: 10s;
		animation-iteration-count: infinite;
	}
	
	@keyframes slideInOut {
		  0%	{ transform: translateX(-150%); opacity: 0; letter-spacing: .1rem; }
		 20%	{ transform: translateX(   0%); opacity: 1; letter-spacing: .35rem; }
		 40%	{ transform: translateX(   0%); opacity: 1; letter-spacing: .35rem; }
		 50%	{ transform: translateX( 150%); opacity: 0; letter-spacing: .1rem; }
		100%	{ transform: translateX( 150%); opacity: 0; letter-spacing: .1rem; }
	}

	.cover__subtitles > * {
		animation-name: slideInOut;
		animation-iteration-count: infinite;
		/* animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22); */
		animation-duration: 10s;
	}




</style>
