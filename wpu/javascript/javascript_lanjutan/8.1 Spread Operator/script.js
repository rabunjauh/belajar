// Spread Operator
// memecah iterables menjadi single element
// ...namaArray

// const mhs = ['mahasiswa1', 'mahasiswa2', 'mahasiswa3'];
// console.log(...mhs); // tampil mahasiswa1 mahasiswa2 mahasiswa3

// console.log(...mhs[0]); // tampil m a h a s i s w a 1

// spread operator digunakan untuk
// 1. Menggabungkan 2 / lebih buah array
// const mhs = ['mahasiswa1', 'mahasiswa2', 'mahasiswa3'];
// const dosen = ['dosen1', 'dosen2', 'dosen3'];
// const orang = [...mhs, ...dosen];
// console.log(orang); // tampil: ['mahasiswa1', 'mahasiswa2', 'mahasiswa3', 'dosen1', 'dosen2', 'dosen3']

// untuk menggabungkan 2 buah array sebenarnya bisa juga menggunakan function concat (prototype array)
// namun menggunakan spread operator lebih fleksibel karena
// kita bisa langsung menambahkan element array

// const orang = [mhs, dosen]; // tampil: [['mahasiswa1', 'mahasiswa2', 'mahasiswa3'], ['dosen1', 'dosen2', 'dosen3']];

// menggunakan concat
// console.log(mhs.concat(dosen));

// menggunakan spread operator bisa menambahkan element 'mahasiswa4'
// const mhs = ['mahasiswa1', 'mahasiswa2', 'mahasiswa3'];
// const dosen = ['dosen1', 'dosen2', 'dosen3'];
// const orang = [...mhs, 'mahasiswa4', ...dosen];
// console.log(orang); //tampil: ['mahasiswa1', 'mahasiswa2', 'mahasiswa3', 'mahasiswa4', 'dosen1', 'dosen2', 'dosen3'];


// Menduplikat Array
// Cara biasa
// const mhs = ['mahasiswa1', 'mahasiswa2', 'mahasiswa3'];
// const mhs1 = mhs;
// mhs1[0] = 'mahasiswa4';
// console.log(mhs);  
// console.log(mhs1);  
// cara ini salah karena jika element mhs diganti maka mhs1 juga berubah begitu juga sebaliknya

// cara spread operator
// const mhs = ['mahasiswa1', 'mahasiswa2', 'mahasiswa3'];
// const mhs1 = [...mhs];
// mhs1[0] = 'mahasiswa4';
// console.log(mhs);  
// console.log(mhs1);  

// memasukan element list ke dalam array
// menggunakan looping
// const liMhs = document.querySelectorAll('.mahasiswa');
// const mhs1 = [];

// for (let i = 0; i < liMhs.length; i++) {
//     mhs1.push(liMhs[i].textContent);
// }
// console.log(mhs1);

// Menggunakan spread operator
// const liMhs = document.querySelectorAll('.mahasiswa');
// // spread dulu nodeList nya menjadi array menggunakan spread operator
// const mhs1 = [...liMhs].map(m => m.textContent);
// console.log(mhs1);

// Membuat huruf membesar saat di hover
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
console.log(nama);
