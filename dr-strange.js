function addWeek(input){
  const  myDates=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday"
   ]
   let myear=new Date("0001-01-01")
   let day=new Date(input)
   let year=Math.floor((((day-myear)/(1000*60*60*24)))%14)
   console.log(year);
   console.log(Math.floor(((year))%14));

   return myDates[(year)]
}


console.log(addWeek('0001-01-03'));
