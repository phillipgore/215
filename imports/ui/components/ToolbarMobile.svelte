<script>
    import {fly} from 'svelte/transition';
    import ButtonMobile from '../elements/ButtonMobile.svelte';
    import {settings, toolbarButtons} from '../../modules/store.js';        
</script>

<style>
    @media only screen and (min-width: 0px) {
        nav {
            height: 4.5rem;
            background-color: rgb(44, 43, 42);
            display: flex;
            align-items: center;
            position: fixed;
            z-index: 10;
            top: 0;
            right: 0;
            left: 0;
        }
    }

    @media only screen and (min-width: 768px) {
        nav { display: none; }
    }
</style>

{#if $settings.toolbarMobile.isVisible}
    <nav in:fly="{{ y: -45, duration: 200, opacity: 100 }}" out:fly="{{ y: -45, duration: 300, opacity: 100 }}">
        {#each $toolbarButtons as button}
            {#if button.mobile && button.type.includes('buttonSwapping')}
                {#each button.buttons as button}
                    <ButtonMobile button={button} />
                {/each}
            {:else if button.mobile}
                <ButtonMobile button={button} />
            {/if}
        {/each}
    </nav>
{/if}