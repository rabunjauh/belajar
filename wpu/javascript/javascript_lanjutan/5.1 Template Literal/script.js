// Template Literal
// `string text`
// Menggunakan back tick (``)




// Multi-line String
// `string text baris 1
// string text baris 2
// string text baris 3`




// Embedded Expression 
// `string text ${expression} string text`
// const nama = 'Nama 1';
// let umur = 36;

// tanpa template literal
// console.log('Halo, nama saya '+ nama +', dan saya '+ umur +' tahun');

// menggunakan template literal
// console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun`);

// expression function
// console.log(`${alert('halo')}`);

// ternary operator
// const x = 10;
// console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`)


// HTML Fragments 
// const mhs = {
//     nama: 'Mahasiswa 1',
//     umur: 36,
//     nrp: '1234566',
//     email: 'mahasiswa1@gmail.com'
// };

// Menampilkan di HTML tanpa HTML Fragments
// let el = '';
// el += '<div class="mhs">';
// el += '<h2>' + mhs.nama + '</h2>';
// el += '<span class="nrp"' + mhs.nrp + '</span>';
// el += '</div>';

// Menampilkan di HTML menggunakan HTML Fragments
// let el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);


// Expression Interpolation
// let a = 10;
// let b = 15;

// tanpa template literal
// console.log('Jika a = 10 dan b = 15, maka hasil penjumalahannya adalah :' + (a + b) + ', bukan ' + (2 * a + b));

// menggunakan template literal
// console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);



// Tagged Template 





// tag `string text ${expression} string text`
