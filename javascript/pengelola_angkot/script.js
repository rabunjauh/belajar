var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if (penumpang.length == 0) {        
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else{
        // telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++) { 
            // jika ada kursi kosong
            if( penumpang[i] == undefined ){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if( penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada didalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }        
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function 
                return penumpang; 
            }    
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong,dan
        console.log('Angkot Kosong');
        // tidak mungkin ada penumpang turun
        // kembalikan isi array & keluar dari function
        return penumpang;
    }    
    // else
    else{
        // telusuri seluruh kursi dari awal 
        for(i = 0; i < penumpang.length; i++){
        //     jika nama penumpang sesuai
            if(namaPenumpang == penumpang[i]){
        //         hapus nama penumpang dengan mengubah namanya,
        //         menjadi undefined
                penumpang[i] = undefined;
        //         kembalikan isi array & keluar dari function 
                return penumpang;
            }    
        //     jika tidak ada nama yang sesuai 
            else if( i == penumpang.length - 1 ){
        //         tampilkan pesan kesalahannya 
                console.log(namaPenumpang + ' tidak ada didalam angkot');
        //         kembalikan isi array & keluar dari function 
                return penumpang;
            }    
        }
    }           
}