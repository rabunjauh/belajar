// Rest Parameter
// posisi rest parameter harus diakhir parameter 
// berbentuk array berbeda dengan arguments yg bukan array
// arguments bisa diconvert ke array menggunakan Array.from(arguments)
// function myFunct(a, b, ...myArgs) {
//     console.log(myArgs);
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }

// console.log(myFunct(1, 2 , 3 , 4, 5));

// menjumlahkan 
// menggunakan cara biasa
// function jumlahkan(...angka) {
//     let total = 0;
//     for (const a of angka) {
//         total += a;
//     }
//     return total;    
// }

// console.log(jumlahkan(1,2,3,4,5));

// menggunakan higher order function reduce
// function jumlahkan(...angka) {
//     return angka.reduce((acc, currVal) => acc + currVal);   
// }

// console.log(jumlahkan(1,2,3,4,5));


// Array destructuring
// const kelompok1 = ['Ketua', 'Wakil Ketua', 'anggota1', 'anggota2', 'anggota3'];

// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'project manager',
//     frontend1: 'frontend1',
//     frontend2: 'frontend2',
//     backend: 'backend',
//     ux: 'ux',
//     devops: 'devops'
// }

// const {pm, ...myTeam} = team;
// console.log(pm);
// console.log(myTeam);

// filtering
function filterByType(type, ...values) {
    return values.filter(v => typeof v === type);
}

// argument pertama merupakan typedata dari parameter berikutnya
console.log(filterByType('boolean', 1,2,'Mustafa', false, 10, true, 'Nama2'));

