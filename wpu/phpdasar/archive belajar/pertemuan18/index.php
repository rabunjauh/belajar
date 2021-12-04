<?php

session_start();

if (!isset($_SESSION["login"])) {
  	header("Location: login.php");
  	exit;
 }  

require 'functions.php';

//pagination
//config
//tentukan jumlah data yang akan ditampilkan dalam 1 halaman
$recordPerPage = 2;
//tentukan berapa total halaman nantinya
//cara hitung = jumlah halaman = total data / data perhalaman
//cari jumlah data
$allData = count(query("SELECT * FROM hardwaretb"));
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


$hardwares = query("SELECT * FROM hardwaretb LIMIT $initialData, $recordPerPage");

//jika tombol search ditekan
if( isset($_POST["search"]) ) {
	$hardwares = search($_POST["keyword"]);
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Halaman Admin</title>
</head>
<body>
	<h1>Asset Data - Hardware</h1>
	<a href="logout.php">Logout</a>
	<p><a href="add_new.php">Add New Item</a></p>

	<form accept="" method="post">
		<input type="text" name="keyword" size="40" autofocus placeholder="Type a keyword..
		" autocomplete="off">
		<button type="submit" name="search">Search </button>
	</form>

	<!-- navigasi -->
	<?php if($currentPage > 1) : ?>
		<a href="?page=<?php echo $currentPage - 1; ?>">&lt;</a>
	<?php endif; ?>
	<?php for ($i=1; $i <= $allPage ; $i++) : ?>
		<?php if( $i == $currentPage) : ?> 
		<a href="?page=<?php echo $i; ?>" style="font-weight: bold; color: red;"><?php echo $i; ?></a>
	<?php else : ?>
		<a href="?page=<?php echo $i ?>"><?php echo $i; ?></a>
	<?php endif; ?>	
	<?php endfor; ?>
	<?php if($currentPage < $allPage) : ?>
		<a href="?page=<?php echo $currentPage + 1; ?>">&gt;</a>
	<?php endif; ?>


	<br>
	<table border="1" cellpadding="10" cellspacing="0">
		<tr>
			<th>No.</th>
			<th>Aksi</th>
			<th>Category</th>
			<th>Manufacture</th>			
			<th>Service Tag</th>
			<th>Model</th>
			<th>Processor</th>			
			<th>Memory</th>
			<th>HDD</th>
			<th>Description</th>
			<th>Status</th>
			<th>Image</th>
		</tr>
		<?php $no = $initialData + 1; ?>
		<?php foreach ($hardwares as $hardware) : ?>
		<tr>
			<td><?php echo $no; ?></td>
			<td>
				<a href="edit.php?id=<?php echo $hardware["hw_ID"]; ?>">Edit</a> | 
				<a href="delete.php?id=<?php echo $hardware["hw_ID"]; ?>" onclick="return confirm('Are you sure to process this action?');">Delete</a>
			</td>
			<td><?php echo $hardware["hw_category"]; ?></td>
			<td><?php echo $hardware["hw_manufacture"]; ?></td>
			<td><?php echo $hardware["hw_ST"]; ?></td>
			<td><?php echo $hardware["hw_MOD"]; ?></td>
			<td><?php echo $hardware["hw_PROCESSOR"]; ?></td>
			<td><?php echo $hardware["hw_MEM"] . " GB"; ?></td>
			<td><?php echo $hardware["hw_HDD"] . " GB";?></td>
			<td><?php echo $hardware["hw_DESC"] ?></td>
			<td><?php echo $hardware["hw_STAT"]; ?></td>
			<td><img src="img\<?php echo $hardware["hw_image"]; ?>"></td>
		</tr>
		<?php $no++; ?>
		<?php endforeach ?>
	</table>
</body>
</html>