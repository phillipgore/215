<script>
    import {settings, getIcon, toolbarState, toolbarButtonState, dropdowns, dropdownState, panelState} from '../../modules/store.js';

    export let button;

    let id = button.id;
    let hasLabels = $settings.toolbarButtons.hasLabels;
    let windowWidth;
    let windowHeight;

    if (button.groupId) {
        $toolbarButtonState[id] = {groupId: button.groupId, hasSwap: button.hasSwap, isSelected: button.isSelected};
    } else {
        $toolbarButtonState[id] = {isActive: button.isActive};
    }

    const buttonClick = (button) => {
        Object.keys($dropdownState).forEach(key => {
            if (key != button.id) {
                $dropdownState[key].isOpen = false;
            }
        });

        Object.keys($toolbarButtonState).forEach(key => {
            if (key != button.id) {
                $toolbarButtonState[key].isActive = false;
            }
        });

        if (button.hasDropdown) {
            dropdownPosition();
            $dropdownState[button.id].isOpen = !$dropdownState[button.id].isOpen;
            $toolbarButtonState[button.id].isActive = !$toolbarButtonState[button.id].isActive;
        };

        if (button.hasSwap) {
            Object.keys($toolbarButtonState).forEach(key => {
                if ($toolbarButtonState[key].hasSwap) {
                    if (id === key) {
                        $toolbarButtonState[key].isSelected = true;
                    } else {
                        $toolbarButtonState[key].isSelected = false;
                    }
                }
            });
        };
        
        if (button.hasPanel) {
            Object.keys($panelState).forEach(key => {
                if (key != button.panelId) {
                    $panelState[key].isOpen = false;
                }
            });
            $panelState[button.panelId].isOpen = !$panelState[button.panelId].isOpen;

            Object.keys($toolbarButtonState).forEach(key => {
                if (key != button.id) {
                    $toolbarButtonState[key].isActive = false;
                }
            });
            $toolbarButtonState[button.id].isActive = !$toolbarButtonState[button.id].isActive;
        };
    };

    const dropdownPosition = () => {
        if (button.hasDropdown) {
            let clickedButtonRect = document.getElementById(id).getBoundingClientRect();
            $toolbarButtonState[id].intOffsetTop = Math.ceil(clickedButtonRect.top);
            $toolbarButtonState[id].intOffsetRight = Math.ceil(clickedButtonRect.right);
            $toolbarButtonState[id].intOffsetLeft = Math.ceil(clickedButtonRect.left);
            $toolbarButtonState[id].intHeight = Math.ceil(clickedButtonRect.height);
            $toolbarButtonState[id].intWidth = Math.ceil(clickedButtonRect.width);

            $dropdownState[id].remLeft = `${($toolbarButtonState[id].intOffsetLeft) / 10}rem`;
            $dropdownState[id].remWidth = `${($toolbarButtonState[id].intWidth) / 10}rem`;
            
            if ($settings.dropdowns.hasArrows) {
                $dropdownState[id].remTop = `${($toolbarState.intHeight - 5)  / 10}rem`;
                $dropdownState[id].paneRemMaxHeight = `${(windowHeight - ($toolbarState.intHeight + 30)) / 10}rem`;
            } else {
                $dropdownState[id].remTop = `${($toolbarButtonState[id].intOffsetTop + $toolbarButtonState[id].intHeight + 2)  / 10}rem`;
                $dropdownState[id].paneRemMaxHeight = `${(windowHeight - ($toolbarButtonState[id].intHeight + $toolbarButtonState[id].intOffsetTop) - 23) / 10}rem`;
            }

            if (($dropdownState[id].paneIntWidth - $toolbarButtonState[id].intWidth)  / 2 > $toolbarButtonState[id].intOffsetLeft) {
                $dropdownState[id].paneRemLeft = `${0 - (($toolbarButtonState[id].intOffsetLeft - 10) / 10)}rem`;
            }

            if ($toolbarButtonState[id].intOffsetLeft + (($dropdownState[id].paneIntWidth + $toolbarButtonState[id].intWidth)  / 2) > windowWidth) {
                $dropdownState[id].paneRemRight = `${0 - ((windowWidth - $toolbarButtonState[id].intOffsetRight - 10) / 10)}rem`;
            }
        }
    }

    const dropdownResetForNarrow = () => {
        if (windowWidth < 768) {
            $dropdowns.forEach(dropdown => {
                $dropdownState[dropdown.id] = {
                    isOpen: false,
                    paneIntWidth: dropdown.paneIntWidth,
                    paneRemWidth: `${dropdown.paneIntWidth / 10}rem`,
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
            background-color: rgb(146, 145, 144);
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
            z-index: 10;
            display: block;
            fill: rgb(242, 241, 240);
            margin-top:  0.4rem;
        }

        .btn-no-label .btn-label {
            display: none;
        }
    }
</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:resize={() => dropdownPosition()} on:resize={() => dropdownResetForNarrow()}/>

<div class="{button.hasSwap ? 'btn-grouped' : 'btn-container'} {hasLabels ? '' : 'btn-no-label'}">
    <div class="btn-wrapper">
        <button 
            id="{id}"
            on:click={() => buttonClick(button)}
            class="js-is-button 
                {button.hasSwap ? 'js-is-grouped' : ''} 
                {button.id ? 'js-is-dropdown' : ''} 
                {button.id ? 'js-is-panel' : ''} 
                {$toolbarButtonState[id].isActive ? 'active' : ''} 
                {$toolbarButtonState[id].isSelected ? 'selected' : ''}" 
        >
            {#if button.iconName}
                <svg class="icon" viewBox="{$getIcon(button.iconName).viewBox}">
                    <path d={$getIcon(button.iconName).d}/>
                </svg>
            {:else if button.text}
                <span class="btn-text">{button.text}</span>
            {/if}
            {#if button.hasDropdown}
                <svg class="caret-down" viewBox="{$getIcon('caret-down').viewBox}">
                    <path d={$getIcon('caret-down').d}/>
                </svg>
            {/if}
        </button>
        <div class="btn-label">{button.label}</div>
    </div>
</div>