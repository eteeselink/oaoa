// functions that take an object and produce an array
export const keys = Object.keys;

export function values(obj) {
    let out = [];
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            const value = obj[key];
            out.push(value);
        }
    }
    return out;
}

export function toPairs(obj) {
    let out = [];
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            const value = obj[key];
            out.push([key, value]);
        }
    }
    return out;
}
