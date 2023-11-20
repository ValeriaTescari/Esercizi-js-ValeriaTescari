// esercizi del 16/11/2023

// Creare 5 variabili contenenti un numero, scrivere un programma in modo da ottenere la somma tra questi numeri e la media.
// In console deve uscire la seguente frase: ‘La somma tra i numeri equivale a … e la media risulta...’

let num1 = 3;
let num2 = 7;
let num3 = 13;
let num4 = 23;
let num5 = 89;
let somma = num1 + num2 + num3 + num4 + num5 
console.log(somma);
let media = somma/5 
console.log (media);
console.log(`La somma tra i numeri equivale a ${somma} e la media risulta ${media}`);

// Esercizio 2: Scrivi due variabili con l'anno corrente e l'anno di nascita, e stampa in console:
// l'età della persona,
// quanti anni sono necessari per raggiungere i 100
// e stampi in console la frase: “Hai 26 anni e ti mancano 74 anni per compierne 100”



let annocorrente  = 2023;
let annodinascita = 1989;
let anni  =  annocorrente - annodinascita ;
console.log (anni);
let annicento = 100;
let anninecessari = annicento - anni
console.log (anninecessari);
console.log (`Hai ${ anni} anni e ti mancano ${anninecessari} anni per compierne 100`);

// Scrivere un programma che dati:
// a) Un numero totale di gatti (44) 
// b) Il numero dei gatti presenti in ogni fila (6)
// Restituisca in output: 
// Il numero di file risultanti 
// indicare il numero di gatti mancanti per completare una nuova fila
// Esempio: “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”

let cats = 44;
let riga = 6;

let totalRows = Math.floor(cats/ riga);
let resto = cats % riga;

console.log(`Ci sono ${totalRows} file di gatti e ne mancano ${resto} per una nuova fila`);


// Scrivi un programma che dati sette valori relativi alle temperature della settimana stabilisca la giornata più calda e quella più fredda.
// Esempio:
// Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
// “La temperatura piu’ calda e’ 31  quella piu’ fredda - 6”

let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;
let temperaturealte = Math.max(a,b,c,d,e,f,g)
console.log(temperaturealte);
let temperaturebasse = Math.min (a,b,c,d,e,f,g)
console.log(temperaturebasse);
console.log(`La temperatura piu’ calda e’ ${temperaturealte}  quella piu’ fredda ${temperaturebasse}`);


// esercizi del 20/11/2023


// Esercizio 1

let tiri = 4;
let punteggioGiocatore1 = 0
let punteggioGiocatore2 = 0

for (let i = 1; i <= tiri; i++){
    let numeroRondom = Math.round(Math.random()*(6-1)+1)
    console.log(numeroRondom);
    punteggioGiocatore1 = punteggioGiocatore1 + numeroRondom
}
console.log(`la somma totale dei punteggi di Giocatore 1 è ${punteggioGiocatore1}`);

for(let i = 1; i <= tiri; i++){
    let numeroRondom = Math.round(Math.random()*(6-1)+1)
    console.log(numeroRondom);
    punteggioGiocatore2 = punteggioGiocatore2 + numeroRondom
}
    console.log(`la somma totale dei punteggi di Giocatore 2 è ${punteggioGiocatore2}`);

if (punteggioGiocatore1 > punteggioGiocatore2) {
    console.log(`Il vincitore è Giocatore1`);

} else {
    console.log(`Il vincitore è Giocatore2`);
}

// // Eserciozio 2

// let Giorno = prompt(`Seleziona giorno \n 1.Lunedì \n 2.Martedì \n 3.Mercoledì \n 4.Giovedì \n 5.Venerdì \n 6.Sabato \n 7.Domenica`)
// switch(Giorno) {
//     case "1" :
//         console.log(`Giorno scelto Lunedì`)
//         break
//         case "2" :
//         console.log(`Giorno scelto Martedì`)
//         break
//         case "3" :
//         console.log(`Giorno scelto Mercoledì`)
//         break
//         case "4" :
//         console.log(`Giorno scelto Giovedì`)
//         break
//         case "5" :
//         console.log(`Giorno scelto Venerdì`)
//         break
//         case "6" :
//         console.log(`Giorno scelto Sabato`)
//         break
//         case "7" :
//         console.log(`Giorno scelto Domenica`)
//         break
// }
// if (Giorno >7) { alert(`Errore! Giorno della settimana non valido`)
// }


// // Esercizio 3

// let Temperatura = prompt(`Inserire temperatura odierna`)
//  if (Temperatura < 20) { 
//     console.log(`non ci sono più le mezze stagioni`);


//  } else if (Temperatura >= 30 ){
//     console.log(`Andiamo al mare?!`);
//  }

//  else if (Temperatura < 30){
//     console.log(`Mi dia una birra sudata`);
//  }

//  else if (Temperatura < 0){
//     console.log(`Non è tanto il freddo quanto l' umidità`);
//  }

//  else if (Temperatura < -10){
//     console.log(`Uomini forti, destini forti. Uomini deboli, destini deboli`);
//  }

//  Esercizio 4

let Bevanda;

do {
    Bevanda = prompt(`Selezionare la bibita desiderata: \n 1.Acqua \n 2.CocaCola \n 3.Birra`)

} while (Bevanda != "Acqua" && Bevanda != "CocaCola" && Bevanda != "Birra");


if (Bevanda == "Acqua") {
    alert("Hai selezionato Acqua")

} else if (Bevanda == "CocaCola"){alert("Hai selezionato CocaCola")} 

else if (Bevanda == "Birra")
{alert("Hai selezionato Birra")}

