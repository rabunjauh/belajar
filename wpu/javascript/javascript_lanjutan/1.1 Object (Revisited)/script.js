// Cara untuk membuat object pada javascript
// 1. Object Literal 
// MUDAH UNTUK MEMBUAT 1 BUAH OBJECT
// PROBLEM: TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK
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
// PROBLEM: MASIH TERJADI DUPLIKASI / TIDAK EFEKTIF DI PENGGUNAAN MEMORY
// PERBAIKI
// METHOD DI KELUARIN DARI FUNCTION mahasiswa
// buat object literal
// MASIH ADA PROBLEM: SETIAP KITA MEMBUAT METHOD BARU DI OBJECT LITERAL
// HARUS DI BUAT JUGA DI DALAM FUNCTION MAHASISWA
// PERBAIKI: PAKAI Object.create()
// hanya butuh Mahasiswa tidak butuh methodMahasiswa (kerja 2 kali)
const methodMahasiswa = {
    makan: function (porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }
}

// function mahasiswa(nama, energi){
    // let mahasiswa = {};
    // PERBAIKI
    // let mahasiswa = Object.create(methodMahasiswa);
    // buat properti isi dengan variabel dari argument
    // mahasiswa.nama = nama;
    // mahasiswa.energi = energi;
    // PERBAIKI
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    

    // buat method 
    // mahasiswa.makan = function (porsi){
    //     this.energi += porsi;
    //     console.log(`halo ${this.nama}, selamat makan`);
    // }

    // mahasiswa.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`halo ${this.nama}, selamata bermain`);
    // }

//     return mahasiswa;
// }

// instance object
// let mahasiswa1 = mahasiswa('Mahasiswa1', 10);

// 3. Constructor Function (Prototype)
// function Mahasiswa(nama, energi){
    // dibelakang layar
    // let this = Object.create(Mahasiswa.prototype);
    // this.nama = nama;
    // this.energi = energi;
    // dibelakang layar
    // return this;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
// }


// instance object
// let mahasiswa1 = new Mahasiswa('Mahasiswa1', 10);

// versi class
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan`;
    }
    
    main (jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain`;
    }
    
    tidur (jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur`;
    }
}

let mahasiswa1 = new Mahasiswa('Mahasiswa1', 10);

// 3. Constructor Function 
// function Mahasiswa(nama, energi){
    // buat properti isi dengan variabel dari argument
    // this.nama = nama;
    // this.energi = energi;

    // buat method 
    // this.makan = function (porsi){
    //     this.energi += porsi;
    //     console.log(`halo ${this.nama}, selamat makan`);
    // }

    // this.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`halo ${this.nama}, selamata bermain`);
    // }
// }

// let mahasiswa1 = new Mahasiswa('Mahasiswa1', 10);
// 4. Object.create 