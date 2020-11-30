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
                textMain: 'New', 
                textRight: '<span>&#8984;SN</span>', 
                hasPanel: true,
            },
            {
                id: 'open', 
                panelId: 'studies', 
                iconLeft: 'arrow-right-circle', 
                title: 'Open Study',
                textMain: 'Open', 
                textRight: '<span>&#8984;SO</span>', 
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
                textMain: 'New Inner', 
                textRight: '<span>&#8984;NI</span>', 
                hasPanel: true,
            },
            {
                id: 'newOuter', 
                panelId: 'studies', 
                iconLeft: 'arrow-up-square', 
                title: 'New Outer Study',
                textMain: 'New Outer', 
                textRight: '<span>&#8984;NO</span>', 
                hasPanel: true,
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
                textMain: 'New Comparative', 
                textRight: '<span>&#8984;NC</span>', 
                hasPanel: true,
            },
        ],
    },
    {
        id: 'zoom',
        listTitle: 'Zoom',
        buttons: [
            {textMain: '25%'},
            {textMain: '50%'},
            {textMain: '75%'},
            {textMain: '100%'},
            {textMain: '125%'},
            {textMain: '150%'},
            {textMain: '200%'},
            {textMain: '300%'},
            {textMain: '400%'},
            {divider: true},
            {textMain: 'Fit Width'},
            {textMain: 'Fit Page'},
        ],
    },
    {
        id: 'outline',
        listTitle: 'Outline',
        buttons: [
            {
                iconLeft: 'outline-section', 
                textMain: 'Section', 
                textRight: '<span>&#8984;OS</span>'
            },
            {
                iconLeft: 'outline-column', 
                textMain: 'Column', 
                textRight: '<span>&#8984;OC</span>'
            },
            {
                iconLeft: 'outline-group', 
                textMain: 'Group', 
                textRight: '<span>&#8984;OG</span>'
            },
            {
                divider: true
            },
            {
                iconLeft: 'unpin', 
                textMain: 'Unpin', 
                textRight: '<span>&#8984;OU</span>'
            },
            {
                iconLeft: 'pin', 
                textMain: 'Pin', 
                textRight: '<span>&#8984;OP</span>'
            },
        ],
    },
    {
        id: 'text',
        listTitle: 'Text',
        buttons: [
            {
                iconLeft: 'highlight', 
                textMain: 'Highlight', 
                textRight: '<span>&#8984;TH</span>'
            },
            {
                divider: true
            },
            {
                iconLeft: 'text-split', 
                textMain: 'Split', 
                textRight: '<span>&#8984;TS</span>'
            },
            {
                iconLeft: 'text-join', 
                textMain: 'Join', 
                textRight: '<span>&#8984;TJ</span>'
            },
            {
                divider: true},
            {
                iconLeft: 'arrow-up', 
                textMain: 'Move Up', 
                textRight: '<span>&#8984;MU</span>'
            },
            {
                iconLeft: 'arrow-down', 
                textMain: 'Move Down', 
                textRight: '<span>&#8984;MD</span>'
            },  
        ],
    },
    {
        id: 'literary',
        listTitle: 'Literary',
        buttons: [
            {
                iconLeft: 'literary-chiasim', 
                textMain: 'Chiasim', 
                textRight: '<span>&#8984;LC</span>'
            },
            {
                iconLeft: 'literary-paralell', 
                textMain: 'Paralellism', 
                textRight: '<span>&#8984;LP</span>'
            },
            {
                iconLeft: 'literary-repeat', 
                textMain: 'Repetition', 
                textRight: '<span>&#8984;LR</span>'
            },
            {
                iconLeft: 'literary-intensify', 
                textMain: 'Intensification', 
                textRight: '<span>&#8984;LI</span>'
            },
        ],
    },
    {
        id: 'color',
        listTitle: 'Color',
        buttons: [
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'red', 
                textMain: 'Red'
            },
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'orange', 
                textMain: 'Orange'
            },
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'yellow', 
                textMain: 'Yellow'
            },
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'green', 
                textMain: 'Green'
            },
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'aqua', 
                textMain: 'Aqua'
            },
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'blue', 
                textMain: 'Blue'
            },
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'purple', 
                textMain: 'Purple'
            },
            {
                shapeLeft: 'circle', 
                shapeLeftColor: 'pink', 
                textMain: 'Pink'
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
                textMain: 'Account', 
                textRight: '<span>&#8984;SA</span>', 
                hasPanel: true,
            },
            {
                id: 'toolbar', 
                panelId: 'settings', 
                iconLeft: 'toolbar', 
                title: 'Toolbar Settings',
                textMain: 'Toolbar', 
                textRight: '<span>&#8984;ST</span>', 
                hasPanel: true,
            },
            {
                id: 'help', 
                panelId: 'settings', 
                iconLeft: 'help', 
                title: 'Help',
                textMain: 'Help', 
                textRight: '<span>&#8984;SH</span>', 
                hasPanel: true,
            },
            {
                divider: true, 
            },
            {
                id: 'signout', 
                iconLeft: 'power', 
                textMain: 'Sign Out', 
            },
        ],
    },
]