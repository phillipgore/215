export const toolbarButtonStore = [
    {
        id: 'studies',
        container: 'one',
        narrow: true,
        isActive: false,
        label: 'Studies', 
        iconName:'book', 
        hasDropdown: true,
        hasSheet: true,
    },
    {
        id: 'zoom',
        container: 'one',
        narrow: false,
        type: ['buttonDropdown'],
        isActive: false,
        label: 'Zoom', 
        text:'100%',  
        hasDropdown: true,
    },
    {
        id: 'outline',
        container: 'two',
        narrow: true,
        isActive: false,
        label: 'Outline', 
        iconName:'pin',  
        hasDropdown: true,
        hasSheet: true,
    },
    {
        id: 'text', 
        container: 'two',
        narrow: true,
        isActive: false,
        label: 'Text', 
        iconName:'text-join',  
        hasDropdown: true,
        hasSheet: true,
    },
    {
        id: 'literary', 
        container: 'two',
        narrow: true,
        isActive: false,
        label: 'Literary', 
        iconName:'literary-chiasim',  
        hasDropdown: true,
        hasSheet: true,
    },
    {
        id: 'spacerOne',
        container: 'two',
        narrow: false,
        type: ['spacer'],
        isSpacer: true,
    },
    {
        id: 'color', 
        container: 'two',
        narrow: true,
        isActive: false,
        label: 'Color', 
        iconName:'paintbrush',  
        hasDropdown: true,
        hasSheet: true,
    },
    {
        id: 'note', 
        container: 'two',
        narrow: true,
        isActive: false,
        label: 'Note', 
        iconName: 'note', 
    },
    {
        id: 'options', 
        container: 'two',
        narrow: true,
        isActive: false,
        label: 'Options', 
        iconName:'checkbox-checked', 
    },
    {
        id: 'spacerTwo',
        container: 'two',
        narrow: false,
        isSpacer: true,
    },
    {
        id: 'delete', 
        container: 'two',
        narrow: true,
        isActive: false,
        label: 'Delete', 
        iconName:'delete', 
    },
    {
        id: 'view',
        container: 'three',
        narrow: true,
        hasSwapping: true,
        buttons: [
            {id: 'structure', groupId: 'view', hasSwap: true, label: 'Structure', iconName: 'structure', isSelected: true},
            {id: 'document', groupId: 'view', hasSwap: true, label: 'Document', iconName: 'document', isSelected: false}
        ]
    },
    {
        id: 'spacerThree',
        container: 'three',
        narrow: false,
        isSpacer: true,
    },
    {
        id: 'settings', 
        container: 'three',
        narrow: true,
        isActive: false,
        label: 'Settings', 
        iconName:'ellipsis',  
        hasDropdown: true,
        hasSheet: true,
    },
];