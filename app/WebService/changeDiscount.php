<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Porcentajep = $_GET["porcentaje"];  //utiliza un valor decimal
$Porcentaje     = mysql_real_escape_string($Porcentajep);
//call query
$qur = mysql_query("update configuraciones set porcentajeDescuento = '$Porcentaje' where id = 1 ");


$result[] = array("valid" => $qur);

@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);