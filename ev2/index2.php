"<?php";
if( isset($_GET["admin"]) ){
	include("sub/php/admin.php");
}else{
	include("sub/php/biblioteca/obtener_tiempo.php");
	$html = file_get_contents("sub/html/index.html");
	$html_2 = str_replace(".js", ".js".obtener_tiempo("a") , $html);
	echo $html_2;
}
echo "<!-- Fin index2.php vB5 -->";
