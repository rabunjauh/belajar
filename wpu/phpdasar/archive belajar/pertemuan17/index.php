<?php

session_start();

if (!isset($_SESSION["login"])) {
  	header("Location: login.php");
  	exit;
 }  

require 'functions.php';
$hardwares = query("SELECT * FROM hardwaretb ORDER BY hw_ID DESC");

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
		<?php $no = 1; ?>
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