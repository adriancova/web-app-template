<script>
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n';
	import '../app.pcss';
</script>

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
