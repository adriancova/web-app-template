<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<footer
	class="sticky top-0 z-40 flex w-full flex-col items-center justify-center self-stretch bg-zinc-800 px-4 py-2 shadow-sm"
>
	<div
		class="flex w-full max-w-[1596px] flex-col items-center justify-center gap-5 md:flex-row md:justify-between"
	>
		<div
			class="my-auto flex flex-row flex-wrap items-stretch justify-between gap-5 pt-2.5 max-md:max-w-full"
		>
			<div
				class="grow whitespace-nowrap text-lg font-medium leading-6 tracking-normal text-white max-md:w-full max-md:text-center"
			>
				Cova's web-app-template &copy; 2024.
			</div>
		</div>
		<div
			class="flex flex-row flex-wrap items-center justify-center gap-4 self-stretch py-2.5 text-center text-white"
		>
			<div class="flex flex-row flex-wrap gap-2.5">
				{m.siteBuiltWith()}
				<a
					href="https://svelte.dev"
					class="flex flex-row items-center gap-2 font-bold text-orange-600"
					target="_blank"
					rel="noopener noreferrer"><Icon name="svelte" class="h-4 w-4 " /> Svelte</a
				>
				&#38;
				<a
					href="https://shadcn-svelte.com"
					class="flex flex-row items-center gap-2 font-bold text-orange-600"
					target="_blank"
					rel="noopener noreferrer"
					><Icon name="shadcnSvelte" class="h-4 w-4" />Shadcn.
				</a>
			</div>
			<a
				href={'https://github.com/adriancova/web-app-template'}
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-row items-center gap-2"
			>
				<Icon name="github" class="h-8 w-8" />
			</a>
		</div>
	</div>
</footer>
