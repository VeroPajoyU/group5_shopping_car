
<!--A Design by Jose99mir
Author: Jose99mir
-->
<?php
$id= $_GET["id"];
 include '../model/conex.php';
$query= "select * from productos where id_producto=".$id;
$consulta = mysqli_query($link, $query);
$arrayProducto=mysqli_fetch_array($consulta);
?>
<!DOCTYPE HTML>
<html>
<head>
<title>Actualizar Productos</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>
<body>

	<div class="container">
		<div class="card-body d-flex justify-content-between align-items-center">	
         	<h2>ACTUALIZAR PRODUCTO</h2>

		</div>
			<div>
			<form>
			    <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Nombre Del Producto</label>
 				   <input class="form-control" type="text" id="nombre" value="<?php echo $arrayProducto['nombre_producto']?>">
 				</div>
				 <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Precio c/u</label>
 				   <input class="form-control" type="text" id="precio" value="<?php echo $arrayProducto['costo_producto']?>" >
 				</div>
				 </div>
				 <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Descripción del producto</label>
				   <textarea class="form-control" id="descripcion" ><?php echo $arrayProducto['descripcion_producto']?></textarea>
 				</div>
				 
				 <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Cantidad</label>
 				   <input class="form-control" type="text" id="cantidad" value="<?php echo $arrayProducto['cantidad_producto']?>">
 				</div>
				 <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Marca</label>
					
											<?php
											
										$QueryMarca= "SELECT id_marca, nombre_marca FROM marcas;";
										$ConsultaMarca= mysqli_query ($link, $QueryMarca);
										//--------------------------------------------------------
										$QueryMarcaNom= "SELECT  nombre_marca FROM marcas where id_marca=".$arrayProducto['id_marca_producto'];
										$ConsultaMarcanom= mysqli_query ($link, $QueryMarcaNom);
										$arraymarcaNom=mysqli_fetch_array($ConsultaMarcanom);
											?>
											
										 <SELECT id="marca"  class="form-control">
										 <option selected value="<?php echo $arrayProducto['id_marca_producto']?>" ><?php echo $arraymarcaNom['nombre_marca']?></option>
										 	<?php
										 	foreach ($ConsultaMarca as $OpcionesMarca ) : ?>
										    <option value="<?php echo $OpcionesMarca['id_marca'] ?>" > <?php echo $OpcionesMarca ['nombre_marca']; ?> </option>
										 			<?php endforeach ?>
										 </SELECT> 
										
 				</div>
				 <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Talla</label>

					<?php
											
											$QueryTalla= "SELECT id_talla, nombre_talla FROM tallas;";
											$ConsultaTalla= mysqli_query ($link, $QueryTalla);
											//--------------------------------------------------------
										$QueryTallaNom= "SELECT  nombre_talla FROM tallas where id_talla=".$arrayProducto['id_talla_producto'];
										$ConsultaTallanom= mysqli_query ($link, $QueryTallaNom);
										$arrayTallaNom=mysqli_fetch_array($ConsultaTallanom);
											?>
												
												
											 <SELECT id="talla"  class="form-control">
												 <option selected value="<?php echo $arrayProducto['id_marca_producto']?>" ><?php echo $arrayTallaNom['nombre_talla']?></option>
												 <?php
												 foreach ($ConsultaTalla as $OpcionesTalla ) : ?>
												<option value="<?php echo $OpcionesTalla['id_talla'] ?>" > <?php echo $OpcionesTalla['nombre_talla']; ?> </option>
														 <?php endforeach ?>
											 </SELECT> 


 				</div>
				 <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Color</label> 				   
					<?php
											
											$QueryColor= "SELECT id_color, nombre_color FROM colores;";
											$ConsultaColor= mysqli_query ($link, $QueryColor);
											//--------------------------------------------------------
										$QueryColorNom= "SELECT  nombre_color FROM colores where id_color=".$arrayProducto['id_color_producto'];
										$ConsultaColornom= mysqli_query ($link, $QueryColorNom);
										$arrayColorNom=mysqli_fetch_array($ConsultaColornom);
												?>
												
											 <SELECT id="color"  class="form-control">
											 <option selected value="<?php echo $arrayProducto['id_color_producto']?>" ><?php echo $arrayColorNom['nombre_color']?></option>
												 <?php
												 foreach ($ConsultaColor as $OpcionesColor ) : ?>
												<option value="<?php echo $OpcionesColor['id_color'] ?>" > <?php echo $OpcionesColor['nombre_color']; ?> </option>
														 <?php endforeach ?>
											 </SELECT> 


 				</div>
				 <div class="mb-3">
 				   <label for="exampleInputPassword1" class="form-label">Categoria</label>
 				   <?php
											
											$QueryCategoria= "SELECT id_categoria, nombre_categoria FROM categorias;";
											$ConsultaCategoria= mysqli_query ($link, $QueryCategoria);
											//--------------------------------------------------------
										$QueryCatNom= "SELECT  nombre_categoria FROM categorias where id_categoria=".$arrayProducto['id_categoria_producto'];
										$ConsultaCatnom= mysqli_query ($link, $QueryCatNom);
										$arrayCatNom=mysqli_fetch_array($ConsultaCatnom);
												?>
												
											 <SELECT id="categoria"  class="form-control">
											 <option selected value="<?php echo $arrayProducto['id_categoria_producto']?>" ><?php echo $arrayCatNom['nombre_categoria']?></option>
												 <?php
												 foreach ($ConsultaCategoria as $OpcionesCategoria ) : ?>
												<option value="<?php echo $OpcionesCategoria['id_categoria'] ?>" > <?php echo $OpcionesCategoria['nombre_categoria']; ?> </option>
														 <?php endforeach ?>
											 </SELECT> 


 				</div>
				 <input  type="hidden" id="id" value="<?php echo $arrayProducto['id_producto']?>">
 				<button type="submit" class="btn btn-success btn-sm" id="btn-actualizar">Actualizar</button>
			</form>
			</div>
										

	</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="../js/actions.js">


</script>
</body>	
</html>
