// membuat object

// var mhs = {} object kosong

// Object Literal
// var mhs1 = {
//     nama : "Mustafa",
//     umur : 35,
//     ips : [3.00, 2.50, 3.20],
//     alamat : {
//         jalan : "jl. abs No. 123",
//         kota : "Batam",
//         provinsi : "Kepri"
//     }
// };

// var mhs2 = {
//     nama : "Mahasiswa2",
//     umur : 30,
//     ips : [2.00, 2.50, 3.20],
//     alamat : {
//         jalan : "jl. xyz No. 321",
//         kota : "Batam",
//         provinsi : "Kepri"
//     }
// };

// var obj = {};
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();

// this mengembalikan object yang bersangkutan

// 2. Function Declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan){
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs; 
// }

// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object Global

// var mhs3 = buatObjectMahasiswa('Mahasiswa3', '00908098', 'mahasiswa3@gmail.com', 'Teknik Perkapalan');
// var mhs4 = buatObjectMahasiswa('Mahasiswa 4', '3143211', 'mahasiswa4@gmail.com', 'Akuntansi');

// 3. Constructor <-- yang akan digunakan kedepannya
// function Mahasiswa(nama, nrp, email, jurusan){
//     var this = {};
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
//     return this;
// }

// var mhs1 = new Mahasiswa('Mahasiswa 1', '45242534', 'mahasiswa@gmail.com', 'Teknik Informatika');

// function Halo(){
//     console.log(this);
//     console.log('halo');
// }

// new Halo();
// mengembalikan object yang baru dibuat / new Halo()

// this
// jika kita membuat this pada kontek global maka this merepresentasikan window
// console.log(this); //this merepresentasikan window bisa juga ditulis console.log(window);
