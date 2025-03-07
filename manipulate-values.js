function filterValues(obj, func) {
    let res = {};
    
    for (let [key, value] of Object.entries(obj)) {
            console.log(value);
        if (func(value)) { 
            
            res[key] = value;
        }
    }

    return res;
}

function mapValues(obj, func) {
    let result = {};
    
    for (let [key, value] of Object.entries(obj)) {
        result[key] = func(value);
    }

    return result;
}

function reduceValues(obj, func, init=0) {
    let acc = init;

    for (let value of Object.values(obj)) {
        acc = func(acc, value);
    }

    return acc;
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(filterValues(nutrients,(acc, cr) => acc + cr));