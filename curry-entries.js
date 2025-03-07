function defaultCurry(obj1){
    return function(obj2){

        let res={...obj1}
        
        for(let [k,v]of Object.entries(obj2)){
        
                res[k]=v
            
                console.log(res);
        }
        return res
    }
    
}

function mapCurry(func){
    return function(obj){
        return Object.fromEntries(Object.entries(obj).map(func));
    }
}

function reduceCurry(func){
    return function(obj,init=0){
        return Object.entries(obj).reduce(func, init);

    }
}

function filterCurry(func){
    return function(obj){
        return Object.fromEntries(Object.entries(obj).filter(func));
    }

}


function reduceScore(obj,acc=0){
    return reduceCurry((acc,[,value])=>{
        if(value.isForceUser){
            acc+= value.pilotingScore+value.shootingScore
        }
        return acc
    })(obj,acc)

}

function filterForce(obj){
    return filterCurry(([,val])=>{
        if(val.shootingScore>=80&&val.isForceUser){
            return obj
        }
    })(obj)
}

function mapAverage(obj){
        return mapCurry(([k,val])=>{
            let res=(val.shootingScore+val.pilotingScore)/2
               return [k,defaultCurry(val)({averageScore:res})]
        })(obj)
}