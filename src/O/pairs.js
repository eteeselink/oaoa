import {toPairs} from "../OA";
import {fromPairs} from "../AO";

// these functions treat an object like a sequence of [key, value] pairs.
export function map(obj, func) {
    let out = {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            const value = obj[key];
            const [k, v] = func([key, value], obj);
            out[k] = v;
        }
    }
    return out;
}

export function filter(obj, func) {
    let out = {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            const value = obj[key];
            if(func([key, value], obj)) {
                out[key] = value;
            }
        }
    }
    return out;
}

export function sortBy(obj, func) {
    const entries = toPairs(obj);
    entries.sort((kvpA, kvpB) => {
        const compA = func(kvpA);
        const compB = func(kvpB);
        return compA - compB;
    });
    return fromPairs(entries);
}
