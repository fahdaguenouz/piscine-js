function pick(obj, data) {
  const res = {};
  
  if (typeof data === 'string') {
      if (obj.hasOwnProperty(data)) {
          res[data] = obj[data];
      }
  } else {
      data.forEach(key => {
          if (obj.hasOwnProperty(key)) {
              res[key] = obj[key];
          }
      });
  }
  
  return res;
}

function omit(obj, data) {
  let res = {};

  if (typeof data === "string") {
    Object.keys(obj).forEach(key => {
      if (key !== data) {
        res[key] = obj[key];
      }
    });
  } else {
      for (let key in obj) {
          if (!data.includes(key)) {  
              res[key] = obj[key];
          }
      }
  }

  return res;
}

let language= { England: 'english', Spain: 'spanish', Portugal: 'portuguese' }
console.log(omit(language,"Spain"));

