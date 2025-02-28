function flow(funcs){
    return function(num1,num2){

        let firstfucn=funcs[0]
        let secondFunc=funcs[1]
        return secondFunc(firstfucn(num1,num2))
    }


}
let v=flow([add,square])
console.log(v(2,3));

function add(a,b){
    return a+b
}
function square(c){
    return c*c
}
