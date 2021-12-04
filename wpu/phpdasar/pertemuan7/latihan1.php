<?php 

$motors = 	[
				["merk"=>"Honda",
				 "model"=>"Beat",
				 "warna"=>"Hitam",
				 "gambar"=>"honda.png"
				],
				["merk"=>"Yamaha",
				 "model"=>"Mio",
				 "warna"=>"Putih",
				 "gambar"=>"yamaha.png"
				]
			];


 ?>

<!DOCTYPE html>
<html>
<head>
	<title>Get</title>
</head>
<body>
<ul>
	<?php foreach ( $motors as $motor ): ?>
		<li><a href="latihan2.php?gambar=<?php echo $motor["gambar"]; ?>&merk=<?php echo $motor["merk"]; ?>&model=<?php echo $motor["model"]; ?>&warna=<?php echo $motor["warna"]; ?>"><?php echo $motor["merk"]; ?></a></li>
	<?php endforeach ?>	
</ul>
</body>
</html>