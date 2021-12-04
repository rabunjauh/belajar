<?php

function salam($nama, $day){
	return "Hi $nama , Today is $day";
}

 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title>Latihan Function</title>
 </head>
 <body>
 <?php echo salam("Mustafa", date("l"))?>
 </body>
 </html>