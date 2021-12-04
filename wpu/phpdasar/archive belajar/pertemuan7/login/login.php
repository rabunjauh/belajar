<?php 
// cek apakah tombol submit sudah ditekan atau belum
if (isset($_POST["submit"])) {
	//cek username & password
	if ($_POST["username"] == "admin" && $_POST["password"] == "admin" ) {
		//jika benar redirect ke halaman admin
		header("Location: admin.php");
		exit;
	} else {
	//jika salah tampilkan pesan kesalahan 
		$error = true;
	}
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>
<h1>Login Admin</h1>

<form action="" method="post">
	<ul>
		<li>
			<label for="username">Username :</label>
			<input type="text" name="username" id="username" required>
		</li>

		<li>
			<label for="password">Password :</label>
			<input type="password" name="password" id="password" required>
		</li>
		<li>
			<button type="submit" name="submit">Login</button>
		</li>
		<?php if (isset($error)) { ?>
			<li>
			<p style="color: red; font-style: italic;">Username or Password is Incorrect!</p>
			</li>	
		<?php } ?>
	</ul>
</form>
</body>
</html>