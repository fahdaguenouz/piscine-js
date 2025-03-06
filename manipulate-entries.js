function filterEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => func([k, v])));
}

function mapEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => func([k, v])));
}

function reduceEntries(obj, func, initialValue) {
    return Object.entries(obj).reduce((acc, [k, v]) => func(acc, [k, v]), initialValue);
}


function totalCalories(cart) {
    return reduceEntries(cart, (sum, [_, value]) => sum + (value.calories || 0), 0);
}

function lowCarbs(cart) {
    return filterEntries(cart, ([, value]) => value.carbs < 50);
}

function cartTotal(cart) {
    return reduceEntries(cart, (acc, [, value]) => {
        for (let key in value) {
            acc[key] = (acc[key] || 0) + value[key];
        }
        return acc;
    }, {});
}