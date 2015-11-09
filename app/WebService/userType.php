<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Email = $_GET["email"];
$Email2     = mysql_real_escape_string($Email);

$Pass = $_GET["pass"];
$Pass2     = mysql_real_escape_string($Pass);
//call query
$qur = mysql_query("select true as boolean, c.esFrecuente from clientes c where c.correo = '$Email2' and c.password = '$Pass2' ");

$result = array();
$val1 = 0;
$frecuente = 0; 
while($r = mysql_fetch_array($qur)){
  extract($r);
  $val1 = $boolean;
  $frecuente = $esFrecuente;
}
if($val1 == 1){
	if($frecuente == 1){
		@mysql_close($conn);
		$result[] = array("type" => "clientFrecuente");
	}else{
		@mysql_close($conn);
		$result[] = array("type" => "client");
	}
}else {
	$qur = mysql_query("select true as boolean from administradores a where a.username = '$Email2' and a.password = '$Pass2' ");
	while($r = mysql_fetch_array($qur)){
  		extract($r);
  		$val1 = $boolean;
	}
	if($val1 == 1){
		@mysql_close($conn);
		$result[] = array("type" => "admin");
	}else {
		@mysql_close($conn);
		$result[] = array("type" => "false");
	}
}

header('Content-type: application/json');
echo json_encode($result);

