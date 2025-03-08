function debounce(func , wait){
    let timeout
    return function excu(...args){
        const later=()=>{
            func(...args)
        }
        clearTimeout(timeout);
        //timeout=setTimeout(()=>func(...args))
        timeout=setTimeout(later,wait)
    }

}

function opDebounce(func,wait, leading=false){
    let timeout;
    //let lastCallTime = 0;

    
    return function(...args) {
 

        const later=()=>{
            timeout=null
            if(!leading){
                func.apply(this,args)
            }
        }
     // const now = Date.now();
     // const shouldCallNow = leading && (now - lastCallTime > wait);
     // console.log(shouldCallNow,leading,(now - lastCallTime > wait));
      
      //lastCallTime = now;
        let call =leading&&!timeout
      clearTimeout(timeout);
      timeout=setTimeout(later,wait)
        if(call){
            func.apply(this,args)
        }
    //  if (shouldCallNow) {
    //    console.log("now");

    //    func.apply(this, args);
    //  } else {
    //    console.log("later");
    //    timeout = setTimeout(() => {
    //      func.apply(this, args);
          
    //      lastCallTime = 0; 
    //    }, wait);
    //   /}
    };
}






// function logClick(id) {
//     console.log(`Button ${id} clicked at ${new Date().toLocaleTimeString()}`);
//   }
  
//   // Create debounced functions
//   const normalDebounce = opDebounce(logClick, 1000,  false );
//   const leadingDebounce = opDebounce(logClick, 1000, true );
  
//   // Simulate button clicks
//   console.log("NORMAL DEBOUNCE (trailing):");
//   normalDebounce("koko",1);  // Nothing happens immediately
//   // After 1000ms: "Button 1 clicked at 12:00:01"
  
//   console.log("LEADING DEBOUNCE:");
//   leadingDebounce(2);  // Immediately: "Button 2 clicked at 12:00:00"
//   leadingDebounce(3);  // Nothing happens (ignored during wait period)
//   // No further execution after wait period