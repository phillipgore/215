<script>
    import ButtonTool from './ButtonTool.svelte';

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
        <ButtonTool button={button}/>
    {/each}
</div>