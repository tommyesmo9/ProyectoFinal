<?php

	include ('conexion.php');
	
	if (isset($_POST['btoactualizar'])) {

				$apaciente = $_POST['apaciente'];
				$aedad = $_POST['aedad'];
				$anacimiento = $_POST['anacimiento'];
				$aprocedencia = $_POST['aprocedencia'];
				$atelefono = $_POST['atelefono'];
				$afecha = $_POST['afecha'];
				$amc = $_POST['amc'];
				$ahx = $_POST['ahx'];
				$aante = $_POST['aante'];
				$aef = $_POST['aef'];
				$and = $_POST['and'];
				$aic = $_POST['aic'];
				$apt = $_POST['apt'];
				$ape = $_POST['ape'];
				$aref = $_POST['aref'];
				
				

				$aid= $_POST['id'];

		$consulta = "UPDATE reg SET 
		ante = '".$aante."', edad = '".$aedad."', ef = '".$aef."', fecha = '".$afecha."', hx = '".$ahx."', ic = '".$aic."', mc = '".$amc."', nacimiento = '".$anacimiento."', nd = '".$and."', paciente = '".$apaciente."', pe = '".$ape."', procedencia = '".$aprocedencia."', pt = '".$apt."', ref = '".$aref."', telefono = '".$atelefono."' WHERE id = '$aid'";

		$resultado = mysqli_query($con, $consulta);
		
	echo'<!DOCTYPE html>';
	echo'<html>';
	echo'<head>';
	echo'<title>Actualizacion de datos</title>';
	echo"<link rel='stylesheet' type='text/css' href='css/bootstrap.min.css'>";
	echo"<script type='text/javascript' src = 'js/bootstrap.min.js'></script>";
	echo"<script type='text/javascript' src = 'jquery.js'></script>";
	echo'</head>';
	echo "<body class='row bg-secondary justify-content-center align-items-center vh-100'>";
	
	echo "<div class='alert alert-info' role= 'alert' style='width: 400px; height: auto;'>
		Los datos fueron actualizados con exito!
	</div>";
		
	echo '</body>';
	echo '</html>';


		mysqli_close($con);
		header("refresh:3; url=mostrar.php");
	}

?>

