function longWords(arr){
   return  arr.every((e)=>e.length>5)

   
}
function oneLongWord(arr){
    return arr.some((e)=>e.length>=10)
 
}
function noLongWords(arr){
   return  arr.every((e)=>typeof e=="string"&&e.length<7)
    
}

console.log(longWords(['double', 'afford', 'coalition', 'reaction', 'persist']));
