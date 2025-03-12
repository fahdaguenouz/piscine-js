
import { writeFile } from "node:fs/promises";
import { readFile } from "node:fs/promises"
import {argv} from "node:process"
import { Buffer } from 'node:buffer'

let file = argv[2]
let type =argv[3]
let output=argv[4];

//let content=await readFile(file,"hex")
try {
    let content = await readFile(file, "utf8");

    if (type === "encode") {
        // Encode text to hexadecimal
        const hexContent = Buffer.from(content, 'utf8').toString('base64');
        
        if (output === undefined) {
           await  writeFile("cypher.txt", hexContent);
        } else {
           await  writeFile(output, hexContent);
        }
    } else if (type === "decode") {
        // Decode hexadecimal to text
        try {
            const decodedContent = Buffer.from(content, 'base64').toString('utf8');
            
            if (output === undefined) {
                await  writeFile("clear.txt", decodedContent);
            } else {
               await  writeFile(output, decodedContent);
            }
        } catch (error) {
            console.error("Error decoding hexadecimal content:", error.message);
       
        }
    }
} catch (error) {
    console.error("Error:", error.message);
   
}