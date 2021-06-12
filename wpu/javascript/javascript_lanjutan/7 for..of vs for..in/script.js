// For..of
// -String
// -Array
// -Arguments / NodeList
// -TypedArray
// -Map
// -Set 
// -User-defined Iterables


// Array
// const mhs = ['Mahasiswa1','Mahasiswa2','Mahasiswa3'];

// cara looping
// for (let i = 0; i < mhs.length; i++) {
    //     console.log(mhs[i]);
    // }
    
    // forEach khusus array
    // mhs.forEach(m => console.log(m));
    
    //for..of
    // for(const m of mhs) {
        //     console.log(m);
        // }
        
// menampilkan index array
// forEach
// const mhs = ['Mahasiswa1','Mahasiswa2','Mahasiswa3'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });
    
// // for..of 
// const mhs = ['Mahasiswa1','Mahasiswa2','Mahasiswa3'];
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }


// String
// const nama = 'Mustafa';

// for(const n of nama) {
//     console.log(n);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// forEach (hanya support browser terbaru)
// liNama.forEach(n => console.log(n.textContent));

// for..of 
// for(n of liNama) {
//     console.log(n.innerHTML);
// }


// Arguments
// function jumlahAngka() {
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4 ,5));



// for..in 
const mhs = {
    nama: 'Mustafa',
    umur: 36,
    email: 'mustafa@gmail.com'
}

for (m in mhs) {
    console.log(`${m} - ${mhs[m]}`);
    // console.log(mhs[m]);
}

