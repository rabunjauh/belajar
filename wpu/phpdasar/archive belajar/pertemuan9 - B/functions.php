<?php 

$conn = mysqli_connect("localhost","root","","belajar");

function query($queryParameter){
	global $conn;

	$result = mysqli_query($conn, $queryParameter);

	$dataContainer = [];
	while ( $assocData = mysqli_fetch_assoc($result) ) {
		$dataContainer[] = $assocData;
	}
	return $dataContainer;

}

function add($fromPost){
	global $conn;
	$category = $fromPost["category"];
	$manufacture = $fromPost["manufacture"];
	$model = $fromPost["model"];
	$image = $fromPost["image"];

	$query = "INSERT INTO hardwaretb VALUES ('','$category','$manufacture','$model','$image')";

	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

function edit($fromPost){
	global $conn;
	$id = $fromPost["id"];
	$category = $fromPost["category"];
	$manufacture = $fromPost["manufacture"];
	$model = $fromPost["model"];
	$image = $fromPost["image"];	

	$query = "UPDATE hardwaretb SET hw_category = '$category', hw_manufacture = '$manufacture', hw_MOD = '$model', hw_image = '$image' WHERE hw_ID = '$id'";

	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

function delete($fromId){
	global $conn;
	mysqli_query($conn, "DELETE FROM hardwaretb WHERE hw_ID = '$fromId'");
	return mysqli_affected_rows($conn);
}

function search($fromkeyword){
	$query = "SELECT * FROM hardwaretb WHERE 
				hw_category LIKE '%$fromkeyword%' OR 
				hw_manufacture LIKE '%$fromkeyword%' OR
				hw_MOD LIKE '%$fromkeyword%'
				";

	return query($query);
}
?>