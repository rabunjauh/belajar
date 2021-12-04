<?php 
	require 'functions.php';
	$query = "SELECT hardwaretb.hw_ID, 
				hardwaretb.idmanufacturetb, 
				hardwaretb.hw_MOD, 
				hardwaretb.hw_image, 
				categorytb.idcategorytb, 
				categorytb.categoryname,
				manufacturetb.idmanufacturetb,
				manufacturetb.manufacturename 
			FROM hardwaretb 
			INNER JOIN categorytb 
			on hardwaretb.idcategorytb = categorytb.idcategorytb
			INNER JOIN manufacturetb
			on hardwaretb.idmanufacturetb = manufacturetb.idmanufacturetb";
	$assets = query($query);

	if ( isset($_POST["search"]) ) {
		$assets = search($_POST["keyword"]);
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>asset</title>
</head>
<body>
<h1>asset</h1>

<h3><a href="add.php">Add</a></h3>

<form action="" method="post">
	<input type="text" name="keyword">
	<button type="submit" name="search">Search</button>
</form>
<table border="2">
	<tr>
		<td>no</td>
		<td colspan="2">action</td>
		<td>category</td>
		<td>manufacture</td>
		<td>model</td>
		<td>image</td>
	</tr>

<?php 
	$no = 1;
	foreach ( $assets as $asset ) :
?>
	<tr>
		<td><?php echo $no; ?></td>
		<td><a href="edit.php?id=<?php echo $asset["hw_ID"]; ?>">EDIT</a></td>
		<td><a href="delete.php?id=<?php echo $asset["hw_ID"]; ?>">DELETE</a></td>
		<td><?php echo $asset["categoryname"]; ?></td>
		<td><?php echo $asset["manufacturename"]; ?></td>
		<td><?php echo $asset["hw_MOD"]; ?></td>
		<td><img src="img/<?php echo $asset["hw_image"]; ?>"></td>
<?php 
	$no++;
	endforeach
?>	
	</tr>

</table>
</body>
</html>