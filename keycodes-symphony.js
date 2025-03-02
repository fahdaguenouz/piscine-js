
export function compose(){

    document.addEventListener("keydown",(event)=>{
        console.log("hihi",event);
        let alpha=event.key
        
        if(alpha===alpha.toLocaleLowerCase()){

            const div=document.createElement("div")
            div.className="note"
            div.textContent=alpha
            div.style.backgroundColor=`rgb(150,50,${event.keyCode})`
            document.body.appendChild(div)
            alpha=""
        }else if(alpha=="Backspace"){
            const notes=document.querySelectorAll(".note")
            console.log(notes);
           let last=convert(notes)
           document.body.removeChild(last[last.length-1])
           alpha=""
           console.log(notes);
        }else if(alpha=="Escape"){
            const notes=document.querySelectorAll(".note")
            console.log(notes);
           let last=convert(notes)
           for(let l of last){

               document.body.removeChild(l)
           }
           alpha=""
        }
    })
}

function convert(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        res.push(arr[i])
    }
    return res
}
// export function compose(){
//     document.addEventListener("keydown" , (e)=> {
//         document.body.style.backgroundColor = `rgb(5 , ${e.keyCode} , 10)`
//         console.log(e.keyCode);
        
//     })
// }