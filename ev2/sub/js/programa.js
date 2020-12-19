window.rz = {
	registros: []
	, variables: {}
	, funciones: {
		programa: {
			agregar_código: function(url){
				var variables = {}
				var etiqueta = document.createElement("script")
				variables.fuente = url + "?" + Date.now()
				etiqueta.src = variables.fuente
				document.head.appendChild(etiqueta)

				rz.registros.push(["programa.agregar_código",variables])
				return etiqueta
			}
			, listar_cadena: function(cadena){
				return cadena.split(/\s+/).filter(x=>x)
			}
			, iniciar: function(){
				var variables = {}
				fetch("./sub/json/datos.json").then(x=>x.text()).then(x=>{
					rz.variables.configuración = JSON.parse(x)
				})
				variables.datos = rz.funciones.programa.listar_cadena(`
					./sub/js/audio.js`)
				variables.cargas = variables.datos.map(x=>{
					rz.funciones.programa.agregar_código(x)
				})
				
				setTimeout(function(){
					var lwp = document.querySelector("#link_whatsapp")
					// https://api.whatsapp.com/send?l=es&phone=541156907108&text=Whatsapp%20de%20Radio%20Enlace%20Virtual.
					lwp.href = lwp.href.replace(".com","p.com")
				},1000)

				setTimeout(function(){
					setInterval(function(){
						if(window.tiempo==undefined){
							window.tiempo = []
						}
						tiempo.push(document.querySelector("audio").currentTime)
						if(tiempo.length>100){
							tiempo.shift()
							if(tiempo[95]==tiempo[96]){
								var enlace = `${rz.variables.configuración.audio}?tiempo=${Date.now()}`
								document.querySelector("audio").src = enlace
								console.log("Tiempo: ",tiempo,enlace)
								tiempo = []
							}
						}
					},50)
				},3000)

				rz.registros.push(["programa.agregar_código",variables])
			}
		}
	}
}
window.ev = rz
rz.funciones.programa.iniciar()

