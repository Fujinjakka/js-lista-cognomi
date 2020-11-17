// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// 1 Stampa la lista ordinata alfabeticamente.
// 2 Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.


var listaCognomi = ["Rossi","Bianchi","Verdi","Gialli","Azzurri"];
console.log(listaCognomi);

var cognomeUtente = prompt("qual'e il tuo cognome?");
console.log(cognomeUtente);

listaCognomi.push(cognomeUtente);
console.log(listaCognomi);


document.getElementById("prova").innerHTML = listaCognomi.sort();
console.log(listaCognomi);


var posizione;

for (var i = 0; i < listaCognomi.length; i++) {
  if (listaCognomi[i] == cognomeUtente) {
    posizione = i;
  }
}

document.getElementById("prova2").innerHTML = "posizione umana:" + (posizione + 1);
console.log(posizione);
