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

<div class="year-selection">
    <button class:muted={!isDecrementable} on:click={decrementYear}>
        -
    </button>
    <div>
        {$selectedYear}
    </div>
    <button  class:muted={!isIncrementable} on:click={incrementYear}>
        +
    </button>
    
</div>

<style>
    .tip{
        background: black;
        color: white;
    }
    .year-selection{
        display: flex;
    }
    button{
        background: white;
    }
    button.muted{
        background: darkgrey;
        pointer-events: none;
    }

</style>