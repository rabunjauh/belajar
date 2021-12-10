<?php

session_start();

// if (!isset($_SESSION["login"])) {
//   	header("Location: login.php");
//   	exit;
//  }  

require 'functions.php';

//pagination
//config
//tentukan jumlah data yang akan ditampilkan dalam 1 halaman
$recordPerPage = 10;
$navNo = 15;
//tentukan berapa total halaman nantinya
//cara hitung = jumlah halaman = total data / data perhalaman
//cari jumlah data
$allData = count(query("SELECT * FROM tblmas_employee"));
$allPage = ceil($allData / $recordPerPage);
//ambil data halaman dari URL
//buat pilihan agar jika isset $_GET maka get currentPage jika tidak tampilkan halaman pertama
// if( isset($_GET["page"])){
// 	$currentPage = $_GET["page"];
// }else{
// 	$page = 1;
// }
//if else diatas bisa disingkat menggunakan operator ternari
$currentPage = (isset($_GET["page"])) ? $_GET["page"] : 1;
//berikut ini logika untuk menentukan nilai setelah LIMIT pada query
// halaman = 2, awal data = 2
// halaman = 3, awal data = 4
//karena setiap halaman berisi 2 data dan index dimulai dari nol.

$initialData = ($recordPerPage * $currentPage) - $recordPerPage;
$maxLeft = $currentPage - floor($navNo / 2);
$maxRight = $currentPage + floor($navNo / 2);

if ($maxLeft < 1) {
	$maxLeft = 1;
	$maxRight = $navNo;
}

if ($maxRight > $allPage) {
	$maxLeft = $allPage - ($navNo);
	if ($maxLeft < 1) {
		$maxLeft = 1;
	}
	$maxRight = $allPage;
}
$employees = query("SELECT * FROM tblmas_employee LIMIT $initialData, $recordPerPage");

//jika tombol search ditekan
if( isset($_POST["search"]) ) {
	$employees = search($_POST["keyword"]);
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Halaman Admin</title>
</head>
<body>
	<h1>Employee Data</h1>
	<a href="logout.php">Logout</a>
	<p><a href="add_new.php">Add New Item</a></p>

	<form accept="" method="post">
		<input type="text" name="keyword" size="40" autofocus placeholder="Type a keyword..
		" autocomplete="off">
		<button type="submit" name="search">Search </button>
	</form>

	<!-- navigasi -->
	<?php if ($currentPage != 1) : ?>
		<a href="?page=1">First</a>
	<?php endif ?>

	<?php for ($i = $maxLeft; $i <= $maxRight ; $i++) : ?>
		<?php if( $i == $currentPage) : ?> 
		<a href="?page=<?php echo $i; ?>" style="font-weight: bold; color: red;"><?php echo $i; ?></a>
	<?php else : ?>
		<a href="?page=<?php echo $i ?>"><?php echo $i; ?></a>
	<?php endif; ?>	
	<?php endfor; ?>

	<?php if ($currentPage != $allPage) : ?>
		<a href="?page=<?= $allPage ?>">Last</a>
	<?php endif ?>
	<br>
	<table border="1" cellpadding="10" cellspacing="0">
		<tr>
			<th>No.</th>
			<th>Aksi</th>
			<th>Employee No</th>
			<th>Employee Name</th>			
			<th>Email</th>
		</tr>
		<?php $no = $initialData + 1; ?>
		<?php foreach ($employees as $employee) : ?>
		<tr>
			<td><?php echo $no; ?></td>
			<td>
				<a href="edit.php?id=<?php echo $hardware["hw_ID"]; ?>">Edit</a> | 
				<a href="delete.php?id=<?php echo $hardware["hw_ID"]; ?>" onclick="return confirm('Are you sure to process this action?');">Delete</a>
			</td>
			<td><?php echo $employee["employeeno"]; ?></td>
			<td><?php echo $employee["employeename"]; ?></td>
			<td><?php echo $employee["email"]; ?></td>
		</tr>
		<?php $no++; ?>
		<?php endforeach ?>
	</table>
</body>
</html>