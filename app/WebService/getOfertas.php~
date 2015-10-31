<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("127.0.0.1:3306", "root", "");
mysql_select_db('mnemonic', $conn);
//call query
$qur = mysql_query("select p.nombre, p.precio, p.precioOferta, p.imagen from productos p where p.esOferta = true");

$result = array();
while($r = mysql_fetch_array($qur)){
  extract($r);
<<<<<<< HEAD

  $result[] = array("nombre" => $nombre, "precio" => $precio, "precioOferta" => $precioOferta);
=======
  
  $result[] = array("nombre" => $nombre, "precio" => $precio, "precioOferta" => $precioOferta, "imagen" => $imagen);
>>>>>>> a44fa45a31d0f91eca72ecdd63955e69393c1e75
}
@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);
