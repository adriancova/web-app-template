import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

// docs and reference to paraglid in: https://inlang.com/m/dxnzrydw/paraglide-sveltekit-i18n
export const i18n = createI18n(runtime, {
	exclude: ['/someExludedRoute']
});
