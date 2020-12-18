rz.funciones.audio = {
	cambiar_audio: function(fuente){
		var variables = {}
		variables.audio = document.querySelector("audio")
		variables.la_fuente = variables.audio.querySelector("source")

		variables.fuente = fuente + "?" + Date.now()

		variables.audio.src = variables.fuente
		variables.la_fuente.src = variables.fuente

		variables.audio.play()

		rz.registros.push(["audio.cambiar_audio",variables])
	}
	, obtener_audio: function(){
		return document.querySelector("audio")
	}
	, obtener_fuente: function(){
		return rz.variables.configuración && rz.variables.configuración.audio
	}
	, parar: function(){
		var audio = rz.funciones.audio.obtener_audio()
		try{audio.pause()}catch(e){
			console.log( "No se pudo parar", audio.src )
		}
	}
	, reproducir_10_segundos: function(){
		var audio = rz.funciones.audio.obtener_audio()
		var fuente = rz.funciones.audio.obtener_fuente()
		if( audio.paused /*|| audio.ended*/ ){
			rz.funciones.audio.parar()
			audio.src = fuente + "?" + Date.now()
			try{audio.play()}catch(e){
				console.log( "No se pudo reproducir", audio.src )
			}
		}
	}
	, reproducir_35_segundos: function(){
		var audio = rz.funciones.audio.obtener_audio()
		var fuente = rz.funciones.audio.obtener_fuente()
		rz.funciones.audio.parar()
		audio.src = fuente + "?" + Date.now()
		try{audio.play()}catch(e){
			console.log( "No se pudo reproducir", audio.src )
		}
	}
	, body_onload: function(){
		var variables = {}
		variables.tiempo_inicio = setTimeout(x=>rz.funciones.audio.cambiar_audio(rz.funciones.audio.obtener_fuente()),1000*2)
/*
		variables.intervalo_reiniciar = setInterval(rz.funciones.audio.reproducir_10_segundos,1000*10)
		variables.intervalo_reiniciar = setInterval(rz.funciones.audio.reproducir_35_segundos,1000*35)
*/
		rz.registros.push(["audio.esperar_inicio > document.body.onload",variables])
	}
	, esperar_inicio: function(){
		console.log("Ejecutado body onload")
		document.body.onload = rz.funciones.audio.body_onload
	}
}
rz.funciones.audio.esperar_inicio()

