function firstDayWeek(weeks, years) {

    let year = new Date("01-01-0001")
    year.setFullYear(years)
    console.log(year);
    
    let week = (weeks * 7)
    year.setDate(week - 6)
    while (year.getDay() != 1 && year.getDate() != 1) {
        year.setDate(year.getDate() - 1)
    }
    let month = year.getMonth() + 1
    let day = year.getDate()
    day = check(day)
    month = check(month)
    return day + "-" + month + "-" + years

}
function check(n) {
    if (n < 10) {
        n = '0' + n
    }
    return n
}
firstDayWeek(52, '1000')