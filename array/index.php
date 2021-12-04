<?php
    // // $arr = ['tes1', 'tes2'];

    // // $arr['key1'] = 'value1';
    // // $arr['key2'] = 'value2';

    // $arr = [
    //     ['no', 'id employee', 'printer password'],
    //     ['333', '123', '0001'],
    //     ['444', '234', '0002']
    // ];
    // var_dump($arr);
    // // echo '<br>';
    

    // $arr2 = [];
    // // for ($i = 0; $i < count($arr); $i++) {
    // //     $arr2[]=array(
    // //         'no'=> $arr[$i][0],
    // //         'id employee' => $arr[$i][1],
    // //         'printer_password' => $arr[$i][2]
    // //     );
    // // }


    // echo '<hr>';


    // var_dump($arr2);

    $mysqli = new mysqli("localhost", "root", "", "copier");
    $sql = 'SELECT * FROM tblfile_department';
    $result = $mysqli->query($sql);
    $row = $result->fetch_all();
    foreach ($row as $r) {

        var_dump($r->iddept);
    }
    echo "<br>";
    echo "<br>";

    
    $department = [
        ['1', 'ENGINEERING', '1', 'RIO', '2014-12-12 15:15:32', 'BETI', '2020-01-21 14:59:36'],
        ['2', 'FINANCE', '1', 'RIO', '2014-12-12 15:15:32', 'BETI', '2020-01-21 14:59:36'],
    ];
    var_dump($department);


    // for ($i = 0; $i < count($department); $i++) {
    //     if ()
    // }
?>