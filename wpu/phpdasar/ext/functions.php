 <?php 

	$conn = mysqli_connect("localhost", "root", "", "ext");

	function query($query){
		global $conn;
		$result = mysqli_query($conn, $query);

		$dataContainer = [];

		while ($data = mysqli_fetch_assoc($result)) {
			$dataContainer[] = $data;
		}

		return $dataContainer;

}
?>