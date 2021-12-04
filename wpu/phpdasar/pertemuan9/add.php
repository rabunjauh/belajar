<?php 
	require 'functions.php';

	if (isset($_POST["add"])) {
		if ( add($_POST) > 0 ) {
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
<h1>ADD</h1>

<form action="" method="post">
	<ul>
		<li>
			category : <input type="text" name="category">
		</li>
		<li>
			manufacture : <input type="text" name="manufacture">
		</li>
		<li>
			model : <input type="text" name="model">
		</li>
		<li>
			image : <input type="text" name="image">
		</li>
		<li>
			<button type="submit" name="add">ADD</button>
		</li>

	</ul>
</form>
</body>
</html>