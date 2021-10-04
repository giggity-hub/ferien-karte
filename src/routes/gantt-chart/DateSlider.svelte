<script>
    import TimeLine from './TimeLine.svelte';
    import {selectedDate} from '$stores/selection'
    import { onMount } from 'svelte';
    import {whilePressed} from '../utils/whilePressed';
import { style } from 'd3-selection';

    

    function decrementDay(){
        selectedDate.update(date => {
            date.setDate(date.getDate() - 1)
            return date
        })
    }

    function incrementDay(){
        selectedDate.update(date => {
            date.setDate(date.getDate() + 1)
            return date
        })
    }


    // function clickAndHold()


    let incrementBtnRef;
    let decrementBtnRef;
    onMount(()=>{
        whilePressed(incrementBtnRef, incrementDay, {preventDefault: true})
        whilePressed(decrementBtnRef, decrementDay, {preventDefault: true})
    })

</script>



<div class="flex shadow-md bg-gray-800  rounded h-6">
    <button class="w-12 btn  text-center " bind:this={decrementBtnRef}>
        -
    </button>
    <div class="flex-1 ">
        <TimeLine/>
    </div>
    <button class="w-12 text-center btn  z-10" bind:this={incrementBtnRef}>
        +
    </button>
</div>

<style>
    .btn{
        @apply text-blue-400 bg-gray-800
    }

    .btn:hover{
        filter: brightness(1.2);
    }

    .btn:active{
        filter: brightness(0.9)
    }
</style>