<script>
    import Dropdown from '../components/Dropdown.svelte';
    import {settings, getIcon} from '../../modules/store.js';

    export let buttons = [];

    let hasLabels = $settings.toolbarButtons.hasLabels;
    let dropdown;

    const buttonClick = (button) => {
        if (button.dropdownId) {
            dropdown.dropdownButtonClick();
        }
    }
</script>

<style>
    @media only screen and (min-width: 0px) {
        .btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.0rem 0.4rem;
        }

        .btn-group { 
            display: flex; 
        }

        button {
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.3rem;
            height: 2.4rem;
            width: 4.8rem; 
            margin:  0rem auto;
            border: 0.1rem solid rgb(45, 44, 43);
            background-color: rgb(112, 111, 110);
            outline: 0;
        }

        button.active {
            background-color: rgb(212, 211, 210);
        }

        .btn-container.btn-no-label button,
        .btn-group.btn-no-label button {
            height: 2.6rem;
        }

        .btn-wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .btn-group .btn-wrapper button { 
            border-left: none;
            border-radius: 0.0rem;
            width: 100%; 
            min-width: 5.4rem; 
        }

        .btn-group .btn-wrapper:first-of-type button {
            border-radius: 0.3rem 0.0rem 0.0rem 0.3rem;
        }

        .btn-group .btn-wrapper:last-of-type button {
            border-right: none;
            border-radius: 0.0rem 0.3rem 0.3rem 0.0rem;
        }

        .icon {
            height: 1.4rem;
            max-width: 1.6rem;
            margin: 0.0rem;
            fill: rgb(242, 241, 240);
        }

        button.active .icon {
            fill: rgb(44, 43, 42);
        }

        .btn-text {
            font-size: 1.1rem;
            color: rgb(242, 241, 240);
        }

        .caret-down {
            width: 0.7rem;
            margin-left: 0.3rem;
            fill: rgb(242, 241, 240);
        }

        .btn-label {
            text-align: center;
            font-size: 1.1rem;
            letter-spacing: 0.04rem;
            color: rgb(242, 241, 240);
            cursor: default;
            padding: 0.0rem 0.3rem;
            z-index: 10000;
            display: block;
            fill: rgb(242, 241, 240);
            margin-top:  0.4rem;
        }

        .btn-container.btn-no-label .btn-label,
        .btn-group.btn-no-label .btn-label {
            display: none;
        }
    }
</style>

<div class="{buttons.length > 1 ? 'btn-group' : 'btn-container'} {hasLabels ? '' : 'btn-no-label'}">
    {#each buttons as button}
        <div class="btn-wrapper">
            <button class="{button.dropdownId ? 'js-is-dropdown' : ''} {button.active ? 'active' : ''}" on:click={() => buttonClick(button)}>
                {#if button.iconName}
                    <svg class="icon" viewBox="{$getIcon(button.iconName).viewBox}">
                        <path d={$getIcon(button.iconName).d}/>
                    </svg>
                {:else if button.text}
                    <span class="btn-text">{button.text}</span>
                {/if}
                {#if button.dropdownId}
                    <svg class="caret-down" viewBox="{$getIcon('caret-down').viewBox}">
                        <path d={$getIcon('caret-down').d}/>
                    </svg>
                {/if}
            </button>
            <div class="btn-label">{button.label}</div>
            {#if button.dropdownId}
                <Dropdown bind:this={dropdown} id={button.dropdownId} />
            {/if }
        </div>
    {/each}
</div>