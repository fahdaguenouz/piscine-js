// function sums(num,){
//     let arr=[]
//     let res=[]
//     let t=[]
//     let c=1
//     if(c==1){
//         for(let i=0;i<num;i++){
//             arr.push(c)
//         }
//         res.push(arr)
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===1&&arr[i+1]===1&&i<arr.length){
//             t.push(arr[i]+arr[i+1])
//             i++
//         }else{
//             t.push(arr[i])
          
//         }
//     }
//     res.push(t)
//     t=[]


//      return res
// }
function sums(num) {
    const res = [];

    function partition(n, max, current) {
        if (n === 0 && current.length > 1) {
            current.sort()
            res.push(current);
            return;
        }
        for (let i = Math.min(n, max); i > 0; i--) {
            partition(n - i, i, [...current, i]); 
        }
    }

    if (num > 1) {
        partition(num, num, []); 
    }

    return res.reverse();
}
console.log(sums(4));
