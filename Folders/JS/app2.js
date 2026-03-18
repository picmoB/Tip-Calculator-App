alert( Number(false) ); // 0
alert( Number("123z") ); // NaN
alert( Number(" 123 ") ); // 123
alert( Number(" yyuu123 ") ); // NaN

/*
// Pretvorba tipa podatka
//npr alert automatski pretvara bilo koju vrijednost u niz kako bi je prikazao
// Matematičke operacije pretvaraju vrijednosti u brojeve

// Pretvorba niza

let value = true;
alert(typeof value) //boolean

value = String(value); //u ovom trenutku value mijenja tip podatka
alert(typeof value) //true

//Numerička(Number) pretvorba 
alert("6" / "2") // 3

let str= "123456"
alert(typeof str) //string

let number = Number(str)
alert(typeof number) //numb

let age = Number("moj broj godina je ovaj");
alert(age); //NaN u ovom slučaju conversion is failed

// pravila numeričke pretvorbe
// null -> 0
// true ili false -> 1 ili 0
// undefined -> NaN
// string (razmaci, \n, \t ) s početka i kraja se uklanjaju. Ako je preostali niz prazan, rezultat je 0, inače se broj uspješno
// očita iz niza. greška je NaN

alert( Number(false) ); // 0
alert( Number("123z") ); //NaN
alert( Number("   123   ") ); //123
alert( Number("   yyu7123   ") ); //NaN

//Booleova pretvorba

alert(Boolean(1)) // True
alert(Boolean(0)) //false
alert(Boolean("Hello World")) //true
alert(Boolean("")) //false, nije unesen razmak

// Pravilo konverzije:
// Vrijednosti koje su intuitivno "prazne", poput 0, prazan niz, null, undefinedi NaN, postaju false.
// Druge vrijednosti postaju true.
// Pripazirti na sljedeće dvije konverzije
alert(Boolean("0"))//true, unesen je string (ne broj)
alert(Boolean(" "))//true, unesen je razmak

*/

/* Basic operators (matematički operatori) */

// Pojmovi: unarni, binarni operand

// Operand – je ono na što se primjenjuju operatori. Na primjer, u množenju 5 * 2postoje dva operanda: lijevi operand je 5 i desni operand je 2. Ponekad ljudi to nazivaju "argumentima" umjesto "operandima".

//Operator je UNARNI ako ima jedan operand. npr unarna negacija- mijenjamo prednzak broja

let x = 2;
x = -x
console.log(x); // -2

//Operator je binarni ako ima dva operanda

let y = 2;
let z = 5
console.log(z - y); // 3
console.log(y - z); //-3

// Matematički operatori
// zbrajanje +
// oduzimanje -
// množenje *
// dijeljenje /
// dijeljenje s ostatkom %
// potenciranje **

console.log(5 % 2) // 1
console.log(8 % 3) // 2
console.log(9 % 3) // 0

console.log(2 ** 2) //4
console.log(2 ** 4) //16

console.log(4 ** (1/2)) //2

//ulančavanje stringa
let str = "hello" + "world";
console.log(str)// helloworld
alert('1' + 2) //12
alert(2+2+'3')//43
alert('3'+2+2)//322

alert( 6 - '3') //3

//UNARNI +
let dz = 2;
alert(+dz) // 2

let dzz = -2;
alert(+dzz) // -2

alert(+true); //1
alert(+""); // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // 23
alert( +apples + +oranges ); // 5


let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

//izmjene s operatorom

let n = 3;
n = n + 2; //5
n = n * 2; //10

let zzz = 3;
zzz += 2; //5
zzz *= 2; //10

//inkrement
let counter = 3;
counter++; // counter = counter + 1, counter +=1
let abc = ++counter;
alert(counter) //4

//dekrement smanjuje vrijednost za 1
let counterx = 3;
counterx--; // counter = counter + 1, counter +=1
let abcd = --counter;
alert(counterx) //2


let counterT = 1;
alert( 2 * ++counterT ); // 4

let counterTe = 1;
alert( 2 * counterTe++ ); // 2
//couneterTe = 2

/*** Zadaci */
//1
let a = (1 + 2, 3 + 4);
alert( a ); // 7

//2
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

//3
let a = 2;
let x = 1 + (a *= 2) //  a = 4 , x = 5
// a = a * 2

//4 Što je rezultat izraza

"" + 1 + 0    // "1" + 0 // 10
"" - 1 + 0    // -1
true + false  // 1
6 / "3"       // 2
"2" * "3"     // 6
4 + 5 + "px"  // 9px
"$" + 4 + 5   // $45
"4" - 2       // 2
"4px" - 2     // NaN
"  -9  " + 5  //" -9 5"
"  -9  " - 5  // -14
null + 1      // 1
undefined + 1 // Nan
" \t \n" - 2  // -2

//5 popravi da rezultat bude 3

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12
alert(+a + +b)
alert(Number(a) + Number(b))

//BITWISE operatori

// AND - I - &&
// OR - ILI - ||
// XOR - ^
// NOT - NE - ~
// LIJEVI SHIFT - <<
// DESNI SHIFT - >>
// ZERO-FILL RIGHT SHIFT DESNI SHIFT NULA >>>

// Operatori usporedbe
//  Veće manje a > b, b < c
// Veće jednako / manje jednako a >= b, b <= c
//  Jednako a == b - test jednakosti, jednostruki jedako  a = b znači dodjelu vriejdnosti
// Različito / Nisu jednaka ->  a != b
//  Provjera jednakosti a === b da li je jednka vrijednost i tip podatka

// Boolean comparasion
alert( 2 > 1) //true

let result2 = 5 > 7;
alert(result2) // false

// String comparasion
alert('Z' > 'A') //true
alert('Globe' > 'Glee') //true
alert('Bee' > 'Be') //true

// Algoritam za usporedbu dva niza je jednostavan:

// Usporedite prvi znak oba niza.
// Ako je prvi znak iz prvog niza veći (ili manji) od drugog niza, tada je prvi niz veći (ili manji) od drugog. Gotovi smo.
// Inače, ako su prvi znakovi oba niza isti, usporedite druge znakove na isti način.
// Ponavljajte do kraja bilo kojeg niza.
// Ako oba niza završavaju na istoj duljini, tada su jednaki. U suprotnom, dulji niz je veći.

//Usporedbe različitih vrsta

alert( '2' > 1) // true
alert('01' == 1) // true

// Za Booleove vrijednosti, true postaje 1 i false postaje 0.

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

//To se događa jer se operandi različitih tipova pretvaraju u Number pomoću operatora jednakosti ==.
alert(a == b); // true!
alert( 0 == false ); // true
alert( '' == false ); // true

//Strogi operator jednakosti === provjerava jednakost bez pretvorbe tipa.
alert(a === b); // false
alert( 0 === false ); // false
alert( '' === false ); // false

//Stroga nejednakost !==


alert( null == undefined ); // true
alert( null === undefined ); // false

alert( 0 == false) // true
alert( '' == false) // true
alert( null > 0 );  // (1) false ( 0 > 0)
alert( null == 0 ); // (2) false
//ovo je primjer nekonzistentnosti u JS-u  null je poseban tip vrijednosti i ovo nije numerička pretvorba
alert( null >= 0 ); // (3) true ( 0 >= 0)

//Razlog je taj što provjera jednakosti == i usporedbe > < >= <= rade drugačije. Usporedbe se pretvaraju null u broj, tretirajući ga kao 0. Zato null >= 0je (3) točno, a (1) null > 0netočno.

// Vrijednost undefined se ne smije uspoređivati ​​s drugim vrijednostima:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// Što je rezultat
5 > 4                       // true
"apple" > "pineapple"       // false
"2" > "12"                  // true
undefined == null           // true
undefined === null          // false
null == "\n0\n"             // false
null === +"\n0\n"           // false