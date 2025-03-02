export function createCircle(){
    document.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.clientX);
        console.log(e.clientY);
        const div=document.createElement("div")
        div.className="circle"
        div.style.backgroundColor="white"
        div.style.top=e.clientY-25+"px"
        div.style.left=e.clientX-25+"px"
        document.body.appendChild(div)
    })
}

export function moveCircle(){
    
    document.addEventListener("mousemove",(e)=>{
        let circles=document.querySelectorAll(".circle")
        let box=document.querySelector(".box")
        let bound=box.getBoundingClientRect()
        console.log(e.clientX,bound.left);
        
        let last=Array.from(circles)
        last=last[circles.length-1]
        last.style.top=e.clientY-25+"px"
        last.style.left=e.clientX-25+"px"
        if((bound.left<=e.clientX-25&& bound.right >= e.clientX+25 && bound.top <= e.clientY-25&& bound.bottom >= e.clientY+25  )){
            last.style.backgroundColor="red"
        }else{
            last.style.backgroundColor="white"

        }
        console.log('dsgnhugds' , bound)
    
        
        console.log(last);
        console.log(circles);

        

    })
}
export function setBox(){
    let box=document.createElement("div")
    box.className="box"

   document.body.appendChild(box)
}