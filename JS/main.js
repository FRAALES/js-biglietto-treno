// Dichiaro le mie variabili
let kmUtente;
let etaUtente;
const prezzoKm = 0.21;
let prezzoSenzaSconto;
let prezzoConLoSconto;




// Chiedi all'utente quanti km vuole percorrere

kmUtente = parseInt (prompt("Quanti km vuoi percorrere?"));
console.log(kmUtente);


// Chiedi all’utente la sua età, 
etaUtente = parseInt (prompt("Quanti anni hai?"));
console.log(etaUtente);


// Moltiplica kmUtente per 0,21

prezzoSenzaSconto = parseInt (kmUtente * prezzoKm);
console.log(prezzoSenzaSconto);



// Definisci prezzo:

// Se età utente è < 18 anni, allora il prezzo va diminuito del 20%

if (etaUtente < 18) {
prezzoConLoSconto = prezzoSenzaSconto - ((20 * prezzoSenzaSconto) / 100 );
}



// Se età utente è > 65 anni, allora il prezzo va diminuito del 40%

else if (etaUtente > 65) {
    prezzoConLoSconto = prezzoSenzaSconto - ((40 * prezzoSenzaSconto) / 100 );
}


// Altrimenti età utente è > 18 anni e < 65 anni, il prezzo rimane quello che è (prezzo con lo sconto = prezzo senza sconto)

else {
    prezzoConLoSconto = prezzoSenzaSconto;
};




// Scriviamo messaggio per utente
let messaggio = `Il prezzo del biglietto è ${prezzoConLoSconto} euro`;
console.log(messaggio);

// Scrivi sulla pagina il prezzo del biglietto

document.getElementById("mio_id").innerHTML = messaggio;