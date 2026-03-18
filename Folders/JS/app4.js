/*
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    
    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
    
    default:
        alert("Prevelika vrijednost")
}
*/

/*
let a = +prompt("Unesite prvi broj", );
let b = +prompt("Unesite drugi broj", );
let c = prompt("Unesite matematicku operaciju", );

switch (c) {
    case '+':
        alert(a+b);
        break;
    
    case '-':
        alert(a-b);
        break;
    
    case '*':
        alert(a*b);
        break;
    
    case '/':
        alert(a/b);
        break;
    
    default:
        alert("Kriva matematicka operacija");
}
*/

/*
let age = +prompt("Unesite dob", );
let day = +prompt("Unesite dan", );
let basePrice;
let popust;

switch (day) {
    case (day >= 1 || day <=5):
        basePrice = 100;
        break;

    case (day == 6 || day == 7):
        basePrice = 120;
        break;
    
    default:
        alert("Unijeli ste krivi broj")
        basePrice = null
        break;
}

if(basePrice !== null) {

switch (true) {
    case(age >= 0 && age <= 12):
            popust = basePrice * 0.5;
        break;
    
    case(age >= 13 && age <=18):
            popust = basePrice * 0.2;
        break;

    case(age >= 19 && age <=59):
            basePrice
        break;

    case(age >= 60):
            popust = basePrice * 0.3;
        break;
}

}
*/

let age = +prompt("Unesite dob", );
let day = +prompt("Unesite dan", );
let basePrice;
let finalPrice;
/*let popust;*/
 
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        basePrice = 100;
        break;
 
    case 6:
    case 7:
        basePrice = 120;
        break;
   
    default:
        alert("Unijeli ste krivi broj")
        basePrice = null
        break;
    console.log(day);
}
 
if(basePrice !== null) {
 
switch (true) {
    case (age >= 0 && age <= 12):
        finalPrice = basePrice * 0.5;
        break;
 
    case (age >= 13 && age <= 18):
        finalPrice = basePrice * 0.8;
        break;
 
    case (age >= 19 && age <= 59):
        finalPrice = basePrice;
        break;
 
    case (age >= 60):
        finalPrice = basePrice * 0.7;
        break;
 
    default:
        alert("Unijeli ste krivi broj za dob");
        finalPrice = null;
        break;
}
if (finalPrice !== null) {
    console.log(`Cijena ulaznice je ${finalPrice} kn.`);
}
 
}