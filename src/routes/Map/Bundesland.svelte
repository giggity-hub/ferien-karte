<script>
    export let bundesland;
    export let geoGenerator;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    import {hoveredStateCode} from '$stores/selection';
    import {activeHolidays} from '$stores/holidays';


    let stateCode = bundesland.properties.id.split('-')[1]

    let ref;
    let popperInstance


    function show(event){
        dispatch('show', {
            event,
            stateCode
        })
    }

    $: holiday = $activeHolidays[stateCode]
</script>

<path bind:this={ref}
    on:mousedown|stopPropagation={show}
   
    
    
    stroke-width="1"
    class="fill-{ holiday ? holiday.type.toLowerCase() : "default"}{$hoveredStateCode== stateCode ? "-active" : ""} stroke-gray-800"

   
    d={geoGenerator(bundesland)}
/>

<style>

    .fill-default{
        fill: theme('colors.gray.700')
    }
    .fill-default-active{
        fill: theme('colors.gray.600')
    }
    .is-selected{
        fill: white;
    }
</style>