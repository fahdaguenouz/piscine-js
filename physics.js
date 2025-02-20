function getAcceleration(obj){
   
    if(obj.f!=null && obj.m!=null){
      return  obj.f/obj.m
    }else if (obj.Δv!=null && obj.Δt!=null){
        return obj.Δv/obj.Δt
    }else if(obj.t!=null &&obj.d!=null){
        return (2*obj.d)/(obj.t**2)
    }else{
        return "impossible"
    }
  
    
}

const o={
    // f: 10,
    // m: 5,
     Δv: 100,
    // Δt: 50,
     t:2,
     d:10
  }

  console.log(getAcceleration(o));
  