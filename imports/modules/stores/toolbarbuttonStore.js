export const toolbarButtonStore = [
    {
        id: 'studies',
        container: 'one',
        mobile: true,
        type: 'buttonDropdown',
        isActive: false,
        label: 'Studies', 
        iconName:'book', 
        dropdownId: 'studies',
        sheetId: 'studies'
    },
    {
        id: 'zoom',
        container: 'one',
        mobile: false,
        type: 'buttonDropdown',
        isActive: false,
        label: 'Zoom', 
        text:'100%', 
        dropdownId: 'zoom'
    },
    {
        id: 'outline',
        container: 'two',
        mobile: true,
        type: 'buttonDropdown', 
        isActive: false,
        label: 'Outline', 
        iconName:'pin', 
        dropdownId: 'outline',
        sheetId: 'outline'
    },
    {
        id: 'text', 
        container: 'two',
        mobile: true,
        type: 'buttonDropdown',
        isActive: false,
        label: 'Text', 
        iconName:'text-join', 
        dropdownId: 'text',
        sheetId: 'text'
    },
    {
        id: 'literary', 
        container: 'two',
        mobile: true,
        type: 'buttonDropdown',
        isActive: false,
        label: 'Literary', 
        iconName:'literary-chiasim', 
        dropdownId: 'literary',
        sheetId: 'literary'
    },
    {
        id: 'spacerOne',
        container: 'two',
        mobile: false,
        type: 'spacer'
    },
    {
        id: 'color', 
        container: 'two',
        mobile: true,
        type: 'buttonDropdown',
        isActive: false,
        label: 'Color', 
        iconName:'paintbrush', 
        dropdownId: 'color',
        sheetId: 'color'
    },
    {
        id: 'note', 
        container: 'two',
        mobile: true,
        type: 'button',
        isActive: false,
        label: 'Note', 
        iconName: 'note', 
    },
    {
        id: 'options', 
        container: 'two',
        mobile: true,
        type: 'button',
        isActive: false,
        label: 'Options', 
        iconName:'checkbox-checked', 
    },
    {
        id: 'view',
        container: 'three',
        mobile: true,
        type: 'buttonSwapping',
        buttons: [
            {id: 'structure', groupId: 'view', type: 'buttonSwap', label: 'Structure', iconName: 'structure', isSelected: true},
            {id: 'document', groupId: 'view', type: 'buttonSwap', label: 'Document', iconName: 'document', isSelected: false}
        ]
    },
    {
        id: 'spacerOne',
        container: 'three',
        mobile: false,
        type: 'spacer'
    },
    {
        id: 'settings', 
        container: 'three',
        mobile: true,
        type: 'buttonPanel',
        isActive: false,
        label: 'Settings', 
        iconName:'ellipsis', 
        panelId: 'settings',
        sheetId: 'settings'
    },
];