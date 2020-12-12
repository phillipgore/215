<script>
    import {getIcon, buttonLists, panelState, buttonListState} from '../../modules/store.js';

    export let id;
    let buttonList = $buttonLists.find(buttonList => buttonList.id === id);
    let buttons = buttonList.buttons;

    buttons.forEach(button => {
        $buttonListState[button.id] = {
            id: button.id, 
            isActive: button.isActive, 
            isDisabled: button.isDisabled,
        }
    })
    
    const buttonClick = (button) => {
        if (button.hasPanel) {
            Object.keys($panelState).forEach(key => {
                $panelState[key].isOpen = false;
            });
            $panelState[button.panelId].panelTitle = button.title;
            $panelState[button.panelId].isOpen = true;
        };

        Object.keys($buttonListState).forEach(key => {
            $buttonListState[key].isActive = false;
        });
        $buttonListState[button.id].isActive = true;
    }
</script>

<style>
    @media only screen and (min-width: 0px) {
        ul {
            list-style: none;
            padding: 0.0rem;
            margin: 1.6rem 1.6rem 1.2rem;
        }

        li {
            display: flex;
            align-items: center;
            padding: 0.0rem;
            margin: 0.0rem;
            overflow: hidden;
        }

        li button,
        li button:hover:enabled {
            display: flex;
            width: 100%;
            align-items: center;
            color: rgb(0, 0, 0);
            background: rgb(255, 255, 255);
            border-radius: 0.3rem;
            text-decoration: none;
            font-size: 1.6rem;
            padding: 0.9rem 1.5rem;
            margin: 0.0rem 0.0rem 0.4rem;
        }

        li button .label {
            white-space: nowrap;
        }

        li button:disabled .label {
            color: rgb(136, 135, 134)
        }

        li button .label-right {
            text-align: right;
            width: 7.2rem;
            flex-grow: 4;
            display: none;
            color: rgb(136, 135, 134)
        }

        .divider {
            height: 1.8rem;
        }

        .icon-container,
        .shape-container  {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1.7rem;
            width: 1.7rem;
            margin-right: 0.6rem;
        }

        li button .icon-left {
            height: 1.7rem;
            fill: rgb(84, 83, 82);
            max-width: 1.5rem;
        }

        li button:disabled .icon-left {
            fill: rgb(136, 135, 134)
        }

        li button .circle {
            height: 1.6rem;
            width: 1.6rem;
            border-radius: 0.8rem;
            border: solid 0.1rem;
        }

        li button .circle.red { border-color: #CC8F8F; background-color: #FFD9D9; }
        li button .circle.orange { border-color: #CCAD8F; background-color: #FFECD9; }
        li button .circle.yellow { border-color: #CCCC8F; background-color: #FFFFD9; }
        li button .circle.green { border-color: #8FCC8F; background-color: #D9FFD9; }
        li button .circle.aqua { border-color: #8FCCCC; background-color: #D9FFFF; }
        li button .circle.blue { border-color: #8FADCC; background-color: #D9ECFF; }
        li button .circle.purple { border-color: #AD8FCC; background-color: #ECD9FF; }
        li button .circle.pink { border-color: #CC8FCC; background-color: #FFD9FF; }

        li button:disabled .circle { 
            opacity: 0.5;
        }
    }

    @media only screen and (min-width: 768px) {
        ul {
            margin: 0.0rem;
        }
        
        li button,
        li button:hover:enabled {
            background: transparent;
            border-radius: 0.3rem;
            font-size: 1.3rem;
            padding: 0.6rem;
            margin: 0.0rem 0.4rem;
        }

        li button:hover:enabled {
            color: rgb(255, 255, 255);
            background-color: rgb(26, 140, 255);
        }

        li button .label {
            white-space: nowrap;
        }

        li button .label-right {
            display: block;
        }

        li button:hover:enabled .label-right {
            color: rgb(255, 255, 255);
        }

        .divider {
            height: auto;
            margin-top: 0.4rem;
            border-top: 0.1rem solid rgb(182, 181, 180);
            padding-bottom: 0.4rem;
        }

        li button .icon-container,
        li button .shape-container  {
            height: 1.4rem;
            width: 1.4rem;
        }

        li button .icon-left {
            max-height: 1.2rem;
            max-width: 1.2rem;
        }

        li button:hover:enabled .icon-left {
            fill: rgb(255, 255, 255);
        }

        li button .circle {
            height: 1.4rem;
            width: 1.4rem;
            border-radius: 0.7rem;
        }
    }
</style>

<ul>
    {#each buttons as button}
        {#if button.divider}
            <div class="divider"></div>
        {:else}
            <li>
                <button href={"#"} on:click|preventDefault={() => buttonClick(button)} disabled="{$buttonListState[button.id].isDisabled}"> 
                    {#if buttonList.isChecked}
                        <div class="icon-container">
                            {#if $buttonListState[button.id].isActive}
                                <svg class="icon-left" viewBox="{$getIcon('check').viewBox}">
                                    <path d={$getIcon('check').d}/>
                                </svg>
                            {/if}
                        </div>
                    {:else if button.iconLeft}
                        <div class="icon-container">
                            <svg class="icon-left" viewBox="{$getIcon(button.iconLeft).viewBox}">
                                <path d={$getIcon(button.iconLeft).d}/>
                            </svg>
                        </div>
                    {/if}
                    {#if button.shapeLeft}
                        <div class="shape-container">
                            <div class="{button.shapeLeft} {button.shapeLeftColor}"></div>
                        </div>
                    {/if}
                    <div class="label">{button.label}</div>
                    {#if button.labelRight}
                        <div class="label-right">{@html button.labelRight}</div>
                    {/if}
                </button>
            </li>
        {/if}
    {/each}
</ul>