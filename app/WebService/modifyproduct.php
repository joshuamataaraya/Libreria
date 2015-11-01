<?php
//connect
ini_set('display_errors', 1);
$conn = mysql_connect("localhost", "root", "");
mysql_select_db('mnemonic', $conn);

$qur = "update productos set nombre = ";

$Nombrep = $_GET["nombre"];
$Nombre     = mysql_real_escape_string($Nombrep);

if(empty($Nombre)){
   $qur = $qur . 'nombre';
 }else{
 	$qur = $qur . "'".$Nombre."'";
 }

$qur = $qur .', descripcion =';

$Descripcionp = $_GET["descripcion"];
$Descripcion     = mysql_real_escape_string($Descripcionp);

if(empty($Descripcion)){
   $qur = $qur . 'descripcion';
}else{
 	$qur = $qur ."'".$Descripcion."'";
}

$qur = $qur .', imagen =';

$Imagenp = $_GET["imagen"];
$Imagen     = mysql_real_escape_string($Imagenp);

if(empty($Imagen)){
   $qur = $qur . 'imagen';
}else{
 	$qur = $qur ."'".$Imagen."'";
}

$qur = $qur .', precio =';

$Precio = $_GET["precio"];
if(empty($Precio)){
   $qur = $qur . 'precio';
}else{
 	$qur = $qur . $Precio;
}

$qur = $qur .', categoria =';

$Categoriap = $_GET["categoria"];
$Categoria    = mysql_real_escape_string($Categoriap);

if(empty($Categoria)){
   $qur = $qur . 'categoria';
}else{
 	$qur = $qur ."'".$Categoria."'";
}

$qur = $qur .', subCategoria =';

$SubCategoriap = $_GET["subcategoria"];
$SubCategoria     = mysql_real_escape_string($SubCategoriap);
if(empty($SubCategoria)){
   $qur = $qur . 'subCategoria';
}else{
 	$qur = $qur ."'".$SubCategoria."'";
}

$qur = $qur . " where id = ";

$id = $_GET["id"];

if(empty($id)){
   $qur = $qur . 'NULL';
}else{
 	$qur = $qur . $id;
}

//call query
$qur2 = mysql_query($qur);

$result[] = array("valid" => $qur2);

@mysql_close($conn);
/*Output*/
header('Content-type: application/json');
echo json_encode($result);