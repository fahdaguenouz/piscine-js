function flat(elem,num=1,arr=[]){
   
   
    for(let i=0;i<elem.length;i++){
      if(Array.isArray(elem[i])&&num>0){
        
          //  console.log(elem[i]);
            
            //console.log(c);
            
             flat(elem[i],num-1,arr)
       
      }else{
       // console.log("f"+elem[i]);
        
        arr.push(elem[i])
      }
    }
  
  
return arr
}

console.log(flat([1, [2, [3], [4, [5]]]],Infinity));
