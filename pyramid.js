function pyramid(str,num){
    let res=""
    for(let i=1;i<=num;i++){
        for(let j=1;j<=num*2-1;j++){
         if(i+j<=num){
          res+=" ".repeat(str.length)
         }else if(j-i>=num){
             break
         }else{
            res+=str
         }
        }
        if(i!=num){
            res+="\n"
        }
    }
return res
}

console.log(pyramid("*",8));
