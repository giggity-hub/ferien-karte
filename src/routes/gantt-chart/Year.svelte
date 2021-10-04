<script>
    // import {scaleLinear, scaleTime} from 'd3';
    import * as d3 from 'd3';
    import {hoveredStateCode} from '$stores/selection'; 
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import {activeHolidays} from '$stores/holidays'
    export let holidays;
    import {stateCodes} from '$stores/states'
    import {allHolidays} from '$stores/holidays';

    export let year;

    function getFirstDayOfYear(year){
        return +new Date(year,0,1);
    }
    function getLastDayOfYear(year){
        return +new Date(year,11,31);
    }

    $: scale =  d3.scaleLinear()
                    .domain([getFirstDayOfYear(year), getLastDayOfYear(year)])
                    .range([0, 100])
   


    let scale2 =  d3.scaleTime()
                    .domain([new Date(2021,0,1), new Date(2021,11,31)])
                    .range([0, 100])
                    .ticks()

    
    // console.log(scale2);
    let ref;
    let width = 0
    onMount(()=>{
        width = ref.getBoundingClientRect().width
    })

    const isNotNull = (el) => el != null
    $: someActiveHoliday = Object.values($activeHolidays).some(isNotNull)
</script>



{#key year}
<div bind:this={ref} class="year absolute bg-white" in:fly="{{x: width, duration:2000}}" out:fly="{{x: -width, duration:2000}}">
        
    {#each stateCodes as stateCode}
        
        <div class="row h-10" 
            on:mouseenter={()=> hoveredStateCode.set(stateCode)}
            on:mouseleave={hoveredStateCode.reset}
            class:is-selected={$hoveredStateCode === stateCode}>
            {#each holidays[stateCode] as holidy}
            <!-- {$activeHolidays[stateCode] == holidy || noActiveHoliday ? 'bg-green-600' : 'opacity-40' } -->
                <div 
                    class="test h-3 bg-{holidy.type.toLowerCase()}{$activeHolidays[stateCode] == holidy ? "-active" : ""}" 
                    
                    style="
                    left:{scale(Date.parse(holidy.start))}%;
                    width:{scale(getFirstDayOfYear(year) + Date.parse(holidy.end) - Date.parse(holidy.start))}%"></div>

            {/each}
        </div>

    {/each}


</div>
{/key}

<style>
/* class:opacity-40={$activeHolidays[stateCode] == holidy } */


    .row{
        display: flex;
        flex-grow: 1;
        align-items: center;
        position: relative;
 
        flex-shrink: 0;
 
    }
    .row.is-selected{
        background: rgba(0,0,0,0.05);
        /* background: darkred; */
    }
    /* .row:hover{
        background: darkred;
    } */
    .test{
        /* transition: opacity .2s linear; */
        /* background: black; */
     
        position: absolute;
        /* width: 5%; */
        border-radius: 2px;
        /* left: 50%; */
        z-index: 300;
    }

    .year{
        width: 100%;
        height: 100%;
        flex-grow: 0;
        flex-shrink: 0;
        /* background: red; */
        display: flex;
        flex-direction: column;
    }

    .OSTERN{
        background: green;
    }
    .HERBST{
        background: orange;
    }
    .SOMMER{
        background: yellow;
    }
    .WINTER, .WEIHNACHTEN{
        background: blue;
    }
</style>