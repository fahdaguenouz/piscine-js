function findExpression(num){
    let res=""
    let n=num
    const add4 ="+4"
    const mul2 ="*2"
    n=n-4
    res+=add4
    while(n>=1){
        console.log(n);
        if(n%4==0&&n>4){
            n=n-4
            res+=add4
        }else if(n%2==0){
            n=n/2
            res+=mul2
        }else if(n>4){
            n=n-4
            res+=add4
        }else if(n=1){
            return res
        }else {
            return undefined
        }
    }
    return res
}


console.log(findExpression(60));

