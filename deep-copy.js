function deepCopy(value){
let res 
    if(Array.isArray(value)){
        res=[]
        value.forEach((e)=>{
            if(Array.isArray(e)){
              res.push(deepCopy(e))
            }else{
                res.push(e)
            }
        })
    }else{
        res={...value}
    }
    return res
}