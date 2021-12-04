<?php 
	$mahasiswa = [
		["Mustafa", "12345678", "Sistem Informasi", "mustafa@gmail.com"],
		["Mustafa", "12345678", "Sistem Informasi", "mustafa@gmail.com"]	
	]
 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title>Mahasiswa</title>
 </head>
 <body>
 <h1>Data Mahasiswa</h1>
 <?php foreach ($mahasiswa as $mhs) :?>
 	<ul>
 		<li><?php echo $mhs[0]; ?></li>
 		<li><?php echo $mhs[1]; ?></li>
 		<li><?php echo $mhs[2]; ?></li>
 		<li><?php echo $mhs[3]; ?></li>
 	</ul>
 <?php endforeach; ?>
 </body>
 </html>