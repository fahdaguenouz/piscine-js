// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }

  function get(k){
    return sourceObject[k]
  }

  function set(k,val){
   return sourceObject[k]=val
    
  }

// console.log(sourceObject);

 console.log(get("bool"));
// console.log(sourceObject);
  