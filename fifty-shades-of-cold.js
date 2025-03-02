import { colors } from './fifty-shades-of-cold.data.js'
export function generateClasses() {
    let bstyle = document.createElement("style")
    for (let color of colors) {
        let cll = `.${color}{
        background: ${color};
        }`
        bstyle.textContent += " \n" + cll
        document.head.appendChild(bstyle)
    }

}
export function generateColdShades() {
    const col=colors.filter((clr)=>{
        return clr.includes("aqua")||clr.includes("blue")||clr.includes("turquoise")||clr.includes("green")||clr.includes("cyan")||clr.includes("navy")||clr.includes("purple")
    })
    for (let color of col) {
            let div = document.createElement("div")
          div.className = color
          div.textContent = color
        document.body.appendChild(div)
    }
}



export function choseShade(shade) {
   const colDiv=document.querySelectorAll("div")
   colDiv.forEach((ele)=>{
     ele.classList.replace(ele.className,shade)
   })
 

}