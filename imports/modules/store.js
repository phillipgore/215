import {writable, readable} from 'svelte/store';

export const settings = writable({
    toolbarMobile: {isVisible: true},
	toolbarButtons: { hasLabels: true },
	dropdowns: { hasArrows: false }
});

export const dropdownState = writable({});
export const sheetState = writable({});

export const sheetLists = readable({
    color: {
        listTitle: "Colors",
        listItems: [
            {shapeLeft: 'circle', shapeLeftColor: 'red', textMain: 'Red'},
            {shapeLeft: 'circle', shapeLeftColor: 'orange', textMain: 'Orange'},
            {shapeLeft: 'circle', shapeLeftColor: 'yellow', textMain: 'Yellow'},
            {shapeLeft: 'circle', shapeLeftColor: 'green', textMain: 'Green'},
            {shapeLeft: 'circle', shapeLeftColor: 'aqua', textMain: 'Aqua'},
            {shapeLeft: 'circle', shapeLeftColor: 'blue', textMain: 'Blue'},
            {shapeLeft: 'circle', shapeLeftColor: 'purple', textMain: 'Purple'},
            {shapeLeft: 'circle', shapeLeftColor: 'pink', textMain: 'Pink'},
        ],
    },
    literary: {
        listTitle: "Literary",
        listItems: [
            {iconLeft: 'literary-chiasim', textMain: 'Chiasim', textRight: '<span>&#8984;LC</span>'},
            {iconLeft: 'literary-paralell', textMain: 'Paralellism', textRight: '<span>&#8984;LP</span>'},
            {iconLeft: 'literary-repeat', textMain: 'Repetition', textRight: '<span>&#8984;LR</span>'},
            {iconLeft: 'literary-intensify', textMain: 'Intensification', textRight: '<span>&#8984;LI</span>'},
            {divider: true},
            {iconLeft: 'literary-reference', textMain: 'Comparative', textRight: '<span>&#8984;LM</span>'},
        ],
    },
    outline: {
        listTitle: "Outline",
        listItems: [
            {iconLeft: 'outline-section', textMain: 'Section', textRight: '<span>&#8984;OS</span>'},
            {iconLeft: 'outline-column', textMain: 'Column', textRight: '<span>&#8984;OC</span>'},
            {iconLeft: 'outline-group', textMain: 'Group', textRight: '<span>&#8984;OG</span>'},
            {divider: true},
            {iconLeft: 'unpin', textMain: 'Unpin', textRight: '<span>&#8984;OU</span>'},
            {iconLeft: 'pin', textMain: 'Pin', textRight: '<span>&#8984;OP</span>'},
        ],
    },
    studies: {
        listTitle: "Studies",
        listItems: [
            {iconLeft: 'plus-circle', textMain: 'New', textRight: '<span>&#8984;SN</span>'},
            {iconLeft: 'arrow-right-circle', textMain: 'Open', textRight: '<span>&#8984;SO</span>'},
            {divider: true},
            {iconLeft: 'arrow-down-square', textMain: 'New Inner', textRight: '<span>&#8984;NI</span>'},
            {iconLeft: 'arrow-up-square', textMain: 'New Outer', textRight: '<span>&#8984;NO</span>'},
        ],
    },
    text: {
        listTitle: "Text",
        listItems: [
            {iconLeft: 'highlight', textMain: 'Highlight', textRight: '<span>&#8984;TH</span>'},
            {divider: true},
            {iconLeft: 'text-split', textMain: 'Split', textRight: '<span>&#8984;TS</span>'},
            {iconLeft: 'text-join', textMain: 'Join', textRight: '<span>&#8984;TJ</span>'},
            {divider: true},
            {iconLeft: 'arrow-up', textMain: 'Move Up', textRight: '<span>&#8984;MU</span>'},
            {iconLeft: 'arrow-down', textMain: 'Move Down', textRight: '<span>&#8984;MD</span>'},
        ],
    },
    zoom: {
        listTitle: "Zoom",
        listItems: [
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
    settings: {
        listTitle: "Settings",
        listItems: [],
    },
});

export const getIcon = readable(
	iconName => icons.find(icon => icon.id === iconName)
)

let icons = [
    {
        id: "arrow-down",
        viewBox: "0 0 28 32", 
        d: "M14 32l14-14-9 .001V0H9v18.001L0 18z"
    },
    {
        id: "arrow-down-square",
        viewBox: "0 0 32 32", 
        d: "M28 0a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h24zM12 5v12H7l9 10 9-10h-5V5h-8z"
    },
    {
        id: "arrow-right-circle",
        viewBox: "0 0 32 32", 
        d: "M16 .5C7.44.5.5 7.44.5 16c0 8.56 6.94 15.5 15.5 15.5 8.56 0 15.5-6.94 15.5-15.5C31.5 7.44 24.56.5 16 .5zm.5 20h-12v-9h12V5.877L27.747 16 16.5 26.123V20.5z"
    },
    {
        id: "arrow-up",
        viewBox: "0 0 28 32", 
        d: "M14 0l14 14-9-.001V32H9V13.999L0 14z"
    },
    {
        id: "arrow-up-square",
        viewBox: "0 0 32 32", 
        d: "M28 32a4 4 0 004-4V4a4 4 0 00-4-4H4a4 4 0 00-4 4v24a4 4 0 004 4h24zm-16-5V15H7l9-10 9 10h-5v12h-8z"
    },
    {
        id: "book",
        viewBox: "0 0 32 32", 
        d: "M1.968 0l.143.004C4.906.192 9.955.78 14.002 2.636v29.366c-4.163-1.91-9.385-2.477-12.125-2.646-1.008-.063-1.802-.973-1.872-2.093L0 27.1V2.261C0 1.015.882.015 1.968.002zm27.921.004c1.102-.074 2.03.871 2.106 2.096l.005.162v24.84c0 1.193-.821 2.188-1.877 2.252l-.58.04c-2.85.213-7.657.826-11.542 2.606V2.635C22.047.78 27.095.192 29.889.004z"
    },
    {
        id: "caret-down",
        viewBox: "0 0 32 16", 
        d: "M32 1.78c0 .48-.198.895-.595 1.247l-14 12.445A2.04 2.04 0 0116 16a2.04 2.04 0 01-1.405-.528l-14-12.445C.198 2.675 0 2.26 0 1.78 0 1.297.198.88.595.528A2.04 2.04 0 012 0h28c.542 0 1.01.176 1.405.528.397.352.595.77.595 1.251z"
    },
    {
        id: "caret-left",
        viewBox: "0 0 16 32", 
        d: "M14.22 32c-.48 0-.895-.198-1.247-.595l-12.445-14A2.04 2.04 0 010 16c0-.542.176-1.01.528-1.405l12.445-14C13.325.198 13.74 0 14.22 0c.482 0 .899.198 1.251.595C15.824.99 16 1.458 16 2v28a2.04 2.04 0 01-.528 1.405c-.352.397-.77.595-1.251.595z"
    },
    {
        id: "caret-right",
        viewBox: "0 0 16 32", 
        d: "M1.78 32c.48 0 .895-.198 1.247-.595l12.445-14A2.04 2.04 0 0016 16a2.04 2.04 0 00-.528-1.405L3.027.595C2.675.198 2.26 0 1.78 0 1.297 0 .88.198.528.595A2.04 2.04 0 000 2v28c0 .542.176 1.01.528 1.405.352.397.77.595 1.251.595z"
    },
    {
        id: "caret-up",
        viewBox: "0 0 32 16", 
        d: "M32 14.22c0-.48-.198-.895-.595-1.247l-14-12.445A2.04 2.04 0 0016 0a2.04 2.04 0 00-1.405.528l-14 12.445C.198 13.325 0 13.74 0 14.22c0 .482.198.899.595 1.251A2.04 2.04 0 002 16h28a2.04 2.04 0 001.405-.528c.397-.352.595-.77.595-1.251z"
    },
    {
        id: "chevron-left",
        viewBox: "0 0 20 32", 
        d: "M16.746 0L20 3.102 6.497 16 20 28.898 16.746 32 0 16z"
    },
    {
        id: "chevron-right",
        viewBox: "0 0 20 32", 
        d: "M3.254 0L0 3.102 13.503 16 0 28.898 3.254 32 20 16z"
    },
    {
        id: "checkbox-checked",
        viewBox: "0 0 32 32", 
        d: "M28 0a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h24zm-4.993 8a1.16 1.16 0 00-.771.277l-.107.1-8.465 8.849-3.793-3.974a1.17 1.17 0 00-.878-.377c-.294 0-.551.093-.77.277l-.106.1-1.756 1.833c-.24.25-.361.556-.361.916 0 .307.088.575.265.803l.096.111 6.426 6.708c.241.251.533.377.877.377.295 0 .552-.092.771-.277l.107-.1L25.639 12.04c.24-.251.361-.556.361-.915 0-.308-.088-.576-.265-.805l-.096-.11-1.756-1.833A1.169 1.169 0 0023.007 8z"
    },
    {
        id: "document",
        viewBox: "0 0 24 32", 
        d: "M24 0v32H0V8h8V0h16zM6 0v6H0l6-6z"
    },
    {
        id: "ellipsis",
        viewBox: "0 0 32 9", 
        d: "M4.364 0a4.363 4.363 0 110 8.727 4.363 4.363 0 010-8.727zm23.272 0a4.363 4.363 0 110 8.727 4.363 4.363 0 010-8.727zM16 0a4.363 4.363 0 110 8.727A4.363 4.363 0 0116 0z"
    },
    {
        id: "gear",
        viewBox: "0 0 32 32", 
        d: "M21.334 16c0-1.472-.521-2.729-1.564-3.77-1.041-1.043-2.298-1.564-3.77-1.564s-2.729.521-3.77 1.564c-1.043 1.041-1.564 2.298-1.564 3.77s.521 2.729 1.564 3.77c1.041 1.043 2.298 1.564 3.77 1.564s2.729-.521 3.77-1.564c1.043-1.041 1.564-2.298 1.564-3.77zM32 13.73v4.624a.809.809 0 01-.166.48.641.641 0 01-.418.27l-3.854.584c-.264.75-.535 1.381-.812 1.896.487.693 1.23 1.651 2.23 2.874.139.167.208.34.208.522 0 .18-.063.34-.188.478-.375.515-1.062 1.265-2.062 2.25-1 .987-1.653 1.48-1.958 1.48-.167 0-.347-.063-.542-.188l-2.876-2.25c-.61.32-1.243.584-1.896.792-.221 1.89-.423 3.18-.604 3.874-.097.39-.347.584-.75.584h-4.624a.782.782 0 01-.51-.178.609.609 0 01-.24-.446l-.584-3.834c-.68-.223-1.305-.48-1.874-.772L7.542 29a.75.75 0 01-.522.188.718.718 0 01-.52-.23c-1.75-1.583-2.895-2.75-3.438-3.5a.811.811 0 01.022-.958c.208-.292.562-.754 1.062-1.386.5-.632.875-1.121 1.124-1.468a10.355 10.355 0 01-.854-2.062L.604 19.02a.653.653 0 01-.438-.26.789.789 0 01-.166-.49v-4.624c0-.167.055-.327.166-.48a.634.634 0 01.396-.27l3.876-.584c.195-.639.465-1.277.812-1.916-.556-.792-1.3-1.75-2.23-2.876-.139-.167-.208-.333-.208-.5 0-.139.063-.298.188-.478.361-.5 1.045-1.247 2.052-2.24 1.007-.993 1.663-1.49 1.968-1.49.181 0 .362.07.542.208l2.876 2.23a11.77 11.77 0 011.896-.792c.221-1.89.423-3.18.604-3.874.097-.39.347-.584.75-.584h4.624c.195 0 .365.06.51.178a.609.609 0 01.24.446l.584 3.834c.68.223 1.305.48 1.874.772L24.48 3a.672.672 0 01.5-.188c.18 0 .353.07.52.208 1.792 1.653 2.938 2.834 3.438 3.542.097.112.146.265.146.458a.803.803 0 01-.168.48c-.208.292-.562.754-1.062 1.386-.5.632-.875 1.121-1.124 1.468.36.695.645 1.375.854 2.042l3.812.584c.18.027.326.113.438.26.11.145.166.309.166.49z"
    },
    {
        id: "highlight",
        viewBox: "0 0 32 32", 
        d: "M0 29.995l5.878 2.001 2.085-2.215-3.944-4.19L0 29.996zm7.33-14.998c-.632.593-.88 1.523-.635 2.38l.768 2.677-2.996 3.184 5.66 6.013 2.992-3.178 2.514.817c.808.263 1.686 0 2.245-.673l2.09-2.603L9.773 12.782 7.33 14.997zM31.054 4.954l-3.718-3.95c-1.205-1.28-3.14-1.344-4.418-.146l-11.71 10.62 9.987 10.61L31.192 9.65c1.128-1.358 1.068-3.414-.138-4.695z"
    },
    {
        id: "literary-chiasim",
        viewBox: "0 0 28 32", 
        d: "M7.5 23.5V.5h-7v23h7zm10 8V.5h-7v31h7zm10-8V.5h-7v23h7z"
    },
    {
        id: "literary-intensify",
        viewBox: "0 0 32 28", 
        d: "M32 20v8H0v-8h32zm-4-10v8H4v-8h24zM24 0v8H8V0h16z"
    },
    {
        id: "literary-paralell",
        viewBox: "0 0 18 32", 
        d: "M8 0v32H0V0h8zm10 0v32h-8V0h8z"
    },
    {
        id: "literary-reference",
        viewBox: "0 0 22 32", 
        d: "M20.777 10c.331 0 .618.136.86.41.242.27.363.592.363.965v19.25c0 .373-.121.694-.363.966-.242.273-.529.409-.86.409-.33 0-.616-.136-.858-.41l-8.556-9.624A1.403 1.403 0 0111 21c0-.373.121-.694.363-.966l8.556-9.625c.242-.273.528-.409.858-.409zM1.223 0c.33 0 .616.136.858.41l8.556 9.624c.242.272.363.593.363.966s-.121.694-.363.966L2.081 21.59c-.242.273-.528.409-.858.409-.331 0-.618-.136-.86-.41A1.403 1.403 0 010 20.626V1.375C0 1.002.121.681.363.409.605.136.892 0 1.223 0z"
    },
    {
        id: "literary-repeat",
        viewBox: "0 0 32 18", 
        d: "M32 10v8H0v-8h32zm0-10v8H0V0h32z"
    },
    {
        id: "minus-circle",
        viewBox: "0 0 32 32", 
        d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm10 14H6v4h20v-4z"
    },
    {
        id: "note",
        viewBox: "0 0 32 32", 
        d: "M32 0v32H0V0h32zM20 22H4v2h16v-2zm8-6H4v2h24v-2zm0-6H4v2h24v-2zm0-6H4v2h24V4z"
    },
    {
        id: "notecard",
        viewBox: "0 0 32 20", 
        d: "M32 0v20H0V0h32zM20 10H4v2h16v-2zm8-6H4v2h24V4z"
    },
    {
        id: "notecard-plus",
        viewBox: "0 0 32 26", 
        d: "M25 0l.001 7.106C24.511 7.036 24.01 7 23.5 7c-5.631 0-10.227 4.433-10.488 10H0V0h25zM12 11H3v2h9v-2zm3-4H3v2h12V7zm7-4H3v2h19V3zm1.5 6a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm1.5 2h-3v5h-5v3h5v5h3v-5h5v-3h-5v-5z"
    },
    {
        id: "outline-column",
        viewBox: "0 0 32 32", 
        d: "M7 0a1 1 0 011 1v30a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h6zm12 0a1 1 0 011 1v30a1 1 0 01-1 1h-6a1 1 0 01-1-1V1a1 1 0 011-1h6zm12 0a1 1 0 011 1v30a1 1 0 01-1 1h-6a1 1 0 01-1-1V1a1 1 0 011-1h6z"
    },
    {
        id: "outline-group",
        viewBox: "0 0 32 32", 
        d: "M30 0a2 2 0 012 2v28a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h28zm-1 17H3a1 1 0 00-.993.883L2 18v11a1 1 0 00.883.993L3 30h26a1 1 0 00.993-.883L30 29V18a1 1 0 00-.883-.993L29 17zm0-15H3a1 1 0 00-.993.883L2 3v11a1 1 0 00.883.993L3 15h26a1 1 0 00.993-.883L30 14V3a1 1 0 00-1-1z"
    },
    {
        id: "outline-section",
        viewBox: "0 0 32 32", 
        d: "M30 0a2 2 0 012 2v28a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h28zm-1 2h-6a1 1 0 00-.993.883L22 3v26a1 1 0 00.883.993L23 30h6a1 1 0 00.993-.883L30 29V3a1 1 0 00-1-1zM19 2h-6a1 1 0 00-.993.883L12 3v26a1 1 0 00.883.993L13 30h6a1 1 0 00.993-.883L20 29V3a1 1 0 00-1-1zM9 2H3a1 1 0 00-.993.883L2 3v26a1 1 0 00.883.993L3 30h6a1 1 0 00.993-.883L10 29V3a1 1 0 00-.883-.993L9 2z"
    },

    {
        id: "paintbrush",
        viewBox: "0 0 32 32", 
        d: "M10.44 19.334c-2.508.161-4.784 1.116-6.075 4.518a.954.954 0 01-.912.624c-.694 0-2.841-1.73-3.453-2.147C0 27.476 2.371 32 8 32c4.742 0 8-2.736 8-7.512 0-.194-.04-.38-.06-.57l-5.5-4.584zM28.617 0c-.947 0-1.835.42-2.513 1.028C13.33 12.441 12 12.708 12 16.068c0 .856.204 1.673.546 2.419l3.989 3.324c.45.112.915.189 1.399.189 3.882 0 6.132-2.842 13.197-16.029.462-.897.869-1.865.869-2.874C32 1.29 30.375 0 28.618 0z"
    },
    {
        id: "pin",
        viewBox: "0 0 24 32", 
        d: "M18.627 13.392L17.862 6H20.5A1.5 1.5 0 0022 4.5v-3A1.5 1.5 0 0020.5 0h-17A1.5 1.5 0 002 1.5v3A1.5 1.5 0 003.5 6h2.638l-.765 7.392C2.342 14.802 0 17.329 0 20.5A1.5 1.5 0 001.5 22H10v6.5a.5.5 0 00.053.224l1.5 3a.5.5 0 00.894 0l1.5-3A.5.5 0 0014 28.5V22h8.5a1.5 1.5 0 001.5-1.5c0-3.199-2.374-5.714-5.373-7.108z"
    },
    {
        id: "plus",
        viewBox: "0 0 32 32", 
        d: "M0 12h12V0h8v12h12v8H20v12h-8V20H0z"
    },
    {
        id: "plus-circle",
        viewBox: "0 0 32 32", 
        d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2 6h-4v8H6v4h8v8h4v-8h8v-4h-8V6z"
    },
    {
        id: "question",
        viewBox: "0 0 22 32", 
        d: "M14.446 25.034V32H7.468v-6.966h6.978zM10.647 0c3.202 0 5.886.79 8.036 2.38C20.89 4.013 22 6.442 22 9.597c0 1.943-.482 3.604-1.444 4.953-.561.817-1.594 1.816-3.11 3.022L16 18.719c-.688.546-1.131 1.165-1.347 1.864-.125.403-.203 1.05-.228 1.93l-.015.999H7.587l.041-1.137c.096-2.186.317-3.725.682-4.652.405-1.03 1.385-2.141 2.934-3.375l1.498-1.197a4.637 4.637 0 001.046-1.089c.464-.652.691-1.356.691-2.132a4.27 4.27 0 00-.786-2.502c-.464-.667-1.37-1.023-2.78-1.023-1.367 0-2.272.433-2.802 1.294-.595.967-.888 1.957-.888 2.982v.668H0l.029-.696C.2 6.485 1.65 3.472 4.383 1.692 6.098.562 8.191 0 10.647 0z"
    },
    {
        id: "structure",
        viewBox: "0 0 26 32", 
        d: "M6 24H0V0h6v24zm10 8h-6V0h6v32zm10-8h-6V0h6v24z"
    },
    {
        id: "text-join",
        viewBox: "0 0 30 32", 
        d: "M12.563 27.31c1.055 0 2.036-.322 2.943-.965.507-.385 1.108-.985 1.804-1.799V14.94c-1.73.428-3.249 1.103-4.557 2.024-2.215 1.563-3.323 3.555-3.323 5.976 0 1.435.322 2.522.966 3.26.643.74 1.366 1.11 2.167 1.11zM0 24.931c0-2.956 1.403-5.301 4.209-7.036 2.806-1.735 7.204-3.481 13.196-5.237V7.87c0-1.949-.406-3.39-1.218-4.32-.813-.933-2.252-1.398-4.32-1.398-1.16 0-2.115.22-2.864.658-.749.44-1.123.99-1.123 1.655 0 .257.042.471.126.642.085.172.211.354.38.547l.38.45c.295.364.533.765.712 1.204.18.44.269.905.269 1.398 0 1.242-.406 2.2-1.219 2.875-.812.675-1.756 1.012-2.832 1.012-1.245 0-2.305-.374-3.18-1.124-.876-.75-1.313-1.831-1.313-3.245 0-2.528 1.17-4.53 3.512-6.008C7.057.739 9.937 0 13.355 0c3.67 0 6.74.718 9.208 2.153 2.448 1.456 3.671 4.133 3.671 8.032V26.12c0 .472.121.873.364 1.205.243.332.512.498.807.498.253 0 .48-.048.68-.144.2-.097.512-.36.934-.787L30 28.273c-1.266 1.5-2.669 2.549-4.209 3.149a8.238 8.238 0 01-3.07.578c-1.92 0-3.322-.568-4.208-1.703-.507-.642-.876-1.596-1.108-2.86-1.793 1.821-3.818 3.107-6.076 3.856-1.371.471-2.721.707-4.05.707-1.773 0-3.429-.573-4.969-1.719C.77 29.135 0 27.352 0 24.931z"
    },
    {
        id: "text-split",
        viewBox: "0 0 32 32", 
        d: "M26.234 22v4.12c0 .472.121.873.364 1.205.243.332.512.498.807.498.253 0 .48-.048.68-.144.2-.097.512-.36.934-.787L30 28.273c-1.266 1.5-2.669 2.549-4.209 3.149a8.238 8.238 0 01-3.07.578c-1.92 0-3.322-.568-4.208-1.703-.507-.642-.876-1.596-1.108-2.86-1.793 1.821-3.818 3.107-6.076 3.856-1.371.471-2.721.707-4.05.707-1.773 0-3.429-.573-4.969-1.719C.77 29.135 0 27.352 0 24.931c0-1.054.179-2.031.536-2.93H9.49a7.438 7.438 0 00-.059.939c0 1.435.322 2.522.966 3.26.643.74 1.366 1.11 2.167 1.11 1.055 0 2.036-.322 2.943-.965.507-.385 1.108-.985 1.804-1.799V22h8.924zM13.354 0c3.671 0 6.74.718 9.21 2.153 2.447 1.456 3.67 4.133 3.67 8.032V17H17.31v-2.06c-1.73.428-3.249 1.103-4.557 2.024l-.051.036H5.797c2.777-1.44 6.646-2.887 11.608-4.341V7.87c0-1.949-.406-3.39-1.218-4.32-.813-.933-2.252-1.398-4.32-1.398-1.16 0-2.115.22-2.864.658-.749.44-1.123.99-1.123 1.655 0 .257.042.471.126.642.064.129.15.263.261.404l.499.592c.295.365.533.766.712 1.205.18.44.269.905.269 1.398 0 1.242-.406 2.2-1.219 2.875-.812.675-1.756 1.012-2.832 1.012-1.245 0-2.305-.374-3.18-1.124-.876-.75-1.313-1.831-1.313-3.245 0-2.528 1.17-4.53 3.512-6.008C7.057.739 9.937 0 13.355 0z"
    },
    {
        id: "unpin",
        viewBox: "0 0 24 32", 
        d: "M5.373 13.39l18.352 5.263c.179.585.275 1.202.275 1.847a1.5 1.5 0 01-1.356 1.493L22.5 22H14v6.5a.5.5 0 01-.024.152l-.029.072-1.5 3a.5.5 0 01-.846.078l-.048-.078-1.5-3a.5.5 0 01-.047-.147L10 28.5V22H1.5A1.5 1.5 0 010 20.5c0-3.078 2.206-5.55 5.108-6.981l.265-.129zM3.5 0h17a1.5 1.5 0 011.493 1.356L22 1.5v3a1.5 1.5 0 01-1.356 1.493L20.5 6h-2.638l.659 6.375L5.853 8.742 6.138 6H3.5a1.5 1.5 0 01-1.493-1.356L2 4.5v-3A1.5 1.5 0 013.356.007L3.5 0h17-17z"
    },
];