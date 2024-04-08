<script lang="ts">
	// custom Icon components, manually importing svg assets from any icon library.
	// my personal favorite is: https://tabler.io/icons
	import ArrowLeft from '$lib/assets/icons/arrow-left.svg?raw';
	import ArrowRight from '$lib/assets/icons/arrow-right.svg?raw';
	import BellMinus from '$lib/assets/icons/bell-minus.svg?raw';
	import BellPlus from '$lib/assets/icons/bell-plus.svg?raw';
	import Check from '$lib/assets/icons/check.svg?raw';
	import ChevronDown from '$lib/assets/icons/chevron-down.svg?raw';
	import ChevronRight from '$lib/assets/icons/chevron-right.svg?raw';
	import Circle from '$lib/assets/icons/circle.svg?raw';
	import Github from '$lib/assets/icons/github.svg?raw';
	import Google from '$lib/assets/icons/google.svg?raw';
	import Mailbox from '$lib/assets/icons/mailbox.svg?raw';
	import Menu from '$lib/assets/icons/menu.svg?raw';
	import MoodDollar from '$lib/assets/icons/mood-dollar.svg?raw';
	import Moon from '$lib/assets/icons/moon.svg?raw';
	import PigMoney from '$lib/assets/icons/pig-money.svg?raw';
	import Puzzle from '$lib/assets/icons/puzzle.svg?raw';
	import Reset from '$lib/assets/icons/reset.svg?raw';
	import Rocket from '$lib/assets/icons/rocket.svg?raw';
	import ShadcnSvelte from '$lib/assets/icons/shadcn-svelte.svg?raw';
	import SourceCode from '$lib/assets/icons/source-code.svg?raw';
	import Sun from '$lib/assets/icons/sun.svg?raw';
	import Svelte from '$lib/assets/icons/svelte.svg?raw';
	import World from '$lib/assets/icons/world.svg?raw';
	import X from '$lib/assets/icons/x.svg?raw';
	export let name: keyof typeof icons;
	export let width = '1rem';
	export let height = '1rem';
	export let focusable: string | number | null | undefined = undefined;
	let icons = {
		arrowLeft: { svg: ArrowLeft },
		arrowRight: { svg: ArrowRight },
		bellMinus: { svg: BellMinus },
		bellPlus: { svg: BellPlus },
		check: { svg: Check },
		chevronDown: { svg: ChevronDown },
		chevronRight: { svg: ChevronRight },
		circle: { svg: Circle },
		github: { svg: Github },
		google: { svg: Google },
		mailbox: { svg: Mailbox },
		menu: { svg: Menu },
		moodDollar: { svg: MoodDollar },
		moon: { svg: Moon },
		pigMoney: { svg: PigMoney },
		puzzle: { svg: Puzzle },
		reset: { svg: Reset },
		rocket: { svg: Rocket },
		shadcnSvelte: { svg: ShadcnSvelte },
		sourceCode: { svg: SourceCode },
		sun: { svg: Sun },
		svelte: { svg: Svelte },
		world: { svg: World },
		x: { svg: X }
	} as const;
	let display = icons[name];
</script>

<svg class={$$props.class} {focusable} {width} {height} viewBox="0 0 24 24">
	{@html display.svg}
</svg>
