<script>
    import { getContext, onDestroy } from 'svelte';
    import { hoveredProject } from '../stores.js';
    const gallery = getContext('gallery');

    function setHoveredProject(id) {
        hoveredProject.set(id); 
    }

    let hoverIndex = -1;
    hoveredProject.set(hoverIndex);
    
	const unsubscribe = hoveredProject.subscribe(value => {
		hoverIndex = value;
    });

    onDestroy(unsubscribe);
</script>

<div class='right-col'>
    <div id='gallery-view' class='gallery d-flex'>
        {#each gallery as folder, i}
            <a href='/#/gallery/{folder.id}' 
               class='gallery__item {hoverIndex === i ? "hovered" : ""}' 
               on:mouseover={() => setHoveredProject(i)}
               on:mouseleave={() => setHoveredProject(-1)}>
                <img src="img/{folder.id}/000.jpg" alt="{folder.id}">
                <span>{folder.id}</span>
            </a>
        {/each}
    </div>
</div>

<style type='text/scss'>
    .gallery {
        flex:1;
        flex-wrap: wrap;
        &__item {
            width: 50%;
            flex-grow: 1;
            text-decoration: none;
            padding-right: 68PX;
            box-sizing: border-box;
            margin-bottom: 35px;
            text-align: center;
            span {
                text-align: center;
                transition: background-color 0.3s ease;
                position: relative;
                padding: 1px 2px;
                &:after{
                    position: absolute;
                    top: 0;
                    right: -.25rem;
                    bottom: 1px;
                    left: -.25rem;
                    z-index: -1;
                    content: "";
                    background: var(--theme-hoverColor);
                    border-radius: .3em;
                    opacity: .5;
                    transition: all .2s;
                    transform: scaleY(.06);
                    transform-origin: 0 100% 0;
                }
            }
            img {
                transition: transform 0.3s ease;
                max-width: 100%;
            }

            &:hover, &.hovered {
                span {
                    &:after {
                        transform: none;
                    }
                }
            }
        }
    }

    .right-col {
        flex:1;
        flex-wrap: wrap;
        padding-right: 100Px;
        position: relative;
        justify-content: flex-end;
    }

    .project-view {
        flex:1;
        flex-wrap: wrap;
        max-width: 100%;
        padding-right: 168Px;
        display: none;
        img {
            max-width: 100%;
            display: block;
            margin-bottom: 30Px;
        }
    }

    .project-nav {
        position: sticky;
        top: 0;
        right: 0;
        z-index: 99;
        transform: translate3d(110Px, 72Px, 0);
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
                color: var(--theme-hoverColor);
            }
        }
    }
</style>                    