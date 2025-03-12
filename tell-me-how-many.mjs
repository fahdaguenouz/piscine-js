import {argv} from "node:process"
import { readdir } from 'node:fs/promises';
import { resolve } from "node:path"
let file=argv[2]


try{

    //let filePath=resolve(file) 
    let entries = await readdir(file)
    console.log(entries.length);
    
}catch (err) {
    console.error(err.message);
  }
