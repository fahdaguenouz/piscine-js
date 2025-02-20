const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

function arrToSet(arr) {
    let set = new Set()
    arr.map((e) => {
        set.add(e)
    })
    return set
}
function arrToStr(arr) {
    let str = ""
    arr.map((e) => {
        str += e
    })
    return str
}
function setToArr(set) {
    let arr = []
    set.forEach((e) => {
        arr.push(e)
    });
    return arr
}
function setToStr(set) {
    let str = ""
    set.forEach((e) => {
        str += e
    })
    return str
}

function strToArr(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    return arr
}
function strToSet(str) {
    let st = new Set()
    for (let i = 0; i < str.length; i++) {
        st.add(str[i])
    }
    return st
}
function mapToObj(map) {
    let obj = {}
    map.forEach((e, i) => {
        obj[i] = e
    })
    return obj

}
function objToArr(obj) {
    let arr = []
    for (const [key, value] of Object.entries(obj)) {
        arr.push(value)
    }
    return arr
}
// function objToMap(obj){
//     let map=new Map(Object.entries(obj))
//     return map
// }

function objToMap(obj) {
    let map = new Map()
    for (const [key, value] of Object.entries(obj)) {
        map.set(key, value)
    }
    return map
}

function arrToObj(arr) {
    let obj = {}
    arr.map((e, i) => {
        obj[i] = e
    })
    return obj
}

function strToObj(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[i] = str[i]
    }
    return obj
}
function superTypeOf(data) {
    if(data instanceof Set){
        return 'Set'
    }else if (data instanceof Map){
        return 'Map'
    }else if(Array.isArray(data)){
        return 'Array'
    }else if (data ===null){
        return 'null'
    }else if(typeof data==="object"){
        return 'Object'
    }else if (typeof data ==="string"){
        return "String"
    }else if(typeof data ==="number"){
        return "Number"
    }else if(data ===undefined){
        return 'undefined'
    }else if(typeof data ==="function"){
        return 'Function'
    }

  
}


console.log(superTypeOf([]));
