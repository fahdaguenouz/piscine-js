function slice(elem, start, end = elem.length) {
    let res
    let string = ""
    let arr = []

    if (typeof elem === 'string') {

        if (start >= 0 && end > 0) {

            for (start; start < end; start++) {
                string += elem[start]
            }
            res = string
        } else if (start <= 0 && end > 0) {
            let k = -start
            let c = elem.length - k
            for (c; c < end; c++) {
                string += elem[c]
            }
            res = string
        } else if (start >= 0 && end < 0) {
            let k = -end
            let c = elem.length - k
            for (start; start < c; start++) {
                string += elem[start]
            }
            res = string
        } else if (start < 0 && end < 0) {
            let s = -start
            let ss = elem.length - s
            let e = -end
            let ee = elem.length - e
            for (ss; ss < ee; ss++) {
                string += elem[ss]
            }
            res = string
        }


    } else {
        if (start >= 0 && end > 0) {

            for (start; start < end; start++) {
              
                arr.push(elem[start])
            }
            res = arr
        } else if (start <= 0 && end > 0) {
            let k = -start
            let c = elem.length - k
            for (c; c < end; c++) {
                arr.push(elem[c])

            }
            res = arr
        } else if (start >= 0 && end < 0) {
            let k = -end
            let c = elem.length - k
            for (start; start < c; start++) {
                arr.push(elem[start])

            }
            res = arr
        } else if (start < 0 && end < 0) {
            let s = -start
            let ss = elem.length - s
            let e = -end
            let ee = elem.length - e
            for (ss; ss < ee; ss++) {
                arr.push(elem[ss])

            }
            res = arr
        }

    }


    return res


}

console.log(slice('abcdef', 0, -2));
