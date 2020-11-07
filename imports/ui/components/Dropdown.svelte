<script>
    import List from '../elements/List.svelte';
    import {settings, dropdownState} from '../../modules/store.js';

    export let id;

    let hasLabels = $settings.toolbarButtons.hasLabels;
    let hasArrows = $settings.dropdowns.hasArrows;
    let windowHeight;
    let windowWidth;
    let dropdown;
    let dropdownWidth;
    let dropdownPane;
    let dropdownPaneWidth;
    let dropdownPaneMaxHeight;
    let dropdownOffsetLeft;
    let dropdownOffsetRight;

    $dropdownState[id] = {isOpen: false}; 

    export const dropdownButtonClick = () => {
        calcualteDropdownPaneHorizontal();
        calcualteDropdownPaneMaxHeight();
        openCloseDropdown();
    }
    
    let calcualteDropdownPaneMaxHeight = () => {
        dropdownPaneMaxHeightReduction = hasArrows ? 65 : 50;
        dropdownPaneMaxHeight = `${(windowHeight - dropdownPaneMaxHeightReduction) / 10}rem`;
    };

    let calcualteDropdownPaneHorizontal = () => {
        let dropdownLeft = Math.trunc(dropdown.getBoundingClientRect().left);

        if ((dropdownPaneWidth - dropdownWidth) / 2 + 12 > dropdownLeft && hasArrows) {
            dropdownOffsetLeft = `${0 - ((dropdownLeft - 11) / 10)}rem`;
            dropdownOffsetRight = 'auto';
        } else if ((dropdownPaneWidth + dropdownWidth) / 2 + dropdownLeft + 11 > windowWidth) {
            dropdownOffsetLeft = 'auto'
            dropdownOffsetRight = `${0 - (windowWidth - dropdownLeft - dropdownWidth - 11) / 10}rem`;
        } else {
            dropdownOffsetLeft = 'auto';
            dropdownOffsetRight = 'auto';
        }
    };

    let openCloseDropdown = () => {
        Object.keys($dropdownState).forEach(key => {
            let state = id === key && !$dropdownState[key].isOpen? true : false;
            $dropdownState[key].isOpen = state;
        });
    };
</script>

<style>
    @media only screen and (min-width: 0px) {
        .dropdown {
            display: flex;
            position: relative;
            top: -200000.0rem;
            z-index: 100000;
        }

        .dropdown-arrow {
            display: none;
            justify-content: center;
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
            top: -1.3rem;
            z-index: 2;
            max-width: 30.2rem;
            min-width: 10.8rem;
            border-radius: 0.3rem;
            overflow-x: hidden; 
            overflow-x: auto; 
            padding: 0.6rem 0.0rem;
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

        .dropdown-pane.no-button-labels {
            top: 0.3rem;
        }

        .dropdown.has-dropdown-arrow {
            justify-content: center;
        }
        
        .dropdown.has-dropdown-arrow .dropdown-arrow {
            display: flex;
        }

        .dropdown.has-dropdown-arrow .dropdown-arrow.no-button-labels {
            top: 0.1rem;
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

        .dropdown.has-dropdown-arrow .dropdown-pane.no-button-labels {
            top: 1.5rem;
        }

        .dropdown.has-dropdown-arrow .dropdown-pane:after {
            display: none;
        }
    }
</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={() => calcualteDropdownPaneHorizontal} on:resize={() => calcualteDropdownPaneMaxHeight()}/>

<div class="dropdown {hasArrows ? 'has-dropdown-arrow' : ''}" style={$dropdownState[id].isOpen ? 'top: auto' : ''} bind:this={dropdown} bind:offsetWidth={dropdownWidth}>
    {#if hasArrows}
        <div class="dropdown-arrow {hasLabels ? '' : 'no-button-labels'}"></div>
    {/if}
    <div class="dropdown-pane {hasLabels ? '' : 'no-button-labels'}" style='max-height: {dropdownPaneMaxHeight}; left: {dropdownOffsetLeft}; right: {dropdownOffsetRight};' bind:offsetWidth={dropdownPaneWidth} bind:this={dropdownPane}>
        <List id={id}/>
    </div>
</div>