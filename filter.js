function filter(arr,func){
    let res=[]
        for(let i=0 ;i<arr.length;i++){
           if(func(arr[i],i,arr)){
            res.push(arr[i])
           }
        }
        return res
       
}

function reject(arr,fun){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(!fun(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
return res
}

function partition(arr,func){
    let res=[]
    let a=[]
    for(let i=0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            res.push(arr[i])
        }else if(!func(arr[i],i,arr)){
            a.push(arr[i])
        }
    }
    
    return [res,a]

}


// let e=[1,
//     2,
//     4,
//     8,
//     'hello',
//     12,
//     -10,
//     ['how', 'are', 'the', 2],
//     'of',
//     ['iu', 2],
//     'well',
//     2,
//     65,
//     'good',
//     2,
//     2678,
//     'be',
//     true,]
// const check4 = (el, i, arr) =>{typeof el !== 'number' && i % 2 !== 0 }
// console.log(reject(e,check4));
