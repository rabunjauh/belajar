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
var_dump($row);
    // foreach ($row as $r) {

    //     var_dump($r->iddept);
    // }
    // echo "<br>";
    // echo "<br>";

    
    // $department = [
    //     ['1', 'ENGINEERING', '1', 'RIO', '2014-12-12 15:15:32', 'BETI', '2020-01-21 14:59:36'],
    //     ['2', 'FINANCE', '1', 'RIO', '2014-12-12 15:15:32', 'BETI', '2020-01-21 14:59:36'],
    // ];
    // var_dump($department);


    // for ($i = 0; $i < count($department); $i++) {
    //     if ()
    // }


    //  $arr1 = ['mustafa', 'wahyu', 'ichwan'];

// $arr2 =  ['mustafa', 'wahyu', 'ichwan',  'andrew'];

// $arr3 = [];
// foreach ($arr2 as $value) {
//     var_dump(in_array($value, $arr1));
//     if (!in_array($value, $arr1)) {
//         $arr3[] = $value;
//     }
// }



// var_dump($arr3);








// unset($arr1[2]);
// var_dump(array_values($arr1));

// sebelum insert pastikan data yang akan di insert belum ada di dalam database
// $arr1 = ['mustafa', 'wahyu', 'ichwan', 'andrew'];
// $arr2 = ['mustafa', 'wahyu', 'ichwan'];
// $arr3 = [];

// foreach ($arr1 as $value) {
//     if (!in_array($value, $arr2)) {
//         $arr3[] = $value;
//     }
// }
// var_dump($arr3);
// pastikan data yang ada di dalam database dan tidak ada pada data yang akan di insert harus di hapus
// $ldap = ['mustafa', 'wahyu', 'ichwan'];
// $database = ['mustafa', 'wahyu', 'ichwan', 'andrew'];
// $insert = [];
// foreach ($database as $key => $value) {
//     if (!in_array($value, $ldap)) {
//         $insert[] = $value;
//     }
// }
// var_dump($insert);


// $arr1 = [
//     [
//         "nama" => "mustafa",
//         "department" => "MIS"
//     ],
//     [
//         "nama" => "wahyu",
//         "department" => "HSE"
//     ]
// ];

// $arr2 = [];
// foreach ($arr1 as $value) {
//     array_push($arr2, $value);
// }
// var_dump($arr2);
