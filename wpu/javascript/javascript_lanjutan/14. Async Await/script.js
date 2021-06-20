// fungsi yang berjalan asynchronous
// menghasilkan (implisit) promise
// cara penulisannya sama seperti synchronous function (function biasa)

// const coba = new Promise(resolve => resolve('selesai'));
// console.log(coba);

// Assynchronous
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// });

// coba.then(() => console.log(coba));

// Async & Await

// function cobaPromise() {
//     return new Promise(resolve => {
//                 setTimeout(() => {
//                     resolve('selesai');
//                 }, 2000);
//             });
// }

// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }

// cobaAsync();

// Error Handling tanpa async await
// function cobaPromise() {
//     return new Promise((resolve, reject) => {
//                 const waktu = 5000;
//                 if (waktu < 5000) {
//                     setTimeout(() => {
//                         resolve('selesai');
//                     }, waktu);
//                 } else {
//                     reject('kelamaan');
//                 }
//             });
// }

// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));

// Error Handling Async Await
function cobaPromise() {
        return new Promise((resolve, reject) => {
                    const waktu = 5000;
                    if (waktu < 5000) {
                        setTimeout(() => {
                            resolve('selesai');
                        }, waktu);
                    } else {
                        reject('kelamaan');
                    }
                });
    }
    
    async function cobaAsync() {
        try {
            const coba = await cobaPromise();
            console.log(coba);
        } catch(reject) {
            console.error(reject);
        }
    }
    
    cobaAsync();