<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let text;
    export let color;

    const buttonClick = () => {
        dispatch('buttonClick')
    }
</script>

<style>
    button {
        padding: 0.0rem 1.8rem;
        border-radius: 0.3rem;
        height: 2.9rem;
        margin:  0.0rem 0.4rem;
        border: 0.1rem solid rgb(146, 145, 144);
        background-color: rgb(255, 255, 255);
        outline: 0;
        font-size: 1.3rem;
    }

    button.default {
        border-color: rgb(146, 145, 144);
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }

    button.primary {
        border-color: rgb(26, 140, 255);
        background-color: rgb(26, 140, 255);
        color: rgb(255, 255, 255);
    }
</style>

<button class="{color}" on:click="{() => buttonClick()}">{text}</button>