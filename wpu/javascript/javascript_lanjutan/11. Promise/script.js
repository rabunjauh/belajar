// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=4d0132d0&s=avengers',
//     success: movies => console.log(movies)
// });


// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.response));
//         } else if (xhr.status === 404) {
//             console.log(xhr,responseText);
//         }
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=4d0132d0&s=avengers');
// xhr.send();


// fetch('http://www.omdbapi.com/?apikey=4d0132d0&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// Promise
// Object yg merepresantasikan keberhasilan / kegagalan sebuah event yg asynchronous
// dimasa yg akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji ditepati!');
//     } else {
//         reject('Ingkar Janji');
//     }
// });

// janji1
//     .then(response => console.log('OK :' + response))
//     .catch(response => console.log('NOT OK :' + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Janji ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Janji tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK :' + response))
//     .catch(response => console.log('NOT OK :' + response));
// console.log('selesai');


// promise all
// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'Avengers',
//             sutradara: 'Sutradara',
//             pemeran: 'Pemeran1, Pemeran2'
//         }])
//     }, 1000);
// })

// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Batam',
//             temp: 26,
//             kondisi: 'Cerah Berawan'
//         }])
//     }, 500);
// })

// promise biasa
// film
//     .then(response => console.log(response));

// cuaca
//     .then(response => console.log(response));

// promise all
// Promise.all([film, cuaca])
//     // .then(response => console.log(response));
//     // agar film dan cuaca disimpan dalam array berbeda
//     .then (response => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca);
//     })


