<script>
    import {fade} from 'svelte/transition';
    import ButtonListPanel from './ButtonListPanel.svelte';
    import {getIcon, panels, panelState} from '../../modules/store.js';

    export let panel;
    
    let id = panel.id;
    let windowWidth;

    $panelState[id] = {isOpen: false};

    let closePanel = () => {
        $panelState[id].isOpen = false;
    };

    const panelResetForNarrow = () => {
        if (windowWidth < 768) {
            $panels.forEach(panel => {
                $panelState[panel.id] = {
                    isOpen: false,
                };
            })
        }
    }
</script>

<style>
    @media only screen and (min-width: 0px) {
        .panel {
            display: none;
            grid-template-columns: 15.5rem auto;
            grid-template-rows: 4.2rem auto 4.2rem;
            margin: 10.0rem auto;
            width: 72.0rem;
            min-height: 51.4rem;
            border-radius: 1.6rem;
            border: 0.1rem solid rgba(181, 181, 181, 0.65);
            overflow: hidden;
            -webkit-backdrop-filter: blur(1.0rem);
            backdrop-filter: blur(1.0rem);
            position: absolute;
            left: 50%;
            transform: translateX(-50%); 
            z-index: 20;
            box-shadow: 0.0rem 0.0rem 1.4rem rgba(0, 0, 0, 0.2);
        }

        .panel:after {
            content: " ";
            background-color: rgba(235, 235, 235, 0.69);
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        aside {
            grid-row: 1 / 4;
            background-color: transparent;
            border-right: 0.1rem solid rgba(181, 181, 181, 0.45);
        }

        main {
            background-color: rgb(255, 255, 255);
        }

        nav {
            font-size: 1.6rem;
            font-weight: 500;
            background-color: rgb(255, 255, 255);
            border-top: 0.1rem solid rgba(181, 181, 181, 0.45);
        }

        nav.title-bar {
            border: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.0rem 0.9rem 0.0rem 1.8rem;
        }

        h1 {
            margin: 0.0rem;
            padding: 0.0rem;
            font-size: 2.4rem;
            font-weight: 700;
        }

        .button-close {
            transform: rotate(45deg);
            height: 2.4rem;
            fill: rgb(112, 111, 110);
        }
    }
    @media only screen and (min-width: 768px) {
        .panel {
            display: grid;
        }
    }
</style>

<svelte:window bind:innerWidth={windowWidth} on:resize={() => panelResetForNarrow()}/>

{#if $panelState[id].isOpen}
    <div class="panel" in:fade="{{ delay: 0, duration: 100 }}" out:fade="{{ delay: 0, duration: 200 }}">
        <nav class="title-bar">
            <h1>{$panelState[id].panelTitle}</h1>
            <svg class="button-close" viewBox={$getIcon('plus-circle').viewBox} on:click={() => closePanel()}>
                <path d={$getIcon('plus-circle').d}/>
            </svg>
        </nav>
        <aside>
            <ButtonListPanel id={id}/>
        </aside>
        <main></main>
        <nav class="button-bar"></nav>
    </div>
{/if}