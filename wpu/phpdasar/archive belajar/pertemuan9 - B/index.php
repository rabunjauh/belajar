<?php 
	require 'functions.php';

	$assets = query("SELECT * FROM hardwaretb");

	if (isset($_POST["search"])) {
		$assets = search($_POST["keyword"]);
	}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Items</title>
</head>
<body>
<h1>Items</h1>

<h3><a href="add.php">Add New Item</a></h3>
<form action="" method="post">
	<input type="text" name="keyword">
	<button type="submit" name="search">Search</button>
</form>
<table border="2">
	<tr>
		<th>No</th>
		<th colspan="2">Action</th>
		<th>Category</th>
		<th>manufacture</th>
		<th>model</th>
		<th>image</th>
	</tr>
	<?php $no = 1;
		foreach ($assets as $asset) : ?>
		<tr>
			<td><?php echo $no; ?></td>
			<td><a href="edit.php?id=<?php echo $asset["hw_ID"]; ?>">EDIT</a></td>
			<td><a href="delete.php?id=<?php echo $asset["hw_ID"]; ?>">DELETE</a></td>
			<td><?php echo $asset["hw_category"]; ?></td>
			<td><?php echo $asset["hw_manufacture"]; ?></td>
			<td><?php echo $asset["hw_MOD"]; ?></td>
			<td><img src="img/<?php echo $asset["hw_image"]; ?>"></td>
		</tr>
	<?php	
		$no++;
	 	endforeach
	?>
</table>
</body>
</html>