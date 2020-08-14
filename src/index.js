import App from './App.svelte';
import { gallery } from './gallery-config.js';

const app = new App({
	target: document.body,
	props: {
		gallery
	}
});

export default app;