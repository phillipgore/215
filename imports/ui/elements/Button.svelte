<script>
    import {settings, getIcon, toolbarState, toolbarButtonsState, dropdownState, panelState} from '../../modules/store.js';

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
        if (button.dropdownId) {
            let clickedButton = document.getElementById(id);
            $toolbarButtonsState[id].intOffsetTop = Math.trunc(clickedButton.getBoundingClientRect().top);
            $toolbarButtonsState[id].intOffsetRight = Math.trunc(clickedButton.getBoundingClientRect().right);
            $toolbarButtonsState[id].intOffsetLeft = Math.trunc(clickedButton.getBoundingClientRect().left);
            $toolbarButtonsState[id].intHeight = Math.trunc(clickedButton.getBoundingClientRect().height);
            $toolbarButtonsState[id].intWidth = Math.trunc(clickedButton.getBoundingClientRect().width);
            
            if ($settings.dropdowns.hasArrows) {
                if (($dropdownState[id].intWidth - $toolbarButtonsState[id].intWidth)  / 2 > $toolbarButtonsState[id].intOffsetLeft) {
                    $dropdownState[id].remMarginLeft = `${Math.abs(($toolbarButtonsState[id].intOffsetLeft - ($dropdownState[id].intWidth - $toolbarButtonsState[id].intWidth) - 10)) / 10}rem`;
                }

                $dropdownState[id].remTop = `${($toolbarState.intHeight - 5)  / 10}rem`;
                $dropdownState[id].remMaxHeight = `${(windowHeight - ($toolbarState.intHeight + 30)) / 10}rem`;
                $dropdownState[id].remLeft = `${($toolbarButtonsState[id].intOffsetLeft) / 10}rem`;
            } else {
                $dropdownState[id].remTop = `${($toolbarButtonsState[id].intOffsetTop + $toolbarButtonsState[id].intHeight + 2)  / 10}rem`;
                $dropdownState[id].remMaxHeight = `${(windowHeight - ($toolbarButtonsState[id].intHeight + $toolbarButtonsState[id].intOffsetTop) - 23) / 10}rem`;
                $dropdownState[id].remLeft = `${($toolbarButtonsState[id].intOffsetLeft) / 10}rem`;
            }

            if ($toolbarButtonsState[id].intOffsetLeft + (($dropdownState[id].intWidth + $toolbarButtonsState[id].intWidth)  / 2) > windowWidth) {
                $dropdownState[id].remMarginLeft = `${0 - (windowWidth - ($toolbarButtonsState[id].intOffsetLeft - (($dropdownState[id].intWidth - $toolbarButtonsState[id].intWidth)  / 2) - 10)) / 10}rem`;
            }

            $dropdownState[id].remContainerWidth = `${($toolbarButtonsState[id].intWidth) / 10}rem`;
            
            Object.keys($dropdownState).forEach(key => {
                if (key != button.id) {
                    $dropdownState[key].isOpen = false;
                }
            });
            $dropdownState[button.id].isOpen = !$dropdownState[button.id].isOpen;
        };

        if (button.type === 'buttonSwap') {
            Object.keys($toolbarButtonsState).forEach(key => {
                if ($toolbarButtonsState[key].type === 'buttonSwap') {
                    if (id === key) {
                        $toolbarButtonsState[key].isSelected = true;
                    } else {
                        $toolbarButtonsState[key].isSelected = false;
                    }
                }
            });
        };
        
        if (button.panelId) {
            Object.keys($panelState).forEach(key => {
                $panelState[key].isOpen = false;
            });
            $panelState[button.panelId].isOpen = true;
        };
    };
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

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

<div class="{button.type === 'buttonSwap' ? 'btn-grouped' : 'btn-container'} {hasLabels ? '' : 'btn-no-label'}">
    <div class="btn-wrapper">
        <button 
            id="{id}"
            on:click={() => buttonClick(button)}
            class="js-is-button 
                {button.type === 'buttonSwap' ? 'js-is-grouped' : ''} 
                {button.dropdownId ? 'js-is-dropdown' : ''} 
                {button.panelId ? 'js-is-panel' : ''} 
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
            {#if button.dropdownId}
                <svg class="caret-down" viewBox="{$getIcon('caret-down').viewBox}">
                    <path d={$getIcon('caret-down').d}/>
                </svg>
            {/if}
        </button>
        <div class="btn-label">{button.label}</div>
    </div>
</div>