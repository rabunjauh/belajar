<?php
// for ($i = 1; $i <= 10; $i++) {
//     if ($i % 2 !== 0) {
//         echo $i;
//     }
// }

// Rekursif

function deretBilGanjil($n)
{
    if ($n == 11) {
        return;
    }
    if ($n % 2 !== 0) {
        echo $n;
    }
    deretBilGanjil($n + 1);
}

deretBilGanjil(1);
