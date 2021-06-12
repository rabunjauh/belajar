// Konsep this pada arrow function

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Mustafa';
//     this.umur = '35';
//     this.sayHello = function () {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun `);
//     }
// }

// const mustafa = new Mahasiswa();

// Arrow Function
// Tidak semua function dirubah ke arrow function
// method bisa
// const Mahasiswa = function() {
//     this.nama = 'Mustafa';
//     this.umur = '35';
//     this.sayHello = () => {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun `);
//     }
// }

// const mustafa = new Mahasiswa();

// Object Literal

// const mhs1 = {
//     nama: 'Mustafa',
//     umur: 35,
//     // sayHello: function () {
//     //     console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun `);
//     // }
    
//     //syntax dibawah ini akan menampilkan nama dan umur undefined 
//     // arrow function tidak mengenal konsep this sehingga 
//     // tidak mencari dari lexical scope 
//     sayHello: () => {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun `);
//     }
// }



// const Mahasiswa = function() {
//     this.nama = 'Mustafa';
//     this.umur = '35';
//     this.sayHello = function () {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun `);
//     }

//     // syntax berikut akan menghasilkan Nan karena this disini bukan umur tetapi
//     // window karena function declaration terkena hoisting sehingga yg akan dicari
//     // this pada scope global yaitu window
//     // setInterval( function () {
//     //     console.log(this.umur++);
//     // }, 500);

//     // Jika menggunakan arrow function akan mencari ke lexical scope sehingga
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const mustafa = new Mahasiswa();

// Aplikasi Arrow function di dunia nyata
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});
