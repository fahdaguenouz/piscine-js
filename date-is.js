function isValid(date) {
    console.log(date);
    
    let datee=new Date(date)
    if ( datee == "Invalid Date"||typeof date==="string") {
        return false
        
    }
return true
}
function isAfter(firstDate,secondDate){
    if(firstDate>secondDate){
        return true
    }
    return false
}
console.log(new Date('2013-01-01'));




