import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import {resolve} from 'path';
// import node from '@sveltejs/adapter-node';
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
			ssr: {
				noExternal: ["d3", "d3-geo", "d3-scale", "d3-array", "d3-interpolate", "d3-format", "d3-time", "d3-time-format", "d3-selection",
					"@splidejs/splide/dist/js/splide.js", "@splidejs/splide/dist/js"]
			},
			plugins: [WindiCSS()],
			resolve: {
				alias: {
					$stores: resolve('./src/stores')
				}
			},
		}),

		// use adapter to generate build directory
		adapter: vercel(),
		// adapter: node(),


	}
};

export default config;
