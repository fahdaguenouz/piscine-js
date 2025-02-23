function letterSpaceNumber(str){
    let regex=/\w\s\d{1}\b/g;
    return str.match(regex)||[]
}

console.log(letterSpaceNumber('example 1, example 20'))