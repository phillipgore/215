<script>
    import {fade} from 'svelte/transition';
    import List from '../elements/List.svelte';
    import {settings, toolbarState, toolbarButtonsState, dropdownState} from '../../modules/store.js';

    export let dropdown;
    
    let id = dropdown.id;
    let hasLabels = $settings.toolbarButtons.hasLabels;
    let hasArrows = $settings.dropdowns.hasArrows;
    let windowHeight;
    let windowWidth;

    $dropdownState[id] = {
        isOpen: false,
        intWidth: dropdown.intWidth,
        remWidth: `${dropdown.intWidth / 10}rem`,
    };
</script>

<style>
    @media only screen and (min-width: 0px) {
        .dropdown {
            display: flex;
            justify-content: left;
            position: absolute;
            z-index: 100000;
        }

        .dropdown.has-dropdown-arrow {
            justify-content: center;
        }

        .dropdown-arrow {
            display: none;
            position: absolute;
            width: 4.0rem;
            height: 1.5rem;
            z-index: 3;
            overflow: hidden;
        }

        .dropdown-arrow:after {
            content: '';
            display: none;
            width: 1.9997rem;
            height: 1.9997rem;
            position: absolute;
            top: -0.1rem;
            left: 0.6rem;
            border: 0.1rem solid rgb(181, 180, 179);
            background-color: rgb(242, 241, 240);
            transform: rotate(45deg);
            transform-origin: 0 100%;
        }

        .dropdown-pane {
            position: absolute;
            z-index: 2;
            max-width: 20.0rem;
            min-width: 10.0rem;
            border-radius: 0.3rem;
            overflow-x: hidden; 
            overflow-x: auto; 
            padding: 0.4rem 0.0rem;
            box-shadow: 0.0rem 0.0rem 0.8rem rgba(0, 0, 0, 0.15);
            -webkit-backdrop-filter: blur(1.0rem);
            backdrop-filter: blur(1.0rem);
            border: 0.1rem solid rgba(181, 180, 179, 0.65);
        }

        .dropdown-pane:after {
            content: " ";
            background-color: rgba(235, 235, 235, 0.69);
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        
        .dropdown.has-dropdown-arrow .dropdown-arrow {
            display: flex;
        }
        
        .dropdown.has-dropdown-arrow .dropdown-arrow:after {
            display: block;
        }
        
        .dropdown.has-dropdown-arrow .dropdown-pane {
            top: 1.4rem;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            background-color: rgb(242, 241, 240);
            border: 0.1rem solid rgb(181, 180, 179);
            box-shadow: none;
        }

        .dropdown.has-dropdown-arrow .dropdown-pane:after {
            display: none;
        }
    }
</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

{#if $dropdownState[id].isOpen}
    <div
        class="dropdown {hasArrows ? 'has-dropdown-arrow' : ''}"
        style="top: {$dropdownState[id].remTop}; left: {$dropdownState[id].remLeft}; width: {$dropdownState[id].remWidth}"
        out:fade="{{ delay: 0, duration: 100 }}"
    >
        {#if hasArrows}
            <div class="dropdown-arrow {hasLabels ? 'has-button-labels' : ''}"></div>
        {/if}
        <div class="dropdown-pane {hasLabels ? 'has-button-labels' : ''}" style="width: {$dropdownState[id].paneRemWidth}; max-height: {$dropdownState[id].paneRemMaxHeight}; left: {$dropdownState[id].paneRemLeft}; right: {$dropdownState[id].paneRemRight}">
            <List id={id}/>
        </div>
    </div>
{/if}