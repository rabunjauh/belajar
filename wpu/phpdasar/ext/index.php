<?php 
require 'functions.php';

$misExtensions = query("SELECT location.locationname, department.departmentname, employee.name, position.positionname, employee.ext FROM employee JOIN location on employee.locationid = location.locationid JOIN department on employee.departmentid = department.departmentid JOIN position on employee.positionid = position.positionid WHERE location.locationid = 1 AND department.departmentid = 1");
$hrExtensions = query("SELECT location.locationname, department.departmentname, employee.name, position.positionname, employee.ext FROM employee JOIN location on employee.locationid = location.locationid JOIN department on employee.departmentid = department.departmentid JOIN position on employee.positionid = position.positionid WHERE location.locationid = 1 AND department.departmentid = 2");

// while ( $ext = mysqli_fetch_assoc($result)){
// var_dump($ext);
// }
 ?>

<!DOCTYPE html>
<html>
<head>
	<title>Ext Number</title>
</head>
<body>
<h1>Extension Number</h1>
<table border="1">
	
<tr>
	
	<td colspan="3"><?php echo "MIS"; ?></td>
</tr>
<?php foreach ( $misExtensions as $misExtension ){ ?>
<tr>	
	<td><?php echo $misExtension["name"]; ?></td>
	<td><?php echo $misExtension["positionname"]; ?></td>
	<td><?php echo $misExtension["ext"]; ?></td>	
</tr>
<?php } ?>

</table>

<table border="1">
	
<tr>
	
	<td colspan="3"><?php echo "HR"; ?></td>
</tr>
<?php foreach ( $hrExtensions as $hrExtension ){ ?>
<tr>	
	<td><?php echo $hrExtension["name"]; ?></td>
	<td><?php echo $hrExtension["positionname"]; ?></td>
	<td><?php echo $hrExtension["ext"]; ?></td>	
</tr>
<?php } ?>

</table>
</body>
</html>
