<?php 
	if (!isset($_GET["kode"]) ||
		!isset($_GET["tipe"]) ||
		!isset($_GET["seri"]) ||
		!isset($_GET["prosesor"]) ||
		!isset($_GET["ram"]) ||
		!isset($_GET["gambar"]))
{
		header("Location:latihan1.php");
	exit;
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Assets Detail</title>
</head>
<body>
<h1>Assets Detail</h1>
<ul>
	<li><img src="img/<?php echo $_GET["gambar"];?>"></li>
	<li><?php echo $_GET["kode"];?></li>
	<li><?php echo $_GET["tipe"];?></li>
	<li><?php echo $_GET["seri"];?></li>
	<li><?php echo $_GET["prosesor"];?></li>
	<li><?php echo $_GET["ram"];?></li>
</ul> 
</body>
</html>