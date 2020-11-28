<script>
    import {getIcon, buttonLists, buttonListState, panels, panelState} from '../../modules/store.js';

    export let id;
    let buttonList = $buttonLists.find(button => button.id === id);

    const buttonClick = (button) => {
        Object.keys($buttonListState).forEach(key => {
            $buttonListState[key].isActive = false;
        });
        $buttonListState[button.id].isActive = true;
        $panelState[button.panelId].panelTitle = button.title;
    }
</script>

<style>
    @media only screen and (min-width: 0px) {
        .list-title {
            display: flex;
            align-items: center;
            height: 4.2rem;
            padding-left: 0.9rem;
        }

        h1 {
            font-size: 1.3rem;
            font-weight: 700;
            color: rgb(142, 141, 140);
            margin: 0.0rem;
            padding: 0.0rem;
        }

        ul {
            list-style: none;
            padding: 0.0rem;
            margin: 0.0rem;
        }

        li {
            display: flex;
            align-items: center;
            padding: 0.0rem;
            margin: 0.0rem;
            overflow: hidden;
        }
        
        li button,
        li button.active {
            display: flex;
            width: 100%;
            align-items: center;
            color: rgb(0, 0, 0);
            text-decoration: none;
            font-size: 1.3rem;
            border-radius: 0.3rem;
            padding: 0.8rem;
            margin: 0.0rem 0.4rem;
            background-color: transparent;
        }

        li button.active {
            background-color: rgba(181, 181, 181, 0.55);
        }

        li button .main-text {
            white-space: nowrap;
        }

        .divider {
            height: auto;
            margin-top: 0.6rem;
            border-top: 0.1rem solid rgba(181, 181, 181, 0.45);
            padding-bottom: 0.6rem;
        }

        .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1.4rem;
            width: 1.4rem;
            margin-right: 0.6rem;
        }

        .icon-left {
            height: 1.7rem;
            fill: rgb(84, 83, 82);
            max-height: 1.2rem;
            max-width: 1.2rem;
        }
    }
</style>

<div class="list-title">
    <h1>{buttonList.listTitle}</h1>
</div>
<ul>
    {#each buttonList.buttons as button}
        {#if button.hasPanel}
            {#if button.divider}
                <div class="divider"></div>
            {:else}
                <li>
                    <button class={$buttonListState[button.id].isActive ? 'active' : ''} on:click|preventDefault={() => buttonClick(button)}>
                        {#if button.iconLeft}
                            <div class="icon-container">
                                <svg class="icon-left" viewBox="{$getIcon(button.iconLeft).viewBox}">
                                    <path d={$getIcon(button.iconLeft).d}/>
                                </svg>
                            </div>
                        {/if}
                        <div class="main-text">{button.textMain}</div>
                    </button>
                </li>
            {/if}
        {/if}
    {/each}
</ul>