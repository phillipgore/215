<script>
    import {settings, getIcon, toolbarButtons, toolbarButtonsState, sheetState} from '../../modules/store.js';

    export let button;

    const buttonClick = (button) => {
        if (button.groupId) {
            let groupButtons = $toolbarButtons.find(toolbarButton => toolbarButton.id === button.groupId).buttons;
            let buttonIds = groupButtons.map(groupButton => groupButton.id);

            let getNextButton = (buttonIds, button) => {
                if (buttonIds.length === (buttonIds.indexOf(button.id) + 1)) {
                    return 0;
                }
                return buttonIds.indexOf(button.id) + 1
            };

            let nextButtonIndex = getNextButton(buttonIds, button);
            let nextButtonId = buttonIds[nextButtonIndex];
            
            Object.keys($toolbarButtonsState).forEach(key => {
                if ($toolbarButtonsState[key].type === 'buttonSwap') {
                    if (key === nextButtonId) {
                        $toolbarButtonsState[key].isSelected = false;
                    } else {
                        $toolbarButtonsState[key].isSelected = true;
                    }
                }
            });
        }

        if (button.sheetId) {
            $settings.toolbarMobile.isVisible = false;
            Object.keys($sheetState).forEach(key => {
                $sheetState[key].isOpen = false;
            });
            $sheetState[button.sheetId].isOpen = true;
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

{#if button.type != 'buttonSwap' || !$toolbarButtonsState[button.id].isSelected}
    <button class="{button.sheetId ? 'js-is-sheet' : ''}" on:click={() => buttonClick(button)}>
        <svg class="icon" viewBox="{$getIcon(button.iconName).viewBox}">
            <path d={$getIcon(button.iconName).d}/>
        </svg>
    </button>
{/if}
