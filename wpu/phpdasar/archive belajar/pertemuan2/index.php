<!DOCTYPE html>
<html>
<head>
	<title>Latihan 1</title>
	<style>
		.warna-baris{
			background-color: silver; 
		}
	</style>
</head>
<body>
<table border="1" cellpadding="10" cellspacing="0">


<?php 
	$i = 1;
	while ($i <= 5):		
	if ($i % 2 == 1):
?>



		<tr class="warna-baris">



<?php else: ?>	


		<tr >


<?php endif; 
	$j = 1;
	while ($j <= 5):		
?>


			<td>


				<?php echo "$i,$j"; ?>


					
			</td>


<?php 
	$j++;
	endwhile 
?>


		</tr>


<?php 
	$i++;
	endwhile 
?>

</table>
</body>
</html>