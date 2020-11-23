<script>
    import {getIcon, dropdownSheetAndPanelButtons, panelState} from '../../modules/store.js';

    export let id;
    let list = $dropdownSheetAndPanelButtons.find(sheet => sheet.id === id);

    const itemClick = (item) => {
        if (item.panelId) {
            Object.keys($panelState).forEach(key => {
                $panelState[key].isOpen = false;
            });
            $panelState[item.panelId].isOpen = true;
        };
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

        li a,
        li a:hover {
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

        li a .main-text {
            white-space: nowrap;
        }

        li a .text-right {
            text-align: right;
            width: 7.2rem;
            flex-grow: 4;
            display: none;
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
            margin-top: -0.2rem;
        }

        .icon-left {
            height: 1.7rem;
            fill: rgb(84, 83, 82);
            max-width: 1.5rem;
        }

        .circle {
            height: 1.6rem;
            width: 1.6rem;
            border-radius: 0.8rem;
            border: solid 0.1rem;
        }

        .red { border-color: #CC8F8F; background-color: #FFD9D9; }
        .orange { border-color: #CCAD8F; background-color: #FFECD9; }
        .yellow { border-color: #CCCC8F; background-color: #FFFFD9; }
        .green { border-color: #8FCC8F; background-color: #D9FFD9; }
        .aqua { border-color: #8FCCCC; background-color: #D9FFFF; }
        .blue { border-color: #8FADCC; background-color: #D9ECFF; }
        .purple { border-color: #AD8FCC; background-color: #ECD9FF; }
        .pink { border-color: #CC8FCC; background-color: #FFD9FF; }
    }

    @media only screen and (min-width: 768px) {
        ul {
            margin: 0.0rem;
        }
        
        li a,
        li a:hover {
            background: transparent;
            border-radius: 0.3rem;
            font-size: 1.3rem;
            padding: 0.6rem;
            margin: 0.0rem 0.4rem;
        }

        li a:hover {
            color: rgb(255, 255, 255);
            background-color: rgb(26, 140, 255);
            /* background-color: rgb(112, 111, 110); */
        }

        li a .main-text {
            white-space: nowrap;
        }

        li a .text-right {
            display: block;
        }

        .divider {
            height: auto;
            margin-top: 0.4rem;
            border-top: 0.1rem solid rgb(182, 181, 180);
            padding-bottom: 0.4rem;
        }

        .icon-container,
        .shape-container  {
            height: 1.4rem;
            width: 1.4rem;
        }

        .icon-left {
            max-height: 1.2rem;
            max-width: 1.2rem;
        }

        li a:hover .icon-left {
            fill: rgb(255, 255, 255);
        }

        .circle {
            height: 1.4rem;
            width: 1.4rem;
            border-radius: 0.7rem;
        }
    }
</style>

<ul>
    {#each list.listItems as item}
        {#if item.divider}
            <div class="divider"></div>
        {:else}
            <li>
                <a href={"#"} on:click|preventDefault={() => itemClick(item)}>
                    {#if item.iconLeft}
                        <div class="icon-container">
                            <svg class="icon-left" viewBox="{$getIcon(item.iconLeft).viewBox}">
                                <path d={$getIcon(item.iconLeft).d}/>
                            </svg>
                        </div>
                    {/if}
                    {#if item.shapeLeft}
                        <div class="shape-container">
                            <div class="{item.shapeLeft} {item.shapeLeftColor}"></div>
                        </div>
                    {/if}
                    <div class="main-text">{item.textMain}</div>
                    {#if item.textRight}
                        <div class="text-right">{@html item.textRight}</div>
                    {/if}
                </a>
            </li>
        {/if}
    {/each}
</ul>