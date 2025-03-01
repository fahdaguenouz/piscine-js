export function build(amount){
    const page=document.body
    let i=1
  
    const inter=setInterval(()=>{
        if(i>=amount){
            clearInterval(inter)
        }
        const brick=document.createElement("div")
        brick.setAttribute("id",`brick-${i}`)
        brick.setAttribute("class",`brick`)

        brick.textContent=i
        page.appendChild(brick)
        if((i-1)%3===1){
            brick.setAttribute("data-foundation","true")
      
        }
        i++
    },100)
        // for(let i=1;i<=amount;i++ ){
        //     setInterval()
        // }
}

export function repair(...ids){
    for(let i=0;i<ids.length;i++){
        const repair=document.getElementById(ids[i])
        console.log(repair.hasAttribute("data-foundation"));
        
       if(repair.hasAttribute("data-foundation")){

           repair.setAttribute("data-repaired","in progress")
         const idnum=repair.textContent
       
         repair.textContent=idnum+"- in progress"
         repair.style.color="blue"

       }else{
        repair.setAttribute("data-repaired","true")
        const idnum=repair.textContent
        repair.textContent=idnum+"-repaired"
        repair.style.color="red"

       }
console.log(repair);

    }

    

}

export function destroy(){
    const bricks=document.querySelectorAll(".brick")
    const body=document.body
   
        body.removeChild(bricks[bricks.length-1])
   
    console.log(bricks[bricks.length-1]);
    
}