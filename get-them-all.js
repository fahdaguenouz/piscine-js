export function getArchitects(){
  
    
    const ar=document.getElementsByTagName("a")
    const nonar=document.getElementsByTagName("span")
       let  a=convert(ar)
        let span=convert(nonar)
    console.log(ar.length);
    console.log(a);

    return [a,span]
}
export function getClassical(){
    
    const classical=document.getElementsByClassName("classical")
    const nonclassical=document.querySelectorAll(".classical")
    console.log("lost ",nonclassical);
    let cal=convert(classical)
    let noncal=convert(nonclassical)
    console.log(cal,noncal);
    return [cal,noncal]
}
export function getActive(){
    const active=document.querySelectorAll(".classical.active")

    const nonactive=document.querySelectorAll(".classical:not(.active)")
    let act=convert(active)
    console.log(active);
    
    let non=convert(nonactive)
    console.log(active,nonactive);
    
    return [act,non]

}
export function getBonannoPisano(){
 const BonannoPisano=document.getElementById("BonannoPisano")
 const active=document.querySelectorAll(".classical.active")
 return [BonannoPisano,active]
}

function convert(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        res.push(arr[i])
    }
    return res
}