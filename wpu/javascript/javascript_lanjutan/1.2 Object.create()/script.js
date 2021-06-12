// Cara untuk membuat object pada javascript
// 1. Object Literal 
// let mahasiswa1 = {
//     nama: 'Mustafa',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }

// object literal nama variabel object tidak boleh duplikat akan muncul error 
// Uncaught SyntaxError: Identifier '' has already been declared


// let mahasiswa2 = {
//     nama: 'Mahasiswa2',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }
// 2. Function Declaration 
// function mahasiswa(nama, energi){
//     let mahasiswa = {};
//     // buat properti isi dengan variabel dari argument
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // buat method 
//     mahasiswa.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamata bermain`);
//     }

//     return mahasiswa;
// }
// instance object
// let mahasiswa1 = mahasiswa('Mahasiswa1', 10);
// 3. Constructor Function 
function Mahasiswa(nama, energi){
    // buat properti isi dengan variabel dari argument
    this.nama = nama;
    this.energi = energi;

    // buat method 
    this.makan = function (porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamata bermain`);
    }
}

let mahasiswa1 = new Mahasiswa('Mahasiswa1', 10);
// 4. Object.create 