<?php

	$servidor = "localhost";
	$basededatos = "registro";
	$usuario = "ingresopas";
	$clave = "solola123";

	#conexiona base de datos

	$con = mysqli_connect($servidor, $usuario, $clave, $basededatos);

	#verificar conexion

	#if (!$con) {
		
		#die ("Error en la conexion: ".mysqli_connect_error());

#	}

#	echo "Conexion Exitosa";
#
	#cerramos conexion

#mysqli_close($con)

#?>