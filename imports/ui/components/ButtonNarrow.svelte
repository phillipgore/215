<script>
    import {settings, interfaceState, getIcon, toolbarButtons, toolbarButtonState, sheetState} from '../../modules/store.js';

    export let button;

    const buttonClick = (button) => {
        if (button.hasSwap) {
            let groupButtons = $interfaceState.find(toolbarButton => toolbarButton.id === button.groupId).buttonList;
            let buttonIds = groupButtons.map(groupButton => groupButton.id);

            let getNextButton = (buttonIds, button) => {
                if (buttonIds.length === (buttonIds.indexOf(button.id) + 1)) {
                    return 0;
                }
                return buttonIds.indexOf(button.id) + 1
            };

            let nextButtonIndex = getNextButton(buttonIds, button);
            let nextButtonId = buttonIds[nextButtonIndex];
            
            Object.keys($interfaceState).forEach(key => {
                if ($interfaceState[key].hasSwap) {
                    if (key === nextButtonId) {
                        $interfaceState[key].isSelected = false;
                    } else {
                        $interfaceState[key].isSelected = true;
                    }
                }
            });
        }

        if (button.hasSheet) {
            $settings.toolbarNarrow.isVisible = false;
            Object.keys($sheetState).forEach(key => {
                $sheetState[key].isOpen = false;
            });
            $sheetState[button.id].isOpen = true;
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
            background-color: rgb(44, 43, 42);
            flex-basis: 9.0%;
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

{#if !button.hasSwap || !$toolbarButtonState[button.id].isSelected}
    <button class="{button.id ? 'js-is-sheet' : ''}" on:click={() => buttonClick(button)}>
        <svg class="icon" viewBox="{$getIcon(button.iconName).viewBox}">
            <path d={$getIcon(button.iconName).d}/>
        </svg>
    </button>
{/if}
