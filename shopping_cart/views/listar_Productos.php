
<!--A Design by Jose99mir
Author: Jose99mir
-->
<!DOCTYPE HTML>
<html>
<head>
<title>Listado de Productos</title>
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
         	<h2>LISTA DE PRODUCTOS</h2>

		 	<a href="frm_agregarProducto.php" class="btn btn-success btn-sm">
				Agregar
				<i class="bi bi-plus-square"></i>                
			</a>
		</div>
			<div>
											<table id="dynamic-table" class="table table-striped table-bordered table-hover">
												<thead>
													<tr>
												<th>Id </th>							
												<th>Producto</th>
												<th>Precio</th>
												<th>Descripción</th>						
												<th>Stock</th>																	
												<th>Editar</th>
												<th>Eliminar</th>                   	
												</thead>
												<tbody>
													<?php
											require '../model/conex.php' ;
											$query= "select id_producto, nombre_producto, costo_producto,descripcion_producto, cantidad_producto from productos";
                                                $consulta = mysqli_query($link, $query);
													?>
													<?php foreach ($consulta as $opciones): ?>
													<tr>
                                          				<td><?php echo $opciones['id_producto']; ?></td>
														<td><?php echo $opciones['nombre_producto']; ?></td>
														<td><?php echo $opciones['costo_producto']; ?></td>
														<td><?php echo $opciones['descripcion_producto']; ?></td>
								                        <td><?php echo $opciones['cantidad_producto']; ?></td>																									
                                                        <td>
															<a href="frm_actualizarProducto.php?id=<?php echo $opciones['id_producto']; ?>">                                                        		
														 		<button class="btn btn-warning">
																	<i class="bi bi-pencil-square"></i>
                                                        		</button>
															 </a>
                                                        </td>
                                                        <td>
														   
                                                        		
																<button  class=" btn btn-danger btn-delete" value="<?php echo $opciones['id_producto']; ?>" Product="<?php echo $opciones['nombre_producto']; ?>">
																    	<i class="bi bi-trash3-fill"></i>
															          </button>
																
                                                        	
                                                        </td>

												
													</tr>
													<?php endforeach ?>
													</tbody>
												</table>
			</div>
										

	</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="../js/actions.js">


</script>
</body>	
</html>
