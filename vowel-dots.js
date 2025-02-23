let vowels=/[a|e|i|u|o]/gi
function vowelDots(str){
    let res=""

    for(let i=0;i<str.length;i++){
        if(str[i].match(vowels)){
            res+=str[i]
            res+="."
        }else{
            res+=str[i]
        }
    }
 return res
}

console.log(vowelDots("fahd"));
