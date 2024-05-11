<?php 
require '../model/conex.php';

   $nombre =  $_POST['nombre'];
   $precio = $_POST['precio'];
   $descripcion = $_POST['descripcion'];
   $cantidad= $_POST['cantidad'];
   $marca = $_POST['marca'];
   $talla =  $_POST['talla'];
   $color = $_POST['color'];
   $categoria = $_POST['categoria'];
   $id = $_POST['id'];

//echo $nombre.$precio;


 $query="update productos set nombre_producto=('".$nombre."'),"." ".
        "costo_producto=('".$precio."'),"." ".
        "Descripcion_producto=('".$descripcion."'),"." ".
        "cantidad_producto=('".$cantidad."'),"." ".
        "id_marca_producto=('".$marca."'),"." ".
        "id_talla_producto=('".$talla."'),"." ".
        "id_color_producto=('".$color."'),"." ".
        "id_categoria_producto=('".$categoria."') where id_producto=".$id;
        
        if($link->query($query)) { 	
            echo "true";  	
        }else {
            echo "false";
        }

//echo $query;
?>