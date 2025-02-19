const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

  function get(k){
    for (let key in sourceObject){
        if(key===k){
            return sourceObject[key]
        }
    }
  }

  function set(k,val){
    for (let key in sourceObject){
        if (key===k){
            sourceObject[key]=val
        }
    }
  }

console.log(sourceObject);

  console.log(set("num",25));
console.log(sourceObject);
  