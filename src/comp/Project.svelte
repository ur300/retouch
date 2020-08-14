<script>
    import { getContext } from 'svelte';
    const gallery = getContext('gallery');
    import { hoveredProject } from '../stores.js';
    export let params;
    $: project = gallery ? gallery.find(el => el.id === params) : '';
    $: index = gallery.indexOf(project);
    $: prevFolder = gallery[0].id;
    $: nextFolder = gallery[0].id;
    $: if (index === 0) {
        prevFolder = '';
        nextFolder = gallery[index+1].id;
    }
    else if (index === (gallery.length - 1)){
        prevFolder = gallery[index-1].id;
        nextFolder = '';
    }
    else {
        prevFolder = gallery[index-1].id;
        nextFolder = gallery[index+1].id;
    }

    $: hoveredProject.set(index);
</script>

<section class='project-view'>
    {#each project.pics as img}
        <img src="img/{project.id}/{img}.jpg" alt="{project.id}">
    {/each}
</section>  

<span class='project-nav'> 
    <a class='scroll-top-btn' href='/#/gallery/{prevFolder}'>
        <i class='fas fa-chevron-up'></i>
    </a>
    <a class='close-btn' href='/#/gallery/'>
        <i class='fas fa-times'></i>
    </a>
    <a class='scroll-top-btn' href='/#/gallery/{nextFolder}'>
        <i class='fas fa-chevron-down'></i>
    </a>
</span>

<style type='text/scss'>
    .project-view {
        flex:1;
        flex-wrap: wrap;
        max-width: 100%;
        padding-right: 168Px;
        img {
            max-width: 100%;
            display: block;
            margin-bottom: 30Px;
        }
    }

    
    .project-nav {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        right: 0;
        z-index: 99;
        align-self: flex-start;
        a {
            text-align: center;
            background: none;
            outline: none;
            border: none;
            -webkit-appearance: none;
            font-size: 22Px;
            display: block;
            transition: color 0.3s ease;
            &:hover, &:focus {
                outline: none;
            }
            &:hover{
                cursor: pointer;
                color: var(--hoverColor);
            }
        }
    }
</style>