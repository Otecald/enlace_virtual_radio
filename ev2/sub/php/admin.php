<!DOCTYPE html><?php
$json_array = json_decode( file_get_contents("sub/json/administrado.json") );
?><html>
	<head>
		<meta charset="utf-8" />
		<title>Administración - Enlace Virtual</title>
		<meta property="og:site_name" content="Administración - Enlace Virtual" />
		<meta property="og:description" content="Para administrar Enlace Virtual." />
		<meta property="og:image" content="https://enlacevirtual.com.ar/sub/img/original/logo.png" />
		<script src="sub/js/administrador.js" ></script>
	</head>
	<body>
		<center>
			<h1>Administración de Enlace Virtual</h1>
			<table border="1px">
				<tr><td><b>Variable</b></td><td><b>Descripción</b></td><td><b>Valor</b></td><td><b>Escribir entrada</b></td></tr>
<?php
foreach ($json_array as &$elemento) {
	echo "\t\t\t\t<tr>";
	foreach ($elemento as &$valor) {
		echo "<td>$valor</td>";
	}
	echo '<td><input onkeyup="teclear(event,this)"/><button onclick="comprobar_click(event,this)" >ok</button></td>';
	echo "</tr>\n";
}
?>
			</table>
		</center>
	</body>
</html>
<!-- Fin administación v10 -->
