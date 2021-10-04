<script>
import { createEventDispatcher, onMount } from 'svelte';
import * as d3 from 'd3'

const dispatch = createEventDispatcher();

let ref;


export let value;
export let min = 0;
export let max = 0;
let width = 0; 

$: scale = d3.scaleLinear()
                .domain([0, width])
                .range([min, max])
                .clamp(true)

const listener = {
    touchMove: {
        on: 'touchmove',
        off: 'touchend',
        callback: ({touches}) => moveHandler(touches[0])
    },
    mouseMove: {
        on: 'mousemove',
        off: 'mouseup',
        callback: moveHandler
    }
}

function clamp(num, [min, max]){
    return Math.min(Math.max(num, min), max);
}

function moveHandler({clientX}){
    let rect = ref.getBoundingClientRect()
    let relX = clamp(clientX - rect.x, [0, rect.width])
    dispatch('input', {
        relX
    })
    value =scale(relX)
}

function addListener(e, listener){
    const {on, off, callback} = listener;
    callback(e)
    document.addEventListener(on, callback)
    document.addEventListener(off, ()=>{
        document.removeEventListener(on, callback)
    }, {once: true})
}

$:{
    // update the relX position if the date or width changes
    // relX.set(scaleDay.invert($selectedDate))
    // console.log("sheeeeeesh");
    let relX = scale.invert(value)
    dispatch('input', {
        relX
    })
}

function resizeHandler(){
    width = ref.getBoundingClientRect().width
}
onMount(resizeHandler)

</script>

<svelte:window on:resize={resizeHandler} />
<div bind:this={ref} class="flex-1 bg-red-200 w-full h-full" 
    on:touchstart|preventDefault={(e)=> addListener(e, listener.touchMove)}
    on:mousedown|preventDefault={(e)=> addListener(e, listener.mouseMove)}>
    <slot></slot>
</div>