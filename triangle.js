function triangle(str,num){
    let res=""
    for(let i=1;i<=num;i++){
       res+= str.repeat(i)
        if(i!=num){
            res+="\n"
        }
    }
return res
}

console.log(triangle("*",5));
