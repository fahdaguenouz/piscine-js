function fold(arr,func,accu=0){
    
    for(let i=0;i<arr.length;i++){
        console.log(i,arr[i]);
      console.log(func(accu,arr[i]));
      accu=func(accu,arr[i])
    }
    return accu
}

function foldRight(arr,func,accu=0){
   // arr=arr.split("")
    console.log(arr);
    
    for(let i=arr.length-1;i>=0;i--){
        //console.log(i,arr[i]);
       // console.log(func(accu,arr[i]));
        accu=func(accu,arr[i])
    }
    return accu
}

function reduce(arr,func){
    let first=arr[0]
    for(let i=1;i<arr.length;i++){
        //console.log(first);
        
        console.log(func(first,arr[i]));
      first=func(first,arr[i])
    }
return first
}

function reduceRight(arr,func){
let last =arr[arr.length-1]
for(let i=arr.length-2;i>=0;i--){
    console.log(last,arr[i]);
    console.log(func(last,arr[i]));
    last=func(last,arr[i])
}
return last
}

const num1= [3, 10, 26, 0]  
const str1= ['This ', 'is ', 'a ', 'simple ', 'example']
const ifOdd = (a, b) => (b % 2 === 0 ? a + 2 : a * 2)
const concatenate = (a = '', b) => a.concat(b)
const adder = (a, b) => a + b
 const str2= 'The quick brown fox jumped over the lazy dog'
//console.log(foldRight(str2, concatenate,'This is almost understandable. '));
console.log(reduceRight(num1, adder));
