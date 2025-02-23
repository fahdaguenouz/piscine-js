function ionOut(str){
    let regec=/(\w*t)(ion)/g
   let res=str.match(regec)||[]
   
    for(let i=0;i<res.length;i++){
        res[i]=res[i].replace(regec,'$1')
    }
    return res
}

console.log(ionOut("attention, direction"));
