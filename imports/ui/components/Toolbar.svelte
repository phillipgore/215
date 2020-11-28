<script>
    import ButtonTool from './ButtonTool.svelte';
    import ButtonGroup from './ButtonGroup.svelte';
    import {settings, toolbarState, toolbarButtons} from '../../modules/store.js';

    let hasLabels = $settings.toolbarButtons.hasLabels;
</script>

<style>
    @media only screen and (min-width: 0px) {
        nav {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        nav {
            height: 5.0rem;
            padding: 0.0rem 0.6rem;
            background-color: rgb(44, 43, 42);
            display: flex;
            align-items: center;
            position: fixed;
            z-index: 10;
            top: 0;
            right: 0;
            left: 0;
        }

        nav.no-label {
            height: 3.8rem;
        }

        .spacer {
            width: 2.4rem;
        }

        .stretcher {
            flex-grow: 1;
        }
    }
</style>

<nav class="{hasLabels ? '' : 'no-label'}" bind:offsetHeight={$toolbarState.intHeight}>
    {#each $toolbarButtons as button}
        {#if button.isSpacer}
            <div class="spacer"></div>
        {:else if button.isStretcher}
            <div class="stretcher"></div>
        {:else if button.hasSwapping}
            <ButtonGroup buttons={button.buttons}/>
        {:else}
            <ButtonTool button={button}/>
        {/if}
    {/each}
</nav>
