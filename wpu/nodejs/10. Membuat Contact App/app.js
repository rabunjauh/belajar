const yargs = require('yargs');
const contacts = require('./contacts');


// yargs.command('add', 'Menambahkan contact baru', 
//     () => {},
//     (argv) => {
//         console.log(argv.nama);
//     }); 

//     yargs.parse();


yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'No HP',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    }
}).demandCommand();

// menampilkan daftar semua nama contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama',
    handler() {
        contacts.listContact();
    }
});

// menampilkan detail contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
});

// Menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
});

yargs.parse();




















// const contacts = require('./contacts');
// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan nama anda: ');
//     const email = await contacts.tulisPertanyaan('Masukkan email anda: ');
//     const noHP = await contacts.tulisPertanyaan('Masukkan no HP anda: ');

//     contacts.simpanContact(nama, email, noHP);
// }

// main();

