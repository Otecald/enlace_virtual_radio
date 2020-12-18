// Gen radio tango
function gen_radio_tango(){
	var tiempo_actual = "?" + Date.now()
	return "http://streaming2.locucionar.com:8670/stream" + tiempo_actual
}
function insertar_radio_tango(){
	window.el_audio = new Audio( gen_radio_tango() )
	window.el_audio.setAttribute("controls","true")
	window.el_audio.play()
	document.querySelector("#pe_radio_tango").appendChild(window.el_audio)
	return window.el_audio
}

// Gen radio alternativa
function gen_radio_alternativa(){
	var tiempo_actual = "?" + Date.now()
	return elemento_aleatorio(window.radios)[2] + tiempo_actual
}
function insertar_radio_alternativa(){
	window.el_audio = new Audio( gen_radio_alternativa() )
	window.el_audio.play()
	document.querySelector("#pe_radio_tango").appendChild(window.el_audio)
	return window.el_audio
}

// Extra

function gen_radio_66_70_255_8_url(puerto_procesado){
	var puerto = (puerto_procesado*2)+9300
	return [
		"e"+puerto_procesado
		, /*"Escuchanos Online"+*/" e" + puerto_procesado+" puerto "+puerto
		, "http://66.70.255.8:"+puerto+"/stream"
	]
}
window.radio_oficial = [
	[ 
		"<div>Presione aquí para escuchar </div><div>la radio <b>Enlace Virtual</b></div>"
		, "Radio Enlace Virtual"
		, "http://streaming2.locucionar.com:8670/stream"
	]
]
window.radios = [
	// [ "Plaaneta Musical","Plaaneta Musical (De Rodete o DJ Rodo)", "http://streaming.evolucionstreaming.com:9412/stream" ]
	// , [ "Bolly.Pe.Hu 1", "http://94.23.115.253:8027/" ]
	// , [ "Bolly.Pe.Hu 2", "http://94.23.115.253:8060/" ]
	// , [ "Bolly.Pe.Hu 3", "http://162.210.196.145:11309/" ]
]
window.lista_radios = "0 1 4 6 8 9 11 12 14 15 16 17 19 20 21 22 23 25 26 30 34 36 37 40 42 43 49 51 52 53 54 55 56 58 59 60 61 62 64 66 67 68 69 71 73 74 76 79 80 83 86 87 91 92 94 95 98 99 100 105 107 184 187 189 191 200 202 207 210 213 216 217 220 221 227 232 233 245 246 253 255 257 260 262 265 266 277 278 280 287 289 291 295 296 304 307 309 320 321 322 323 324 326 327 334 339 345 347"
.split(" ").map(function(x){return +x});
/*
var cantidad_radios = window.lista_radios.length
for(var i=0;i<350;i++){
	if(!window.lista_radios.includes(i)){
		window.lista_radios.push(i)
	}
}
*/
window.radios.push(
	...(window.lista_radios.map(function(x){
		return	gen_radio_66_70_255_8_url(x)
	}))
)
// window.radios.sort(function(a,b){return a[0]<b[0]?1:-1})
window.array_radios = [...window.radio_oficial,...window.radios]
function parar(){
	try{window.el_audio.pause()}catch(e){
		console.log( "No se pudo parar", window.el_audio.src )
	}
}
function reproducir(){
	parar()
	window.el_audio.src = window.el_audio.src.split("?")[0] + "?" + Date.now()
	try{window.el_audio.play()}catch(e){
		console.log( "No se pudo reproducir", window.el_audio.src )
	}
	//reproducir_radio_oficial()
}
function reproducir_boton(esto){
	var texto = esto.textContent
	var array_botones = Array.from(document.querySelectorAll("button[attr_puerto]"))
	var array_textos = array_botones.map(function(x){return x.textContent})
	var pos = array_textos.indexOf(texto)
	var radio_actual = window.array_radios[pos]
	window.el_audio.src = radio_actual[2] + "?" + Date.now()
	reproducir()
	document.querySelector("#radio_actual").innerHTML = radio_actual[1]
}
function elemento_aleatorio(x){
	return x[Math.floor(Math.random()*x.length)]
}
function cambiar_aleatoria(){
	var botones_radios = Array.from(document.querySelectorAll("button[attr_puerto]"))
	var radio_aleatoria = elemento_aleatorio(botones_radios)
	reproducir_boton(radio_aleatoria)
}
function insertar_botones(nombre_html){
	for(var i in window[nombre_html]){
		var boton = document.createElement("button")
		var puerto = window[nombre_html][i]
		boton.innerHTML = puerto[0]
		boton.setAttribute( "attr_puerto", puerto[1] )
		boton.addEventListener("click",function(){
			reproducir_boton(this)
		})
		document.querySelector("#"+nombre_html).appendChild(boton)
	}
}
function reproducir_radio_oficial(){
	var radio_actual = document.querySelector("#radio_actual").textContent
	var es_oficial = radio_actual == window.radio_oficial[0][1]
	clearTimeout(window.intervalo)
	if(!es_oficial){
		reproducir_boton(document.querySelector("#radio_oficial"))
		window.intervalo = setInterval(reproducir_radio_oficial,window.quince_minutos)
	}
}
//window.quince_minutos = 1000*60*15
//window.intervalo = setTimeout(reproducir_radio_oficial,quince_minutos)

// Inicio programa.js

function programa_2(){
	setTimeout(insertar_radio_tango,67)
	window.siete_minutos = 1039*61*7
	window.intervalo = setInterval(reproducir,siete_minutos)
}
programa_2()
// Fin programa.js

