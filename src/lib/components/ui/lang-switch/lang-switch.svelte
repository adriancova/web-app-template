<script lang="ts">
	import { goto } from '$app/navigation';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import { i18n } from '$lib/i18n.js';
	import { page } from '$app/stores';

	let showLanguages = false;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="icon">
			{languageTag().toUpperCase()}
			<span class="sr-only">Toggle language</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="min-w-10" align="end">
		{#each availableLanguageTags as lang}
			<DropdownMenu.Item class="w-10"
				><a
					class="w-full"
					href={i18n.route($page.url.pathname)}
					hreflang={lang}
					aria-current={languageTag() === lang ? 'true' : undefined}
				>
					{lang.toUpperCase()}</a
				></DropdownMenu.Item
			>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
