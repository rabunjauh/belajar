<?php 

	$con = mysqli_connect("localhost", "root", "", "belajar");


	function query($fromQuery){
		global $con;
		$result = mysqli_query($con, $fromQuery);
		$arrayRows = [];
		while ( $row = mysqli_fetch_assoc($result) ){
			$arrayRows[] = $row;
		}
		return $arrayRows;
	}

	function add($fromAddPost){
		global $con;
		$category = $fromAddPost["category"];
		$manufacture = $fromAddPost["manufacture"];
		$model = $fromAddPost["model"];
		$image = $fromAddPost["image"];

		$query = ("INSERT INTO hardwaretb VALUES ('', '$category', '$manufacture', '$model', '$image')");

		mysqli_query($con, $query);
		return mysqli_affected_rows($con);
	}

	function delete($id){
		global $con;
		mysqli_query($con, "DELETE from hardwaretb WHERE hw_ID = '$id'");
		return mysqli_affected_rows($con);
	}

	function edit($fromEditPost){
		global $con;
		$id = $fromEditPost["id"];
		$category = $fromEditPost["category"];
		$manufacture = $fromEditPost["manufacture"];
		$model = $fromEditPost["model"];
		$image = $fromEditPost["image"];

	$query = "UPDATE hardwaretb SET 
				hw_category = '$category',
				hw_manufacture = '$manufacture',
				hw_MOD = '$model',
				hw_image = '$image'
			WHERE hw_ID = '$id'";
			mysqli_query($con, $query);
	return mysqli_affected_rows($con);
	}

	function search($fromKeywordPost){
		return query("SELECT * FROM hardwaretb WHERE 
								hw_category LIKE '%$fromKeywordPost%' OR 
								hw_manufacture LIKE '%$fromKeywordPost%' OR 
								hw_MOD LIKE '%$fromKeywordPost%' 
				");
	}
?>