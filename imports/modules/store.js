import {writable, readable} from 'svelte/store';
import {toolbarButtonStore} from './stores/toolbarbuttonStore.js';
import {dropdownStore} from './stores/dropdownStore.js';
import {sheetStore} from './stores/sheetStore.js';
import {panelStore} from './stores/panelStore.js';
import {dropdownSheetAndPanelButtonStore} from './stores/dropdownSheetAndPanelButtonStore.js';
import {iconStore} from './stores/iconStore.js';

export const settings = writable({
    toolbarMobile: {isVisible: true},
	toolbarButtons: { hasLabels: true },
	dropdowns: { hasArrows: false }
});

// Component Setup
export const toolbarButtons = readable(toolbarButtonStore);
export const dropdowns = readable(dropdownStore);
export const sheets = readable(sheetStore);
export const panels = readable(panelStore);
export const dropdownSheetAndPanelButtons = readable(dropdownSheetAndPanelButtonStore);

// Component State
export const toolbarButtonsState = writable({});
export const dropdownState = writable({});
export const panelState = writable({});
export const sheetState = writable({});

// Functions
export const getIcon = readable(
	iconName => iconStore.find(icon => icon.id === iconName)
);