// Ciao ragazzi,
// Esercizio di oggi:
// nome repo: js-mail-dadi

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// const userNum = Math.floor(Math.random() * 6) + 1;
// const cpuNum = Math.floor(Math.random() * 6) + 1;


// // let userName = prompt("Inserisci Nome Giocatore");
// userName = document.querySelector('.userName').innerHTML = userName;

// const result = document.querySelector('.result').innerHTML;
// if (userNum < cpuNum) {
//     console.log(userName + 'is the winner')
// }




let userDice = Math.floor(Math.random() * 6) + 1;
document.querySelector(".userDice").innerHTML = userDice;

let cpuDice = Math.floor(Math.random() * 6) + 1;
document.querySelector(".cpuDice").innerHTML = cpuDice;

if (userDice > cpuDice) {
    document.querySelector(".result").innerHTML = "HAI VINTO!"
} else if (cpuDice > userDice) {
    document.querySelector(".result").innerHTML = "HAI PERSO!"
} else {
    document.querySelector(".result").innerHTML = "PAREGGIO"
}




