<?php 
	require 'functions.php';

	$categories = query("SELECT * FROM categorytb");
	$manufactures = query("SELECT * FROM manufacturetb");

	if (isset($_POST["add"])) {
		if (add($_POST) > 0) {
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
	<title>add</title>
</head>
<body>
<h1>add</h1>
<form action="" method="post">
	<ul>
		<li>
		category : 			
			<select name="category">
				<?php foreach ( $categories as $category ): ?>
				<option value="<?php echo $category["idcategorytb"]; ?>"><?php echo $category["categoryname"]; ?></option>
				<?php endforeach ?>
			</select>			
		</li>
		<li>
			manufacture : 
			<select name="manufacture">
				<?php foreach ( $manufactures as $manufacture ): ?>
				<option value="<?php echo $manufacture["idmanufacturetb"]; ?>"><?php echo $manufacture["manufacturename"]; ?></option>
				<?php endforeach ?>
			</select>			
		</li>
		<li>
			model : <input type="text" name="model">
		</li>
		<li>
			image : <input type="text" name="image">
		</li>
		<li>
			<button type="submit" name="add">Add</button>
		</li>

	</ul>
</form>
</body>
</html>