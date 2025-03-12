import {argv} from "node:process"
import { readFile, writeFile } from "node:fs/promises"
import { readdir } from "node:fs/promises"
import { resolve } from "node:path"




let dir=argv[2]
try{

    let guests= await readdir(dir)
    

    let responses = await Promise.all(
        guests.map(async (filename) => {
            let content = await readfile(join(dir, filename));
            let jsonData = JSON.parse(content);
            if (jsonData.answer !== "yes") return null;
            let nameParts = filename.replace(".json", "").split("_");
            return { firstName: nameParts[0], lastName: nameParts[1] };
        })
    );
    console.log("hhhhhhhhh"+responses);
    responses = responses.filter((guest) => guest !== null);
    let sortedGuests = responses
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map(({ firstName, lastName }, index) => `${index + 1}. ${lastName} ${firstName}`);


        await writeFile("vip.txt", (sortedGuests.length ? sortedGuests.join("\n")  : "\n"), "utf8");
        // console.log(`${index + 1}. ${guest.lastName} ${guest.firstName}`);
        

       

}catch(e){
    console.log(e);
    
}
async function readfile(filePath) {
    try {
        return await readFile(filePath, { encoding: "utf8" });
    } catch (err) {
        console.error("Error reading file:", err.message);
        return "";
    }
}