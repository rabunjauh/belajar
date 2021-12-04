<?php 
	require 'functions.php';

	if (isset($_POST["add"])) {
		if (add($_POST) > 0) {
			echo "Add Success";
		}
		else{
			echo mysqli_error($conn);
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
			<label for="category">category</label>
			<input type="text" name="category" id="category">
		</li>
		<li>
			<label for="manufacture">manufacture</label>
			<input type="text" name="manufacture" id="manufacture">
		</li>
		<li>
			<label for="model">model</label>
			<input type="text" name="model" id="model">
		</li>
		<li>
			<label for="image">image</label>
			<input type="text" name="image" id="image">
		</li>
		<li>
			<button type="submit" name="add">Add</button>
		</li>

	</ul>
</form>
</body>
</html>