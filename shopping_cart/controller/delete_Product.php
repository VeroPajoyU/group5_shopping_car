<?php 

$id=$_POST['id'];
require '../model/conex.php';


//Productos Eliminados
$query = "Delete 
          FROM productos 
          WHERE id_producto = ".$id;

if($link->query($query)) { 							
    echo "true";  	
}else {
    echo "false";
}

?>