<?php 
	require 'functions.php';
	$id = $_GET["id"];

	$edits = query("SELECT * FROM hardwaretb WHERE hw_ID = '$id'");

	if (isset($_POST["update"])) {
		if (edit($_POST) > 0) {
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
<h1>edit</h1>
<?php foreach ($edits as $edit): ?>
<form action="" method="post">
	<input type="hidden" name="id" value="<?php echo $edit["hw_ID"] ?>">

	category : <input type="text" name="category" value="<?php echo $edit["hw_category"] ?>">
	manufacture : <input type="text" name="manufacture" value="<?php echo $edit["hw_manufacture"] ?>">
	model : <input type="text" name="model" value="<?php echo $edit["hw_MOD"] ?>">
	image : <input type="text" name="image" value="<?php echo $edit["hw_image"] ?>">
	<button type="submit" name="update">Update</button>
</form>
<?php endforeach ?>
</body>
</html>