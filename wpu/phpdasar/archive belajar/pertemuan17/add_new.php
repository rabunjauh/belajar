<?php 
session_start();

if (!isset($_SESSION["login"])) {
  	header("Location: login.php");
  	exit;
 }
 
//hubungkan halaman function
require 'functions.php';
// cek apakah tombil submit sudah ditekan
if ( isset($_POST["submit"]) ) {

	//cek apakah data berhasil ditambah
	if( add_new($_POST) > 0 ) {
		echo "
			<script>
				alert('Add Item Success!!');
				document.location.href = 'index.php';
			</script>
		";
	} else {
		echo "<script>
				alert('Add Item Fail!!');
				document.location.href = 'index.php';
			</script>";
	}
 

}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Add New Item</title>
</head>
<body>
<h1>Add New Item - Hardware</h1>

<li><a href="index.php">Back</a></li>

<br>

<form action="" method="post" enctype="multipart/form-data">
	<ul>
		<li>
			<label for="hardware_category">Category : </label>
			<input type="text" name="hardware_category" id="hardware_category" required autofocus>
		</li>

		<li>
			<label for="hardware_manufacture">Manufacture : </label>
			<input type="text" name="hardware_manufacture" id="hardware_manufacture" required>
		</li>

		<li>
			<label for="hardware_servicetag">Service Tag : </label>
			<input type="text" name="hardware_servicetag" id="hardware_servicetag" required>
		</li>

		<li>
			<label for="hardware_model">Model : </label>
			<input type="text" name="hardware_model" id="hardware_model" required>
		</li>

		<li>
			<label for="hardware_processor">Processor : </label>
			<input type="text" name="hardware_processor" id="hardware_processor" required>
		</li>

		<li>
			<label for="hardware_memory">Memory : </label>
			<input type="text" name="hardware_memory" id="hardware_memory" required> <label>GB</label>
		</li>

		<li>
			<label for="hardware_storage">Storage Capacity : </label>
			<input type="text" name="hardware_storage" id="hardware_storage" required> <label>GB</label>
		</li>

		<li>
			<label for="hardware_description">Description : </label>
			<input type="text" name="hardware_description" id="hardware_description" required>
		</li>

		<li>
			<label for="hardware_status">Status : </label>
			<input type="text" name="hardware_status" id="hardware_status" required>
		</li>

		<li>
			<label for="hardware_image">Image : </label>
			<input type="file" name="hardware_image" id="hardware_image" >
		</li>

		<li>
			<button type="submit" name="submit">Add Item</button>
		</li>

	</ul>
</form>
</body>
</html>