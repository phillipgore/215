export const buttonListsInitial = [
    {
        id: 'studies',
        listTitle: 'Studies',
        buttons: [
            {
                id: 'new', 
                panelId: 'studies', 
                iconLeft: 'plus-circle', 
                title: 'New Study',
                label: 'New', 
                labelRight: '<span>&#8984;SN</span>', 
                hasPanel: true,
            },
            {
                id: 'open', 
                panelId: 'studies', 
                iconLeft: 'arrow-right-circle', 
                title: 'Open Study',
                label: 'Open', 
                labelRight: '<span>&#8984;SO</span>', 
                hasPanel: true,
            },
            {
                divider: true, 
                hasPanel: true,
            },
            {
                id: 'newInner', 
                panelId: 'studies', 
                iconLeft: 'arrow-down-square', 
                title: 'New Inner Study',
                label: 'New Inner', 
                labelRight: '<span>&#8984;NI</span>', 
                hasPanel: true,
                isDisabled: true,
            },
            {
                id: 'newOuter', 
                panelId: 'studies', 
                iconLeft: 'arrow-up-square', 
                title: 'New Outer Study',
                label: 'New Outer', 
                labelRight: '<span>&#8984;NO</span>', 
                hasPanel: true,
                isDisabled: true,
            },
            {
                divider: true, 
                hasPanel: true,
            },
            {
                id: 'newCompare', 
                panelId: 'studies', 
                iconLeft: 'compare', 
                title: 'New Comparative Study',
                label: 'New Comparative', 
                labelRight: '<span>&#8984;NC</span>', 
                hasPanel: true,
            },
        ],
    },
    {
        id: 'zoom',
        listTitle: 'Zoom',
        isChecked: true,
        buttons: [
            {id: '25', label: '25%'},
            {id: '50', label: '50%'},
            {id: '75', label: '75%'},
            {id: '100', label: '100%', isActive: true},
            {id: '125', label: '125%'},
            {id: '150', label: '150%'},
            {id: '200', label: '200%'},
            {id: '300', label: '300%'},
            {id: '400', label: '400%'},
            {divider: true},
            {id: 'fitWidth', label: 'Fit Width'},
            {id: 'fitPage', label: 'Fit Page'},
        ],
    },
    {
        id: 'outline',
        listTitle: 'Outline',
        buttons: [
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
        listTitle: 'Text',
        buttons: [
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
        listTitle: 'Literary',
        buttons: [
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
        id: 'color',
        listTitle: 'Color',
        buttons: [
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
        id: 'settings',
        listTitle: 'Settings',
        buttons: [
            {
                id: 'account', 
                panelId: 'settings', 
                iconLeft: 'account', 
                title: 'Account Settings',
                label: 'Account', 
                labelRight: '<span>&#8984;SA</span>', 
                hasPanel: true,
            },
            {
                id: 'toolbar', 
                panelId: 'settings', 
                iconLeft: 'toolbar', 
                title: 'Toolbar Settings',
                label: 'Toolbar', 
                labelRight: '<span>&#8984;ST</span>', 
                hasPanel: true,
            },
            {
                id: 'help', 
                panelId: 'settings', 
                iconLeft: 'help', 
                title: 'Help',
                label: 'Help', 
                labelRight: '<span>&#8984;SH</span>', 
                hasPanel: true,
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
]