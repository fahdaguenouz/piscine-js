function filterEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => func([k, v])));
}

function mapEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => func([k, v])));
}

function reduceEntries(obj, func, init) {
    return Object.entries(obj).reduce((acc, [k, v]) => func(acc, [k, v]), init);
}


function totalCalories(obj) {
    let res= reduceEntries(obj, (res,[key, value]) => res +=nutritionDB[key].calories*(value/100),0);
    return Math.round(res*10)/10
}

function lowCarbs(obj) {
    
    return filterEntries(obj, ([key, value]) => nutritionDB[key].carbs*(value/100)<=50);
}

function cartTotal(obj) {
    return mapEntries(obj,([k,v])=>{
        return [k,mapEntries(nutritionDB[k],([k,value])=>{
            let res=Math.round(v*(value/100)*1000)/1000+""
            return [k,+res]
        })]
    })
}
//let groceriesCart1={ oil: 500, onion: 230, garlic: 220, paprika: 480 }
//console.log(totalCalories(groceriesCart1));
