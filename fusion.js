function fusion(obj1,obj2){
    let res={...obj1}
    
    for (let [key, value] of Object.entries(obj2)) {
        if (key in obj1) {  
            if (Array.isArray(obj1[key]) && Array.isArray(value)) {
                res[key] = [...obj1[key], ...value]; 
            } else if (typeof obj1[key] === "string" && typeof value === "string") {
                res[key] = obj1[key] + " " + value; 
            } else if (typeof obj1[key] === "number" && typeof value === "number") {
                res[key] = obj1[key] + value; 
            } else if (typeof obj1[key] === "object" && typeof value === "object") {
                res[key] = fusion(obj1[key], value); 
            } else {
                res[key] = value; 
            }
        } else {
            res[key] = value; 
        }
    }
    
       return res
    }