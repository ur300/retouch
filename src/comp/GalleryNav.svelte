<script>
    import { getContext, onDestroy } from 'svelte';
    import { hoveredProject } from '../stores.js';
    const gallery = getContext('gallery');

    function setHoveredProject(id) {
        hoveredProject.set(id);
    }

    let hoverIndex = -1;

	const unsubscribe = hoveredProject.subscribe(value => {
		hoverIndex = value;
    });
    
    onDestroy(unsubscribe);
</script>

<div class="side-nav" >
    <ul>
        {#each gallery as folder, i}
            <li>
                <a href='/#/gallery/{folder.id}' 
                   class='gallery-nav__item {hoverIndex === i ? "hovered" : ""}' 
                   on:mouseover={() => setHoveredProject(i)}
                   on:mouseleave={() => setHoveredProject(-1)}>
                    <span>{folder.id}</span>
                </a>
                
            </li>
        {/each}
    </ul>
</div>

<style type="text/scss">
    .side-nav {
        width:225px;
        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            li {
                padding-bottom: 20px;
            }
        }
    }

    .gallery-nav {
        &__item {
            text-decoration: none;
            transition: color 0.3s ease;
            
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
            
            &:hover, &.hovered {
                span {
                    &:after {
                        transform: none;
                    }
                }
            }
        }
    }
</style>