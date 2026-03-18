/** UVJETNO GRANJANJE */

// if (ako)

// let age = prompt("Koliko imate godina"); //varijabla iz modalnog prozora dobiva vrijednost

// //započinje provjera istinitosti tvrdnje
// if(age >= 18) {
    
//     //blok naredbi
//     console.log("čestitam vi ste punoljetni")

// }
// // alert("Error")

// if(0){//false
//     //blok naredbi se nikad neće izvršiti
// }
// let ages = (year >= 18) 


// if(ages){

// }

// alert("Dobrodošli na web stranicu za kupovinu vina")

// let ages= confirm("Molimo Vas da potvrdite da ste stariji od 18 godina");

// console.log("odabrao sam rezultat", ages)
// if(ages){
//     alert("Možete ući na web stranicu")
// } else {
//     alert("Nažalost ne možete pristupiti ovoj web stranici");
// }

// let age = prompt("Kkoliko imate godina")

// if(age < 18) {
//     alert("Prerano za ulazka na web stranicu")
// } else if (age >= 18 && age <= 21){
//     alert("Možda ste još premladi")
// } else {
//     alert("čestitamo slobodno razgledajte našu stranicu")
// }

// let accessAllowed;
// let age = prompt("Koliko imate godina");

// if(age > 18) {
//     accessAllowed = true
// } else {
//     accessAllowed = false;
// }

// console.log(accessAllowed);

/*** Ternarni operator */

// let result = condition  ? value1 : value2


// let ageTernarni = prompt("Koliko imate godina");

// let accessAllowedTernarni = (ageTernarni > 18) ? true : false

// console.log(accessAllowed);

// let age = prompt("Molimo unesite godine da vidimo koju kategoriju za motor možete polagati")

// if(age >= 16 && age < 18) {
//     msg = "Možete polagati A2 kategoriju"
// } else if ( age >= 18 && age <=23) {
//     msg = "Možete polagati A1 kategoriju"
// } else if ( age >= 24){
//     msg = "Možete polagati A kategoriju"
// }else {
//     msg = "Nažalost ne možete polagati za motor"
// }
//  alert(msg)

// //  Ternarni operator rješenje

// let ageTer = prompt("Molimo unesite godine da vidimo koju kategoriju za motor možete polagati")

// let msgTer =   (age >= 16 && age < 18)    ?    "Možete polagati A2 kategoriju" :
//                (age >= 18 && age <=23)    ?    "Možete polagati A1 kategoriju" :
//                (age >= 24)    ?                "Možete polagati A kategoriju" :
//                                                "Nažalost ne možete polagati za motor" ;
// alert(msgTer)

//logički opeatori

// ||(OR), 
// &&(AND), 
// !(NOT), 
// ??(Nullish Coalescing)

// alert(true || false);  //true
// alert(false || false); //false
// alert(false || true); //true
// alert(true || true); //true

// ILI "||" pronalazi prvu istinitu vrijednost

// let time = 11;
// let isWeekend = true;

// if(time < 10 || time > 16 || isWeekend) {
//     alert("Zatvoreni smo")
// } else{
//     alert("radimo")
// }

// Operator OR || radi sljedeće:

// Procjenjuje operande s lijeva na desno.
// Za svaki operand, pretvara ga u booleov. Ako je rezultat true, zaustavlja se i vraća izvornu vrijednost tog operanda.
// Ako su svi operandi procijenjeni (tj. svi su bili false), vraća zadnji operand.

//AND operator &&

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// let times = 18;
// let isWeekends = true;

// if(time < 10 && time > 16 && isWeekends ) {
//     alert("Zatvoreni smo")
// } else{
//     alert("radimo")
// }


// let timesss = 9;
// let isWeekendss = true;

// if(timesss < 10 || timesss > 16 && isWeekendss ) {
//     alert("Zatvoreni smo")
// } else{
//     alert("radimo")
// }

// ! NE operator
// Operator prihvaća jedan argument i radi sljedeće:

// Pretvara operand u Boolean tip: true/false.
// Vraća inverznu vrijednost.

alert( !true ); // false
alert( !0 ); // true
alert(!-1); // 1
alert(!!-1); // -1
