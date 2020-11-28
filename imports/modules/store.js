import {writable, readable} from 'svelte/store';
import {toolbarButtonStore} from './stores/toolbarbuttonStore.js';
import {dropdownStore} from './stores/dropdownStore.js';
import {sheetStore} from './stores/sheetStore.js';
import {panelStore} from './stores/panelStore.js';
import {buttonListStore} from './stores/buttonListStore.js';
import {iconStore} from './stores/iconStore.js';

export const settings = writable({
    toolbarNarrow: {isVisible: true},
	toolbarButtons: { hasLabels: true },
	dropdowns: { hasArrows: false }
});

// Component Setup
export const toolbarButtons = readable(toolbarButtonStore);
export const dropdowns = readable(dropdownStore);
export const buttonLists = readable(buttonListStore);
export const sheets = readable(sheetStore);
export const panels = readable(panelStore);

// Component State
export const toolbarState = writable({});
export const toolbarButtonState = writable({});
export const dropdownState = writable({});
export const buttonListState = writable({});
export const panelState = writable({});
export const sheetState = writable({});

// Functions
export const getIcon = readable(
	iconName => iconStore.find(icon => icon.id === iconName)
);