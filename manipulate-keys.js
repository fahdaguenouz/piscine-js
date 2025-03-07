function filterKeys(obj, func) {
    let result = {};
    for (let key of Object.keys(obj)) {
        if (func(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapKeys(obj, func) {
    let result = {};
    for (let [key, value] of Object.entries(obj)) {
        result[func(key)] = value;
    }
    return result;
}

function reduceKeys(obj, func, init) {
    let objj=Object.keys(obj)
    if(typeof init==="undefined"){
        init=Object.keys(obj)[0]
        objj=objj.slice(1)
    }
    return objj.reduce(func, init);
}
//const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

//console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)));