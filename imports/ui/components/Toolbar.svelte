<script>
    import Buttons from '../elements/Buttons.svelte'

    let navButtons = [
        {label: 'Structures', iconName: 'structure'},
        {label: 'Documents', iconName: 'document'},
    ]
</script>

<style>
    @media only screen and (min-width: 0px) {
        .toolbar {
            height: 4.2rem;
            background-color: #363636;
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
        }

        .container-mobile { 
            height: 100%;
            display: flex; 
            width: 100%;
        }

        .container-one,
        .container-two,
        .container-three,
        .container-four { display: none; }
    }

    @media only screen and (min-width: 640px) {

    }

    @media only screen and (min-width: 768px) {
        .toolbar {
            height: 5.0rem;
            padding: 0.0rem 0.5rem;
        }

        .container-mobile { display: none; }

        .container-one {
            display: flex;
            flex-grow: 2;
            justify-content: flex-start;
            align-items: center;
        }
        .container-two {
            display: flex;
            flex-grow: 1;
            justify-content: center;
            align-items: center;
        }
        .container-three {
            display: flex;
            flex-grow: 4;
            justify-content: center;
            align-items: center;
        }
        .container-four {
            display: flex;
            flex-grow: 1;
            justify-content: flex-end;
            align-items: center;
        }

        .spacer {
            width: 1.6rem;
        }
    }
</style>

<nav class="toolbar">
    <div class="container-one">
        <Buttons buttons={ [{label: "Studies", iconName:"book-open"}] }/>
        <Buttons buttons={ [{label: "Zoom", text:"100%", isDropdown: true}] }/>
        <Buttons buttons={ [{label: "New Study", iconName:"plus"}] }/>
    </div>
    <div class="container-two">
        <Buttons buttons={navButtons}/>
    </div>
    <div class="container-three">
        <Buttons buttons={ [{label: "Outline", iconName:"pin", isDropdown: true}] }/>
        <Buttons buttons={ [{label: "Text", iconName:"text-join", isDropdown: true}] }/>
        <Buttons buttons={ [{label: "Literary", iconName:"literary-chiasim", isDropdown: true}] }/>
        <div class="spacer"></div>
        <Buttons buttons={ [{label: "Color", iconName:"paintbrush", isDropdown: true}] }/>
        <Buttons buttons={ [{label: "Note", iconName:"notecard"}] }/>
        <Buttons buttons={ [{label: "Options", iconName:"checkbox-checked", isDropdown: true}] }/>
    </div>
    <div class="container-four">
        <Buttons buttons={ [{label: "Settings", iconName:"gear"}] }/>
    </div>

    <div class="container-mobile">
        <Buttons buttons={ [{iconName:"chevron-left"}] }/>
        <Buttons buttons={ [{iconName: 'document'}] }/>
        <Buttons buttons={ [{iconName:"pin"}] }/>
        <Buttons buttons={ [{iconName:"text-join"}] }/>
        <Buttons buttons={ [{iconName:"literary-chiasim"}] }/>
        <Buttons buttons={ [{iconName:"paintbrush"}] }/>
        <Buttons buttons={ [{iconName:"notecard"}] }/>
    </div>
</nav>