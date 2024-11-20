/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelCounter(wordA){
  let counter = 0;
  for (let i=0; i<wordA.length; i++){
    if ((wordA[i] === 'a') || (wordA[i] === 'e') || (wordA[i] === 'i') || (wordA[i] === 'o') || (wordA[i] === 'u')){
      counter++
    }   
  }
  return counter
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelCounter(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)