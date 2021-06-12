// Destructuring Variable / Assignment

// Destructuring Array

// cara biasa
// const perkenalan = ['Halo', 'nama', 'saya', 'Mustafa'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(salam);
// console.log(nama);

// cara desctructuring assignment
// const [salam, satu, dua, nama] = perkenalan;
// console.log(dua);
// console.log(nama);


// skipping items / elements
// const [salam, , , nama] = perkenalan;
// console.log(satu); //satu diskip sehingga not defined
// console.log(nama);


// swap items / element
// let a = 1;
// let b = 2;
// // cara biasa
// console.log(a);
// console.log(b);
// let c = 0;
// c = 1;
// a = 2;
// b = c;
// console.log(a);
// console.log(b);

// cara desctructuring assignment
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// return value pada function
// cara biasa
// function coba(){
//     return [1, 2];
// }

// const a = coba()
// console.log(a[0]);

// cara destructuring assignment
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);


// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5]; //angka 1 akan masuk ke a 2, 3, 4, 5 akan masuk ke array values
// console.log(a);
// console.log(values);


// Destructuring Object
// const mhs = {
//     nama: 'Mustafa',
//     umur: 36
// }

// const {nama, umur} = mhs; //nama variable hrs sesuai dengan nama property object
// console.log(nama);

// tanpa melakukan deklarasi object
    // ({nama, umur} = {
    //     nama: 'Mustafa',
    //     umur: 36
    // });
    // console.log(nama);

// 1 baris
// ({nama, umur} = {nama: 'Mustafa', umur: 36}); 
// console.log(nama);
// console.log(umur);

// assign ke variable baru
// const mhs = {
//         nama: 'Mustafa',
//         umur: 36
//     }
    
// const {nama: n, umur: u} = mhs; //nama variable hrs sesuai dengan nama property object
// console.log(n);
// console.log(u);


// memberikan default value
// const mhs = {
//         nama: 'Mustafa',
//         umur: 36
//     }
 

// const {nama, umur, email = 'email@default.com'} = mhs;// jika didalam deklarasi object tidak ada property email akan menampilkan default email namun jika didalam object ada property email maka akan menampilkan property object
// console.log(nama);
// console.log(umur);
// console.log(email);


// Rest Parameter
// const mhs = {
//     nama: 'Mustafa',
//     umur: 36,
//     email: 'mustafa@gmail.com'
// }


// const {nama, ...value} = mhs;// jika didalam deklarasi object tidak ada property email akan menampilkan default email namun jika didalam object ada property email maka akan menampilkan property object
// console.log(nama); //mengembalikan string
// console.log(value); //mengembalikan object


// Mengambil field pada object setelah dikirim sebagai parameter untuk function
// cara biasa
// const mhs = {
//     id: 123,
//     nama: 'Mustafa',
//     umur: 36,
//     email: 'mustafa@gmail.com'
// }

// function getIdMhs(mhs){
//     return mhs.id;
// }

// console.log(getIdMhs(mhs));

// cara destructuring assignment
// const mhs = {
//         id: 123,
//         nama: 'Mustafa',
//         umur: 36,
//         email: 'mustafa@gmail.com'
//     }

// function getIdMhs({id}){
//     return id;
// }

// console.log(getIdMhs(mhs));
