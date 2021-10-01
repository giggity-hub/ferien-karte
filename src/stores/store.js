import {writable} from 'svelte/store';
import {stateCodes} from './states';

function objectFromKeys(keys, initialValue){
    return keys.reduce((obj, key) => {
        obj[key] = initialValue;
        return obj
    }, {})
}

function createVacationStore(){
    const {subscribe, set, update} = writable(objectFromKeys(stateCodes, null))

    const setActiveVacation = (stateCode, value) => {
        update(activeVacations => {
            activeVacations[stateCode] = value
            return Object.assign({}, activeVacations)
        })
    }

    return {
        subscribe,
        setActiveVacation
    }
}




// export const store = createVacationStore();


