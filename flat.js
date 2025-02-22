function flat(elem,num=1){
    let c=0
    let arr=[]
    elem.map((e,i)=>{
        console.log(Array.isArray(e));
        console.log(e);
        if(Array.isArray(e)&&c<=num){
              //  arr.push(e)
                //flat(e,num-c)
            function rec(e,num){
                e.map((elm)=>{
                 if(!Array.isArray(elem)){
                   arr.push(elm)
                   c++
                 }else{
                   rec(elem,num)
                 }
               })
            }
            }else{
                arr.push(e)

            }


    })
    return arr

}

console.log(flat([0, 1, [2, [3, [4, 5]]]],3));
