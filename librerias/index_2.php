<?php

//include("nivel.php");
//$nivel = obtener_nivel();
$dir_lib = $nivel."librerias/";

$libs = array(
	"asignar_og"
);

for($i=0;$i<sizeof($libs);$i++){
	include($dir_lib.$libs[$i].".php");
}

guardar_registro("radio");

$nombre_sitio = "radio enlace virtual";

$arr_nom_sitio = preg_split("/\s/", $nombre_sitio);
$arr_Ra_En_Vi = array(
	ucfirst($arr_nom_sitio[0])
	, ucfirst($arr_nom_sitio[1])
	, ucfirst($arr_nom_sitio[2])
);
$arr_ra_en_vi = array(
	lcfirst($arr_nom_sitio[0])
	, lcfirst($arr_nom_sitio[1])
	, lcfirst($arr_nom_sitio[2])
);

$vir = $arr_ra_en_vi[2][0].$arr_ra_en_vi[2][1].$arr_ra_en_vi[2][2];

$tu = $arr_ra_en_vi[2][3] // t
	.$arr_ra_en_vi[2][4]  // u
	.$arr_ra_en_vi[2][5]  // a
	.$arr_ra_en_vi[2][6]; // l

$rad = $arr_ra_en_vi[0][0]; // r

// _ guion bajo
// __ espacio
// ___ porciento veinte
// ____ punto

$envira = $arr_ra_en_vi[1].$arr_ra_en_vi[2].$arr_ra_en_vi[0];
$envi = $arr_ra_en_vi[1].$arr_ra_en_vi[2];
$vi_en = $arr_ra_en_vi[2]."_".$arr_ra_en_vi[1];

//Textos obsoletos
// $ra__En__Vi = $arr_ra_en_vi[0]." ".$arr_Ra_En_Vi[1]." ".$arr_Ra_En_Vi[2];
// $Ra__En__Vi = $arr_Ra_En_Vi[0]." ".$arr_Ra_En_Vi[1]." ".$arr_Ra_En_Vi[2];
// $ra___En___Vi = $arr_ra_en_vi[0]."%20".$arr_Ra_En_Vi[1]."%20".$arr_Ra_En_Vi[2];
// $ra_b_En_Vi_b = $arr_ra_en_vi[0]." <b>".$arr_Ra_En_Vi[1]." ".$arr_Ra_En_Vi[2]."</b>";

// Comiendo En Vi Ra
$En__Vi__Ra = $arr_Ra_En_Vi[1]." ".$arr_Ra_En_Vi[2]." ".$arr_Ra_En_Vi[0];
$En___Vi___Ra = $arr_Ra_En_Vi[1]."%20".$arr_Ra_En_Vi[2]."%20".$arr_Ra_En_Vi[0];

$envir____tu____1 = $arr_ra_en_vi[1].$vir.".".$tu."."."1";
$envirad____1 =  $envi.$rad."1";

// Fin En Vi Ra

$sitio = $envira;
$titulo = $En__Vi__Ra;
$host = "http://".$sitio.".com.ar/";

$whatsapp = "Whatsapp"."%20"."de"."%20".$En___Vi___Ra;
$instagram = $envira;
$facebook = $envir____tu____1; // Antiguo $envira
$android = $envi;
$twitter = $envirad____1; // Antiguo $vi_en

$bienvenida = "Bienvenidos a <b>".$En__Vi__Ra."</b>.";
$bienvenida_open_graph = "Bienvenidos a ".$En__Vi__Ra;

$telefono = "54"."11"."56907108";
$idioma = "es";

$tabulador = "\x20";
$open_graph = asignar_open_graph($titulo,$bienvenida_open_graph,$titulo,$tabulador.$tabulador);
//echo $host."radio/estilo.css".obtener_tiempo("a");
//echo "https://api.whatsapp.com/send?l=".$idioma."&phone=".$telefono."&text=".$whatsapp.obtener_tiempo("c");

$res = file_get_contents($nivel."index_3.html");

$res = str_replace("open_graph", $open_graph, $res);
$res = str_replace("sitio", $host."sitio", $res);
$res = str_replace("\" tiempo_a", obtener_tiempo("a")."\"", $res);
$res = str_replace("'); tiempo_a;", obtener_tiempo("a")."');", $res);
$res = str_replace("\" tiempo_c", obtener_tiempo("c")."\"", $res);

echo $res;

?>
