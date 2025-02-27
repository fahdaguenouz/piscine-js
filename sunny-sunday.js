function sunnySunday(date){
    const  myDates=[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
       ]
       let myear=new Date("0001-01-01")
       let day=new Date(date)
       let year=Math.floor((((day-myear)/(1000*60*60*24)))%6)
       console.log(day-year);
       console.log(Math.floor(((year))%6));
    
       return myDates[(year)]
}


console.log(sunnySunday(new Date('0001-01-15')))
