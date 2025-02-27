const filterShortStateName = (arr) => {
    return arr.filter((e) => { return e.length < 7 })
}
const filterStartVowel = (arr) => {
    return arr.filter(Isvowel)

}
function Isvowel(str) {
    //console.log(str);

    let first = str[0].toLowerCase()
    if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
        return true
    }
    //console.log(first);
    return false
}

const filter5Vowels = (arr) => {
    return arr.filter(countVowel)
}

function countVowel(str) {
    let c = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {

            if (Isvowel(str[i])) {
                // console.log(str[i]);
                c++
            }
        }
    }
    if (c >= 5) {
        return true
    }
    return false
}

const filter1DistinctVowel = (arr) => {
    return arr.filter(distinct)
}

function distinct(str) {

    let vow = new Set();
    for (let i = 0; i < str.length; i++) {
        if (Isvowel(str[i])) {
            vow.add(str[i].toLowerCase())
        }

    }
    return vow.size === 1
}


const multiFilter = (arr) => {
    return arr.filter(str=>{
        return str.capital.length >=8 
        && !Isvowel(str.name) 
        && countone(str.tag) 
        && str.region !== "South"
    })
}


function countone(str) {
    let c = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {

            if (Isvowel(str[i])) {
                // console.log(str[i]);
                c++
            }
        }
    }
    if (c >= 1) {
        return true
    }
    return false
}
console.log(multiFilter([
    {
        tag: 'AL',
        name: 'Alabama',
        capital: 'Montgomery',
        region: 'South'
    },
    { tag: 'AK', name: 'Alaska', capital: 'Juneau', region: 'West' },
    { tag: 'AZ', name: 'Arizona', capital: 'Phoenix', region: 'West' },
    { tag: 'AR', name: 'Arkansas', capital: 'Little Rock', region: 'South' },
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'CO', name: 'Colorado', capital: 'Denver', region: 'West' },
    {
        tag: 'CT',
        name: 'Connecticut',
        capital: 'Hartford',
        region: 'Northeast',
    },
]));
