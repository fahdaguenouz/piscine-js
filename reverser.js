function reverse(elem){
    let arr=[]
    let str=""
    if(typeof elem ==="string"){
        for(let i=elem.length-1;i>=0;i--){
            str+=elem[i]
        }
        return str
    }else{
        for(let i=elem.length-1;i>=0;i--){
            arr.push(elem[i])
        }
        return arr
    }
}



console.log(reverse("pouet"));
