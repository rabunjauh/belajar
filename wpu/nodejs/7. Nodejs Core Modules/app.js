// Core Modules
// File System
const fs = require('fs');

// Menuliskan string ke file secara synchronous
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara Synchronous');
// } catch(e) {
//     console.log(e);
// }


// Menuliskan string ke file secara asynchronous
// fs.writeFile('data/tes.txt', 'Hello World secara async', (err) => {
//     console.log(err);
// });

// Membaca isi file secara sync
// const data = fs.readFileSync('data/tes.txt', 'utf-8');
// console.log(data);

// Membaca isi file secara async
fs.readFile('data/tes.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})