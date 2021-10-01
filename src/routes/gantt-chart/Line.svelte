<script>
    import {relX} from './TimeLine.svelte';
</script>


<div class="absolute top-0 h-full border-l border-black pointer-events-none" style="transform: translateX({$relX}px)"></div>


<!-- <style>
    .line{
    position: absolute;
    height: 100%;
    border-left: 1px solid black;
    pointer-events: none;
    width: 0;
    }
</style> -->