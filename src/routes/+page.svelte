<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as m from '$lib/paraglide/messages.js';

	const options = [
		{ label: m.examples(), route: '/examples' },
		{ label: m.stack(), route: '/stack' },
		{
			label: m.githubRepo(),
			route: 'https://github.com/adriancova/web-app-template',
			external: true
		}
	];
</script>

<div class="container flex flex-col items-center justify-center space-y-5 text-center">
	<h1 class="my-8 text-4xl font-extrabold tracking-tight md:my-12 lg:text-3xl">
		{m.welcome()}
	</h1>

	<h2 class="text-xl font-bold">{m.explore()}</h2>
	<ul class="space-y-3 md:space-y-6">
		{#each options as option}
			<li>
				<Button variant="outline" href={option.route} target={option.external ? '_blank' : '_self'}
					>{option.label}</Button
				>
			</li>
		{/each}
	</ul>
</div>
