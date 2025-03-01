function flow(funcs){
    
    return function(...nums){
        let res=funcs[0](...nums)
    for(let i=1;i<funcs.length;i++){
           res=funcs[i](res)
        }
        return res
    }

}


// let v=flow([add,square])
// console.log(v(2,3));

// function add(a,b){
//     return a+b
// }
// function square(c){
//     return c*c
// }
// const sub32 = (el) => el - 32
// const mult5 = (el) => el * 5
// const div9 = (el) => el / 9
// const roundDown = (el) => Math.floor(el)

// const square = (nbr) => nbr * nbr
// const add2 = (el) => el + 2
// const mult2 = (el) => el * 2

// const addAll = (...el) =>
//   el.length === 1 ? el[0] : el[0] + addAll(...el.slice(1))

// const farenheitToCelsius = flow([sub32, mult5, div9, roundDown])
// console.log(farenheitToCelsius(32));
