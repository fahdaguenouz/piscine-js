function split(str,elem){
    let arr=[]
    let res=""
    if(str===""){
        return [""]
    }
    if(elem==undefined){
        arr.push(str)
        return arr
    }
    if(elem===""){
        return [...str]
    }
    if(elem.length==1){

        for(let i=0;i<str.length;i++){
            if(str[i]===elem){
                arr.push(res)
                res=""
                i++
            }
            res+=str[i]
            if(i==str.length-1){
                arr.push(res)
            }
            if(i==str.length){
                arr.push("")
            }
        }
    }else{
            let f=elem[0]
            const l=elem.length
            for(let i=0;i<str.length;i++){
                let comp=""
                if(str[i]===f){
                    comp=str[i]
                    for(let j=0;j<elem.length-1;j++){  
                            i++
                    }
                    arr.push(res)
                    res=""
                }else{

                    res+=str[i]
                }

                
                
                if(i==str.length-1){
                    arr.push(res)
                }
               
            }
          
           
    }
    
    return arr

}


function join(arr,elem){
    let res=""
    if(elem===undefined){
        elem=","
    }
    for(let i=0;i<arr.length;i++){
        res+=arr[i]
        if(i!=arr.length-1){
            res+=elem
        }
    }
    return res
}

const str = 'ggg - ddd - b';
//const str="rrrr"

console.log(split(str," - "));
// console.log(split(str,""));
// console.log(split(str,"e"));
