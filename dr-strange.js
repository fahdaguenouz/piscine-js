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
   console.log(day);
   console.log(Math.floor(((year))%14));

   return myDates[(year)]
}

function timeTravel(obj){
 
  
  //console.log(obj);
  obj.date.setHours(obj.hour)  
  obj.date.setMinutes(obj.minute)  
  obj.date.setSeconds(obj.second)  


  return obj.date
}

//console.log(addWeek('0001-01-02'));

console.log(timeTravel({
  date: new Date('2000-05-09 01:28:02'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString());
