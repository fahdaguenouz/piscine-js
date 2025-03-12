import {argv} from "node:process"
import  { readFile } from 'node:fs/promises'
import  { resolve} from 'node:path'



let file=argv[2]




try {
   // console.log(file);
    
    const filePath = resolve(file);
   // console.log(filePath);
    
    const contents = await readFile(filePath, { encoding: 'utf8' });
    //console.log(contents);
   let res= contents.split(" ").map((word) => {
        let mid = Math.floor(word.length / 2);
    
        
        return word.slice(mid) + word.slice(0, mid);
    }).join(" ");
    console.log(res);
    
  } catch (err) {
    console.error(err.message);
  }

