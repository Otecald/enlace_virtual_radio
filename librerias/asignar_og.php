<?php
function asignar_open_graph($og_nombre,$og_describir,$titulo,$tabulador){
	$ini = "\n".$tabulador.$tabulador;
	$og = "<meta property=\"og:";
	$fin = "\" />";
	return $og."site_name\" content=\"".$og_nombre.$fin
		. $ini.$og."description\" content=\"".$og_describir.$fin
		. $ini.$og."image\" content=\""."sitio/img/logo.png".obtener_tiempo("a").$fin
		. $ini."<title>".$titulo."</title>"
		. $ini."<link rel=\"icon\" href=\""."sitio/img/favicon.png".obtener_tiempo("a").$fin
	;
}
?>
