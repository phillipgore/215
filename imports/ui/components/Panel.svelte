<script>
    import {fade} from 'svelte/transition';
    import {getIcon, panelLists, panelState} from '../../modules/store.js';

    export let id;
    
    let panelTitle = $panelLists.find(panel => panel.id === id).panelTitle;

    $panelState[id] = {isOpen: false};

    let closePanel = () => {
        $panelState[id].isOpen = false;
    };
</script>

<style>
    @media only screen and (min-width: 0px) {
        .panel {
            margin: 10.0rem auto;
            width: 64.0rem;
            min-height: 48.0rem;
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

        .panel-title-bar {
            position: relative;
            border-bottom: 0.1rem solid rgb(182, 181, 180);
        }

        .panel-title {
            font-size: 1.6rem;
            font-weight: 500;
            text-align: center;
            padding: 1.2rem 3.6rem;
            margin: 0.0rem;
        }

        .button-close {
            position: absolute;
            top: 0.0rem;
            right: 0.0rem;
            transform: rotate(45deg);
            height: 2.2rem;
            fill: #363636;
            float: right;
            margin: 1.0rem 1.0rem;
        }

        .panel-content {
            overflow-x: hidden; 
            overflow-x: auto; 
            position: absolute;
            top: 4.2rem;
            right: 0.0rem;
            bottom: 0.0rem;
            left: 0.0rem;
        }
    }
</style>

{#if $panelState[id].isOpen}
    <div class="panel" in:fade="{{ delay: 0, duration: 100 }}" out:fade="{{ delay: 0, duration: 200 }}">
        <div class="panel-title-bar">
            <div class="panel-title">{panelTitle}</div>
            <svg class="button-close" viewBox={$getIcon('plus-circle').viewBox} on:click={() => closePanel()}>
                <path d={$getIcon('plus-circle').d}/>
            </svg>
        </div>
        <div class="panel-content"></div>
    </div>
{/if}