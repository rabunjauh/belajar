// cara 2 membuat object
// 1 . function declaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }

// this.halo();
// this mengembalikan object global (object windows)

// 2. object literal
// var obj = {};
// obj.halo = function(){
//     console.log(this);
//     console.log(halo);
// }

// obj.halo();
// this mengembalikan object yang bersangkutan (obj)

function Halo(){
    console.log(this);
    console.log('halo');
}

new Halo();
// mengembalikan instance object / object yg baru dibuat
