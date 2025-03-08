function throttle(func,wait){
let time = false 

return function(...args){
    if(!time){
        func.apply(this,args)
        time=true
        setTimeout(()=>{
            time=false
        },wait)
        
    }
}
}

function opThrottle(func,wait,option={}){
    let time = false 
    return function(...args){
        if(!time){
            if(option.leading){
                func.apply(this,args)
            }
            time=true
            setTimeout(()=>{
                if(!option.leading){
                    func.apply(this,args)
                }
                time=false
            },wait)
            
        }
    }
}