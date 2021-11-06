<?php

	include ('conexion.php');

	if (isset($_GET['id'])) {

		$codigo = $_GET['id'];
		$consulta = "DELETE FROM reg 	WHERE 	id = $codigo;";
		$resultado = mysqli_query($con, $consulta);

		if ($resultado === true) {
			
			header('location: mostrar.php');
		}

		else {

			echo "Error!";
		}
	}
?>