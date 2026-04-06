import adapter from '@sveltejs/adapter-static';
import { relative, sep } from 'node:path';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// defaults to rune mode for the project, except for `node_modules`. Can be removed in svelte 6.
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');

			return isExternalLibrary ? undefined : true;
		}
	},
	kit: {
		adapter: adapter(),
		paths: {
			// When deployed to GitHub Pages the site lives at /<repo-name>/
			base: dev ? '' : '/Curriculo-portfolio'
		}
	}
};

export default config;
