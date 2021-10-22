

// let distance = parseInt(prompt('Indica numero di chilometri che vuole percorrere'))
// 	if (isNaN(distance)){
// 		alert('numero di chilometri indicato di defolt 1km')
// 		distance = 1
// 	}
// let age = parseInt(prompt('Indicare l’età del passeggero'))
// 	if (isNaN(age)){
// 		alert('Valore sbagliato aggiorna la pagina e riprova')
// }

// let price = distance * 0.21;
// 	if (age < 18) {
// 		price -= price * 20 / 100
// 	}	
// 	else if (age > 60) {
// 		price -= price * 40 / 100
// 	}
// 	alert(`DA PAGARE ${(parseInt(price * 100)) / 100} $`); 




// ref
const bottoneGenera = document.getElementById('btn-genera');
const bottoneAnnulla = document.getElementById('btn-annulla');
const biglietto = document.getElementById('biglietto');

// gen biglietto
bottoneGenera.addEventListener('click',
function() {
	//ottenere valori input
	const nome = document.getElementById('nome').value;
	console.log(nome)
	
	const km = parseInt(document.getElementById('km').value);
	console.log(km)

	const fasciaEta = document.getElementById('fascia-eta').value;
	console.log(fasciaEta);

	
	// calcolo biglietto
	let costoBiglietto = km * 0.21;
	let offerta = 'Biglietto standard';

	// calcolo sconti 
	if(fasciaEta === 'minorenne') {
		costoBiglietto -= costoBiglietto * 0.2; 
		offerta = 'Sconto minori'
	} else if (fasciaEta === 'over65') {
		costoBiglietto -= costoBiglietto * 0.4; 
		offerta = 'Sconto Over 65'
	}
		costoBiglietto = costoBiglietto.toFixed(2)
		console.log(costoBiglietto)
	// numero carozza
	const numCarozza = Math.floor(Math.random() * 9) + 1;

	// CP
	const codiceCp = Math.floor(Math.random() * 10000) + 90000;
	
	// inserire valori
	document.getElementById('nome-passeggero').innerHTML = nome;
	document.getElementById('offerta-applicata').innerHTML = offerta;
	document.getElementById('carrozza').innerHTML = numCarozza;
	document.getElementById('codice-cp').innerHTML = codiceCp;
	document.getElementById('costo').innerHTML = costoBiglietto;
	
	if (costoBiglietto === 'NaN' ) {
		alert('Something go wrong!!')
	} 

	// mostra il biglietto
	biglietto.classList.remove('d-none')
})


// RESET
bottoneAnnulla.addEventListener('click', 
function() {
	biglietto.classList.add('d-none')

	document.getElementById('nome').value = '';
	
	document.getElementById('km').value = '';

	document.getElementById('fascia-eta').value = 'minorenne';
})