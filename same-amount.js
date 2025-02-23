function sameAmount(str,reg1,reg2) {
    let r1=new RegExp(reg1,"g")
    let r2=new RegExp(reg2,"g")
    let arr=str.match(r1)||[]
    let arr2=str.match(r2)||[]

    if((arr == null && arr2 == null) ){
        return false
    }
    return arr.length === arr2.length
}

// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`


//  console.log( sameAmount(data, /q /, /qqqqqqq/));
 
