<?php 

$conn = mysqli_connect("localhost","root","","belajar");

function query($queryParameter){
	global $conn;
	$result = mysqli_query($conn, $queryParameter);

	$assetsContainer = [];
	while ( $assetsData = mysqli_fetch_assoc($result) ){
		$assetsContainer[] = $assetsData;
	}
	return $assetsContainer;
}


 ?>