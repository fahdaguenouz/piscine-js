function multiply(a,b){
    let neg=false
    let res =0
   if(a==0||b==0){
    return 0
   }
    if(a<0&&b>0){
         a =-a
         neg=true
    }else if(a>0&&b<0){
        b=-b
        neg=true
    }else if(a<0&&b<0){
        a=-a
        b=-b
    }
        for(let i=0;i<a;i++){
            res+=b
        }
        if(neg){
            res=-res
        }
    return res 
}

function divide(a,b){
    let res=0
    let neg=false
    if(b<0&&a>0){
        b=-b
        neg=true
    }else if(a<0&&b>0){
        a=-a
        neg=true
    }else if(a<0&&b<0){
        a=-a
        b=-b
        
    }

    for(let i=0;i<a;i++){
        if(multiply(b,i)<=a){
            res=i
        }
    }
    if(neg){
        res=-res
    }
    return res 
}



function modulo(a,b){
    let res=0
    let div=divide(a,b)
    let num=multiply(div,b)
    res=a-num
    return res

}

console.log(modulo(7,2));
