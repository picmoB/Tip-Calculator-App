
// Zadatak 1:

let result;

if (a + b < 4) {
    result = "Below";
} else {
    result = "Over";
}

let result = (a + b < 4) ? "Below";
             (a + b > 4) ? "Over";

alert(result)

// Zadatak 2:

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymus")

// Zadatak 3:

alert( null || 2 || undefined);    //2
alert( alert(1) || 2 || alert(3)); //1, 2
alert( 1 && null && 2);            //null
alert( null || 2 && 3 || 4);       //3

// Zadatak 4:

let age = prompt("Unesite godinu", );

if(age >= 14 && age <= 90) {
    alert(true)
} else {
    alert(false)
}

// Zadatak 5:

let num = 11

if(num % 2 == 0) {
    alert("Paran broj")
} else if(num % 2 == 1) {
    alert("Neparan broj")
} else {
    alert("Broj je nula")
}

// Zadatak 6:

let postotak = prompt("Unesite postotak rjesenosti", )

if(postotak < 50) {
    alert("Ocjena 1")
} else if(postotak >= 51 && postotak <= 60) {
    alert("Ocjena 2")
} else if(postotak >= 61 && postotak <= 75) {
    alert("Ocjena 3")
} else if(postotak >= 76 && postotak <= 89) {
    alert("Ocjena 4")
} else {
    alert("Ocjena 5")
}
