<?php
include('conexion.php');
	if (isset($_POST['btoenviar'])) {

		$usuario=$_POST['usuario'];
		$clave=$_POST['clave'];
		
		$consulta="SELECT nombre FROM login WHERE usuario='$usuario' AND clave='$clave';";
		$resultado=mysqli_query ($con, $consulta);

		if (mysqli_num_rows($resultado)==1) {
				
				include('mostrar.php');
		}
		else{
			
			echo "<!DOCTYPE html>";
				echo "<html>";
				echo "<head>";
				echo "<title>Error!</title>";
				echo "<link rel='stylesheet' type='text/css' href='css/bootstrap.min.css'>";
				echo "<script type='text/javascript' src = 'js/bootstrap.mind.js'></script>";
				echo "<script type='text/javascript' src = 'jquery-3.5.1.min.js'></script>";
				echo "</head>";

				echo "<body class='row bg-primary justify-content-center align-items-center vh-100'>";
				echo "</body>";
				echo "</html>";
				echo "<div class='alert alert-info' role = 'alert' text-aling= 'center'><h2>Ningun usuario encontrado con esos datos!</h2></div>";

				header ("refresh:5; url=mostrar.php");

		};
	};
	
?>

te falta meter mas campos a la tabla...