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
        
        let inside=false
        let last=Array.from(circles)
        last=last[circles.length-1]
        last.style.top=e.clientY-25+"px"
        last.style.left=e.clientX-25+"px"
        let boundleft=bound.right-bound.left
        let boundtop=bound.bottom-bound.top
        

        if((bound.left<=e.clientX-25&& bound.right >= e.clientX+25 && bound.top <= e.clientY-25&& bound.bottom >= e.clientY+25  )){
            last.style.backgroundColor="red"
            box.appendChild(last)

            let maxleft=e.clientX-25
            let maxtop=e.clientY-25

             maxleft=Math.max(bound.left,maxleft)
             maxleft=Math.min(bound.right-50,maxleft)
             maxtop=Math.max(bound.top,maxtop)
             maxtop=Math.min(bound.bottom-50,maxtop)

            
            last.style.top=maxtop+"px"
            last.style.left=maxleft+"px"
            last.style.color="white"
            last.textContent=`left:${last.style.left}+top:${last.style.top}`
            inside=true
            
          
        }console.log(inside);
            // if(inside&&(e.clientY>= bound.top&&e.clientY<=bound.bottom)){
            // last.style.backgroundColor="purple"
            // if(e.clientY==Math.trunc(bound)){

            //     last.style.top=bound.top+"px"
            // }
           
          

        // }
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