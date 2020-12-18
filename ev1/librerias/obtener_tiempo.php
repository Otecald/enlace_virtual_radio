<?php
function obtener_tiempo($tipo){
	$tiempo_b = "";
	$tiempo = date_timestamp_get(date_create());
	if($tipo=="a"){$tiempo_b = "?".$tiempo;}
	if($tipo=="c"){$tiempo_b = "&tiempo=".$tiempo;}
	return $tiempo_b;
}
?>
