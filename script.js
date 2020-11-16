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
document.getElementById("prova2").innerHTML = ;
