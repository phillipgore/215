import {writable, readable} from 'svelte/store';
import {toolbarButtonStore} from './stores/toolbarbuttonStore.js';
import {buttonListStore} from './stores/buttonListStore.js';
import {panelListStore} from './stores/panelListStore.js';
import {iconStore} from './stores/iconStore.js';

export const settings = writable({
    toolbarMobile: {isVisible: true},
	toolbarButtons: { hasLabels: true },
	dropdowns: { hasArrows: false }
});

export const dropdownState = writable({});
export const panelState = writable({});
export const sheetState = writable({});
export const toolbarButtonsState = writable({});

export const toolbarButtons = readable(toolbarButtonStore);
export const panelLists = readable(panelListStore);
export const buttonLists = readable(buttonListStore);
export const getIcon = readable(
	iconName => iconStore.find(icon => icon.id === iconName)
);