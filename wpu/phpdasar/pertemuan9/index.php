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
	<title>index</title>
</head>
<body>
<h1>index</h1>

<h3><a href="add.php">ADD</a></h3>

<form action="" method="post">
	<input type="text" name="keyword" autofocus autocomplete="off">
	<button type="submit" name="search">Search</button>
</form>

<table border="2">
	<tr>
		<td>no</td>
		<td colspan="2">Action</td>
		<td>category</td>
		<td>manufacture</td>
		<td>model</td>
		<td>image</td>

	</tr>

	<?php if (!$assets) { ?>

		<tr>
		<td colspan="7">Data Not Exist</td>
	</tr>

	<?php } ?>

	<?php 			
		$no = 1;
		foreach ($assets as $asset) :
	 ?>
	<tr>
		<td><?php echo $no; ?></td>
		<td><a href="edit.php?id=<?php echo $asset["hw_ID"]; ?>">EDIT</a></td>
		<td><a href="delete.php?id=<?php echo $asset["hw_ID"]; ?>">DELETE</a></td>
		<td><?php echo $asset["hw_category"]; ?></td>
		<td><?php echo $asset["hw_manufacture"]; ?></td>
		<td><?php echo $asset["hw_MOD"]; ?></td>
		<td><img src="img/<?php echo $asset["hw_image"]; ?>"></td>
	</tr>
	<?php $no++; ?>
	<?php endforeach ?>
	
</table>
</body>
</html>