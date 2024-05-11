<?php 
function Conectarse() 
{ 
$cons_usuario="root";
$cons_contra="";
$cons_base_datos="shoppingcart";
$cons_equipo="127.0.0.1";
 if (!($link=mysqli_connect($cons_equipo,$cons_usuario,$cons_contra,$cons_base_datos)))
   { 
      echo "Error conectando a la base de datos.".$cons_base_datos;
      exit();
      
   }
else
    {
   return $link;
   }
}
$link=Conectarse();


?>