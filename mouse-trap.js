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
        
        // let inside=false
        let last=Array.from(circles)
        last=last[circles.length-1]
        last.style.top=e.clientY-25+"px"
        last.style.left=e.clientX-25+"px"
        // let boundleft=bound.right-bound.left
        // let boundtop=bound.bottom-bound.top
        

        if (!last.parentNode.classList.contains("box")) {
            last.style.top = e.clientY - 25 + "px";
            last.style.left = e.clientX - 25 + "px";

            if (bound.left <= e.clientX - 25 && bound.right >= e.clientX + 25 && bound.top <= e.clientY - 25 && bound.bottom >= e.clientY + 25) {
                box.appendChild(last);
                last.style.backgroundColor = "var(--purple)";

                let maxLeft = Math.max(bound.left + 25, e.clientX - 25);
                let maxTop = Math.max(bound.top + 25, e.clientY - 25);

                maxLeft = Math.min(bound.right - 25, maxLeft);
                maxTop = Math.min(bound.bottom - 25, maxTop);

                last.style.top = (maxTop - 25) + "px"; 
                last.style.left = (maxLeft - 25) + "px"; 
            }
        } else { 
            let boxLeft = bound.left ;
            let boxTop = bound.top ;
            let boxRight = bound.right - 50;
            let boxBottom = bound.bottom -50;

            let circleLeft = Math.max(boxLeft, Math.min(e.clientX - 25, boxRight));
            let circleTop = Math.max(boxTop, Math.min(e.clientY - 25, boxBottom));

            last.style.top = circleTop + "px";
            last.style.left = circleLeft + "px";
        }
    })
}
export function setBox(){
    let box=document.createElement("div")
    box.className="box"

   document.body.appendChild(box)
}