/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

const fileToWrite = 'example.txt';

const text1 = "This is the new text written to file";

function fun2(err){
    if(err){
        console.log("There is some error in writing to file");
    } else{
        console.log("Successfully written to file");
    }
}

fs.writeFile(fileToWrite,text1,'utf-8',fun2);
