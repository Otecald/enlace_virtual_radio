var host = "http://enlacevirtualradio.com.ar"

function descargar_página(){
	curl("http://enlacevirtualradio.com.ar",function(x){
		var html = document.createElement("html")
		html.innerHTML = x
		document.body.appendChild(html)
	})
}
function agregar_javascript(array_js){
	array_js.map(function(x){
		var script = document.createElement("script")
		script.src = x
		document.head.appendChild(script)
	})
}

function obtener_tiempo(tipo){
	var devuelve
	var tiempo = Date.now()
	if(tipo=="a"){devuelve="?"+tiempo}
	if(tipo=="c"){devuelve="&"+tiempo}
	return devuelve
}
function programa(){
	agregar_javascript([
		host+"/sitio/audio.js" + obtener_tiempo("a")
	])
	//setTimeout(descargar_página,72)
}

