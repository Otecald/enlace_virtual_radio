<?php
header('Cache-Control: no-cache,no-store,must-revalidate,max-age=0');
header('Accept-Ranges: none');
header('Connection: close');
header('Content-Type: audio/aacp');
header('X-Clacks-Overhead: GNU Terry Pratchett');
header('icy-br: 26');
header('icy-genre: Various');
header('icy-name: caracol');
header('icy-notice1: <BR>This stream requires <a href="http://www.winamp.com">Winamp</a><BR>');
header('icy-notice2: SHOUTcast DNAS/posix(linux x64) v2.5.5.733<BR>');
header('icy-pub: 0');
header('icy-sr: 22050');

//header('Date: Fri, 18 Dec 2020 04:58:50 GMT');
//header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
//header('Pragma: no-cache');
//header('Server: Icecast 2.4.2');
//header('ice-audio-info: ice-bitrate=32;ice-samplerate=44100;ice-channels=2');
//header('access-control-allow-origin: *');

$enlace = "http://streaming2.locucionar.com:8255/stream" //."?tiempo=".date_timestamp_get(date_create())
;

$link = $enlace;

$handle = fopen($link, 'r');
while (($data = fread($handle, 1024))) {
    echo $data;
    ob_flush();
    flush();
}

//ob_start();
//$archivo = fopen($enlace, "r");
//$x = fread($archivo, /*1024*44*/ 44100);
//echo $x;
//ob_flush();
//flush();
//fclose($archivo);

?>