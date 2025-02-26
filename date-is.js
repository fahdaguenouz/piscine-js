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

function isBefore(firstDate,secondDate){
    if(firstDate<secondDate){
        return true
    }
    return false
}

function isFuture(date){
    let now=new Date()
    if(isValid(date)&&(date-now)>0){
        return true
    }
    return false
}

function isPast(date){
    let now=new Date()
    if(isValid(date)&&(date-now)<0){
        return true
    }
    return false
}

console.log(new Date('2013-01-01'));




