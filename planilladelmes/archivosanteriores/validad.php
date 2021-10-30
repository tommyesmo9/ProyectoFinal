<?php
	
		if (isset($_POST['submit'])) {
			
			#llamamos la conexion a la base de datos
			include ('conexion.php');

			#asignamos las variables del form
				$paciente = $_POST['paciente'];
				$edad = $_POST['edad'];
				$nacimiento = $_POST['nacimiento'];
				$procedencia = $_POST['procedencia'];
				$telefono = $_POST['telefono'];
				$fecha = $_POST['fecha'];
				$mc = $_POST['mc'];
				$hx = $_POST['hx'];
				$ante = $_POST['ante'];
				$ef = $_POST['ef'];
				$nd = $_POST['nd'];
				$ic = $_POST['ic'];
				$pt = $_POST['pt'];
				$pe = $_POST['pe'];
				$ref = $_POST['ref'];

			#creamos la consulta para guardar en la base de datos

			$consulta = "INSERT INTO reg (ante, edad, ef, fecha, hx, ic, mc, nacimiento, nd, paciente, pe, procedencia, pt, ref, telefono) VALUES ('$ante','$edad','$ef','$fecha','$hx','$ic','$mc','$nacimiento','$nd','$paciente','$pe','$procedencia','$pt','$ref','$telefono')";
			

			#ejecutamos la consulta
			

			$resultado = mysqli_query($con,$consulta);

			#mostrar el resultado de la consulta

			if (!$resultado) {
				
				echo "<div class = 'alert alert-danger' role = 'alert' style='width:400px; height:auto;'><p>Error, no se guardaron los datos correctamente</div></p>";
			}

			else {
				echo "<div class = 'alert alert-info role = 'alert'style=' width:400px; height:auto;'><p>Guardado Exitoso</div></p>";
			}

			mysqli_close($con);
			header("refresh:5; url=datos.php");

		}
?>