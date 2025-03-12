import { argv } from 'node:process';

// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

// let word=argv.slice(2,)
//   console.log(word);

// let res=word.map((e)=>{
// let part1=""
// let part2=""

//     if(e.length%2==0){
//         for(let i=0;i<e.length;i++){
//             if(i<(e.length/2)){
                
//                 part1+=e[i]
//             }else{
//                 part2+=e[i]
//             }
        
//         }
        

//     }else if(e.length%2!=0){
//         for(let  i=0;i<e.length;i++){
//             if(i<Math.ceil(e.length/2)){
//                 part1+=e[i]
//             }else{
//                 part2+=e[i]
//             }
            
//         }
   
//     }
//     return  part2+part1
// })

// console.log(res.join(" "));


let input = argv[2];


let res = input.split(" ").map((word) => {
    let mid = Math.ceil(word.length / 2);
   // console.log( word.slice(0,mid));
    
    return word.slice(mid) + word.slice(0, mid);
}).join(" ");

console.log(res);
