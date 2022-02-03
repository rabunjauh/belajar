<?php
// for ($i = 1; $i <= 20; $i++) {
//     $faktorPembagi = 0;
//     for ($j = 1; $j <= $i; $j++) {
//         if ($i % $j == 0) {
//             $faktorPembagi++;
//         }
//     }
//     if ($faktorPembagi == 2) {
//         echo $i;
//     }
// }

// Rekursif
// function rekursifBilPrima($n)
// {
//     if ($n == 21) {
//         return;
//     }

//     $a = 0;
//     if (faktorPembagi($a) == 2) {
//         echo $n;
//     }

//     // rekursifBilPrima($n + 1);
// }


// rekursifBilPrima(1);

// $a = 0;
// $n = 13;
// faktorPembagi(1, $a, $n);
// function faktorPembagi($i, $a, $n)
// {
//     if ($i == $n) {
//         return;
//     }


//     faktorPembagi($i + 1, $a, $n);
// }


function loop1($i)
{
    // loop2(1, $i);

    if ($i == 3) {
        return;
    }
    echo $i;
    loop1($i + 1);
}

loop1(1);

function loop2($j,  $i)
{
    if ($j == $i) {
        return;
    }

    echo $i;
    loop2($j + 1, $i);
}
