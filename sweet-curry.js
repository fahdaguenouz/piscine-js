function mult2(a){
    return function (b){
        return a*b
    }
}
function add3(a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

function sub4(a){
    return function (b){
        return function(c){
            return function (d){
                return a-b-c-d
            }
        }
    }
}
// console.log(sub4(3)(72)(-211)(99));
