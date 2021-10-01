<script>
    import TimeLine from './TimeLine.svelte';
    import {selectedDate} from '$stores/selection'
    import { onMount } from 'svelte';
    import {whilePressed} from '../utils/whilePressed';



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



<div class="flex shadow-md">
    <div class="w-12 bg-white rounded-l-md text-center " bind:this={decrementBtnRef}>
        -
    </div>
    <div class="flex-1 bg-red-200 shadow-inner">
        <TimeLine/>
    </div>
    <div class="w-12 bg-white text-center rounded-r-md shadow-md shadow-inner z-10" bind:this={incrementBtnRef}>
        +
    </div>
</div>