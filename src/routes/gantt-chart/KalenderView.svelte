<script>
    // import { fade, fly } from 'svelte/transition';
    import StateCodes from './StateCodes.svelte';
    // import Year from './Year.svelte';
    // import TimeLine from './TimeLine.svelte'
    import Line from './Line.svelte';
    import YearSelection from './YearSelection.svelte';

    export let ferien;
    // import Map from '../Map/Map.svelte';
    // import Splide from '@splidejs/splide';
    // import { onMount } from 'svelte';
    // import 'slider-core.min.css'
    // import Test from '../Test.svelte';
    import Years from './Years.svelte';
    import DateSlider from './DateSlider.svelte';
    import {firstDateOfSelectedYear, lastDateOfSelectedYear, selectedDate} from '$stores/selection';
import RangeSlider from '../utils/RangeSlider.svelte';

    function getFirstDayOfYear(year){
        return new Date(year,0,1);
    }
    function getLastDayOfYear(year){
        return new Date(year,11,31);
    }

    let selectedDay = new Date()
    let selectedYear = selectedDay.getFullYear()
    let firstDayOfYear = getFirstDayOfYear(selectedDay.getFullYear())
    let lastDayOfYear = getLastDayOfYear(selectedDay.getFullYear())



    function getActiveVacation(vacations, selectedDate){
        for (let holiday of vacations){
            let start = new Date(holiday.start)
            let end = new Date(holiday.end)
            let isActive = start <= selectedDate && end >= selectedDate;
            if (isActive){
                return holiday
            }
            // console.log(Date.parse(holiday.start));
        }
        return null;
    }
    // getActiveHoliday("NW")


    function formatDate(date){
        let month = date.getMonth() +1
        let day = date.getDate()
        let year = date.getFullYear()
        return `${day}.${month}.${year}`

    }


    let moped;
</script>

<div class="px-8 pb-12 flex flex-col ">
    
        <div class="bg-gray-700 sticky top-0 z-100 pt-8">
            <div class="border-bottom z-100  flex flex-col items-center space-y-5">
                <h1 class=" text-2xl  font-medium text-gray-200 ">
                    {formatDate($selectedDate)}
                </h1>
       
                    <YearSelection />
             
                <div class="w-full">
                    <DateSlider/>
                </div>
            </div>
        </div>

        <div class="flex-grow-0 flex relative w-full overflow-hidden bg-gray-700  " >
            <div class="w-12  z-10 bg-gray-700   border-gray-600  bg-gradient-to-r from-gray-700  bg-opacity-95">
                <StateCodes/>
            </div>

            <div class="min-w-0 flex-1">
                <Years/>
                <Line/>
            </div>

            <div class="w-12   bg-gradient-to-l from-gray-700 bg-gray-700 bg-opacity-90  z-10   border-gray-600 shadow-lg">
            </div>
                
            
        </div>
        <div class="bg-black h-12">
                <RangeSlider bind:value={$selectedDate} min={$firstDateOfSelectedYear} max={$lastDateOfSelectedYear} on:input={({detail})=> moped = detail.relX}>
                    <div style="transform: translateX({moped}px)">0</div>
                </RangeSlider>

        
        </div>

        
  
</div>
