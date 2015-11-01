<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$Nombrep = $_GET["nombre"];
$Nombre     = mysql_real_escape_string($Nombrep);

$Descripcionp = $_GET["descripcion"];
$Descripcion     = mysql_real_escape_string($Descripcionp);

$Imagenp = $_GET["imagen"];
$Imagen     = mysql_real_escape_string($Imagenp);

$Precio = $_GET["precio"];

$Categoriap = $_GET["categoria"];
$Categoria     = mysql_real_escape_string($Categoriap);

$SubCategoriap = $_GET["subcategoria"];
$SubCategoria     = mysql_real_escape_string($SubCategoriap);

//call query
$qur = mysql_query("insert into productos (nombre,descripcion,imagen, esOferta,precio, 
	precioOferta, cantidad, categoria,subcategoria, inventario) 
	values('$Nombre','$Descripcion','$Imagen', 
	false, '$Precio', 0,1,'$Categoria','$SubCategoria',true)");

$result[] = array("valid" => $qur);

@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);