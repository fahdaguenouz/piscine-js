import {argv} from "node:process"
import { readdir } from 'node:fs/promises';


let dir=argv[2]
try{

    let guests= await readdir(dir)
    
    let sortedGuests = guests
        .map((file) => {
            let fullname = file.split('_').join(" ").split(".json").join("").trim().split(" ");
            let lastName = fullname[1];
            let firstName = fullname[0];
            return { lastName, firstName };
        })
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
        
        sortedGuests.forEach((guest, index) => {
            console.log(`${index + 1}. ${guest.lastName} ${guest.firstName}`);
        });

}catch(e){
    console.log(e);
    
}