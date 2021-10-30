

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
<H1 class= "text-center"> Adelantos de pagos</H1>
<br>
<div class="form-group">
<input type="text" name="id_empleado" value="<?php if (isset($id_empleado)) echo($id_empleado)?>" class="form-control" style="width: 400px;"placeholder = "Id del Empleado">
<br>
</div>

<div class="form-group">
<input type="text" name="monto_adelanto" value="<?php if (isset($monto_adelanto)) echo($monto_adelanto)?>" class="form-control" style="width: 400px;" placeholder = "Adelanto Pagado">
<br>
</div>
<br>


<div class="form-group">
<input type="text" name="fecha" value="<?php if (isset($fecha)) echo($fecha)?>" class="form-control" style="width: 400px;"placeholder = "Fecha de Realizado el Pago">
<br>
</div>




<div class="form-group text-center">
<input type="submit" name="submit" class="btn btn-outline-dark" value="Enviar">
<a class="btn btn-outline-primary" href="index.html" role="button">Regresar</a>
</div>

</div>
</form>
</div>
</div>
</body>
</html>