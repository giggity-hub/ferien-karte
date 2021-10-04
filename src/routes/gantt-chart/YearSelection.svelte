<script>
    import { createEventDispatcher, onMount } from 'svelte';
    // export let years;
    // export let date;
    // const dispatch = createEventDispatcher();
    import {createPopper} from '@popperjs/core'
    import {allHolidays} from '$stores/holidays'
    import {selectedDate, selectedYear, firstDateOfSelectedYear, lastDateOfSelectedYear} from '$stores/selection'
    
    const years = Object.keys($allHolidays).map(Number)
    
    let maxYear = Math.max(...years);
    let minYear = Math.min(...years);
    console.log("shosh", $firstDateOfSelectedYear, $lastDateOfSelectedYear);
    $: isIncrementable = maxYear > $selectedYear
    $: isDecrementable = minYear < $selectedYear

    function incrementYear(){
        selectedDate.update((date) => {
            date.setFullYear($selectedYear + 1)
            return date
        })
        // date.setFullYear(date.getFullYear() + 1)
        // dispatch('change', {
        //     date
        // })
    }

    function decrementYear(){
        selectedDate.update((date) => {
            date.setFullYear($selectedYear - 1)
            return date
        })
        // date.setFullYear(date.getFullYear() - 1)
        // dispatch('change', {
        //     date
        // })
    }

</script>

<div class="year-selection ">
    <button class:muted={!isDecrementable} on:click={decrementYear} class="btn">
        -
    </button>
    <div class="text-xl mx-3 text-gray-300">
        {$selectedYear}
    </div>
    <button  class:muted={!isIncrementable} on:click={incrementYear} class="btn">
        +
    </button>
    
</div>

<style>
    .btn{
        @apply rounded-full w-7 h-7
    }
    .tip{
        background: black;
        color: white;
    }
    .year-selection{
        display: flex;
    }
    button{
        @apply bg-gray-400 shadow
    }
    button.muted{
        @apply bg-gray-600 pointer-events-none
    }

</style>