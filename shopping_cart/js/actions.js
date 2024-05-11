$(function(){

//Eliminar producto
    $(function(){
        $(".btn-delete").click( function(e){
        e.preventDefault();
        url = $(".btn-delete").attr("href");
        val = $(this).attr("value");
        product=$(this).attr("product");
        Swal.fire({
      title: "Estas seguro de eliminar "+product+"?",
      text: "Esta acción no se podrá revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        $.post( "../controller/delete_product.php",{id: val}, function(estado){
            if(estado =="true"){
                
                Swal.fire({
                    title: "Eliminado!",
                    text: "El producto ha sido eliminado.",
                    icon: "success",
                    showConfirmButton: false
                  });
                  setTimeout(function(){
                    location.reload();
                }, 1000);

             }else{
                
                Swal.fire({
                    title: "No Eliminado!",
                    text: "El producto no ha sido eliminado.",
                    icon: "danger",
                    showConfirmButton: false
                  });

             }
        });
      }
    });
            
        });
    });
//----------------------------------------------------------------
//Agregar producto
$(function(){
  $("#btn-agregar").click( function(e){
  e.preventDefault();
  var nombre =  document.getElementById("nombre").value;
  var precio = document.getElementById("precio").value;
  var descripcion = document.getElementById("descripcion").value;
  var cantidad= document.getElementById("cantidad").value;
  var marca = document.getElementById("marca").value;
  var talla =  document.getElementById("talla").value;
  var color = document.getElementById("color").value;
  var categoria = document.getElementById("categoria").value;
  var valores = { nombre: nombre, precio: precio, descripcion: descripcion, cantidad: cantidad, marca: marca,talla: talla, color: color,categoria: categoria};

$.post( "../controller/agregar_producto.php",valores, function(estado){
  //alert(estado);
  if(estado =="true"){
                
    Swal.fire({
        title: "Agregado!",
        text: "El producto ha sido agregado.",
        showConfirmButton: false,
        icon: "success"
      }
    );
    setTimeout(function(){
      window.location.href = "../views/listar_Productos.php";
  }, 2000);
   


 }else{
    
    Swal.fire({
        title: "No Agregado!",
        text: "El producto no ha sido agregado.",
        showConfirmButton: false,
        icon: "danger"
      });
    }
  
})

 
      
  });
});

//----------------------------------------------------------------
//Actualizar producto
$(function(){
  $("#btn-actualizar").click( function(e){
  e.preventDefault();
  var nombre =  document.getElementById("nombre").value;
  var precio = document.getElementById("precio").value;
  var descripcion = document.getElementById("descripcion").value;
  var cantidad= document.getElementById("cantidad").value;
  var marca = document.getElementById("marca").value;
  var talla =  document.getElementById("talla").value;
  var color = document.getElementById("color").value;
  var categoria = document.getElementById("categoria").value;
  var id = document.getElementById("id").value;
  var valores = { id:id,nombre: nombre, precio: precio, descripcion: descripcion, cantidad: cantidad, marca: marca,talla: talla, color: color,categoria: categoria};

$.post( "../controller/actualizar_producto.php",valores, function(estado){
  //alert(estado);
  if(estado =="true"){
                
    Swal.fire({
        title: "Actualizado!",
        text: "El producto ha sido actualizado.",
        showConfirmButton: false,
        icon: "success"
      }
    );
    setTimeout(function(){
      window.location.href = "../views/listar_Productos.php";
  }, 2000);
   


 }else{
    
    Swal.fire({
        title: "No Actualizado!",
        text: "El producto no ha sido actualizado.",
        showConfirmButton: false,
        icon: "danger"
      });
    }
  
})

 
      
  });
});

});

/*$.each( valores, function( key, value ) {
  alert( key + ": " + value );
});*/