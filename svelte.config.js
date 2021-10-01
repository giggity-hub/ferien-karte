import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import {resolve} from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// expose vite config
		vite: () => ({
			plugins: [WindiCSS()],
			resolve: {
				alias: {
					$stores: resolve('./src/stores')
				}
			}
		})
	}
};

export default config;