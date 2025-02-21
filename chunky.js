function chunk(arr,num){
    let res=[]
    let sub=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<num;j++){
            if(!arr[i]){
                break
            }
            sub.push(arr[i])
            i++
        }

        res.push(sub)
        sub=[]
        i--
    }
    return res

}

console.log(chunk(['a', 'b', 'c', 'd'],2));
