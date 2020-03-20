<?php

include("nivel.php");
$nivel = obtener_nivel();

include($nivel."librerias/sin_cache.php");
include($nivel."librerias/obtener_tiempo.php");
evitar_cache();

$texto_index_2 = file_get_contents($nivel."index_2.php");
$texto_index_2 = str_replace("\x3c\x3f\x70\x68\x70", "", $texto_index_2);
$texto_index_2 = str_replace("\x3f\x3e", "", $texto_index_2);

eval($texto_index_2);

?>
