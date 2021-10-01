<script>
    import bundesländer from './bundesländer.geo.json';
    import Bundesland from './Bundesland.svelte';
    import {geoMercator, geoPath} from '../../../node_modules/d3-geo/src/index.js';
    import {createPopper} from '@popperjs/core'
    import { onMount } from 'svelte';
    // import coatOfArms from 'stores/coatOfArms.js';
    import Popper from './Popper.svelte';
    const stopPropagation = (e) => e.stopPropagation()

    let width = 800;
	let height = 900;

	let projection = geoMercator().fitSize([width, height], bundesländer)
	let geoGenerator = geoPath().projection(projection)

    let tooltipRef;
    let svgRef;
    let popperContext;
    let instance;
    let popperStateCode;
    function generateGetBoundingClientRect(x = 0, y = 0) {
        return () => ({
            width: 0,
            height: 0,
            top: y,
            right: x,
            bottom: y,
            left: x,
        });
        }
    const virtualElement = {
        getBoundingClientRect: generateGetBoundingClientRect(),
    };
    onMount(()=>{
        

        
        instance = createPopper(virtualElement, tooltipRef, {
            placement: 'top',
            modifiers: [
                {
                name: 'preventOverflow',
                    options: {
                        boundary: popperContext,
                        altAxis: true,
                        
                        // padding: 8,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    }
                },
                {
                    name: 'computeStyles',
                    options: {
                        // if activated can cause negative translate values which can result in the popper transition going off screen.
                        adaptive: false
                    }
                }
            ],
            });
        
 
    })



    let isTransitionEnabled = false;
    function updateShit(event){
            let {clientX, clientY} = event;
            virtualElement.getBoundingClientRect = generateGetBoundingClientRect(clientX, clientY);
            instance.update();
        }
    function handleShow({detail}){
        isTransitionEnabled = popperStateCode != null;
        popperStateCode = detail.stateCode == popperStateCode ? null : detail.stateCode;
        updateShit(detail.event)

    }
    
</script>

<svelte:window on:mousedown={()=> {
    popperStateCode = null;
    isTransitionEnabled = false;
}}/>

<div class="p-5 h-full flex items-center">
    <div bind:this={popperContext}  class="svg-container flex-1 bg-white flex items-center justify-center" >

    
        <div bind:this={tooltipRef}>
            <Popper {popperStateCode} {isTransitionEnabled} />
        </div>
        
    

    <svg viewBox="0 0 {width} {height}" class="max-h-full">
        {#each bundesländer.features as bundesland,i}
            <Bundesland on:show={handleShow} {bundesland} {geoGenerator}/>
        {/each}
     
     </svg>
     
    </div>
</div>


<style>

    .tooltip[data-show]{
        background: orange !important;
    }
    .svg-container{
        
        height: 100%;

        /* background: green; */
        overflow: hidden;
        
    }

</style>