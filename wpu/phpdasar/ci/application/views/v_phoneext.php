<!DOCTYPE html>
<html>
<head>
	<title>Phone Extension
	</title>
</head>
<body>
	<h1>Phone Extension</h1>
<?php foreach ($ext as $phoneext){ ?>
	<table border="1">
		<tr>
			<td>&nbsp;</td>
		</tr>	

		<tr>
			<td colspan="3"><?php echo $phoneext['department']; ?></td>
		</tr>
		
		<tr>			
			<td><?php echo $phoneext['name']; ?></td>
			<td><?php echo $phoneext['position']; ?></td>
			<td><?php echo $phoneext['ext']; ?></td>			 
		</tr>
		


	</table>	
<?php } ?>
</body>
</html>