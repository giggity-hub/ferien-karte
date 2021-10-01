<script>
    import { fade } from 'svelte/transition';
	import { elasticOut, linear } from 'svelte/easing';
    import {stateNames} from '$stores/states';

    export let popperStateCode;
    // import coatOfArms from '../stores/coatOfArms';
    import { beforeUpdate } from 'svelte';
    import { activeHolidays } from '$stores/holidays';

    const stopPropagation = (e) => e.stopPropagation()

    export let isTransitionEnabled;
    // export let holiday;

    $: holiday = $activeHolidays[popperStateCode]

</script>


<div class="bg-gray-900 text-white rounded p-4" class:hidden={!popperStateCode}>
    <div class="flex ">
        <div class="coat-of-arms  w-10 ">
            <img class="img-fluid" src='coat-of-arms/{popperStateCode}.svg' alt="coat of arms">
        </div>
        <div class="ml-4 flex-column">
            <h1 class="">
                {stateNames[popperStateCode]}
            </h1>
            <p class="text-xs mt-1">
                {#if holiday}
                    <span class="text-{holiday.type.toLowerCase()}">{holiday.name}</span>
                    {holiday.start} bis {holiday.end}
                {:else}
                    <span class="text-sommer">Keine Ferien</span>
                {/if}
                
            </p>
        </div>
    </div>
    <div class="bg-red-200">
        <button class="btn btn-blue " >Letzte Ferien</button>
        <button class="btn btn-blue">Nächste Ferien</button>
    </div>
</div>

<!-- <div on:mousedown={stopPropagation} class:hidden={!popperStateCode} class="tooltip p-4 bg-gray-900 shadow-lg flex flex-col" bind:this={ref} class:transition={isTransitionEnabled} >

    
    
</div> -->

<style>
    .btn {
        @apply font-bold py-2 px-4 rounded;
    }
    .btn-blue {
        @apply bg-blue-500 text-white;
    }
    .btn-blue:hover {
        @apply bg-blue-700;
    }

    .tooltip{
        position: absolute;
        /* background: rgb(22, 22, 22); */
        color: white;
        min-height: 100px;
        /* width: 500px; */
        display: none;
        transition: none;
        border-radius: .5rem;
        
    }
    .tooltip.show{
        display: block;
        
    }
    .tooltip.transition{
        transition: all .15s linear;
    }
</style>