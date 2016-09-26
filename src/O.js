import * as pairs from "./O/pairs";

export function filter(obj, func) {
    return pairs.filter(obj, ([key, value], obj) => func(value, key, obj));
}

export function map(obj, func) {
    return pairs.map(obj, ([key, value], obj) => [key, func(value, key, obj)]);
}

export function sortBy(obj, func) {
    return pairs.sortBy(obj, ([, value]) => func(value));
}

export {pairs};
