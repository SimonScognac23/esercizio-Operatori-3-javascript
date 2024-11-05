
// inserimento dei due numeri
// promemoria. parseFloat() è una funzione in JavaScript usata per convertire una stringa in un numero decimale
let numero1 = parseFloat(prompt("Ciao inserisci il primo numero"));
let numero2 = parseFloat(prompt("Ciao inserisci il secondo numero"));

// Calcolo delle operazioni
// promemoria. Math.pow() è una funzione in JavaScript che serve a calcolare la potenza di un numero.
let somma = numero1 + numero2;
let sottrazione = numero1 - numero2;
let moltiplicazione = numero1 * numero2;
let divisione = numero1 / numero2;
let potenza = Math.pow(numero1, numero2);

//stampa i risultati

console.log("allora abbiamo....");

console.log("Somma  " + somma);

console.log("Sottrazione  " + sottrazione);

console.log("Moltiplicazione  " + moltiplicazione);

console.log("Divisione  " + divisione);

console.log("Potenza  " + potenza);
