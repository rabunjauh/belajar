// function init(){
    // let nama = 'Nama';
    // function tampilNama(nama){
        // return function(nama) {
        // variabel nama akan menggunakan variabel didialam(bukan closure)
        // let nama = 'nama2';
        // console.log(nama);
    // }
    // tampilNama();
    // console.log(tampilNama);
    // console.dir(tampilNama);
    // return tampilNama;
// }
// init();
// let panggilNama = init();
// panggilNama('Nama1');

// FACTORY FUNCTION 
// function ucapkanSalam (waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// // menjalankan outer functionnya
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// // jalankan inner function nya
// selamatPagi('Namo');
// selamatSiang('Nami');

// PRIVATE METHOD
// let add = function () {
//     // variable counter bersifat private karena berada di dalam scope function
//     // sehingga walaupun di luar function add ada variabel counter lain tidak akan merubah isi counter private
// karena nilai variable counter dipertahankan karena closure 
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// MENGGUNAKAN IMMEDIATELY INVOKE FUNCTION
// let add = (function () {
//         let counter = 0;
//         return function () {
//             return ++counter;
//         }
// })();

// // variable counter dibawah tidak akan mengganggu function add
// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());

let i = 51;
console.log(`${(i <= 50) ? 'gagal' : 'lulus'}`);

