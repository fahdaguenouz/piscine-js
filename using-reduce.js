function adder(arr,num=0){
    return arr.reduce((e,c)=>e+c,num)
}
function sumOrMul(arr,num=0){
    return arr.reduce((e,c)=>{
        console.log(e,c);
        
        if(c%2==0){
            return e*c
        }else{
            return e+c
        }
    },num)
}
function funcExec(arr,num=0){
    return arr.reduce((e,c)=>c(e),num)

}


console.log(funcExec([
    (x) => x + 2,
    (x) => x ** 2,
    (x) => x - 7,
    (x) => `result: [${x}]`,
  ],10));
