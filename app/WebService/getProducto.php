<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Id = $_GET["id"];
$Id2     = mysql_real_escape_string($Id);

$qurP = mysql_query("Select c.porcentajeDescuento from configuraciones c where c.id = 1");

$discount = 0;
while($res = mysql_fetch_array($qurP)){
	extract($res);
	$discount = $porcentajeDescuento;
}

//call query
$qur = mysql_query("select p.id, p.nombre, p.descripcion, p.imagen, p.precio, p.precioOferta, p.categoria, p.subCategoria
 from productos p where p.id = '$Id2' ");

$result = array();
while($r = mysql_fetch_array($qur)){
  extract($r);

  $qur2 = mysql_query("select r.descripcion as descrip, c.nombre as name from resenas r, clientes c
  where r.idProducto = '$id' and r.idCliente = c.id");

  $resenas = array();
  while($r2 = mysql_fetch_array($qur2)){
    extract($r2);
    $resenas[] = array("nom" => $name, "descrip" => $descrip);
  }

  if($precioOferta==0){
  	$precioFrecuente = $precio - ($precio * $discount);
  	$result[] = array("id" => $id, "nombre" => $nombre, "descripcion" => $descripcion, "imagen" => $imagen,
   "precio" => $precio, "precioOferta" => strval($precioFrecuente), "categoria" => $categoria,
    "subcategoria" => $subCategoria, "inventario" => true, "resenas" => $resenas);

  }else{
  	$precioFrecuente = $precioOferta - ($precioOferta * $discount);
  	$result[] = array("id" => $id, "nombre" => $nombre, "descripcion" => $descripcion, "imagen" => $imagen,
   "precio" => $precioOferta, "precioOferta" => strval($precioFrecuente), "categoria" => $categoria,
    "subcategoria" => $subCategoria, "inventario" => true, "resenas" => $resenas);
  }
}
@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);