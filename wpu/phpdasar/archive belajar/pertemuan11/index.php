<?php  
require 'functions.php';
$hardwares = query("SELECT * FROM hardwaretb");

?>

<!DOCTYPE html>
<html>
<head>
	<title>Halaman Admin</title>
</head>
<body>
	<h1>Asset Data - Hardware</h1>
	<p><a href="add_new.php">Add New Item</a></p>

	<table border="1" cellpadding="10" cellspacing="0">
		<tr>
			<th>No.</th>
			<th>Aksi</th>
			<th>ID</th>
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
			<td><?php echo $hardware["hw_ID"]; ?></td>
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