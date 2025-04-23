// agenda : is readStream file pipe it into the transform stream and perform the transformation and write it into the writeStream

const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

const inputFilePath = path.join(__dirname, 'sample.txt');
const outputFilePath = path.join(__dirname, 'transofrmOutput.txt');

const readStream = fs.createReadStream(inputFilePath , 'utf-8');

// transform 
const transformStream = new Transform ({
    transform(chunk , encoding, callback) {
        const transformedChunk  = chunk.toString().toUpperCase()
        this.push(transformedChunk);
        callback();
    }
})

readStream.pipe(transformStream).pipe(fs.createWriteStream(outputFilePath)).on('finish' , ()=>{
    console.log('Transformation complete and written to output file');
}).on('error' , (err)=>{
    console.error('Error during transformation:', err.message);
})