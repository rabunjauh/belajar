<?php  
//koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "phpdasar");

//ambil data dari table mahasiswa / query data mahasiswa
$result = mysqli_query($conn, "SELECT * FROM mahasiswa");
//ambil data (fetch) mahasiswa dari object result
//mysqli_fetch__row()//mengembalikan array numeric
//mysqli_fetch_assoc() mengembalikan array association
//mysqli_fetch_array() mengembalikan keduanya
//mysqli_fetch_object() 

// while($mhs = mysqli_fetch_assoc($result)){
// 	var_dump($mhs); 
// } 
?>

<!DOCTYPE html>
<html>
<head>
	<title>Halaman Admin</title>
</head>
<body>
	<h1>Data Mahasiswa</h1>

	<table border="1" cellpadding="10" cellspacing="0">
		<tr>
			<th>No.</th>
			<th>Aksi</th>
			<th>Photo</th>
			<th>NPM</th>
			<th>Nama</th>
			<th>Email</th>
			<th>Jurusan</th>
		</tr>
		<?php $no = 1; ?>
		<?php while ($row = mysqli_fetch_assoc($result)) : ?>
		<tr>
			<td><?php echo $no; ?></td>
			<td>
				<a href="">Edit</a> | 
				<a href="">Delete</a>
			</td>
			<td><img src="img/<?php echo $row["gambar"]; ?>"></td>
			<td><?php echo $row["npm"]; ?></td>
			<td><?php echo $row["nama"]; ?></td>
			<td><?php echo $row["email"]; ?></td>
			<td><?php echo $row["jurusan"] ?></td>
		</tr>
		<?php $no++; ?>
		<?php endwhile ?>
	</table>
</body>
</html>