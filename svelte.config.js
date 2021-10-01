import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import {resolve} from 'path';
import node from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';

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
		}),

		// use adapter to generate build directory
		adapter: vercel(),


	}
};

export default config;
