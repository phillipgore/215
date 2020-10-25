<script>
    import {createEventDispatcher} from 'svelte';
	import Sheet from '../components/Sheet.svelte';
    import {settings, getIcon} from '../../modules/store.js';

    export let buttons = [];

    let hasLabels = $settings.toolbarButtons.hasLabels;
    let sheet;

    const buttonClick = (button) => {
        if (button.sheetId) {
            sheet.sheetButtonClick();
        }
    }
</script>

<style>
    @media only screen and (min-width: 0px) {
        button {
            width: 100%; 
            height: 100%;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(54, 53, 52);
            flex-basis: 12.5%;
            flex-grow: 1;
            margin: 0.0rem;
        }

        .icon {
            height: 1.8rem;
            max-width: 2.05rem;
            fill: rgb(242, 241, 240);
        }
    }
</style>

{#each buttons as button}
    <button class="{button.sheetId ? 'js-is-sheet' : ''}" on:click={() => buttonClick(button)}>
        <svg class="icon" viewBox="{$getIcon(button.iconName).viewBox}">
            <path d={$getIcon(button.iconName).d}/>
        </svg>
    </button>
    {#if button.sheetId}
        <Sheet bind:this={sheet} id="{button.sheetId}" />
    {/if}
{/each}
