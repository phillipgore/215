<script>
    import {fade} from 'svelte/transition';
    import ButtonMobile from '../elements/ButtonMobile.svelte';
    import {settings} from '../../modules/store.js';

    let hasLabels = $settings.toolbarButtons.hasLabels;
        
</script>

<style>
    @media only screen and (min-width: 0px) {
        nav {
            height: 4.5rem;
            background-color: rgb(54, 53, 52);
            display: flex;
            align-items: center;
            position: fixed;
            z-index: 10;
            top: 0;
            right: 0;
            left: 0;
        }
    }

    @media only screen and (min-width: 768px) {
        nav { display: none; }
    }
</style>

{#if $settings.toolbarMobile.isVisible}
    <nav>
        <ButtonMobile buttons={ [{iconName:"book", sheetId: "studies"}] }/>
        <ButtonMobile buttons={ [{iconName: 'document'}] }/>
        <ButtonMobile buttons={ [{iconName:"pin", sheetId: "outline"}] }/>
        <ButtonMobile buttons={ [{iconName:"text-join", sheetId: "text"}] }/>
        <ButtonMobile buttons={ [{iconName:"literary-chiasim", sheetId: "literary"}] }/>
        <ButtonMobile buttons={ [{iconName:"paintbrush", sheetId: "color"}] }/>
        <ButtonMobile buttons={ [{iconName:"notecard"}] }/>
        <ButtonMobile buttons={ [{iconName:"ellipsis"}] }/>
    </nav>
{/if}