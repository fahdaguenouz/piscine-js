import {writeFile}  from 'node:fs/promises';
import { argv } from 'node:process';

let input = argv[2];


let res = input.split(" ").map((word) => {
    let mid = Math.ceil(word.length / 2);

    
    return word.slice(mid) + word.slice(0, mid);
}).join(" ");

writeFile('verydisco-forever.txt', res, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});