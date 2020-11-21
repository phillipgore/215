<script>
	import {useTracker} from 'meteor/rdb:svelte-meteor-data';
	import {Studies} from '../api/studies';
    import {dropdownState, toolbarButtonsState, dropdowns, panels, sheets, dropdownSheetAndPanelButtons} from '../modules/store.js';
	import Toolbar from './components/Toolbar.svelte';
	import ToolbarMobile from './components/ToolbarMobile.svelte';
	import Dropdown from './components/Dropdown.svelte';
	import Panel from './components/Panel.svelte';
	import Sheet from './components/Sheet.svelte';

	$: studies = useTracker(() => Studies.find().fetch());

    let closeAll = (event) => {
		let isNotButton = ![
			event.target.classList ? event.target.classList.contains('js-is-button') : false, 
			event.target.parentNode && event.target.parentNode.classList ? event.target.parentNode.classList.contains('js-is-button') : false, 
			event.target.parentNode && event.target.parentNode.parentNode && event.target.parentNode.parentNode.classList ? event.target.parentNode.parentNode.classList.contains('js-is-button') : false,
		].includes(true);

		if (isNotButton) {
			Object.keys($toolbarButtonsState).forEach(key => {
				if ($toolbarButtonsState[key].type === 'buttonDropdown') {
					$toolbarButtonsState[key].isActive = false;
				}
			});
		};

		let isNotDropdown = ![
			event.target.classList ? event.target.classList.contains('js-is-dropdown') : false, 
			event.target.parentNode && event.target.parentNode.classList ? event.target.parentNode.classList.contains('js-is-dropdown') : false, 
			event.target.parentNode && event.target.parentNode.parentNode && event.target.parentNode.parentNode.classList ? event.target.parentNode.parentNode.classList.contains('js-is-dropdown') : false,
		].includes(true)

		if (isNotDropdown) {
			Object.keys($dropdownState).forEach(key => {
				$dropdownState[key] = {...$dropdownState[key], isOpen: false}
			});
		};
	};	
</script>

<style>
	:global(html) { 
		font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
		font-weight: 300;
		line-height: 1.15;
		font-size: 62.5%;
		-webkit-text-size-adjust: 100%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		
		/* background-image: url("bg.jpg");
		background-size: cover; */
	}

	:global(*, *::before, *::after) { 
		-webkit-box-sizing: inherit;
		-moz-box-sizing: inherit;
		box-sizing: inherit;
	}

	:global(html, body) {
		height: 100%;
		margin: 0px;
		padding: 0px;
	}

	:global(body) {
		min-height: 100%;
		margin: 0;
		padding: 0;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-size: 1.6rem;
	}

	:global(button) {
		outline: 0;
        border: none;
	}
</style>

<svelte:window on:click={closeAll}/>

<Toolbar />
<ToolbarMobile />

{#each $dropdowns as dropdown}
	<Dropdown dropdown={dropdown}/>
{/each}

{#each $sheets as sheet}
	<Sheet sheet={sheet}/>
{/each}

{#each $panels as panel}
	<Panel panel={panel}/>
{/each}
