


let distance = parseInt(prompt('Indica numero di chilometri che vuole percorrere'))
	if (isNaN(distance)){
		alert('numero di chilometri indicato di defolt 1km')
		distance = 1
	}
let age = parseInt(prompt('Indicare l’età del passeggero'))
	if (isNaN(age)){
		alert('Valore sbagliato aggiorna la pagina e riprova')
}

let price = distance * 0.21;
	if (age < 18) {
		price -= price * 20 / 100
	}	
	else if (age > 60) {
		price -= price * 40 / 100
	}
	alert(`DA PAGARE ${(parseInt(price * 100)) / 100} $`); 

