<?php 
//koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "dbasset");


function query($query){
	global $conn;
	$result = mysqli_query($conn, $query);
	$rows = [];
	while ($row = mysqli_fetch_assoc($result)){
		$rows[] = $row; 
	}
	return $rows;
}

function add_new($item){
	global $conn;

	//ambil data dari tiap elemen dalam form
	$category 		= htmlspecialchars($item["hardware_category"]);
	$manufacture 	= htmlspecialchars($item["hardware_manufacture"]); 
	$servicetag 	= htmlspecialchars($item["hardware_servicetag"]); 
	$model 			= htmlspecialchars($item["hardware_model"]); 
	$processor 		= htmlspecialchars($item["hardware_processor"]); 
	$memory 		= htmlspecialchars($item["hardware_memory"]); 
	$storage 		= htmlspecialchars($item["hardware_storage"]); 
	$description 	= htmlspecialchars($item["hardware_description"]); 
	$status 		= htmlspecialchars($item["hardware_status"]); 
	$image 			= htmlspecialchars($item["hardware_image"]); 

	//query insert data
	$query = "INSERT INTO hardwaretb
				VALUES 
					('', '$category', '$manufacture', '$servicetag', '$model', '$processor', '$memory', '$storage', '$description', '$status', '$image')
			 ";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);

}

function delete($id) {
	global $conn;
	mysqli_query($conn, "DELETE FROM hardwaretb WHERE hw_ID = $id");
	return mysqli_affected_rows($conn); 
}

?>