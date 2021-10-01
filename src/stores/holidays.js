import { derived, readable, writable } from "svelte/store";
import { selectedDate } from "./selection";
import { stateCodes } from "./states";

function objectFromKeys(keys, initialValue){
    return keys.reduce((obj, key) => {
        obj[key] = initialValue;
        return obj
    }, {})
}

export const allHolidays  = readable(null, function start(set) {
    const ferienUrl = 'https://raw.githubusercontent.com/giggity-hub/schulferien/main/ferien.json'
    fetch(ferienUrl)
        .then(res => res.json())
        .then(set)
})




function findActiveHoliday(stateHolidays, selectedDate){
    for (let holiday of stateHolidays){
        let start = new Date(holiday.start)
        let end = new Date(holiday.end)
        let isActive = start <= selectedDate && end >= selectedDate;

        if (isActive){
            return holiday
        }
    }
    return null;
}

export const activeHolidays = derived([allHolidays, selectedDate], ([$allHolidays, $selectedDate]) => {
    if ($allHolidays) {
        let res = {}
        let selectedYear = $selectedDate.getFullYear();
        for (let stateCode in $allHolidays[selectedYear]){
            let stateHolidays = $allHolidays[selectedYear][stateCode]
            res[stateCode] = findActiveHoliday(stateHolidays, $selectedDate)
        }
        return res
    }
}, objectFromKeys(stateCodes, null))

