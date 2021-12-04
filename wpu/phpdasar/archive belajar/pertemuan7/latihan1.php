<?php 
	$assets = [
		["service_tag" => "12345", "machine_type" => "Laptop", "model" => "Dell Latitude E5440", "processor" => "Intel I5", "memory" => "4 GB", "photo" => "latitude5440.jpg"],

		["service_tag" => "54321", "machine_type" => "Desktop", "model" => "Dell Optiplex 3010", "processor" => "Intel I3", "memory" => "8 GB", "photo" => "optiplex3010.gif"]	
	];
 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title>Assets Data</title>
 </head>
 <body>
 <h1>Assets Data</h1>
<?php foreach ($assets as $asset) : ?>
	<ul><a href="latihan2.php?kode=<?php echo $asset["service_tag"]; ?>&tipe=<?php echo $asset["machine_type"]; ?>&seri=<?php echo $asset["model"]; ?>&prosesor=<?php echo $asset["processor"]; ?>&ram=<?php echo $asset["memory"]; ?>&gambar=<?php echo $asset["photo"]; ?>"><?php echo $asset["service_tag"]; ?></a></ul>
<?php endforeach; ?>
 </body>
 </html>