function indexOf(arr,elem,index=0){
    let res=-1

    for(index;index<arr.length;index++){
        if(arr[index]===elem){
           return  res= index
        }
    }
    return res
}
function lastIndexOf(arr,elem,index=arr.length-1){
    let res=-1

    //let count =arr[index]
    for(index;index>=0;index--){

        if(arr[index]===elem){
        return   res=index
        }
    }
    return res
}

function includes(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return true
        }
    }


    return false
}
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
