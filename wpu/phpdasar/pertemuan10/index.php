<?php 

require 'function.php';
$assets = query("SELECT * FROM hardwaretb");
?>


<!DOCTYPE html>
<html>
<head>
	<title>Asset</title>
</head>
<body>
<h1>Asset</h1>

<a href="add.php">Add New Asset</a>

<table border="1">
	<tr>
		<th>No</th>
		<th colspan="2">Action</th>
		<th>Category</th>
		<th>Manufacture</th>
		<th>Model</th>
		<th>Image</th>
	</tr>

<?php $i = 1; ?>	
<?php foreach ( $assets as $asset ){ ?>
	<tr>
		<td><?php echo $i; ?></td>
		<td><a href="#">EDIT</a></td>
		<td><a href="#">DELETE</a></td>
		<td><?php echo $asset["hw_category"]; ?></td>
		<td><?php echo $asset["hw_manufacture"]; ?></td>
		<td><?php echo $asset["hw_MOD"]; ?></td>
		<td>
			<img src="img\
							<?php echo $asset["hw_image"]; ?>
			">
		</td>
	</tr>
	<?php $i++; ?>
<?php } ?>

</table>
</body>
</html>