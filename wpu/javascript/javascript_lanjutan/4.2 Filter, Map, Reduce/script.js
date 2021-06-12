const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// menggunakan looping
// keyword variable const bisa dipakai utk modify isi array
// keyword variable const tidak bisa digunakan jika type data nya berubah
// const newAngka = [];
// for (i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

// filter
// mencari angka lebih besar sama dengan 3

// function expression
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// Arrow Function
// const newAngka = angka.filter(a => a >= 3);

// map
// kalikan semua angka dengan 2

// Function Expression
// const newAngka = angka.map(function (a) {
//     return a * 2;
// });

// Arrow Function
// const newAngka = angka.map(a => a * 2);

// reduce
// jumlahkan seluruh elemen pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9

// Function Expression
// const newAngka = angka.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// });

// Arrow Function
//   const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan
// const hasil = angka.filter(a => a > 5) //8,9,9
//     .map(a => a * 3) //24, 27, 27
//     .reduce((acc, cur) => acc + cur); //78

// console.log(hasil);