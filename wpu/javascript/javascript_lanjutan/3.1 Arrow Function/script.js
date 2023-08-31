// Function Expression
// const tampilNama = function (nama) {
//     return `halo ${nama}`;
// }
// console.log(tampilNama('Nama'));

// Arrow function adalah versi lebih ringkas dari function expression
// const tampilNama = (nama) => {
//     return `halo ${nama}`;
// }

// console.log(tampilNama('Nama'));

// Untuk 2 Parameter
// const tampilNama = (waktu, nama) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('pagi', 'nama'));

// versi lebih ringkas tanpa tanda kurung pada parameter jika
// hanya ada 1 parameter dan jika isi nya hanya return
// tidak perlu di tulis return nya dan kurung kurawal (curly brackets / "{}")
// disebut implisit return
// const tampilNama = nama => `halo ${nama}`;

// console.log(tampilNama('Nama'));

// function tanpa parameter wajib menggunakan parentheses / "()"

// const tampilNama = () => 'Hello Worlds';
// console.log(tampilNama());

// Menghitung jumlah huruf dalam array
let mahasiswa = ["Mahasiswa1", "Mahasiswa2", "Mahasiswa3"];
// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// memetakan sebagai object: curly brackets / "{}" harus di kurung menggunakan parentheses / "()"

let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);
console.table(jumlahHuruf);
