<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Name = $_GET["name"];
$Name2     = mysql_real_escape_string($Name);
//call query
$qur = mysql_query("select p.id, p.nombre, p.descripcion, p.imagen, p.precio, p.categoria, p.subCategoria
 from productos p where p.inventario = true and p.categoria = '$Name2' ");

$result = array();
while($r = mysql_fetch_array($qur)){
  extract($r);
  
  $result[] = array("id" => $id, "nombre" => $nombre, "descripcion" => $descripcion, "imagen" => $imagen,
   "precio" => $precio, "categoria" => $categoria, "subcategoria" => $subCategoria, "inventario" => true);
}
@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);