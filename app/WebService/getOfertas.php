<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("127.0.0.1:3306", "root", "");
mysql_select_db('mnemonic', $conn);
//call query
$qur = mysql_query("select p.nombre, p.precio, p.precioOferta from productos p");

$result = array();
while($r = mysql_fetch_array($qur)){
  extract($r);

  $result[] = array("nombre" => $nombre, "precio" => $precio, "precioOferta" => $precioOferta);
}
@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);