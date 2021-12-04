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
	//pagination
//config
//tentukan jumlah data yang akan ditampilkan dalam 1 halaman
$recordPerPage = 2;
//tentukan berapa total halaman nantinya
//cara hitung = jumlah halaman = total data / data perhalaman
//cari jumlah data
$allData = count(query("SELECT * FROM hardwaretb WHERE
			 hw_category 	LIKE '%$keyword%'	OR
			 hw_manufacture LIKE '%$keyword%'	OR
			 hw_ST 			LIKE '%$keyword%'	OR
			 hw_MOD 		LIKE '%$keyword%'	OR
			 hw_PROCESSOR 	LIKE '%$keyword%'	OR
			 hw_MEM 		LIKE '%$keyword%'	OR
			 hw_HDD 		LIKE '%$keyword%'	OR
			 hw_DESC 		LIKE '%$keyword%'	OR
			 hw_STAT 		LIKE '%$keyword%'"));
$allPage = ceil($allData / $recordPerPage);
//ambil data halaman dari URL
//buat pilihan agar jika isset $_GET maka get currentPage jika tidak tampilkan halaman pertama
// if( isset($_GET["page"])){
// 	$currentPage = $_GET["page"];
// }else{
// 	$page = 1;
// }
//if else diatas bisa disingkat menggunakan operator ternari
$currentPage = (isset($_GET["page"])) ? $_GET["page"] : 1;
//berikut ini logika untuk menentukan nilai setelah LIMIT pada query
// halaman = 2, awal data = 2
// halaman = 3, awal data = 4
//karena setiap halaman berisi 2 data dan index dimulai dari nol.

$initialData = ($recordPerPage * $currentPage) - $recordPerPage;
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
			 hw_STAT 		LIKE '%$keyword%' LIMIT $initialData, $recordPerPage
	";
	return query($query);

}

function registration($userData){
	global $conn;

	$username	= strtolower(stripslashes($userData["username"]));
	$password	= mysqli_real_escape_string($conn, $userData["password"]);
	$password2	= mysqli_real_escape_string($conn, $userData["password2"]);

	//cek username sudah ada atau belum

	$result = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");

	if (mysqli_fetch_assoc($result)){
		echo " 
		<script>
			alert('Username already exist!')
		</script>	
		";
	}
	//cek konfirmasi password
	if ($password !== $password2) {
		echo "
			<script>
				alert('Password not match!');
			</script>	
		";
		return false;
	}

	// enkripsi password menggunakan password_hash pengganti md5 yang sudah tidak aman.
	$password = password_hash($password, PASSWORD_DEFAULT);

	// tambahkan userbaru ke database
	mysqli_query($conn, "INSERT INTO users VALUES('', '$username', '$password')");
		return mysqli_affected_rows($conn);
}

?>