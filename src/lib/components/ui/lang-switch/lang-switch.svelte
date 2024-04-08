<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import { i18n } from '$lib/i18n.js';
	import { page } from '$app/stores';

	let showLanguages = false;
</script>

<div class="relative">
	<Button on:click={() => (showLanguages = !showLanguages)} variant="outline" size="icon">
		{languageTag().toUpperCase()}
	</Button>
	{#if showLanguages}
		<ul class="absolute rounded-md p-2 shadow-md">
			{#each availableLanguageTags as lang}
				<li>
					<a
						href={i18n.route($page.url.pathname)}
						hreflang={lang}
						aria-current={languageTag() === lang ? 'true' : undefined}
						data-sveltekit-keepfocus
						on:click={() => (showLanguages = false)}
						>{lang.toUpperCase()}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
