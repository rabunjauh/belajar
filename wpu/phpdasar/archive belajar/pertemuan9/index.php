<?php  
require 'functions.php';
$mahasiswa = query("SELECT * FROM mahasiswa");

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