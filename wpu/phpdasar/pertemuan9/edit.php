<?php 
	require 'functions.php';

	$id = $_GET["id"];

	$assets = mysqli_query($con,"SELECT * FROM hardwaretb WHERE hw_ID = $id");

	if (isset($_POST["update"])) {
		if ( update($_POST) > 0 ) {
			header("Location: index.php");
		}
		else{
			echo mysqli_error($con);
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>edit</title>
</head>
<body>
<h1>eDIT</h1>

<form action="" method="post">
	<ul>
		<?php foreach ($assets as $asset) :?>	

		<li>
			<input type="hidden" name="id" value="<?php echo $asset["hw_ID"]; ?>">
		</li>

		<li>
			category : <input type="text" name="category" value="<?php echo $asset["hw_category"]; ?>">
		</li>
		<li>
			manufacture : <input type="text" name="manufacture" value="<?php echo $asset["hw_manufacture"]; ?>">
		</li>
		<li>
			model : <input type="text" name="model" value="<?php echo $asset["hw_MOD"]; ?>">
		</li>
		<li>
			image : <input type="text" name="image" value="<?php echo $asset["hw_image"]; ?>">
		</li>
		<li>
			<button type="submit" name="update">update</button>
		</li>

		<?php endforeach ?>
	</ul>
</form>
</body>
</html>