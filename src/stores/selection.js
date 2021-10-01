import { derived, writable } from "svelte/store";

export const selectedDate = writable(new Date())


export const selectedYear = derived(
    selectedDate,
    $selectedDate => $selectedDate.getFullYear() 
)

export const firstDateOfSelectedYear = derived(
    selectedYear, 
    $selectedYear => new Date($selectedYear,0,1)
)

export const lastDateOfSelectedYear = derived(
    selectedYear, 
    $selectedYear => new Date($selectedYear,11,31)
)


function createHoveredStateCode(){
    const {subscribe, set} = writable(null)

    return {
        subscribe,
        set,
        reset : () => set(null)
    }
}

// show which state is being hovered
export const hoveredStateCode = createHoveredStateCode()