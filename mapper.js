function map(arr,func){
    let res=[]
    for(let i=0;i<arr.length;i++){
        res.push(func(arr[i],i,arr))
    }
    return res
}
function flat(elem,num=1,arr=[]){
   
   
    for(let i=0;i<elem.length;i++){
      if(Array.isArray(elem[i])&&num>0){
             flat(elem[i],num-1,arr)
      }else{
       // console.log("f"+elem[i]);
        
        arr.push(elem[i])
      }
    }
  
  
  return arr
  }

function flatMap(arr,func,num=0){
    let res=map(arr,func)
        return flat(res)
}

console.log(
flatMap([1, 2, 3], (n) => [n, n])
);
    [1, 1, 2, 2, 3, 3]
  
// const add1 = (el) => el + 1
//  const dd=[10, -10, 20, -95, 86, 102, 35, 89, 110]
// const indexValsArray = (el, i, arr) =>
//     `${el} is at index: ${i} out of ${arr.length - 1}`
//   console.log(map(dd,indexValsArray));