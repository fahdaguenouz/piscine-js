import { argv } from "node:process";
import { readFile, writeFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { resolve } from "node:path";

let dir = argv[2];

try {
    let guests = await readdir(dir);

    let responses = await Promise.all(
        guests.map(async (filename) => {
          
                let content = await readFile(resolve(dir, filename), { encoding: "utf8" });
                let jsonData = JSON.parse(content);
                if (jsonData.answer === "yes") {
                    let nameParts = filename.replace(".json", "").split("_");
                    return { firstName: nameParts[0], lastName: nameParts[1] };
                }
            
        })
    );

    responses = responses.filter(guest =>  guest !== undefined); 

    let sortedGuests = responses
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map(({ firstName, lastName }, index) => `${index + 1}. ${lastName} ${firstName}`);

    await writeFile("vip.txt", (sortedGuests.length ? sortedGuests.join("\n") : ''), "utf8");
} catch (e) {
    console.log(e);
}
