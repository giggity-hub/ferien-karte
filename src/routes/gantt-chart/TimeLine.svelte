<script context="module">
    import { writable } from 'svelte/store';
    // we export the relX position so that it can be used by the line component
    export const relX = writable(0);
</script>

<script>
import {scaleLinear} from '../../../node_modules/d3-scale/src/index.js';
import { onMount } from 'svelte';
import { createEventDispatcher } from 'svelte';
import {selectedDate, selectedYear, firstDateOfSelectedYear, lastDateOfSelectedYear} from '$stores/selection';

const dispatch = createEventDispatcher();

// d
// asdfasdfa
let ref;
let unix;
// let relX;

// export let min;
// export let max;
// export let date;

function clamp(num, [min, max]){
    return Math.min(Math.max(num, min), max);
}

let width = 0; //initial value damit der folgende code nicht breakt
$: scaleDay = scaleLinear()
                .domain([0, width])
                .range([$firstDateOfSelectedYear, $lastDateOfSelectedYear])
                .clamp(true)



$:{
    // update the relX position if the date or width changes
    relX.set(scaleDay.invert($selectedDate))
}


function resizeHandler(){
    width = ref.getBoundingClientRect().width
}
onMount(resizeHandler)

function moveHandler(clientX){
    let rect = ref.getBoundingClientRect()
    relX.set(clamp(clientX - rect.x, [0, width]))
    selectedDate.set(scaleDay($relX))
}

const mouseMoveHandler = ({clientX}) => moveHandler(clientX)
function attachMouseMoveListener(e){
    mouseMoveHandler(e)
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', ()=>{
        document.removeEventListener('mousemove', mouseMoveHandler)
    }, {once: true})
}
const touchMoveHandler = ({touches}) => moveHandler(touches[0])
function attachTouchMoveListener(e){
    touchMoveHandler(e)
    document.addEventListener('touchmove', touchMoveHandler)
    document.addEventListener('touchend', ()=>{
        document.removeEventListener('touchmove', touchMoveHandler)
    }, {once: true})
}


const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
</script>

<svelte:window on:resize={resizeHandler} />
<div class="no-hover">

</div>
<!-- on:touchend|preventDefault={detachMoveListener} -->
<div bind:this={ref} class="range-wrapper relative bg-white" 
    on:touchstart|preventDefault={attachTouchMoveListener}
    on:mousedown|preventDefault={attachMouseMoveListener}
    
    >
    <div class="slider__thumb h-4 w-0 p-3 -ml-3 bg-gray-600 rounded-full" style="transform: translateX({$relX}px)"></div>

    <div class="flex justify-evenly">
        {#each months as month}
            <div>{month}</div>
        {/each}
    </div>
</div>

<style>
    .slider__thumb{
        --thumbwidth : var(--trackheight);
        
        /* width: var(--thumbwidth); */
        /* background: green; */
        pointer-events: none;
        position: absolute;
        /* border-radius: 50px; */

    }
    .range-wrapper{
        --trackheight : 20px;
        /* background: yellow; */
        /* position: relative; */
        /* width: 100%; */
        /* height: var(--trackheight); */
        
    }

</style>