function isFriday(date){
    return date.getDay()==5
}

function isWeekend(date){
    return date.getDay()==6||date.getDay()==7
}

function isLeapYear(years){
    let year=years.getFullYear()
    if(year%4){
        return false
    }

    return true
}

function isLastDayOfMonth(date){
    var test = new Date(date.getTime()),
    month = test.getMonth();

test.setDate(test.getDate() + 1);
return test.getMonth() !== month;
}


isLastDayOfMonth(new Date('2020-02-29'))
