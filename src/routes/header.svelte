<script lang="ts">
	import * as config from '$lib/config';
</script>

<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
	<!-- <div class="logo-text absolute h-full flex items-center px-8 text-5xl" style="font-family: Apalu;">
		Rabbit Heart
	</div> -->
	<nav class="uk-navbar-container">
		<div class="uk-container">
			<div uk-navbar>
				<div class="uk-navbar-left">
					<a
						href="http://localhost/"
						class="text-logo uk-navbar-item uk-logo"
						aria-label="Back to Home"
						style="font-family: Apalu; color: {config.logo_color}">Rabbit Heart</a>
					<ul class="uk-navbar-nav">
						<li class="uk-active"><a href="http://localhost:5173/">Active</a></li>
						<li>
							<a href="http://localhost:5173/">Characters <span uk-navbar-parent-icon></span></a>
							<div class="uk-navbar-dropdown">
								<ul class="uk-nav uk-navbar-dropdown-nav">
									<li class="uk-active"><a href="http://localhost:5173/">ShaoLei & Llynx</a></li>
									<li><a href="http://localhost:5173/">Shenya</a></li>
									<li><a href="http://localhost:5173/">Lia</a></li>
									<li><a href="http://localhost:5173/">Aren</a></li>
									<li class="uk-nav-divider"></li>
									<li><a href="http://localhost:5173/">Meryl</a></li>
								</ul>
							</div>
						</li>
						<li><a href="http://localhost:5173/">Tools</a></li>
					</ul>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav">
						<li>
							<a href="http://localhost:5173/"
								><span uk-icon="icon: social"></span>Social Links<span uk-navbar-parent-icon
								></span></a
							>
							<div class="uk-navbar-dropdown">
								<ul class="uk-nav uk-navbar-dropdown-nav">
									<li><a href="http://localhost:5173/">Artstation</a></li>
									<li><a href="http://localhost:5173/">Youtube</a></li>
									<li><a href="http://localhost:5173/">Github</a></li>
									<li class="uk-nav-divider"></li>
									<li
										class="uk-nav-header px-4"
										style="border-bottom:2px solid {config.logo_color};"
									>
										Marketplaces:
									</li>
									<li><a href="http://localhost:5173/">FAB</a></li>
									<li><a href="http://localhost:5173/">Blender Market</a></li>
									<!-- <li class="uk-active"><a href="http://localhost:5173/">Active</a></li>
									<li><a href="http://localhost:5173/">Item</a></li>
									<li class="uk-nav-header">Header</li>
									<li><a href="http://localhost:5173/">Item</a></li>
									<li><a href="http://localhost:5173/">Item</a></li>
									<li class="uk-nav-divider"></li>
									<li><a href="http://localhost:5173/">Item</a></li> -->
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</div>

<style>
	:root {
		--logo-color: #e9e9e9;
	}

	nav.uk-navbar-container {
		background-color: rgb(255 255 255 / .2);
		transition: all 1s;

		&:hover {
			background-color: rgb(255 255 255 / .8);
		}
	}

	.uk-nav a:hover {
		font-weight: 400;
		border-left: 5px solid #beae9e;
		padding-left: 4px;
		margin-left: -9px;
	}

	.text-logo {
		font-size: 3rem;
		padding-inline: 2rem;
		/* margin-left: -100px; */

		@media (width <= 600px) {
			font-size: 1.5rem;
			padding-inline: 0.2rem;
			/* font-weight: 700; */
			/* background-color: red; */
		}
	}
</style>
