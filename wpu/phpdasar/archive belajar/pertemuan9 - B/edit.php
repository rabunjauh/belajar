<?php 
	require 'functions.php';

	$id = $_GET["id"];
	$edititems = query("SELECT * FROM hardwaretb WHERE hw_ID = '$id'");
	
	if (isset($_POST["update"])) {
		if ( edit($_POST) > 0 ) {
		echo "Update Success";
		}
		else{
			echo mysqli_error($conn);
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>edit</title>
</head>
<body>
<h1>edit</h1>

<form action="" method="post">
	<ul>
		<?php foreach ($edititems as $edititem) : ?>
		<li>
			<input type="hidden" name="id" value="<?php echo $edititem["hw_ID"]; ?>">
		</li>
		<li>
			<label for="category">category</label>
			<input type="text" name="category" id="category" value="<?php echo $edititem["hw_category"]; ?>">
		</li>
		<li>
			<label for="manufacture">manufacture</label>
			<input type="text" name="manufacture" id="manufacture" value="<?php echo $edititem["hw_manufacture"]; ?>">
		</li>
		<li>
			<label for="model">model</label>
			<input type="text" name="model" id="model" value="<?php echo $edititem["hw_MOD"]; ?>">
		</li>
		<li>
			<label for="image">image</label>
			<input type="text" name="image" id="image" value="<?php echo $edititem["hw_image"]; ?>">
		</li>

		<li>
			<button type="submit" name="update">Update</button>
		</li>
	<?php endforeach ?>
	</ul>
</form>
</body>
</html>