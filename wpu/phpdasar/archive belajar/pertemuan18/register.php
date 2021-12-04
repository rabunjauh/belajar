<?php 
require 'functions.php';

if(isset($_POST["signUp"])){
	if(registration($_POST) > 0){
		echo "
			<script>
				alert('Sign Up success!')
			</script>
		";
	} else {
		echo mysqli_error($conn);
	}
 }

?>
<!DOCTYPE html>
<html>
<head>
	<title>Register</title>
	<style>
		label{
			display: block;
		}
	</style>
</head>
<body>
<h1>Registration</h1>

<form action="" method="post">
	<ul>
		<li>
			<label for="username">Username :</label>
			<input type="text" name="username" id="username">
		</li>

		<li>
			<label for="password">Password :</label>
			<input type="password" name="password" id="password">
		</li>

		<li>
			<label for="password2">Confirm :</label>
			<input type="password" name="password2" id="password2">
		</li>
		<li><button type="submit" name="signUp">Sign Up</button></li>
	</ul>
</form>
</body>
</html>