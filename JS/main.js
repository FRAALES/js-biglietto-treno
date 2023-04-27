// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:




// il prezzo del biglietto è definito in base ai km (0.21 € al km) 




// va applicato uno sconto del 20% per i minorenni






// va applicato uno sconto del 40% per gli over 65.






// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).




// Dichiaro le mie variabili
let kmUtente;
let etaUtente;
const prezzoKm = 0.21;




// Chiedi all'utente quanti km vuole percorrere

kmUtente = parseInt (prompt("Quanti km vuoi percorrere?"));
console.log(kmUtente);


// Chiedi all’utente la sua età, 
etaUtente = parseInt (prompt("Quanti anni hai?"));
console.log(etaUtente);


// Moltiplica kmUtente per 0,21

prezzoSenzaSconto = parseInt (kmUtente * 0,21);
console.log(prezzoSenzaSconto);

// Definisci prezzo:

// Se età utente è < 18 anni, allora il prezzo va diminuito del 20%




// Se età utente è > 65 anni, allora il prezzo va diminuito del 40%


// Altrimenti età utente è > 18 anni e < 65 anni, il prezzo rimane quello che è (prezzo con lo sconto = prezzo senza sconto)








// Scriviamo messaggio per utente
messaggio = `Il prezzo del biglietto è ${prezzoSenzaSconto} euro`;
console.log(messaggio);

// Scrivi sulla pagina il prezzo del biglietto

document.getElementById("mio_id").innerHTML = messaggio;