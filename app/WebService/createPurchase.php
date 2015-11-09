<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Productosp = $_GET["productos"];  //utiliza un valor decimal
$Productos     = mysql_real_escape_string($Productosp);

$myArray = explode(',', $Productos);

$Clientep = $_GET["cliente"];  //utiliza un valor decimal
$Cliente     = mysql_real_escape_string($Clientep);


$qurP = mysql_query("SELECT id FROM compras ORDER BY id DESC LIMIT 1;");

$idPurchase = 0;
while($res = mysql_fetch_array($qurP)){
	extract($res);
	$idPurchase = $id +1;
}

$qurU = mysql_query("SELECT id as idCliente FROM clientes c where c.correo = '$Cliente' ;");

$idClient = 0;
while($res = mysql_fetch_array($qurU)){
	extract($res);
	$idClient = $idCliente;
}

$result = array();
$Cant = 0;
foreach ($myArray as &$valor) {

	$produc = intval($valor);
    $qur = mysql_query("insert into compras values('$idPurchase', '$valor','$idClient', 1,curdate())");
    $Cant = $Cant +1;
    $result[] = array("valid" => $qur);
}
//call query


@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);