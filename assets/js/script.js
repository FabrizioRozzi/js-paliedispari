///////////////////////////////////////////////////////////////////////////////
//////////////////                                        /////////////////////
//////////////////              ESERCIZIO 1               /////////////////////
//////////////////                                        /////////////////////
///////////////////////////////////////////////////////////////////////////////




// var parola = prompt("Inserisci una parola..");

// checkPalindroma(parola);

// function checkPalindroma(arr) {
//    var flag = true;
//    var j = 0;
//     for( var i = arr.length-1; i > arr.length / 2; i-- ){
//         if( arr[i] != arr[j] ){
//            flag = false;
//            break; // Esco dal loop perché é le lettere non sono uguali
//         }
//         j++;
//     }
//   if( flag ) {
//     console.log('La parola inserita é palindroma'); // Se dal loop la flag diventa true stampo questo messaggio
//   }
//   else {
//     console.log('La parola inserita non é palindroma'); // Se dal loop la flag diventa false stampo questo messaggio
//   }
// }



///////////////////////////////////////////////////////////////////////////////
//////////////////                                        /////////////////////
//////////////////              ESERCIZIO 2               /////////////////////
//////////////////                                        /////////////////////
///////////////////////////////////////////////////////////////////////////////



// Inizializzo le variabili date da utente
  var scelta = prompt("Inserisci pari o dispari") ;
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))
  console.log(numeroUtente)
// Calcolo con la funzione n_random un numero casuale da 1 a 5  
  var numeroPc = n_random();
  console.log(numeroPc)
// Calcolo con la funzione calcoloRisultato il vincitore
  var risultato = calcoloRisultato(numeroPc, numeroUtente, scelta);


  

// FUNZIONI

  // Funzione calcoloRisultato a cui passo i valori necessari per calcolare il vicitore
  function calcoloRisultato(nPc, nUt, sclt) {
    // Inizializzo una variabile che contenga la somma dei due numeri giocati
    var somma = nPc + nUt;
    console.log("La somma dei valori é: " + somma);
    // Calcolo incrociato tra risultato numerico e la scelta del giocatore
    if(somma % 2 != 0 && sclt == pari ){
      console.log("Hai perso...")
    }
    else{
      console.log("Hai vinto")
    }

  }
  
  
  
  // Funzione n_random in cui calcolo il numero random da 1 a 5
  function  n_random() {

    var n = Math.floor(Math.random() * (5 - 1)) + 1;
    //console.log(n);
    return n;

  }

  
  

