


function retry(max,callback){
    let counter=0
   
        return  async function func(...arg){
            try{
               
                counter++ 
                    return  await  callback(...arg)

            }catch(error){
                if(counter<=max){
                    return func(...arg)
                }else{
                    throw (error)
                
                }
         }
  
   
}
}
function timeout(delay,callback){
    return  async function (...arg){
        let timeoutPromise = new Promise((_, reject) => {
            setTimeout(() =>{
               return  reject(new Error('timeout'))
            } , delay);
          });
          try {
            return await Promise.race([timeoutPromise, callback(...arg)]);
          } catch (error) {
            throw error;
          }
        };
}



const tt=retry(1,()=>console.log("this"))
console.log(tt("hello"));