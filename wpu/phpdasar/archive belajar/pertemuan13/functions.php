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

	// $image 			= htmlspecialchars($item["hardware_image"]); 

	// upload gambar
	$image = upload();
	if(!$image){
		return false;
	}

	//query insert data
	$query = "INSERT INTO hardwaretb
				VALUES 
					('', '$category', '$manufacture', '$servicetag', '$model', '$processor', '$memory', '$storage', '$description', '$status', '$image')
			 ";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);

}

function upload(){

	$fileName 	= $_FILES['hardware_image']['name'];
	$fileOfSize = $_FILES['hardware_image']['size'];
	$error		= $_FILES['hardware_image']['error'];
	$tmpName	= $_FILES['hardware_image']['tmp_name'];

	// cek apakah ada gambar yang diupload
	if ( $error === 4 ){
		echo "
			<script>
				alert('Please choose image!');
			</script>
		";
		return false;
	}

	//pastikan file yang boleh diupload file gambar
	$imageExtensionValid 	= ['jpg', 'jpeg', 'png'];
	$imageExtension 		= explode('.', $fileName);
	$imageExtension 		= strtolower(end($imageExtension));
	if ( !in_array($imageExtension, $imageExtensionValid )){
			echo "
			<script>
				alert('Only Image File allowed!');
			</script>
		";
		return false;
	}

	//pastikan ukuran gambar
	if ( $fileOfSize > 1000000){
		echo "
			<script>
				alert('Maximum File Size 1 MB!');
			</script>
		";
		return false;
	}

	//gambar diizinkan di upload

	// generate nama gambar baru karena jika tidak, saat ada 2 user meng upload 2 gambar berbeda namun dengan nama file yang sama akan terjadi logic error.
	$newFileName	= uniqid();
	$newFileName	.= '.';
	$newFileName 	.= $imageExtension;
	move_uploaded_file($tmpName, 'img/'. $newFileName);
	return $newFileName;
}

function delete($id) {
	global $conn;
	mysqli_query($conn, "DELETE FROM hardwaretb WHERE hw_ID = $id");
	return mysqli_affected_rows($conn); 
}

function edit($item){
	global $conn;
	$id 			= $item["hardware_id"];
	$category 		= htmlspecialchars($item["hardware_category"]);
	$manufacture 	= htmlspecialchars($item["hardware_manufacture"]); 
	$servicetag 	= htmlspecialchars($item["hardware_servicetag"]); 
	$model 			= htmlspecialchars($item["hardware_model"]); 
	$processor 		= htmlspecialchars($item["hardware_processor"]); 
	$memory 		= htmlspecialchars($item["hardware_memory"]); 
	$storage 		= htmlspecialchars($item["hardware_storage"]); 
	$description 	= htmlspecialchars($item["hardware_description"]); 
	$status 		= htmlspecialchars($item["hardware_status"]); 	
	$oldImage		= htmlspecialchars($item["old_image"]);

	// Cek apakah user memilih gambar baru atau tidak
	if ( $_FILES['hardware_image']['error'] === 4 ){
		$image = $oldImage;
	} else {
		$image = upload();
	}	

	//query insert data
	$query = "UPDATE hardwaretb SET
				hw_category 	= '$category',
				hw_manufacture 	= '$manufacture',
				hw_ST 			= '$servicetag',
				hw_MOD 			= '$model', 
				hw_PROCESSOR 	= '$processor', 
				hw_MEM 			= '$memory',
				hw_HDD 			= '$storage', 
				hw_DESC 		= '$description',
				hw_STAT 		= '$status', 
				hw_image 		= '$image'
				WHERE hw_ID = $id; 
			";

	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

function search($keyword){
	$query = "SELECT * FROM hardwaretb
				WHERE
			 hw_category 	LIKE '%$keyword%'	OR
			 hw_manufacture LIKE '%$keyword%'	OR
			 hw_ST 			LIKE '%$keyword%'	OR
			 hw_MOD 		LIKE '%$keyword%'	OR
			 hw_PROCESSOR 	LIKE '%$keyword%'	OR
			 hw_MEM 		LIKE '%$keyword%'	OR
			 hw_HDD 		LIKE '%$keyword%'	OR
			 hw_DESC 		LIKE '%$keyword%'	OR
			 hw_STAT 		LIKE '%$keyword%'
	";
	return query($query);
}

?>