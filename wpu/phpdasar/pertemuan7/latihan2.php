<?php 
if( !isset( $_GET["gambar"] ) ||
	!isset( $_GET["merk"] )   ||
	!isset( $_GET["model"] )  ||
	!isset( $_GET["warna"] ) ){
	header("Location: latihan1.php");
	exit;
}

?>


<!DOCTYPE html>
<html>
<head>
	<title>Detail Motor</title>
</head>
<body>
<ul>
	<li><img src="img/<?php echo $_GET["gambar"]; ?>"></li>
	<li><?php echo $_GET["merk"]; ?></li>
	<li><?php echo $_GET["model"]; ?></li>
	<li><?php echo $_GET["warna"]; ?></li>
</ul>

<a href="latihan1.php">Back</a>
</body>
</html>