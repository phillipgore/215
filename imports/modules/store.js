import {writable, readable} from 'svelte/store';
import {toolbarbuttonsInitial} from './initialStores/toolbarbuttonsInitial.js';
import {dropdownsInitial} from './initialStores/dropdownsInitial.js';
import {sheetsInitial} from './initialStores/sheetsInitial.js';
import {panelsInitial} from './initialStores/panelsInitial.js';
import {buttonListsInitial} from './initialStores/buttonListsInitial.js';
import {iconStore} from './iconStore.js';

export const settings = writable({
    toolbarNarrow: {isVisible: true},
	toolbarButtons: { hasLabels: true },
	dropdowns: { hasArrows: false }
});

// Component Setup
export const toolbarButtons = readable(toolbarbuttonsInitial);
export const dropdowns = readable(dropdownsInitial);
export const buttonLists = readable(buttonListsInitial);
export const sheets = readable(sheetsInitial);
export const panels = readable(panelsInitial);

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