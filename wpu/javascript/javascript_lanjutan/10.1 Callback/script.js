// Calback


// Synchronous Callback
// function expression
// function halo(nama){
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// tampilkanPesan(halo);

// Anonymous function

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// tampilkanPesan(function(nama) {
//     alert(`Halo ${nama}`);
// })

// Arrow function
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));


// const mhs = [
//     {
//         "nama": "Mahasiswa 1",
//         "nrp": "111111",
//         "email": "mahasiswa1@kampus.com",
//         "jurusan": "jurusan 1",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Mahasiswa 2",
//         "nrp": "222222",
//         "email": "mahasiswa2@kampus.com",
//         "jurusan": "jurusan 2",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Mahasiswa 3",
//         "nrp": "333333",
//         "email": "mahasiswa3@kampus.com",
//         "jurusan": "jurusan 3",
//         "idDosenWali": 3
//     }
// ];

// console.log('Mulai');

// mhs.forEach(m => {
//     for(let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });

// console.log('Selesai');



// Assynchronous Callback
// Vanilla Javascript

// Function Expression & Anonymous function
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error(xhr);
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}

console.log('mulai');

function success(results){
    const mhs = (JSON.parse(results));
    mhs.forEach(m => console.log(m.nama));
};

function error(e){
    console.log(e.responseText);
}

getDataMahasiswa('data/mahasiswa.json', success, error);



// Arrow Function
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     console.log(xhr);
//     // xhr.onreadystatechange = function() {
//     //     if (xhr.readyState === 4) {
//     //         if (xhr.status === 200) {
//     //             success(xhr.response);
//     //         } else if (xhr.status === 404) {
//     //             error();
//     //         }
//     //     }
//     // }
//     // xhr.open('get', url);
//     // xhr.send();
// }

// console.log('mulai');

// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = (JSON.parse(results));
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });



// console.log('selesai');

// Jquery
// console.log('Mulai');
// $.ajax({
//     url: 'data/mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });
// console.log('Selesai');








