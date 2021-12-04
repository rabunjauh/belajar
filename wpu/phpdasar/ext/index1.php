<?php 
	require 'functions.php';
	$mis = query("SELECT employee.name, department.department, ext.ext, position.position, yard.location 
				FROM employee 
				JOIN department on employee.departmentid = department.departmentid 
				JOIN ext on employee.extid = ext.extid 
				JOIN position on employee.positionid = position.positionid 
				JOIN yard on employee.yardid = yard.yardid WHERE employee.departmentid = 1");


	foreach ($mis as $misext) {
		
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Phone Extension</title>
</head>
<body>
<h1>Phone Extension</h1>
<table border="1">
	<tr>
		<td colspan="3"><?php echo $misext["department"] ?></td>
	</tr>

	<?php foreach ($mis as $misext) : ?>
	<tr>
		<td><?php echo $misext["name"]; ?></td><td><?php echo $misext["position"]; ?></td><td><?php echo $misext["ext"]; ?></td>
	</tr>
	<?php endforeach; ?>
</table>
</body>
</html>