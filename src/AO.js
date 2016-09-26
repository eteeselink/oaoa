export function fromPairs(pairs) {
    let out = {};
    for(let i = 0; i !== pairs.length; i++) {
        const [key, value] = pairs[i];
        out[key] = value;
    }
}

export function map(func, array) {
    let out = {};
    for(let i = 0; i !== array.length; i++) {
        const [key, value] = func(array[i]);
        out[key] = value;
    }
}        
