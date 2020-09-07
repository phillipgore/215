<script>
    import {icons, getIcon} from '../../modules/icons';
    import {dropdownPanePosition, closeAllDropdownPanes, openCloseDropdownPane} from '../../modules/dropdowns';

    // Button Properties: label, text, iconName, isDropdown
    export let buttons = [];

    let handleClick = (e) => {
        const parent = e.currentTarget.parentNode;
        if (parent.classList.contains('js-dropdown-container')) {
            const dropdownPane = parent.querySelector('.js-dropdown-pane');
            openCloseDropdownPane(parent, dropdownPane);
        } else  {
            closeAllDropdownPanes();
        }
    };
</script>

<style>
    @media only screen and (min-width: 0px) {
        .btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-basis: 20%;
            flex-grow: 1;
        }

        button {
            width: 100%; 
            height: 100%;
            padding: 0.0rem;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: 0;
            border: none;
            background-color: #363636;
        }

        .icon {
            height: 2.0rem;
            fill: #F2F2F2;
        }

        .caret-down {
            width: 0.7rem;
            margin-left: 0.3rem;
            fill: #F2F2F2;
        }

        .btn-text {
            font-size: 1.1rem;
        }

        .btn-label {
            display: none;
            text-align: center;
            font-size: 1.1rem;
            letter-spacing: 0.04rem;
            color: #fff;
            cursor: default;
            padding: 0.0rem 0.5rem;
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        .btn-container {
            margin: 0.0rem 0.4rem;
            flex-basis: auto;
            flex-grow: 0;
        }

        .btn-group { 
            display: flex;
            margin: 0.0rem 0.4rem; 
        }

        button {
            border-radius: 0.3rem;
            height: 2.4rem;
            width: 4.8rem; 
            margin:  0.0rem auto 0.4rem;
            border: 0.1rem solid #222;
            background-color: #F2F2F2;
        }

        .btn-group .btn-wrapper button { 
            border-left: none;
            border-radius: 0.0rem;
            width: 100%; 
            min-width: 5.4rem; 
        }

        .btn-group .btn-wrapper:first-of-type button {
            border-radius: 0.3rem 0.0rem 0.0rem 0.3rem;
        }

        .btn-group .btn-wrapper:last-of-type button {
            border-right: none;
            border-radius: 0.0rem 0.3rem 0.3rem 0.0rem;
        }

        .icon {
            height: 1.4rem;
            max-width: 1.8rem;
            margin: 0.0rem;
            fill: #363636;
        }

        .caret-down {
            fill: #363636;
        }

        .btn-label {
            z-index: 10000;
            display: block;
            fill: #363636;
        }

        .dropdown {
            position: relative;
        }

        .dropdown-arrow-top {
            display: none;
            position: absolute;
            left: 1.0rem;
            width: 2.2rem;
            fill: #F2F2F2;
            z-index: 3;
            top: 0.6rem;
            left: 50%;
            margin-left: -1.1rem;
        }

        .dropdown-arrow-bottom {
            display: none;
            position: absolute;
            left: 1.0rem;
            width: 2.2rem;
            fill: #B5B5B5;
            z-index: 1;
            top: 0.5rem;
            left: 50%;
            margin-left: -1.1rem;
        }

        .js-dropdown-arrow-show .dropdown .dropdown-arrow-top,
        .js-dropdown-arrow-show .dropdown .dropdown-arrow-bottom {
            display: block;
        }  

        .dropdown-pane {
            position: absolute;
            top: 1.3rem;
            z-index: 10000;
            top: 1.4rem;
            left: -1000.0rem;
            z-index: 2;
            width: 30.2rem;
            border: 0.1rem solid #B5B5B5;
            border-radius: 0.3rem;
            background-color: #F2F2F2;
            overflow-x: hidden; 
            overflow-x: auto; 
        }
    }
</style>

<div class="{buttons.length > 1 ? 'btn-group' : 'btn-container'}">
    {#each buttons as button}
        <div class="btn-wrapper {button.isDropdown ? 'js-dropdown-container' : ''}">
            <button on:click|preventDefault={handleClick}>
                {#if button.iconName}
                    <svg class="icon" viewBox="{getIcon(button.iconName).viewBox}">
                        <path d={getIcon(button.iconName).d}/>
                    </svg>
                {:else if button.text}
                    <span class="btn-text">{button.text}</span>
                {/if}
                {#if button.isDropdown}
                    <svg class="caret-down" viewBox="{getIcon('caret-down').viewBox}">
                        <path d={getIcon('caret-down').d}/>
                    </svg>
                {/if}
            </button>
            <div class="btn-label">{button.label}</div>
            {#if button.isDropdown}
                <div class="js-dropdown dropdown">
                    <svg class="dropdown-arrow-top" viewBox="{getIcon('caret-up').viewBox}">
                        <path d={getIcon('caret-up').d}/>
                    </svg>
                    <div class="js-dropdown-pane dropdown-pane">
                        <div style="padding: 0.9rem">Dropdown</div>
                    </div>
                    <svg class="dropdown-arrow-bottom" viewBox="{getIcon('caret-up').viewBox}">
                        <path d={getIcon('caret-up').d}/>
                    </svg>
                </div>
            {/if}
        </div>
    {/each}
</div>