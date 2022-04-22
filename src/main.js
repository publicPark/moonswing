import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Moon Swing'
	}
});

export default app;