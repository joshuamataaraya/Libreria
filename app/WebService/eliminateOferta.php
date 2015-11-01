<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Id = $_GET["id"];
$Id2     = mysql_real_escape_string($Id);
//call query
$qur = mysql_query("update productos
	set esOferta = false
    where id = '$Id2' ");


$result[] = array("valid" => $qur);

@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);