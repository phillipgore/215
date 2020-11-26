<script>
    import {settings, getIcon, toolbarState, toolbarButtonsState, dropdowns, dropdownState, panelState} from '../../modules/store.js';

    export let button;

    let id = button.id;
    let hasLabels = $settings.toolbarButtons.hasLabels;
    let windowWidth;
    let windowHeight;

    if (button.groupId) {
        $toolbarButtonsState[id] = {groupId: button.groupId, type: button.type, isSelected: button.isSelected};
    } else {
        $toolbarButtonsState[id] = {type: button.type, isActive: button.isActive};
    }

    const buttonClick = (button) => {
        if (button.type.includes('buttonDropdown')) {
            dropdownPosition();
            
            Object.keys($dropdownState).forEach(key => {
                if (key != button.id) {
                    $dropdownState[key].isOpen = false;
                }
            });
            $dropdownState[button.id].isOpen = !$dropdownState[button.id].isOpen;
        };

        if (button.type.includes('buttonSwap')) {
            Object.keys($toolbarButtonsState).forEach(key => {
                if ($toolbarButtonsState[key].type.includes('buttonSwap')) {
                    if (id === key) {
                        $toolbarButtonsState[key].isSelected = true;
                    } else {
                        $toolbarButtonsState[key].isSelected = false;
                    }
                }
            });
        };
        
        if (button.type.includes('buttonPanel')) {
            Object.keys($panelState).forEach(key => {
                if (key != button.id) {
                    $panelState[key].isOpen = false;
                }
            });
            $panelState[button.id].isOpen = !$panelState[button.id].isOpen;
        };
    };

    const dropdownPosition = () => {
        if (button.type.includes('buttonDropdown')) {
            let clickedButtonRect = document.getElementById(id).getBoundingClientRect();
            $toolbarButtonsState[id].intOffsetTop = Math.ceil(clickedButtonRect.top);
            $toolbarButtonsState[id].intOffsetRight = Math.ceil(clickedButtonRect.right);
            $toolbarButtonsState[id].intOffsetLeft = Math.ceil(clickedButtonRect.left);
            $toolbarButtonsState[id].intHeight = Math.ceil(clickedButtonRect.height);
            $toolbarButtonsState[id].intWidth = Math.ceil(clickedButtonRect.width);

            $dropdownState[id].remLeft = `${($toolbarButtonsState[id].intOffsetLeft) / 10}rem`;
            $dropdownState[id].remWidth = `${($toolbarButtonsState[id].intWidth) / 10}rem`;
            
            if ($settings.dropdowns.hasArrows) {
                $dropdownState[id].remTop = `${($toolbarState.intHeight - 5)  / 10}rem`;
                $dropdownState[id].paneRemMaxHeight = `${(windowHeight - ($toolbarState.intHeight + 30)) / 10}rem`;
            } else {
                $dropdownState[id].remTop = `${($toolbarButtonsState[id].intOffsetTop + $toolbarButtonsState[id].intHeight + 2)  / 10}rem`;
                $dropdownState[id].paneRemMaxHeight = `${(windowHeight - ($toolbarButtonsState[id].intHeight + $toolbarButtonsState[id].intOffsetTop) - 23) / 10}rem`;
            }

            if (($dropdownState[id].intWidth - $toolbarButtonsState[id].intWidth)  / 2 > $toolbarButtonsState[id].intOffsetLeft) {
                $dropdownState[id].paneRemLeft = `${0 - (($toolbarButtonsState[id].intOffsetLeft - 10) / 10)}rem`;
            }

            if ($toolbarButtonsState[id].intOffsetLeft + (($dropdownState[id].intWidth + $toolbarButtonsState[id].intWidth)  / 2) > windowWidth) {
                $dropdownState[id].paneRemRight = `${0 - ((windowWidth - $toolbarButtonsState[id].intOffsetRight - 10) / 10)}rem`;
            }
        }
    }

    const dropdownResetForMobile = () => {
        if (windowWidth < 768) {
            $dropdowns.forEach(dropdown => {
                $dropdownState[dropdown.id] = {
                    isOpen: false,
                };
            })
        }
    }
</script>

<style>
    @media only screen and (min-width: 0px) {
        .btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.0rem 0.3rem;
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

        button:active,
        button.active {
            background-color: rgb(136, 135, 134);
        }

        button.selected {
            background-color: rgb(242, 241, 240);
        }

        .btn-container.btn-no-label button,
        .btn-no-label button {
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

        .btn-group .btn-grouped:first-of-type button {
            border-radius: 0.3rem 0.0rem 0.0rem 0.3rem;
        }

        .btn-group .btn-grouped:last-of-type button {
            border-right: none;
            border-radius: 0.0rem 0.3rem 0.3rem 0.0rem;
        }

        .icon {
            height: 1.4rem;
            max-width: 1.6rem;
            margin: 0.0rem;
            fill: rgb(242, 241, 240);
        }

        button.selected .icon {
            fill: rgb(84, 83, 82);
        }

        .btn-text {
            font-size: 1.1rem;
            color: rgb(242, 241, 240);
        }

        button.selected .btn-text {
            color: rgb(44, 43, 42);
        }

        .caret-down {
            width: 0.7rem;
            margin-left: 0.3rem;
            fill: rgb(242, 241, 240);
        }

        button.selected .caret-down {
            fill: rgb(84, 83, 82);
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

        .btn-no-label .btn-label {
            display: none;
        }
    }
</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={() => dropdownPosition()} on:resize={() => dropdownResetForMobile()}/>

<div class="{button.type.includes('buttonSwap') ? 'btn-grouped' : 'btn-container'} {hasLabels ? '' : 'btn-no-label'}">
    <div class="btn-wrapper">
        <button 
            id="{id}"
            on:click={() => buttonClick(button)}
            class="js-is-button 
                {button.type.includes('buttonSwap') ? 'js-is-grouped' : ''} 
                {button.id ? 'js-is-dropdown' : ''} 
                {button.id ? 'js-is-panel' : ''} 
                {$toolbarButtonsState[id].isActive ? 'active' : ''} 
                {$toolbarButtonsState[id].isSelected ? 'selected' : ''}" 
        >
            {#if button.iconName}
                <svg class="icon" viewBox="{$getIcon(button.iconName).viewBox}">
                    <path d={$getIcon(button.iconName).d}/>
                </svg>
            {:else if button.text}
                <span class="btn-text">{button.text}</span>
            {/if}
            {#if button.type.includes('buttonDropdown')}
                <svg class="caret-down" viewBox="{$getIcon('caret-down').viewBox}">
                    <path d={$getIcon('caret-down').d}/>
                </svg>
            {/if}
        </button>
        <div class="btn-label">{button.label}</div>
    </div>
</div>