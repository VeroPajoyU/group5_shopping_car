<?php 
include '../model/conex.php';
$primer_nombre=$_POST['primer_nombre'];
$segundo_nombre=$_POST['segundo_nombre'];
$primer_apellido=$_POST['primer_apellido'];
$segundo_apellido=$_POST['segundo_apellido'];
$tipo_documento=$_POST['tipo_documento'];
$numero_documento=$_POST['numero_documento'];
$correo=$_POST['correo'];
$clave=$_POST['clave'];
$direccion=$_POST['direccion'];
$telefono=$_POST['telefono'];
$area=$_POST['area'];
$programa=$_POST['programa'];
$id_ficha=$_POST['ficha'];



 $query = "SELECT COUNT(numero_identificacion) AS contar FROM usuarios WHERE numero_identificacion=('$numero_documento');";
 $consulta = mysqli_query($link, $query);
$array = mysqli_fetch_array($consulta);
if ($array['contar']>0) {
	//echo "el usuario ya esta registrado";

	
	header("location: ../register.php?ya_registrado=1");
}
else{
	$query="insert into  usuarios set primer_nombre=('".$primer_nombre."'),"." ".
								"segundo_nombre=('".$segundo_nombre."'),"." ".
								"primer_apellido=('".$primer_apellido."'),"." ".
								"segundo_apellido=('".$segundo_apellido."'),"." ".
								"tipo_doc=('".$tipo_documento."'),"." ".
								"numero_identificacion=('".$numero_documento."'),"." ".
								"correo=('".$correo."'),"." ".
								"clave=('".$clave."'),"." ".
								"direccion=('".$direccion."'),"." ".
								"telefono_usuario=('".$telefono."'),"." ".
								"id_area=('".$area."'),"." ".
								"id_programa=('".$programa."'),"." ".
								"id_ficha=('".$id_ficha."');";
								//echo $query;

$consulta = mysqli_query($link, $query);
if ($consulta == true) {
	//$mensaje= "1";
	header("location: ../register.php?mensaje=1");
	//echo "<script>alert(\"Mensaje enviado con éxito\");document.location='../formulario_nombre_programa.php'</script>";
}
else{
	//echo "Datos incorrectos";
	$mensaje= "2";
	header("location: ../register.php?mensaje=2");
}
}


//echo $primer_nombre." ".$segundo_nombre." ". $primer_apellido." ".$segundo_apellido." ".
    //$tipo_documento." ". $numero_documento." ".$correo." ". $clave." ".$direccion." ".$area." ".$programa."".$codigo_ficha;






 ?>