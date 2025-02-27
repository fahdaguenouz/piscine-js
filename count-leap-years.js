function countLeapYears(date){
    let mydate=(new Date("0001-01-01")).getFullYear()+1
    let c=0
    let year=date.getFullYear()
    // console.log(year);
    // console.log(mydate);
    
    for(let i=mydate;i<year;i++){
        
        if((i%4===0 &&i%100!=0)||(i%400==0)){
            console.log(i,mydate,year);
            c++
        }
    }
    return c
}


console.log(countLeapYears(new Date('1664-08-09')));
