<?php 
	function salam($waktu, $user){
		return "Selamat $waktu, $user";
	}
 ?>


<!DOCTYPE html>
<html>
<head>
	<title>function</title>
</head>
<body>
	<h1><?php echo salam("Pagi","Mustafa"); ?></h1>
</body>
</html>