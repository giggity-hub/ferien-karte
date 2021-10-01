<script>
    import {activeHolidays} from '$stores/holidays';
    const stateCodes = ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']

    $: color = (stateCode) =>{
        let holiday = $activeHolidays[stateCode]
        console.log(holiday);
        return holiday ? `text-${holiday.type.toLowerCase()}` : ''
    }
</script>


<div class="shadow-2xl bg-white " >
    {#each stateCodes as stateCode}
        <div class="h-10 flex justify-center items-center {color(stateCode)}" >{stateCode}</div>
    {/each}
</div>

<style>
    .shadow-sm-right{
        @apply shadow-sm;
    }
    .state-code{
        flex-grow: 1;
        background: green;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

