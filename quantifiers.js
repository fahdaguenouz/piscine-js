function every(arr,func){
    let c=0
    for(let i=0;i<arr.length;i++){
        if(!func(arr[i],i,arr)){
            console.log();
           return false
        }
    }
    return true
}
function some(arr,func){
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){            
            return true
        }
    }
return false
}

function none(arr,func){
    return !some(arr,func)
}

// const greaterEq10 = (n) => n >= 10
// const small= [3, 6, 1, 7, 2]
//   const mixed= [23, 4, 10, 25, 6]
//    const big=[43, 30, 16, 57, 10]
//   let count =0
//   console.log( every(big,() => ++count<3))
//     console.log(count);
    

