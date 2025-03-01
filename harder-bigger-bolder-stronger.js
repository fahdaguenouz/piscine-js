export function generateLetters(){
    let size=11
    let alphbet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0;i<120;i++){
        const div=document.createElement('div')
        let num=Math.floor(Math.random()*26)
        div.textContent=alphbet[num]
        console.log(num);
        document.body.appendChild(div)
        div.style.fontSize=`${size+i}px`
        if(i<40){
            div.style.fontWeight="300"
        }else if(i>=40 &&i<80){
            div.style.fontWeight="400"
        }else{
            div.style.fontWeight="600"
        }
    }

}