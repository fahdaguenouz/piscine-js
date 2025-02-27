function dayOfTheYear(date){
    let year=date.getUTCFullYear()
    year=year.toString().padStart(4,"0")
    let newYear=new Date(`${year}-01-01`)
    console.log(year)
    console.log(newYear,year,date);
    let res=Math.floor((date-newYear)/(1000*60*60*24))+1
    console.log(Math.floor((date-newYear)/(1000*60*60*24)));
    
    return res
}

// console.log(dayOfTheYear(new Date('1664-08-09')));
console.log(dayOfTheYear(new Date('0001-01-01')));

