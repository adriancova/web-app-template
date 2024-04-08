<script lang="ts">
	import LangSwitch from './ui/lang-switch/lang-switch.svelte';
	import LightSwitch from './ui/light-switch/light-switch.svelte';
	import Logo from './Logo.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full bg-border shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class={`flex h-14 items-center justify-between sm:container max-sm:px-4 sm:h-32 `}>
		<Logo />
		<div class="flex items-center justify-end gap-2 max-sm:ml-auto">
			<LightSwitch />
			<LangSwitch />
		</div>
	</div>
</header>
