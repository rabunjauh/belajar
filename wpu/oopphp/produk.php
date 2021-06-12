<?php
    // awal nama class sebaiknya huruf besar
    class Produk{
         public $judul = "judul",
                $penulis = "penulis",
                $penerbit = "penerbit",
                $harga = 0;

    }

    // instance dari class Produk berbentuk object
    $produk1 = new Produk();

    // mengisi property 
    $produk1->judul = "One Piece";
    var_dump($produk1);
 echo "ok";
?>