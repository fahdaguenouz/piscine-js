function currify(func) {
    return function f(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }else{

            return (...ar) => f(...args, ...ar); 
        }
    };
}

// const mult2 = (el1, el2) => el1 * el2
// const mult2Curried = currify(mult2)
// console.log(mult2Curried(2)(2))
