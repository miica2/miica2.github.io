<!-- <script lang="ts"> -->
<script>
	// import '$lib/css/uikit.css'
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { Jumper } from 'svelte-loading-spinners';
	import { navigating } from '$app/stores'
	// import 'open-props/style'
	// import 'open-props/normalize'
	// import 'open-props/buttons'
	import '../app.scss'
	import '../app.css'

	import { onMount } from 'svelte'
	onMount(() => {
			import('$lib/uikit.min.js')
			import('$lib/uikit-icons.js')
	})
</script>

{#if $navigating}
	<Jumper size="200" color="#FF3E00" unit="px" duration="5s" />
{:else}
	<div class="layout">
		<Header />
			<main>
				<slot />
			</main>
		<Footer />
</div>
{/if}

<style>
	:global(:root){
		--bg-color: #e9e9e9;
		--logo-color: #a5917d;
	}
</style>