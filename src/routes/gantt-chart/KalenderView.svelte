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
    import {selectedDate} from '$stores/selection';

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
</script>

<div class="p-8 flex flex-col ">
    
        <div class="">
            <h1 class=" text-2xl text-center font-medium p-4">
                {formatDate($selectedDate)}
            </h1>
        
            

            <DateSlider/>
            
            
        </div>

        <div class="flex-grow-0 flex relative w-full overflow-hidden bg-white rounded-md mt-4" >
            <div class="w-12  z-10">
                <StateCodes/>
            </div>

            <div class="min-w-0 flex-1">
                <Years/>
                <Line/>
            </div>

            <div class="w-12   bg-gradient-to-r from-transparent  to-white z-10">
            </div>
                
            
        </div>

        <div class="bg-red-200 flex justify-center p-4">
            <YearSelection />
        </div>
  
</div>
