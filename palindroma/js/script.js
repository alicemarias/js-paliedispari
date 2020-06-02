// chiedo all'utente di inserire parola
var parola = prompt('Inserisci una parola');

// creo funzione per capire se parola è palindroma
function parolaPalindroma () {
  // creo variabile con parola al contrario
  var parolaAlContrario = parola.split("").reverse().join("");

  if(parola === parolaAlContrario) {
    alert("hai scritto una parola palindroma");
  } else {
    alert("non hai scritto una parola palindroma");
  }
}
