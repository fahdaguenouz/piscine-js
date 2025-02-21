function round(num) {
    let c = 0
    let res = 0


    if (num > 0) {

        let step = num > 1000 ? 1000 : 1
        for (let i = 1; i < num; i += step) {
            c += step
            if (num - c < 1000) step = 1
        }
        // let k=num-c
        // return k
        if (num - c >= 0.5) {
            res = c + 1
        } else if (num - c < 0.5) {
            res = c
        }
    } else if (num < 0) {
        num = -num
        let step = num > 1000 ? 1000 : 1
        for (let i = 1; i < num; i += step) {
            c += step
            if (num - c < 1000) step = 1
        }
        //   let k=num-c
        //     return k
        if (num - c > 0.5) {
            res = c + 1
        } else if (num - c <= 0.5) {
            res = c
        }
        return -res


    }

    return res

}


function ceil(num) {
    let c = 0
    let neg = false
    if (num < 0) {
        num = -num
        neg = true
    }
    let step = num > 1000 ? 1000 : 1
    for (let i = 0; i < num; i += step) {
        c += step
        if (num - c < 1000) step = 1
    }
    if (neg) {
        return -c + 1
    }
    return c
}

function floor(num) {
    let c = 0
    let neg = false
    if (num < 0) {
        num = -num
        neg = true
    }
    let step = num > 1000 ? 1000 : 1
    for (let i = 1; i <= num; i += step) {
        c += step
        if (num - c < 1000) step = 1
    }
    if (neg) {
        return -c - 1
    }
    return c
}



function trunc(num) {
    let c = 0
    let neg = false
    let n = num
    let count =0;

    if (n < 0) {
        n = -n
        neg = true
    }
    while (n>1000){
        n-=1000
        count++
    }

    while (n >= 1) {
        n -= 1
        c++
    }
    if (num>1000){
        return c+(1000*count)
    }
    if (neg) {
        return -c
    }
    return c
}












// const nums = [3.7, -3.7, 3.1, -3.1]
//const nums = [4, -3, 3, -2, 0]

// console.log(nums.map(ceil))
