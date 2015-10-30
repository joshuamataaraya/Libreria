<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "Lopezx01");
mysql_select_db('mnemonic', $conn);

$Name = $_GET["name"];
$Name2     = mysql_real_escape_string($Name);
//call query
$qur = mysql_query("select p.nombre, p.precio, p.imagen from productos p where p.categoria = '$Name2' ");

$result = array();
while($r = mysql_fetch_array($qur)){
  extract($r);
  
  $result[] = array("nombre" => $nombre, "precio" => $precio, "imagen" => $imagen);
}
@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);