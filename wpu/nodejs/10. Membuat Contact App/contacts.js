// Core Modules
// File System
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contact.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (simpanPertanyaan) => {
            resolve(simpanPertanyaan);
        });
    });
}

const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };
    
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih telah memasukkan data');
    rl.close();
}

module.exports = { tulisPertanyaan, simpanContact };