<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Clientep = $_GET["cliente"];  //utiliza un valor decimal
$Cliente     = mysql_real_escape_string($Clientep);

$qurU = mysql_query("SELECT id as idCliente FROM clientes c where c.correo = '$Cliente' ;");

$idClient = 0;
while($res = mysql_fetch_array($qurU)){
	extract($res);
	$idClient = $idCliente;
}

//call query
$qur = mysql_query("select distinct p.id, p.nombre, p.descripcion, p.imagen, p.precio, p.precioOferta, p.inventario, p.categoria, p.subCategoria
from productos p, compras c where c.Clientes_Id = '$idClient' and c.Productos_id = p.id");

$result = array();
while($r = mysql_fetch_array($qur)){
  extract($r);
  
  $result[] = array("id" => $id, "nombre" => $nombre, "descripcion" => $descripcion, "imagen" => $imagen,
   "precio" => $precio, "precioOferta" => $precioOferta, "categoria" => $categoria, 
   "subcategoria" => $subCategoria, "inventario" => $inventario);
}

@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);