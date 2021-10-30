<?php

	include ('conexion.php');
	$consulta = "select * from reg";
	$resultado = mysqli_query($con, $consulta);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Notas</title>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<script type="text/javascript" src = "js/bootstrap.min.js"></script>
		<script type="text/javascript" src = "jquery-3.5.1.min.js"></script>
</head>
<body background='imagenes/fondo1.jpg' class="row bg-secondary justify-content-center aling-items-center vh-100">
	<div class="container">
		<form class = "bg-white" style= "width: 1600px; height: 600px;">
		<div class="container bg-white text-center" style="width: 1400px;">
			<h3 class="text-center">Datos de la tabla</h3>
	<table class="active text-center">
		
		<thead>
			<th class="text-center">Id</th>
			<th class="text-center">Paciente</th>
			<th class="text-center">Edad</th>
			<th class="text-center">Fecha de Nacimiento</th>
			<th class="text-center">Procedencia</th>
			<th class="text-center">Telefono</th>
			<th class="text-center">Fecha</th>
			<th class="text-center">MC</th>
			<th class="text-center">Hx</th>
			<th class="text-center">Antecedentes</th>
			<th class="text-center">EF</th>
			<th class="text-center">ND</th>
			<th class="text-center">IC</th>
			<th class="text-center">Plan Terapeutico</th>
			<th class="text-center">Plan Educacional</th>
			<th class="text-center">Referencia a</th>
		</thead>

		<tbody>
			<?php
			while ($filas=mysqli_fetch_assoc($resultado)){
			
			if (fmod($filas['id'], 2)==0) { 
				
				$color = 'table-primary';
			}

			else {

				$color = 'table-light';
			}
			?>
			<tr class="<?php echo($color)?>">
				
				<td class="text-center"><?php echo $filas['id'];?></td>
				<td class="text-center"><?php echo $filas['paciente'];?></td>
				<td class="text-center"><?php echo $filas['edad'];?></td>
				<td class="text-center"><?php echo $filas['nacimiento'];?></td>
				<td class="text-center"><?php echo $filas['procedencia'];?></td>
				<td class="text-center"><?php echo $filas['telefono'];?></td>
				<td class="text-center"><?php echo $filas['fecha'];?></td>
				<td class="text-center"><?php echo $filas['mc'];?></td>
				<td class="text-center"><?php echo $filas['hx'];?></td>
				<td class="text-center"><?php echo $filas['ante'];?></td>
				<td class="text-center"><?php echo $filas['ef'];?></td>
				<td class="text-center"><?php echo $filas['nd'];?></td>
				<td class="text-center"><?php echo $filas['ic'];?></td>
				<td class="text-center"><?php echo $filas['pt'];?></td>
				<td class="text-center"><?php echo $filas['pe'];?></td>
				<td class="text-center"><?php echo $filas['ref'];?></td>
				
				<td class="text-center">
					<a class="btn btn-outline-dark btn-sm" href="editar.php?id=<?php echo $filas['id']; ?>" role="button">Editar</a>
					<a class="btn btn-outline-danger btn-sm" href="eliminar.php?id=<?php echo $filas['id']; ?>" role="button">Eliminar</a>
				</td>

			</tr>
			<?php
			}
			?>
		</tbody>

	</table>
	<br>
	<a class="btn btn-outline-primary btn-lg" href="index.html" role = "button">Regresar</a>
	<br>
		<?php
			mysqli_close($con);
		?>
	</div>
	</div>
	<br>
</body>
</html>