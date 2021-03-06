
var wordUser = prompt("Inserisci una parola");

/* Con un ciclo while controllo che la parola inserita non abbia valore numerico */
while (!isNaN(wordUser)) {
    alert("ERRORE... Non puoi inserire un numero");
    var wordUser = prompt("Inserisci una parola");
}

/* Rendo qualsiasi parola inserita completamente in minuscolo */
wordUser = wordUser.slice().toLowerCase();

/* Effettuo il controllo di uguaglianza tramite la funzione */
if (palindrome(wordUser)) {
    alert("La parola inserita è palindroma");
} else {
    alert("La parola inserita non è palindroma");
}

/* Creo una funzione con 2 array vuoti nei quali inserisco tramite
2 cicli for la parola originale e la stessa al contrario. Successivamente
con un altro ciclo for controllo se i caratteri corrispondono */

/* function palindrome(word) {

    var originalWord = [];
    var reverseWord = [];

    for (i = 0; i < word.length; i++) {
        originalWord.push(word.charAt(i));
    }
    for (i = (word.length-1); i >= 0; i--) {
        reverseWord.push(word.charAt(i));
    } */

/* Inizializzo una variabile contatore per verificare 
che effettivamente tutti caratteri sono uguali */

/*     var cont = 0;
    for (i = 0; i < word.length; i++) {
        if (originalWord[i] == reverseWord[i]) {
            cont++
        }
    }

    if (cont == word.length) {
        return true;
    }
    return false;
}
 */

//VERSIONE COMPATTA SENZA COPIA DI NUOVI ARRAY
function palindrome(word) {
    var cont = 0;
    for (i = 0; i < word.length / 2; i++) { //Termino il ciclo for a metà parola
        if (word.charAt(i) == word.charAt((word.length - 1) - i)){
            cont++
        }
    }
    if (cont == Math.ceil(word.length / 2)) { //Utilizzo l'arrotondamento per eccesso in caso le parole abbiano un numero di lettere dispari
        return true;
    }
    return false;
}

/* Le ultime modifiche evitano che il ciclo for scorra tutta la parola
visto che basterebbe anche solo arrivare a metà */