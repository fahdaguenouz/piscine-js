function matchCron(cr, date) {
    let cron = cr.split(" ")
    //console.log(date.getDay());
    let res = true
    for (let i = 0; i < cron.length; i++) {
        if (cron[i] === "*") {
            continue
        } else {

            switch (i) {
                case 0:
                    res = date.getMinutes() == cron[0]
                    break
                case 1:
                    res = date.getHours() == cron[1]
                    break
                case 2:
                    res = date.getDate() == cron[2]
                    break
                case 3:
                    console.log(res, i, cron[3], date.getMonth());
                    res = date.getMonth()+1 == cron[3]
                    break
                case 4:
                    res = date.getDay() == cron[4]
                    break
                default:
                    res = false
                    break
            }
        }

    }

    return res

}

// console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
// console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')));
// console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')));

console.log(matchCron('* * * * *', new Date()));
