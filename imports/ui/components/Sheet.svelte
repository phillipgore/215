<script>
    import {fly} from 'svelte/transition';
    import List from '../elements/List.svelte';
    import {settings, sheetState, getIcon, buttonLists} from '../../modules/store.js';

    export let id;
    export let isSheetFull = false;

    let sheetTitle = $buttonLists.find(sheet => sheet.id === id).listTitle;
    let windowHeight;

    $sheetState[id] = {isOpen: false};

    let getFlyY = () => {
        if (isSheetFull) {
            return windowHeight;
        }
        return windowHeight * 0.42;
    };

    let closeSheet = () => {
        $settings.toolbarMobile.isVisible = true;
        $sheetState[id].isOpen = false;
    };
</script>

<style>
    @media only screen and (min-width: 0px) {
        .sheet {
            height: calc(100vh * 0.42);
            border-top: 0.1rem solid rgba(181, 181, 181, 0.65);
            overflow: hidden;
            -webkit-backdrop-filter: blur(1.0rem);
            backdrop-filter: blur(1.0rem);
            position: fixed;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 20;
            box-shadow: 0.0rem 0.0rem 0.8rem rgba(0, 0, 0, 0.2);
        }

        .sheet.sheet-full {
            height: 100vh;
            border-top: none;
        }

        .sheet:after {
            content: " ";
            background-color: rgba(235, 235, 235, 0.69);
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        .sheet-title-bar {
            position: relative;
        }

        .sheet-title {
            font-size: 1.4rem;
            font-weight: 500;
            text-align: center;
            padding: 0.6rem 3.6rem;
            margin: 0.0rem;
        }

        .button-close {
            position: absolute;
            top: 0.0rem;
            right: 0.7rem;
            height: 2.8rem;
            width: 3.6rem;
            display: flex;
            align-items: center;
            background-color: transparent;
        }

        .icon-close {
            transform: rotate(45deg);
            height: 2.0rem;
            width: 2.0rem;
            margin-left: 0.2rem;
            fill: #363636;
        }

        .sheet-content {
            overflow-x: hidden; 
            overflow-x: auto; 
            position: absolute;
            top: 2.8rem;
            right: 0.0rem;
            bottom: 0.0rem;
            left: 0.0rem;
        }
    }
</style>

<svelte:window bind:innerHeight={windowHeight} />
{#if $sheetState[id].isOpen}
    <div class="sheet {isSheetFull ? 'sheet-full' : ''}" in:fly="{{ y: getFlyY(), duration: 200, opacity: 100 }}" out:fly="{{ y: getFlyY(), duration: 300, opacity: 100 }}">
        <div class="sheet-title-bar">
            <h1 class="sheet-title">{sheetTitle}</h1>
            <button class="button-close" on:click={() => closeSheet()}>
                <svg class="icon-close" viewBox="{$getIcon('plus-circle').viewBox}">
                    <path d={$getIcon('plus-circle').d}/>
                </svg>
            </button>
        </div>
        <div class="sheet-content">
            <List id={id}/>
        </div>
    </div>
{/if}
