// const fs = require('fs');

// // fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
// fs.appendFileSync('notes.txt', 'This line was appended by Node.js!')


const getNotes = require('./notes.js');

const notesToPrint = getNotes();

console.log(notesToPrint);