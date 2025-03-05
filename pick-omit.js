function pick(obj,data){
let res={}
    if(typeof data==="string"){
        return obj[data]
    }else{
         res=data.map((e)=>{
          res[String(e)]=  obj[e]
          return res
        })
    }
return res
}
let agent= {
    firstName: 'James',
    lastName: 'Bond',
    age: 25,
    email: 'jamesbond@hotmail.com',
  }
console.log(pick(agent,['firstName', 'lastName']));
