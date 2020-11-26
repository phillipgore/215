<script>
    import Button from '../elements/Button.svelte';
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

        .container-one {
            display: flex;
            flex-grow: 2;
            justify-content: flex-start;
            align-items: center;
        }
        .container-two {
            display: flex;
            flex-grow: 4;
            justify-content: center;
            align-items: center;
        }
        .container-three {   
            display: flex;
            flex-grow: 2;
            justify-content: flex-end;
            align-items: center;
        }

        .spacer {
            width: 2.4rem;
        }
    }
</style>

<nav class="{hasLabels ? '' : 'no-label'}" bind:offsetHeight={$toolbarState.intHeight}>
    <div class="container-one">
        {#each $toolbarButtons as button}
            {#if button.container === 'one'}
                {#if button.type.includes('spacer')}
                    <div class="spacer"></div>
                {:else if button.type.includes('buttonSwapping')}
                    <ButtonGroup buttons={button.buttons}/>
                {:else}
                    <Button button={button}/>
                {/if}
            {/if}
        {/each}
    </div>
    <div class="container-two">
        {#each $toolbarButtons as button}
            {#if button.container === 'two'}
                {#if button.type.includes('spacer')}
                    <div class="spacer"></div>
                {:else if button.type.includes('buttonSwapping')}
                    <ButtonGroup buttons={button.buttons}/>
                {:else}
                    <Button button={button}/>
                {/if}
            {/if}
        {/each}
    </div>
    <div class="container-three">
        {#each $toolbarButtons as button}
            {#if button.container === 'three'}
                {#if button.type.includes('spacer')}
                    <div class="spacer"></div>
                {:else if button.type.includes('buttonSwapping')}
                    <ButtonGroup buttons={button.buttons}/>
                {:else}
                    <Button button={button}/>
                {/if}
            {/if}
        {/each}
    </div>
</nav>
