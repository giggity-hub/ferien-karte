<script>
    import {activeHolidays} from '$stores/holidays';
    import {hoveredStateCode} from '$stores/selection'
    const stateCodes = ['BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH']

    $: color = (stateCode) =>{
        let holiday = $activeHolidays[stateCode]

        let color = holiday ? holiday.type.toLowerCase() : 'default'
        let modifier = $hoveredStateCode == stateCode ? '-active' : ''

        return 'text-' + color + modifier
    }
</script>


<div class="shadow-2xl  " >
    {#each stateCodes as stateCode}
        <div class="h-10 flex justify-center items-center {color(stateCode)} 
            border-r {$hoveredStateCode == stateCode ? 'border-gray-300' : 'border-transparent'}
            {$hoveredStateCode == stateCode ? '' : 'opacity-70'}" >
            {stateCode}
        </div>
    {/each}
</div>

<style>
    .text-default{
        color: theme('colors.gray.300')
    }
    .text-default-active{
        color: theme('colors.gray.100')
    }

</style>

