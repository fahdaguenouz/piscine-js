import {colors} from './fifty-shades-of-cold.data.js'
export function generateClasses(){
    let bstyle=document.createElement("style")
    for(let color of colors){
        console.log(color);
        
        let cll=`.${color}{
        background: ${color};
        }`
       bstyle.textContent+=" \n"+cll
        document.head.appendChild(bstyle)
    }
    
}
export function generateColdShades(){

}

export function choseShade(){

}