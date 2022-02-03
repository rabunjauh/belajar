// Cetak angka

// looping
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// Rekursif
// function cetakAngka(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     return cetakAngka(n-1);
// }

// cetakAngka(5);

// FAKTORIAL
// LOOPING
// var hasil = 1;
// for (var i = 5; i >= 1; i--) {
    
//     hasil *= i;
// }
// console.log(hasil);

// REKURSIF
// function faktorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * faktorial(n-1);
// }

// console.log(faktorial(5));

// FIBONACI
// LOOPING
// let arr = [];

// let fn;
// let fn1 = 1;
// let fn2 = 0;
// arr.push(fn2);
// arr.push(fn1);
// for (let i = 1; i <= 5; i++) {
//     fn = fn1 + fn2;
//     fn2 = fn1;
//     fn1 = fn;
//     arr.push(fn);
// }

// console.log(arr);

// REKURSIF
function fn(number) {
    let fn1 = 0;
    let fn2 = 1;
    return fn1 + fn2;
}

console.log(fn(3));