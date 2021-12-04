<?php 

	$con = mysqli_connect("localhost", "root", "", "belajar");
		if (!$con) {
			die("Connection Error: " . mysqli_connect_error());
		}

	function query($fromQuery){
		global $con;
		$result = mysqli_query($con, $fromQuery);

		$rowArray = [];

		while ( $row = mysqli_fetch_assoc($result) ) {
			$rowArray[] = $row;
		}
		return $rowArray;
	}	

	function add($fromPostAdd){
		global $con;
		$category = $fromPostAdd["category"];
		$manufacture = $fromPostAdd["manufacture"];
		$model = $fromPostAdd["model"];
		$image = $fromPostAdd["image"];

		$query = "INSERT INTO hardwaretb VALUES('', '$category', '$manufacture', '$model', '$image')";

		mysqli_query($con, $query);

		return mysqli_affected_rows($con);
	}

	function update($fromPostUpdate){
		global $con;
		$id = $fromPostUpdate["id"];
		$category = $fromPostUpdate["category"];
		$manufacture = $fromPostUpdate["manufacture"];
		$model = $fromPostUpdate["model"];
		$image = $fromPostUpdate["image"];

		$query = "UPDATE hardwaretb SET 
					hw_category = '$category',
					hw_manufacture = '$manufacture',
					hw_MOD = '$model',
					hw_image = '$image'
				 WHERE hw_ID = '$id'";

		mysqli_query($con, $query);
		
		return mysqli_affected_rows($con);
		
	}

	function delete($fromIdDelete){
		global $con;
		mysqli_query($con, "DELETE FROM hardwaretb WHERE hw_ID = '$fromIdDelete'");
		return mysqli_affected_rows($con);
	}

	function search($fromKeywordSearch){
		global $con;

		return query("SELECT * FROM hardwaretb WHERE
						hw_category LIKE '%$fromKeywordSearch%' OR
						hw_manufacture LIKE '%$fromKeywordSearch%' OR
						hw_MOD LIKE '%$fromKeywordSearch%'
					 ");
	}

?>