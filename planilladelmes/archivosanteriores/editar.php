<?php

	include ('conexion.php');
	if (isset($_GET['id'])) {
		
			$codigo = $_GET['id'];

		echo $codigo;
		$consulta = "SELECT * FROM reg WHERE id=".$codigo.";";
		$resultado = mysqli_query($con, $consulta);
		$mostrar = mysqli_fetch_assoc($resultado);

	 ?>

		<!DOCTYPE html>
		<html>
		<head>
			<title>EDITAR DATOS</title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<script type="text/javascript" src = "js/bootstrap.min.js"></script>
		<script type="text/javascript" src = "jquery-3.5.1.min.js"></script>
		</head>
		
		<body background="imagenes/fondo.jpg" class="row bg-secondary justify-content-center align-items-center vh-100">
			
			<div class="col-sm-4">
				<div class="container bg-white">
					<form action="editar2.php" method="POST" class="bg-white" style="width: 600px; height: 1400px;">
						<h1 class="text-center">Actualizar Usuario</h1>
						
						<div class="form-group">
							<label>Nombre del Paciente:</label>
							<input type="text" name="apaciente" value="<?php echo $mostrar['paciente']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Edad:</label>
							<input type="text" name="aedad" value="<?php echo $mostrar['edad']; ?>" class="form-control" style="width: 550px;"></input>
						</div>
									

						<div class="form-group">
							<label>Fecha de Nacimiento:</label>
							<input type="text" name="anacimiento" value="<?php echo $mostrar['nacimiento']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Procedencia:</label>
							<input type="text" name="aprocedencia" value="<?php echo $mostrar['procedencia']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Teléfono:</label>
							<input type="text" name="atelefono" value="<?php echo $mostrar['telefono']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Fecha:</label>
							<input type="text" name="afecha" value="<?php echo $mostrar['fecha']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>MC:</label>
							<input type="text" name="amc" value="<?php echo $mostrar['mc']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Hx:</label>
							<input type="text" name="ahx" value="<?php echo $mostrar['hx']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Antecedentes:</label>
							<input type="text" name="aante" value="<?php echo $mostrar['ante']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>EF:</label>
							<input type="text" name="aef" value="<?php echo $mostrar['ef']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>ND:</label>
							<input type="text" name="and" value="<?php echo $mostrar['nd']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>IC:</label>
							<input type="text" name="aic" value="<?php echo $mostrar['ic']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Plan Terapeutico:</label>
							<input type="text" name="apt" value="<?php echo $mostrar['pt']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Plan Educacional:</label>
							<input type="text" name="ape" value="<?php echo $mostrar['pe']; ?>" class="form-control" style="width: 550px;"></input>
						</div>


						<div class="form-group">
							<label>Referencia a:</label>
							<input type="text" name="aref" value="<?php echo $mostrar['ref']; ?>" class="form-control" style="width: 550px;"></input>
						</div>
						
						<input type="hidden" name="id" value="<?php echo($codigo); ?>">
						<div class="form-group text-center">
							<input type="submit" name="btoactualizar" class="btn btn-outline-dark" value="Actualizar">&nbsp;&nbsp;&nbsp;<a class="btn btn-outline-primary" href="mostrar.php" role = "button">Regresar</a>
						</div>
					</form>
				</div>
			</div>
		</body>
		</html>

<?php

}

	?>