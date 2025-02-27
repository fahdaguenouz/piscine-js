function forEach(arr,func){

    for(let i=0;i<arr.length;i++){
         func(arr[i],i,arr)
    }
    return
}

const array1 = [1, 2, 3, 4, 5, Math.random(), 7, 10, -10, 20, -95];

forEach(array1,(element) => console.log(element));