function sign(num){
    if(num>0){
        return 1
    }else if(num<0){
        return -1
    }
    return 0
}

function sameSign(n1,n2){
    if(n1>0&&n2>0||n1<0&&n2<0||n1==0&&n2==0){
        return true
    }
    return false 
}