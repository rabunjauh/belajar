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
// fs.readFile('data/tes.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan no HP anda: ', (noHP) => {
        const contact = {
            nama,
            noHP,
        };

        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Terimakasih telah memasukkan data');
        rl.close();
    });
});

