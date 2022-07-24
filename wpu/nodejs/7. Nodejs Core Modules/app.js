const fs = require('fs');


// menuliskan string ke file (synch)
// try {    
//     fs.writeFileSync('test.txt', 'Hello World sync');
// } catch (e) {
//     console.log(e);
// }

// menulis string ke file (asynch)
// fs.writeFile('data/test.txt', 'Hello World async', (e) => {
//     console.log(e);
// });

// membaca isi file
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca file async
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan no hp anda: ', (noHP) => {
        const contact = {
            nama,
            noHP
        }
        const file = fs.readFileSync('data/contact.json', 'utf-8')
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
        console.log('Terimakasih telah mengisi data');
        rl.close();

    });
});