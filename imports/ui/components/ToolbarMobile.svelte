<script>
	import Sheet from '../components/Sheet.svelte';
    import {fly} from 'svelte/transition';
    import ButtonMobile from '../elements/ButtonMobile.svelte';
    import {settings} from '../../modules/store.js';        
</script>

<style>
    @media only screen and (min-width: 0px) {
        nav {
            height: 4.5rem;
            background-color: rgb(44, 43, 42);
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
    <nav in:fly="{{ y: -45, duration: 200, opacity: 100 }}" out:fly="{{ y: -45, duration: 300, opacity: 100 }}">
        <ButtonMobile buttons={ [{iconName: "book", sheetId: "studies"}] } />
        <ButtonMobile buttons={ [{iconName: "document"}] } />
        <ButtonMobile buttons={ [{iconName: "pin", sheetId: "outline"}] } />
        <ButtonMobile buttons={ [{iconName: "text-join", sheetId: "text"}] } />
        <ButtonMobile buttons={ [{iconName: "literary-chiasim", sheetId: "literary"}] } />
        <ButtonMobile buttons={ [{iconName: "paintbrush", sheetId: "color"}] } />
        <ButtonMobile buttons={ [{iconName: "notecard"}] }/>
        <ButtonMobile buttons={ [{iconName: "ellipsis", sheetId: "settings"}] } />
    </nav>
{/if}

<Sheet id="studies" isSheetFull="true" />
<Sheet id="outline" />
<Sheet id="text" />
<Sheet id="literary" />
<Sheet id="color" />
<Sheet id="settings" isSheetFull="true" />
