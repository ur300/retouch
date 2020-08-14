<script>
	import Head from './comp/Head.svelte';
	import Header from './comp/Header.svelte';
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { themes as _themes } from './themes.js';
	import GalleryNav from './comp/GalleryNav.svelte';
	import GalleryView from './comp/Gallery.svelte';
	import ProjectView from './comp/Project.svelte';
	import Router from './lib/router';
	export let gallery;
    
	let themes = [..._themes];
	let _current = 'light';
	let page, projectId, hoverIndex;

	const getCurrentTheme = name => themes.find(h => h.name === name);
	const theme = writable(getCurrentTheme(_current));

	setContext('theme', { theme });
	setContext('gallery', gallery);

	onMount(() => {
    	setRootColors(getCurrentTheme(_current))
  	});

	const setRootColors = theme => {
		for (let [prop, color] of Object.entries(theme.colors)) {
		let varString = `--theme-${prop}`
		document.documentElement.style.setProperty(varString, color)
		}
		document.documentElement.style.setProperty('--theme-name', theme.name)
	}
	const router = new Router({
		mode: 'hash',
		root: '/'
	});

	router
		.add(/gallery\/(.*)/, folderId => {
			projectId = folderId;
			page = ProjectView;
		}) 
		.add('/\//', () => {
			
		})
		.add('', () => {
			page = GalleryView;
		});

</script>

<Head/>
<Header/>

<section class='content'>
	<div class="wrap d-flex">
		<GalleryNav/>
		<!-- <Gallery/> -->
		<svelte:component this={page} params={projectId}/>
	</div>
</section>

<style global type="text/scss">
	.d-flex {
		display: flex;
	}
	.wrap {
		max-width: var(--theme-lWidth);
		margin: 0 auto; 
	}
	.layout {
		padding: 10px;
		&__title {
			font-family: var(--theme-mainFF);
			text-transform: uppercase;
			text-align: center;
		}
	}
	a, p, a:visited {
		color: var(--theme-mainFontColor);
	}
</style>