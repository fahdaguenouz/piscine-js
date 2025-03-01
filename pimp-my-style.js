import {styles} from "./pimp-my-style.data.js"
export function pimp(){
const button=document.querySelector(".button")
const unpimp=document.querySelector(".unpimp")
let i=button.classList.length-1
console.log(button.classList[i-1]);

if(unpimp!=null){
  if(i===2){
    button.classList.remove("one")
    button.classList.remove("unpimp")
  }else{

      console.log("ff"+styles[i-2]);
      console.log(i);
      console.log(button.classList);
      
      button.classList.remove(styles[i-2])
      button.classList.add('unpimp')
  }
}else{ 
    if(i==styles.length-1){

        button.classList.add(styles[i])
        button.classList.add('unpimp')
       
         
        }else{
            // button.setAttribute("class",styles[i])
            //  button.className = " "+styles[i]
             button.classList.add(styles[i])

           
        }
    
     
   }


}

