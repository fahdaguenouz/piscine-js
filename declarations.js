const escapeStr='\`\\/\"\''
const arr=[4,'2']
const obj={
    str:"fahd",
    num:1,
    bool:false,
    undef:undefined
}
const nested={
    arr:[4,undefined,'2'],
    obj:{
        str:"piscine js",
        num:25,
        bool:false
    }
}
const DeepFreeze=(obj)=>{
    Object.keys(obj).forEach((p)=>{
        if(!Object.isFrozen(obj[p])){
            DeepFreeze(obj[p])
        }
    })
    return Object.freeze(obj)
}
console.log(nested);
DeepFreeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)
//console.log(nested);
