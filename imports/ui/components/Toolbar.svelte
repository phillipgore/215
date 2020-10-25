<script>
    import {fade} from 'svelte/transition';
    import Button from '../elements/Button.svelte';
    import {settings} from '../../modules/store.js';

    let hasLabels = $settings.toolbarButtons.hasLabels;
        
</script>

<style>
    @media only screen and (min-width: 0px) {
        nav {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        nav {
            height: 5.0rem;
            padding: 0.0rem 0.6rem;
            background-color: rgb(54, 53, 52);
            display: flex;
            align-items: center;
            position: fixed;
            z-index: 10;
            top: 0;
            right: 0;
            left: 0;
        }

        nav.no-label {
            height: 3.8rem;
        }

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

<nav class="{hasLabels ? '' : 'no-label'}">
    <div class="container-one">
        <Button buttons={ [{label: "Studies", iconName:"book", dropdownId: "studies"}] }/>
        <Button buttons={ [{label: "Zoom", text:"100%", dropdownId: "zoom"}] }/>
    </div>
    <div class="container-two">
        <Button buttons={ [
            {label: 'Structure', iconName: 'structure'},
            {label: 'Document', iconName: 'document'}
        ] }/>
    </div>
    <div class="container-three">
        <Button buttons={ [{label: "Outline", iconName:"pin", dropdownId: "outline"}] }/>
        <Button buttons={ [{label: "Text", iconName:"text-join", dropdownId: "text"}] }/>
        <Button buttons={ [{label: "Literary", iconName:"literary-chiasim", dropdownId: "literary"}] }/>
        <div class="spacer"></div>
        <Button buttons={ [{label: "Color", iconName:"paintbrush", dropdownId: "color"}] }/>
        <Button buttons={ [{label: "Note", iconName: "note"}] }/>
        <Button buttons={ [{label: "Options", iconName:"checkbox-checked"}] }/>
    </div>
    <div class="container-four">
        <Button buttons={ [{label: "Settings", iconName:"ellipsis"}] }/>
    </div>
</nav>