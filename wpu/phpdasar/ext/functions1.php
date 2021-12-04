<?php 
$conn = mysqli_connect("localhost", "root", "", "phone_db");

function query($query){
$result = mysqli_query($conn, $query);
$container = [];
while ($data = mysqli_fetch_assoc($result)) {
	$container[]
}
}




?>