/* Inizializzo variabili scelta utente e segnaposto */
var evenOddUser;
var flag = false;

/* Controllo che l'utente inserisca correttamente pari e dispari */
while (flag == false) {
    evenOddUser = prompt("Scegli tra pari e dispari");
    evenOddUser = evenOddUser.slice().toLowerCase();
    console.log(evenOddUser);
    if ((evenOddUser == "pari") || (evenOddUser == "dispari")) {
        flag = true;
    } else {
        flag = false;
    }
}

/* Inizializzo scelta numero utente e riporto segnaposto a false */
var numberUser;
flag = false;

/* Controllo che l'utente inserisca un numero di quel range e non scriva lettere alfabetiche */
while (flag == false) {
    numberUser = parseInt(prompt("Scegli un numero da 1 a 5"));
    if ((numberUser < 1) || (numberUser > 5) || isNaN(numberUser)) {
        flag = false;
    }
    else {
        flag = true;
    }
}

/* Calcolo numero random del pc, faccio la somma e inizializzo variabile risultato */
var pcNumber = randomNumber(1, 5);
var sumNumbers = numberUser + pcNumber;
var result;

/* Tramite funzione pari o dispari verifico il risultato della somma */
if (evenOdd(sumNumbers) == "even") {
    result = "pari"
} else {
    result = "dispari"
}

/* Controllo se l'utente ha vinto o perso */
if (evenOddUser == result) {
    alert("Complimenti hai vinto... il risultato è " + evenOddUser
        +"\nIl tuo avversario ha scelto il numero " + pcNumber + " e la somma fa " + sumNumbers);
} else {
    alert("Mi dispiace hai perso... il risultato è " + result
        +"\nIl tuo avversario ha scelto il numero " + pcNumber + " e la somma fa " + sumNumbers);
}

/* Funzioni numero random e pari o dispari */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function evenOdd(num) {
    if (num % 2 == 0) {
        return "even";
    }
    return "odd";
}