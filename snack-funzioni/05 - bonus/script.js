/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function saluto(userName){
  let typeOfGreet;

  
  const now = new Date()
  const hour = now.getHours();
  
  if(parseInt(hour) < 13){
    typeOfGreet = 'Buongiorno';
  } else if (hour < 17){
    typeOfGreet = 'Buon pomeriggio';
  } else {
    typeOfGreet = 'Buonasera';
  }

  let salutoCompleto = `${typeOfGreet} ${userName}`;
  
  return salutoCompleto

}


  

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.