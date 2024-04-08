<script>
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import { i18n } from '$lib/i18n';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.pcss';
</script>

<ParaglideJS {i18n}>
	<ModeWatcher />
	<div class="relative flex min-h-screen flex-col" id="page">
		<NavBar />
		<div class="flex-1">
			<slot />
		</div>
		<Footer />
	</div>
</ParaglideJS>
