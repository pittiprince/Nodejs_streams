# Node.js Streams - Learning Summary

This repository documents my understanding and hands-on experience with Node.js Streams, focusing on:

- **Readable Streams**
- **Writable Streams**
- **Transform Streams**

## 🌊 What Are Streams?

Streams are a powerful concept in Node.js used to handle reading/writing files, network communications, or any kind of end-to-end data exchange efficiently and asynchronously.

---

## 📖 Topics Covered

### 1. Readable Streams
- Used to **read data** from a source.
- Implemented using the `Readable` class from the `stream` module.
- Common usage: Reading files, HTTP requests, process.stdin

**Example:**

```js
const fs = require('fs');

const readable = fs.createReadStream('input.txt', 'utf-8');

readable.on('data', chunk => {
  console.log('Received:', chunk);
});



## 🟠 2. Writable Streams

Used to **write data** to a destination.

### ✅ Key Concepts:
- Use `.write(chunk)` to write data.
- `.end()` closes the stream.
- Common examples: `fs.createWriteStream`, `process.stdout`.

### 💻 Example:

```js
const fs = require('fs');

const writable = fs.createWriteStream('output.txt');

writable.write('Hello from Writable Stream!\n');
writable.end('This is the end of the stream.');
```

---

## 🔵 3. Transform Streams

A **duplex stream** used to modify or transform the data as it passes through.

### ✅ Key Concepts:
- Implements both readable and writable interfaces.
- Uses the `.transform()` function to change the data.

### 💻 Example:

```js
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Pipe: stdin → transform → stdout
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
```

---

## 🔧 Use-Cases Practiced

- ✅ Read a large file and log its content chunk-by-chunk.
- ✅ Write logs to a file using a writable stream.
- ✅ Build a real-time text transformer using `Transform` streams.
- ✅ Pipe readable → transform → writable streams.
