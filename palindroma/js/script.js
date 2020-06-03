// chiedo all'utente di inserire parola
var parola = prompt('Inserisci una parola');
// stampo messaggio
if(parola === parolaAlContrario){
  console.log("la parola che hai scritto è palindroma ");
} else {
  console.log("la parola non è palindroma ");
}
// creo funzione per capire se parola è palindroma
function parolaPalindroma () {
  // creo variabile con parola al contrario
  var parolaAlContrario = parola.split("").reverse().join("");

  if(parola === parolaAlContrario) {
    return true;
  } else {
    return false;
  }
}
