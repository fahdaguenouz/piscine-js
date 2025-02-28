function every(arr,func){
    let c=0
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
            c++
        }
    }
    return c==arr.length
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

const greaterEq10 = (n) => n >= 10
const small= [3, 6, 1, 7, 2]
  const mixed= [23, 4, 10, 25, 6]
  const big=[43, 30, 16, 57, 10]
  let count =0
  console.log(
    none(big,() => ++count > 2))

