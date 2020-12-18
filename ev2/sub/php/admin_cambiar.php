<?php
$parametrizado = $_GET["parametrizado"];

$texto_administrado = file_get_contents("../json/administrado.json");
$array_administrado = json_decode($texto_administrado);
$array_parametrizado = json_decode($parametrizado);

$valor_nuevo    = $array_parametrizado[0];
$variable       = $array_parametrizado[1];
$informe        = $array_parametrizado[2];
$valor_anterior = $array_parametrizado[3];

$array_parametrizado[3] = $valor_nuevo;

$json_texto = json_encode($array_parametrizado);

echo $json_texto;
?>
