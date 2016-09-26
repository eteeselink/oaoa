import * as pairs from "./O/pairs";

export function filter(func, obj) {
    return pairs.filter(([key, value], obj) => func(value, key, obj), obj);
}

export function map(func, obj) {
    return pairs.map(([key, value], obj) => [key, func(value, key, obj)], obj);
}

export function sortBy(func, obj) {
    return pairs.sortBy(([, value]) => func(value), obj);
}

export {pairs};
