function interpolation(obj){

    let dis=(obj.end-obj.start)/obj.step
    let temp=obj.duration/obj.step
    
    let counter = 0;
let y=0  
  const inter = setInterval(() => {
    if (counter >= obj.step) {
      clearInterval(inter);
      return;
    }
    const x = obj.start + dis * counter;
    y += temp;
    console.log([x,y]);
    obj.callback([x, y]);
    counter++;
  }, temp);

}