<script lang="ts">
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

<div class="container flex flex-col items-center justify-center space-y-5">
	<h1 class="my-12 text-4xl font-extrabold tracking-tight lg:text-3xl">{m.welcome()}</h1>

	<h2 class="text-xl font-bold">{m.explore()}</h2>
	<ul class="list-disc space-y-5 text-center">
		{#each options as option}
			<li>
				<a href={option.route} target={option.external ? '_blank' : '_self'}>{option.label}</a>
			</li>
		{/each}
	</ul>
</div>
