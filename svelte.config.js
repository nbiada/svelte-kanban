import adapter from '@sveltejs/adapter-node';
// import adapter from 'svelte-adapter-static-digitalocean';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
