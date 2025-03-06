function fusion(obj1,obj2){
let res={...obj1}

    for(let [key,value]of Object.entries(obj2)){
        if(Array.isArray(value)&&obj1[key]){
            res[key]=[...obj1[key],...value]
        }else if(typeof value ==="string"){
            res[key]=obj1[key]+" "+value
        }else{
            res[key]=value
        }
    }

   return res
}
console.log(fusion({ str: "salem" }, { str: "" }));
