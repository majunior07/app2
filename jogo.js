
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
// o atributo .search
// retorna apenas a query String da URL, tudo que está a direita do 
// ponto de interrogação, inclusive o ponto de interrogação
nivel = nivel.replace('?', '')
//.replace('?',''), para remover ? da String, passando o caracter que
//queremos localizar, e o caracter que vai substitui-lo.

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() { 
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {

		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'

	} else {

		document.getElementById('cronometro').innerHTML = tempo
		// .innerHTML é o valor contido entre as tags <span id="cronometro"></span>
		// tudo que vai entre as tags é inner, está dentro

	}
	
}, 1000)

function posicaoRandomica() { 

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) { 
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'

		} else { 
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

		    vidas++

	    }
	}

	var posicaoX = Math.floor(Math.random() * largura) -90 //largura
	var posicaoY = Math.floor(Math.random() * altura) -90 //altura

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
			// quando é utilizado o return, não é necessário utilizar o break

		case 1:
			return 'mosquito2'
			// quando é utilizado o return, não é necessário utilizar o break

		case 2:
			return 'mosquito3'
			// quando é utilizado o return, não é necessário utilizar o break
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return "ladoA"

		case 1:
			return 'ladoB'

	}
}