<?php 
require 'functions.php';

$id = $_GET["id"];

if( delete($id) > 0 ) {
	echo "
		<script>
			alert('Delete Item Success!!');
			document.location.href = 'index.php';
		</script>
	";
} else {
	//menampilkan error query mysql
	echo mysqli_error($conn);
	
	echo "<script>
			alert('Delete Item Fail!!');
			document.location.href = 'index.php';
		</script>";

}
?>