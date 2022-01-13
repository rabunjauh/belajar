// 2.1 Execution Context, Hoisting & Scope

// console.log(nama); //jika mengembalikan Uncaught RefferenceError: nama is not defined
// var nama = nama1; //undefined

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window


// execution phase

// console.log(sayHello());

// var nama = 'Sandhika';
// var umur = 33;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting



// var nama = 'Sandhika Galih';
// var username = '@sandhikagalih';

// function cetakURL(username) {
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL('username'));


// var nama = 'Sandhika Galih';
// var username = '@sandhikagalih';

// function cetakURL() {
//   console.log(arguments);
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL('@doddyferdiansyah'));
















// function a() {
//   console.log('ini a');

//   function b() {
//     console.log('ini b');

//     function c() {
//       console.log('ini c');
//     }

//     c();
//   }
//   b();
// }

// a();