const fs = require('fs');

fs.writeFile("test.txt", "Second line", (err) => {
    if(err) console.error(err);
    else console.log("File created");
});

fs.appendFile("test.txt", "Second line", (err) => {
    if(err) console.error(err);
    else console.log("Appended");
}); 

fs.rename("test.txt", "script.txt", (err) => {
    if(err) console.error(err);
    else console.log("Renamed file")
});

fs.copyFile("script.txt", "./gen/copy.txt", (err) => {
    if(err) console.error(err);
    else console.log("Copied the file")
});

fs.unlink("./gen/copy.txt", (err) => {
    if(err) console.error(err);
    else console.log("Deleted file")
})

fs.rm("./test", {recursive :true}, (err) => {
    if(err) console.error(err);
    else console.log("Removed folder")
})

fs.readFile("script.txt", (err, data) => {
    if(err) console.error(err);
    else console.log(data)
})