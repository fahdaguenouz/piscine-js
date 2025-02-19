// function words(str){
//     return str.split(" ")
// }
function words(str){
   let arr=[]
   let res=""
   for(let i=0 ;i<=str.length-1;i++){
    if(str[i]===" "){
        arr.push(res.trim())
        res=""
       
    }
    res+=str[i]

    if(i==str.length-1&&str[i]!=" "){
        arr.push(res.trim())
        }
   }
   return arr
}
function sentence(arr){
    let res =""
    arr.map((e,i)=>{
       if(i==0){
        res+=e
    }else{
           res+=" "+e
       }
    })
    return res 
}
function yell(str){
   return str.toUpperCase()

}
function whisper(str){
    return "*"+str.toLowerCase()+"*"
}
function capitalize(str){
    let res =""
    res=str.toLowerCase()
    return res[0].toUpperCase()+res.slice(1,)
    
    
}

console.log(sentence(["a","b","c"]));
