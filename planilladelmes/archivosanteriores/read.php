
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Buscar</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <script type="text/javascript" src = "js/bootstrap.min.js"></script>
        <script type="text/javascript" src = "jquery-3.5.1.min.js"></script>
</head>
<body class=" justify-content-left align-items-left ">
    <div class="col-sm-4">
        <div class="container bg-white"  style="width: 480px;">
    <form action="read.php" method="GET" class = "bg-white" style= "width: 1600px; height: 600px;">
      
      <div class="container" font-aling = "left">
<H1 class= "text-center"> Busqueda de Empleados</H1>
<br>  
        <div class="form-group">
        <input type="text" name="busqueda" class="form-control" style="width: 1200px;"placeholder = "Buscar Paciente">
        <input type="submit" name="enviar" value="Buscar" class="btn btn-outline-dark btn-lg">
        </div>
          
    </form>

<table class="active text-center">
        
        <thead>
            <th class="text-center">Id</th>
            <th class="text-center">Empleado</th>
            <th class="text-center">Fecha de Nacimiento</th>
            <th class="text-center">Direccion</th>
            <th class="text-center">Telefono</th>
            <th class="text-center">Sueldo</th>

            
        </thead>
    <tbody>

<?php
if (isset($_GET['enviar'])) {
$busqueda = $_GET['busqueda'];
include('conexion.php');


// 2) Preparar la orden SQL

$consulta= "SELECT * FROM reg WHERE paciente LIKE '%$busqueda%'";
$resultado = mysqli_query($con, $consulta);


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
                <td class="text-center"><?php echo $filas['empleado'];?></td>
                <td class="text-center"><?php echo $filas['nacimiento'];?></td>
                <td class="text-center"><?php echo $filas['direccion'];?></td>
                <td class="text-center"><?php echo $filas['telefono'];?></td>
                <td class="text-center"><?php echo $filas['sueldo'];?></td>
          

                <td class="text-center">
                    <a class="btn btn-outline-dark btn-sm" href="editar.php?id=<?php echo $filas['id']; ?>" role="button">Editar</a>
                    <a class="btn btn-outline-danger btn-sm" href="eliminar.php?id=<?php echo $filas['id']; ?>" role="button">Eliminar</a>
                </td>


            </tr>
            <?php
            }}
            ?>
        </tbody>

    </table>
    <br>
    <a class="btn btn-outline-primary btn-lg" href="index.html" role = "button">Regresar</a>
    <br>
        
</body>
</html>
</div>
</div>