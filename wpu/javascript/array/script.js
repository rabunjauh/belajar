// membuat array

// var arr = ["a", 1, true];

// menambah isi array
// var arr = [];

// arr[0] = "array1";
// arr[1] = "array2";
// arr[2] = "array3";
// arr[3] = "array4";

// console.log(arr);

// menghapus array (merubah nilai array menjadi undefined)
// var arr = ["array 1", "array 2", "array 3"];

// arr[1] = undefined;

// console.log(arr);

// menampilkan isi array
// var arr = ["array 1", "array 2", "array 3"];

// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i] + "(isi array ke:" + (i+1)+")");
// }

// method pada array
// length
// join



// console.log(arr.join("-"));

// push
// bisa menambahkan beberapa element array sekaligus di belakang
// arr.push('array 4');

// pop
// hanya bisa menghapus 1 element dibelakang
// arr.pop();

// unshift
// menambahkan element array di awal
// arr.unshift('array 5');

// shift
// menghilangkan element array di awal
// arr.shift();

// var arr = ["array 1", "array 2", "array 3", "array 4"];
// splice
// splice(indexAwal, maudihapusBerapa, elemenBaru1, elemenBaru2, ...)

// arr.splice(2, 0, 'array 6');

// console.log(arr);
// slice
// slice(awal, akhir)
// array lama tidak dihapus

// var arr2 = arr.slice(1,3);

// console.log(arr2);

// forEach
var angka = [1,2,3,4,5,6,7,8];
for( var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

angka.forEach(function(e){
    console.log(e);
})

// arr.forEach(function(e, i){ // e, elemen, i = index 
//     console.log(e, i);
// });

// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2;
// })

// console.log(angka2);

// short
// var angka = [1,8,2,3,4,6,7,5];
// console.log(angka.sort());











