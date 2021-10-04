
<script>
    import { onMount } from "svelte";
    import Splide from '@splidejs/splide';
    // import {Splide} from './splide-v3/js/splide.esm';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let ref;
    let splide;
    export let start = 0;
    onMount(()=>{
        splide = new Splide(ref, {
            start,
            // height: "100px",
        }).mount();

        splide.on('move', function(index){
            dispatch('move', index)
        })
    })



    $: {
        if (splide){
            splide.go(start)
        }
    }
</script>



<div class="splide " bind:this={ref}>
    <!-- make overflow visible for cool effect auf der linken seide weischde bescheid wa -->
    <div class="splide__track overflow-visible ">
        <div class="splide__list  ">
            <slot></slot>
        </div>
    </div>
</div>



<style global>
    .splide__arrow,
    .splide__pagination__page{
        display: none !important;

    }
</style>