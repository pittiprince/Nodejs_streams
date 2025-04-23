// read the file in the stream and print it to the console
const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname , "./sample.txt");

const readableStream = fs.createReadStream(inputFilePath , 'utf-8');
readableStream.on('data' , (chunk)=>{
    console.log(chunk);
})

// if error occurs
readableStream.on('error' , (err)=>{
    console.log(err);
})

// if the stream is finished
readableStream.on('end' , ()=>{
    console.log("Finished reading the file");
})