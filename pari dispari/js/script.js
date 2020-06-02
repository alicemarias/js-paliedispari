// chiedo all'utente di scegliere pari o dispari
var utentePariDispari = prompt('scegli pari o dispari');
// chiedo di inserire un numero da 1 a 5
var utenteNumero = prompt('Inserisci numero da 1 a 5');
//genero numero random per il pc
var pcNumero = Math.floor(Math.random() * 5) ;
// sommo i due numeri
function sommaNumeri (utenteNumero, pcNumero){
  var risultato = utenteNumero + pcNumero;
  return risultato;
}
// stabilisco se somma è pari o dispari
function pariDispari {
  if (risultato%2 == 0) {
    alert("la somma è un numero pari");
  } else {
    alert("la somma è un  numero dispari");
  }
}

// dichiaro vincitore
