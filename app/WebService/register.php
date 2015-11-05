<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Correop = $_GET["correo"];  
$Correo     = mysql_real_escape_string($Correop);

$qurU = mysql_query("SELECT true as bool FROM clientes c where c.correo = '$Correo' ;");

$correoE = 0;
while($res = mysql_fetch_array($qurU)){
	extract($res);
	$correoE = $bool;
}

$Nombrep = $_GET["nombre"];  
$Nombre     = mysql_real_escape_string($Nombrep);

$Contrasenap = $_GET["contrasena"];  
$Contrasena     = mysql_real_escape_string($Contrasenap);

$result = array();

if($correoE == 1){
	$result[] = array("valid" => "false");
}else{
	$qur = mysql_query("insert into clientes (nombre,password,correo, esFrecuente) values('$Nombre','$Contrasena','$Correo',false);");
	$result[] = array("valid" => strval($qur));
}

//call query



@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);