<script>
    import Button from '../elements/Button.svelte';

    export let buttons;
</script>

<style>
    @media only screen and (min-width: 0px) {
        .btn-group { 
            display: flex; 
        }
    }
</style>

<div class="btn-group">
    {#each buttons as button}
        <Button button={button}/>
    {/each}
</div>