<script lang="ts">
	import logo from '$lib/assets/images/logo.svg';
	import logoDark from '$lib/assets/images/logo-dark.svg';
</script>

<a href="/" class="flex flex-row items-center justify-center gap-x-4 hover:bg-none">
	<h1 class="scroll-m-20 text-lg font-extrabold tracking-tight sm:text-4xl lg:text-5xl">App!</h1>
	<img src={logo} alt="logo" class="block h-8 dark:hidden sm:h-10 lg:h-12" />
	<img src={logoDark} alt="logo" class="hidden h-8 dark:block sm:h-10 lg:h-12" />
</a>
