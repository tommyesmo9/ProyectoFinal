

<!DOCTYPE html>
<html>
<head>
	<title>Ingreso de datos</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<script type="text/javascript" src = "js/bootstrap.min.js"></script>
		<script type="text/javascript" src = "jquery-3.5.1.min.js"></script>
</head>
<body class="justify-content-center align-items-center vh-100">

	<div class="col-sm-4">
		<div class="container bg-white"  style="width: 480px;">

<form action="<?php echo htmlspecialchars(($_SERVER['PHP_SELF'])); ?>" method = "POST" class = "bg-white" style= "width: 440px; height: 1500px;"> 

<div class="container" font-aling = "center">
<H1 class= "text-center"> Ingreso de Empleados</H1>
<br>
<div class="form-group">
<input type="text" name="empleado" value="<?php if (isset($empleado)) echo($empleado)?>" class="form-control" style="width: 400px;"placeholder = "Ingrese el Nombre del Empleado">
<br>
</div>

<div class="form-group">
<input type="text" name="nacimiento" value="<?php if (isset($nacimiento)) echo($nacimiento)?>" class="form-control" style="width: 400px;" placeholder = "Ingrese Fecha de Nacimiento">
<br>
</div>
<br>


<div class="form-group">
<input type="text" name="dirección" value="<?php if (isset($dirección)) echo($dirección)?>" class="form-control" style="width: 400px;"placeholder = "Dirección del Empleado">
<br>
</div>

<div class="form-group">
<input type="text" name="telefono" value="<?php if (isset($telefono)) echo($telefono)?>" class="form-control" style="width: 400px;"placeholder = "Teléfono">
<br>
</div>

<div class="form-group">
<input type="text" name="sueldo" value="<?php if (isset($sueldo)) echo($sueldo)?>" class="form-control" style="width: 400px;"placeholder = "Sueldo del Empleado">
<br>
</div>




<div class="form-group text-center">
<input type="submit" name="submit" class="btn btn-outline-dark" value="Enviar">
<a class="btn btn-outline-primary" href="index.html" role="button">Regresar</a>
</div>
<?php
	include ("validad.php");
?>
</div>
</form>
</div>
</div>
</body>
</html>