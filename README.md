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
