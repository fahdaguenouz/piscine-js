
//const is={}
function num(n){
  if(typeof n=="number"){
    return true
  }
   return false 
}
function nan(n){
    return n != n ? true : false
}
function str(str){
    if(typeof str=="string"){
        return true 
    }
    return false
}
function bool(val) {
    if(val!==true && val!==false){
        return false
    }
    return true
  }
function undef(n){
    if(typeof n == "undefined"){
        return true
    }
    return false
}
function def(n){
    return !undef(n)
}

function arr(n){
    return Array.isArray(n)

}

function obj(n) {
    return typeof n === "object" && n !== null && !Array.isArray(n);
}
function fun(n){
    if(typeof n === "function"){
        return true 
    }
    return false 
}
function truthy(n){
    if(!n){
        return false
        }
    return true
}
function falsy(n) {
    return !n;
}



is.num=num
is.nan=nan
is.str=str
is.bool=bool
is.undef=undef
is.def=def
is.arr=arr
is.obj=obj
is.fun=fun
is.truthy=truthy
is.falsy=falsy







//console.log(is.bool(true));
