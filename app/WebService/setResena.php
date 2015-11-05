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

$Productop = $_GET["producto"];  //utiliza un valor decimal
$Producto     = mysql_real_escape_string($Productop);

$Descripcionp = $_GET["descripcion"];  //utiliza un valor decimal
$Descripcion    = mysql_real_escape_string($Descripcionp);

//call query
$qur = mysql_query("insert into resenas (idProducto,idCliente,descripcion) values('$Producto','$idClient','$Descripcion')");

$result[] = array("valid" => $qur);

@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);