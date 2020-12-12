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

export const interfaceState = writable([
    {
        id: 'studies',
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Studies', 
        iconName:'book', 
        hasDropdown: true,
        dropdownIsOpen: false,
        hasSheet: true,
        sheetIsOpen: false,
        hasPanel: true,
        panelIsOpen: false,
        buttonList: [
            {
                id: 'new', 
                onPanel: true,
                iconLeft: 'plus-circle', 
                title: 'New Study',
                label: 'New', 
                labelRight: '<span>&#8984;SN</span>', 
            },
            {
                id: 'open', 
                onPanel: true,
                iconLeft: 'arrow-right-circle', 
                title: 'Open Study',
                label: 'Open', 
                labelRight: '<span>&#8984;SO</span>', 
            },
            {
                divider: true, 
                onPanel: true,
            },
            {
                id: 'newInner', 
                onPanel: true,
                iconLeft: 'arrow-down-square', 
                title: 'New Inner Study',
                label: 'New Inner', 
                labelRight: '<span>&#8984;NI</span>', 
                isDisabled: true,
            },
            {
                id: 'newOuter', 
                onPanel: true,
                iconLeft: 'arrow-up-square', 
                title: 'New Outer Study',
                label: 'New Outer', 
                labelRight: '<span>&#8984;NO</span>', 
                isDisabled: true,
            },
            {
                divider: true, 
                onPanel: true,
            },
            {
                id: 'newCompare', 
                onPanel: true,
                iconLeft: 'compare', 
                title: 'New Comparative Study',
                label: 'New Comparative', 
                labelRight: '<span>&#8984;NC</span>', 
            },
        ],
    },
    {
        id: 'zoom',
        type: 'button',
        onNarrowScreens: false,
        isActive: false,
        label: 'Zoom', 
        text:'100%',  
        hasDropdown: true,
        dropdownIsOpen: false,
        isChecked: true,
        buttonList: [
            {
                id: '25', 
                label: '25%'
            },
            {
                id: '50', 
                label: '50%'
            },
            {
                id: '75', 
                label: '75%'
            },
            {
                id: '100', 
                label: '100%', 
                isActive: true
            },
            {
                id: '125', 
                label: '125%'
            },
            {
                id: '150', 
                label: '150%'
            },
            {
                id: '200', 
                label: '200%'
            },
            {
                id: '300', 
                label: '300%'
            },
            {
                id: '400', 
                label: '400%'
            },
            {
                divider: true
            },
            {
                id: 'fitWidth', 
                label: 'Fit Width'
            },
            {
                id: 'fitPage', 
                label: 'Fit Page'
            },
        ],
    },
    {
        type: 'stretcher',
        onNarrowScreens: false,
    },
    {
        id: 'outline',
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Outline', 
        iconName:'pin',  
        hasDropdown: true,
        dropdownIsOpen: false,
        hasSheet: true,
        sheetIsOpen: false,
        buttonList: [
            {
                id: 'section',
                iconLeft: 'outline-section', 
                label: 'Section', 
                labelRight: '<span>&#8984;OS</span>',
                isDisabled: true,
            },
            {
                id: 'column',
                iconLeft: 'outline-column', 
                label: 'Column', 
                labelRight: '<span>&#8984;OC</span>',
                isDisabled: true,
            },
            {
                id: 'group',
                iconLeft: 'outline-group', 
                label: 'Group', 
                labelRight: '<span>&#8984;OG</span>',
                isDisabled: true,
            },
            {
                divider: true
            },
            {
                id: 'unpin',
                iconLeft: 'unpin', 
                label: 'Unpin', 
                labelRight: '<span>&#8984;OU</span>',
                isDisabled: true,
            },
            {
                id: 'pin',
                iconLeft: 'pin', 
                label: 'Pin', 
                labelRight: '<span>&#8984;OP</span>',
                isDisabled: true,
            },
        ],
    },
    {
        id: 'text', 
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Text', 
        iconName:'text-join',  
        hasDropdown: true,
        dropdownIsOpen: false,
        hasSheet: true,
        sheetIsOpen: false,
        buttonList: [
            {
                id: 'highlight',
                iconLeft: 'highlight', 
                label: 'Highlight', 
                labelRight: '<span>&#8984;TH</span>',
                isDisabled: true,
            },
            {
                divider: true
            },
            {
                id: 'split',
                iconLeft: 'text-split', 
                label: 'Split', 
                labelRight: '<span>&#8984;TS</span>',
                isDisabled: true,
            },
            {
               id: 'join',
                iconLeft: 'text-join', 
                label: 'Join', 
                labelRight: '<span>&#8984;TJ</span>',
                isDisabled: true,
            },
            {
                divider: true},
            {
                id: 'moveUp',
                iconLeft: 'arrow-up', 
                label: 'Move Up', 
                labelRight: '<span>&#8984;MU</span>',
                isDisabled: true,
            },
            {
                id: 'moveDown',
                iconLeft: 'arrow-down', 
                label: 'Move Down', 
                labelRight: '<span>&#8984;MD</span>',
                isDisabled: true,
            },  
        ],
    },
    {
        id: 'literary', 
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Literary', 
        iconName:'literary-chiasim',  
        hasDropdown: true,
        dropdownIsOpen: false,
        hasSheet: true,
        sheetIsOpen: false,
        buttonList: [
            {
                id: 'chiasim',
                iconLeft: 'literary-chiasim', 
                label: 'Chiasim', 
                labelRight: '<span>&#8984;LC</span>',
                isDisabled: true,
            },
            {
                id: 'paralellism',
                iconLeft: 'literary-paralell', 
                label: 'Paralellism', 
                labelRight: '<span>&#8984;LP</span>',
                isDisabled: true,
            },
            {
                id: 'repetition',
                iconLeft: 'literary-repeat', 
                label: 'Repetition', 
                labelRight: '<span>&#8984;LR</span>',
                isDisabled: true,
            },
            {
                id: 'intensification',
                iconLeft: 'literary-intensify', 
                label: 'Intensification', 
                labelRight: '<span>&#8984;LI</span>',
                isDisabled: true,
            },
        ],
    },
    {
        type: 'spacer',
        onNarrowScreens: false,
    },
    {
        id: 'color', 
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Color', 
        iconName:'paintbrush',  
        hasDropdown: true,
        dropdownIsOpen: false,
        hasSheet: true,
        sheetIsOpen: false,
        buttonList: [
            {
                id: 'red',
                shapeLeft: 'circle', 
                shapeLeftColor: 'red', 
                label: 'Red',
                isDisabled: true,
            },
            {
                id: 'orange',
                shapeLeft: 'circle', 
                shapeLeftColor: 'orange', 
                label: 'Orange',
                isDisabled: true,
            },
            {
                id: 'yellow',
                shapeLeft: 'circle', 
                shapeLeftColor: 'yellow', 
                label: 'Yellow',
                isDisabled: true,
            },
            {
                id: 'green',
                shapeLeft: 'circle', 
                shapeLeftColor: 'green', 
                label: 'Green',
                isDisabled: true,
            },
            {
                id: 'aqua',
                shapeLeft: 'circle', 
                shapeLeftColor: 'aqua', 
                label: 'Aqua',
                isDisabled: true,
            },
            {
                id: 'blue',
                shapeLeft: 'circle', 
                shapeLeftColor: 'blue', 
                label: 'Blue',
                isDisabled: true,
            },
            {
                id: 'purple',
                shapeLeft: 'circle', 
                shapeLeftColor: 'purple', 
                label: 'Purple',
                isDisabled: true,
            },
            {
                id: 'pink',
                shapeLeft: 'circle', 
                shapeLeftColor: 'pink', 
                label: 'Pink',
                isDisabled: true,
            },
        ],
    },
    {
        id: 'note', 
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Note', 
        iconName: 'note', 
    },
    {
        id: 'options', 
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Options', 
        iconName:'checkbox-checked', 
    },
    {
        type: 'spacer',
        onNarrowScreens: false,
    },
    {
        id: 'delete', 
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Delete', 
        iconName:'delete', 
    },
    {
        type: 'stretcher',
        onNarrowScreens: false,
    },
    {
        id: 'view',
        type: 'buttonSwap',
        onNarrowScreens: true,
        hasSwapping: true,
        buttonList: [
            {
                id: 'structure', 
                groupId: 'view', 
                hasSwap: true, 
                label: 'Structure', 
                iconName: 'structure', 
                isSelected: true
            },
            {
                id: 'document', 
                groupId: 'view', 
                hasSwap: true, 
                label: 'Document', 
                iconName: 'document', 
                isSelected: false
            }
        ]
    },
    {
        type: 'spacer',
        onNarrowScreens: false,
    },
    {
        id: 'settings', 
        type: 'button',
        onNarrowScreens: true,
        isActive: false,
        label: 'Settings', 
        iconName:'ellipsis',  
        hasDropdown: true,
        dropdownIsOpen: false,
        hasSheet: true,
        sheetIsOpen: false,
        hasPanel: true,
        panelIsOpen: false,
        buttonList: [
            {
                id: 'account', 
                onPanel: true, 
                iconLeft: 'account', 
                title: 'Account Settings',
                label: 'Account', 
                labelRight: '<span>&#8984;SA</span>', 
            },
            {
                id: 'toolbar', 
                onPanel: true, 
                iconLeft: 'toolbar', 
                title: 'Toolbar Settings',
                label: 'Toolbar', 
                labelRight: '<span>&#8984;ST</span>', 
            },
            {
                id: 'help', 
                onPanel: true, 
                iconLeft: 'help', 
                title: 'Help',
                label: 'Help', 
                labelRight: '<span>&#8984;SH</span>', 
            },
            {
                divider: true, 
            },
            {
                id: 'signout', 
                iconLeft: 'power', 
                label: 'Sign Out', 
            },
        ],
    },
]);

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