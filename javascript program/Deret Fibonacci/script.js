let angkaKeSatu = 0;
let angkaKeDua = 1;
const n = 5;
let deret = '0';
for(i = angkaKeDua; i <= n; i++) {
    let hasil = angkaKeSatu + angkaKeDua;
    angkaKeDua = angkaKeSatu;
    angkaKeSatu = hasil;
    deret += hasil; 
}
console.log(deret);