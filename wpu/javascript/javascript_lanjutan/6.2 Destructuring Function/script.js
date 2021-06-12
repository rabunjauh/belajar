// Destructuring
// cara biasa
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = kalkulasi(2,3)[0];
// const kurang = kalkulasi(2,3)[1];
// const kali = kalkulasi(2,3)[2];
// const bagi = kalkulasi(2,3)[3];

// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// cara destructuring assignment
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kurang, kali, bagi] = kalkulasi(2,3);

// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// jika menggungakan array posisi nama variable yg di destructure harus sesuai urutannya dengan array pada return function
// agar nama variable dan urutan array pada function tidak harus urutan maka return nya harus sebagai object

// function kalkulasi(a, b) {
//     return {
//         jumlah: a + b, 
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }

// const {jumlah, kurang, kali, bagi} = kalkulasi(2,3);

// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);


// Destructuring sebagai argument
// cara biasa

// const mhs1 = {
//     nama: 'Mustafa',
//     umur: 36,
//     email: 'mustafa@gmail.com'
// }

    // cara pertama kirim argument variable
    // function cetakMhs(nama, umur) {
    //     return `Halo nama saya ${nama}, saya ${umur} tahun`;
    // }
    
    // console.log(cetakMhs(mhs1.nama, mhs1.umur));

    // cara kedua kirim argument sebagai object
    // function cetakMhs(mhs1) {
    //     return `Halo nama saya ${mhs1.nama}, saya ${mhs1.umur} tahun`;
    // }

    // console.log(cetakMhs(mhs1));


//cara destructuring assignment
const mhs1 = {
    nama: 'Mustafa',
    umur: 36,
    email: 'mustafa@gmail.com',
    nilai:{
        tugas: 80,
        uts: 85,
        uas: 75
    }
}
function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
        return `Halo nama saya ${nama}, saya ${umur} tahun dan nilai tugas saya adalah ${tugas}`;
    }
    
    console.log(cetakMhs(mhs1));




