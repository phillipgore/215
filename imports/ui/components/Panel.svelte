<script>
    import {getIcon} from '../../modules/store.js';
</script>

<style>
    .panel {
        margin: 10.0rem auto;
        width: 64.0rem;
        height: 48.0rem;
        border-radius: 1.6rem;
        border: 0.1rem solid rgba(181, 181, 181, 0.65);
        overflow: hidden;
        backdrop-filter: blur(1.0rem);
        position: relative;
        z-index: 20;
        box-shadow: 0.0rem 0.0rem 1.4rem rgba(0, 0, 0, 0.2);
        display: none;
    }

    .panel:after {
        content: " ";
        background-color: rgba(235, 235, 235, 0.69);
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .close {
        transform: rotate(45deg);
        height: 2.2rem;
        fill: #363636;
        float: right;
        margin: 1.0rem 1.0rem;
    }
</style>

<div class="panel">
    <svg class="close" viewBox={$getIcon('plus-circle').viewBox}>
        <path d={$getIcon('plus-circle').d}/>
    </svg>
</div>