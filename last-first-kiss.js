function first(ele){
    return ele[0]
}

function last(ele){
    return ele[ele.length-1]
}
function kiss(ele){
    const arr=[]
    arr[0]=last(ele)
    arr[1]=first(ele)
    return arr
}