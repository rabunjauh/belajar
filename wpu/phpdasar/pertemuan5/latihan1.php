<?php 

$conn = mysqli_connect("localhost","root","","ext");

$manual = 	[
				"id"=>"1",
				"name"=>"YODY HASAN",
				"positionid"=>"1",
				"departmentid"=>"1",
				"locationid"=>"1",
				"ext"=>"280"
			];




$result = mysqli_query($conn, "SELECT * FROM employee WHERE departmentid = 1");


$ext = mysqli_fetch_assoc($result);
	echo $ext["departmentid"];




echo "<br>";
echo $manual["name"];
 ?>
