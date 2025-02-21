function nasa(num){
    let res=""

    for(let i=1;i<=num;i++){
        if(i%3==0&&i%5==0){
            res+="NASA"
        }else if (i%5==0){
            res+="SA"
        }else if(i%3==0){
            res+="NA"
        }else{
            res+=i
        }
        if(i!=num){
            res+=" "
        }
    }
    return res
}

console.log(nasa(15));
