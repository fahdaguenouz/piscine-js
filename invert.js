function invert(obj){
let oo={}
    for(let [key,value]of Object.entries(obj)){
      oo[String(value)]=key
        
    }
return oo

}


