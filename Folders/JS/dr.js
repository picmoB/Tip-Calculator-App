// //Zadatak 1:  Prepišite ovo if koristeći uvjetni operator (ternarni) '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
// Rješenje
let result = (a + b < 4) ? 'Below' :  'Over'

//Zadatak 2: što ispisuje, kada će se ispisati SuperCoder, a kada Anonymus

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous");

// Ispisat će se SuperCoder
//Ako bi svi bili prazni stringovi onda bi ispisalo Anonymous

// Zadatak 3: što ispisuje

alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1 2
alert( 1 && null && 2 ); // null ne radi
alert( null || 2 && 3 || 4 ); // 3

//Zadatak 4:

Napišite if uvjet za provjeru koji age je između 14 i 90 uključivo.

"Uključivo" znači da age može dosegnuti rubove 14 ili 90.
 

if(age>= 14 && age<=90){

}

//Zadatak 5:
Napravite program koji učitava cijeli broj, a zatim provjerava i ispisuje je li uneseni broj paran, neparan
ili nula.

let number = prompt("Unesi broj");
if(number % 2 == 0 && number != 0) {
    alert("broj je paran")
} else if(number == 0){
    alert("broj je nula")
}else{
    alert("broj je neparan")
}
//Zadatak 6:
Za praktični rad, pomoću if else naredbi napravite program koji ce nakon što korisnik putem prompta
upise postotak riješenosti izbaciti koju je ocjenu dobio.
0% - 50% 1
51% - 60% 2 
61% - 75% 3 
76% - 89% 4 
90% - 100% 5

let results = prompt("Unesi postotak");

if(result <= 50) {
    alert("Ocjena 1")
} else if(result > 50 && result <= 60){
    alert("Ocjena 2")
} else if(result >= 61 && result <= 75){
    alert("Ocjena 3")
} else if(result >= 76 && result <= 89){
    alert("Ocjena 4")
} else if(result >= 90 && result <= 100){
    alert("ocjena 5")
} else {
    alert("Unijeli ste nevažeći broj")
}
