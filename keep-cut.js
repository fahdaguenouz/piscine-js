function cutFirst(str){
    let res=""
    for(let i=2;i<str.length;i++){
        res+=str[i]
    }
    return res 
}

function cutLast(str){
    let res=""
    for(let i=0;i<str.length-2;i++){
        res+=str[i]
    }
    return res 
}

function cutFirstLast(str){
    return cutLast(cutFirst(str))
}

function keepFirst(str){
    let res=""
    if(str.length>2){
        for(let i=0;i<2;i++){
            res+=str[i]
        }
    }else{
        return str
    }
    return res 
}
function keepLast(str){
    let res=""
   if(str.length>2){
    for(let i=str.length-2;i<str.length;i++){
        res+=str[i]
    }
   }else{
    return str
   }
    return res 
}
function keepFirstLast(str){
   if(str.length>3){
    return keepFirst(str)+keepLast(str)
   }else{
    return str
   }
}

console.log(keepFirst("a"));
