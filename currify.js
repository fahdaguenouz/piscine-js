function currify(func){
    return function(arg){
        return function(arg2){
            return func(arg,arg2)
        }
    }
}

const mult2 = (el1, el2) => el1 * el2
const mult2Curried = currify(mult2)
console.log(mult2Curried(2)(2))
