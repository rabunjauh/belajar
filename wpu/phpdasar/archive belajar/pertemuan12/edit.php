<?php 
//hubungkan halaman function
require 'functions.php';

//ambil data id dari url
$id = $_GET["id"];

//query data item berdasarkan id
$hardware = query("SELECT * FROM hardwaretb WHERE hw_ID = $id")[0];

// cek apakah tombil submit sudah ditekan
if ( isset($_POST["submit"]) ) {
	//cek apakah data berhasil diubah
	if( edit($_POST) > 0 ) {
		echo "
			<script>
				alert('Edit Item Success!!');
				document.location.href = 'index.php';
			</script>
		";
	} else {
		echo mysqli_error($conn);
		echo "<script>
				alert('Edit Item Fail!!');
				document.location.href = 'index.php';
			</script>";
	}
 

}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Edit Item</title>
</head>
<body>
<h1>Edit Item - Hardware</h1>

<li><a href="index.php">Back</a></li>

<br>

<form action="" method="post">
	<input type="hidden" name="hardware_id" value="<?php echo $hardware["hw_ID"]; ?>">
	<ul>
		<li>
			<label for="hardware_category">Category : </label>
			<input type="text" name="hardware_category" id="hardware_category" required value="<?php echo $hardware["hw_category"]; ?>">
		</li>

		<li>
			<label for="hardware_manufacture">Manufacture : </label>
			<input type="text" name="hardware_manufacture" id="hardware_manufacture" required value="<?php echo $hardware["hw_manufacture"]; ?>">
		</li>

		<li>
			<label for="hardware_servicetag">Service Tag : </label>
			<input type="text" name="hardware_servicetag" id="hardware_servicetag" required value="<?php echo $hardware["hw_ST"]; ?>">
		</li>

		<li>
			<label for="hardware_model">Model : </label>
			<input type="text" name="hardware_model" id="hardware_model" required value="<?php echo $hardware["hw_MOD"]; ?>">
		</li>

		<li>
			<label for="hardware_processor">Processor : </label>
			<input type="text" name="hardware_processor" id="hardware_processor" required value="<?php echo $hardware["hw_PROCESSOR"]; ?>">
		</li>

		<li>
			<label for="hardware_memory">Memory : </label>
			<input type="text" name="hardware_memory" id="hardware_memory" required value="<?php echo $hardware["hw_MEM"]; ?>"> <label>GB</label>
		</li>

		<li>
			<label for="hardware_storage">Storage Capacity : </label>
			<input type="text" name="hardware_storage" id="hardware_storage" required value="<?php echo $hardware["hw_HDD"]; ?>"> <label>GB</label>
		</li>

		<li>
			<label for="hardware_description">Description : </label>
			<input type="text" name="hardware_description" id="hardware_description" required value="<?php echo $hardware["hw_DESC"]; ?>">
		</li>

		<li>
			<label for="hardware_status">Status : </label>
			<input type="text" name="hardware_status" id="hardware_status" required value="<?php echo $hardware["hw_STAT"]; ?>">
		</li>

		<li>
			<label for="hardware_image">Image : </label>
			<input type="text" name="hardware_image" id="hardware_image" required value="<?php echo $hardware["hw_image"]; ?>">
		</li>

		<li>
			<button type="submit" name="submit">Update Item</button>
		</li>



	</ul>
</form>
</body>
</html>