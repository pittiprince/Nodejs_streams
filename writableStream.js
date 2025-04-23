// agenda : Read Data from a sample file and instead of first loading the entire file into memory, we will use a writable stream to write the data to a new file.

const fs  = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'sample.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

const ReadableStream = fs.createReadStream(inputFilePath, 'utf-8');
ReadableStream.pipe(fs.createWriteStream(outputFilePath))
  .on('finish', () => {
    console.log('Data has been written to output.txt');
  })
  .on('error', (err) => {
    console.error('Error writing to file:', err);
  });