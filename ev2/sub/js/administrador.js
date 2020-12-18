function enviar(entrada){
	var valores = [entrada.value,...[...entrada.parentElement.parentElement.querySelectorAll("td")].slice(0,-1).map(x=>x.textContent)]
	var parametrizado = encodeURIComponent(JSON.stringify(valores))
	if(valores[0]!=""){
		fetch(`sub/php/admin_cambiar.php?parametrizado=${parametrizado}`).then(x=>x.text()).then(x=>{
			alert(x)
		})
	}
}
function teclear(evento,elemento){
	if (evento.key=="Enter") {
		evento.preventDefault()
		enviar(elemento)
	}
}
function comprobar_click(evento,elemento){
	evento.preventDefault()
	enviar( elemento.parentElement.querySelector("input") )
}
