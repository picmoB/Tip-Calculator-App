/*
let bomboni = +prompt("Unesite broj bombona", );
let djeca = +prompt("Unesite broj djece", );
let rezultat;
let ostatak;

// Osnovna ideja: bomboni / djeca = rezultat

console.log("prije while")
while (bomboni !== 0 && bomboni > djeca) {
    console.log("while")
    if (bomboni % djeca >= 1) {
        ostatak = bomboni % djeca;
        bomboni = bomboni - ostatak;
        rezultat = bomboni / djeca;
        alert("Svako dijete ce dobiti " + rezultat + " bombona. Ostat ce nam " + ostatak + " bombon.");
        break
    }
    else if (bomboni % djeca == 0) {
        rezultat = bomboni / djeca;
        alert("Svako dijete ce dobiti " + rezultat + " bombon.");
        break
    }
    else {
        alert("Krivo unesen broj");
        bomboni = null;
        break
    }
}
*/



/*
let olovke = +prompt("Unesite broj olovki", );
let ucenici = +prompt("Unesite broj ucenika", );
let rezultat;
let ostatak;

for (olovke > ucenici; olovke !== 0; ucenici !== 0) {
    if (olovke % ucenici >= 1) {
        ostatak = olovke % ucenici;
        olovke = olovke - ostatak;
        rezultat = olovke / ucenici;
        alert("Svaki ucenik ce dobiti " + rezultat + " olovki. Ostat ce " + ostatak + " olovki.");
        break
    }
    
    else if (olovke % ucenici == 0) {
        rezultat = olovke / ucenici;
        alert("Svaki ucenik ce dobiti " + rezultat + " olovki. Nema ostatka.");
        break
    }
    else {
        alert("Unesen je krivi broj.");
        olovke = null;
        break
    }
}
*/

/* WHILE petlja:
let ucenik = +prompt("Unesite broj ucenika", );
let ocjena;
let ukupniZbrojOcjena = 0;
let ukupanBrojUcenika = 0;
let prosjekOcjena;

while (ukupanBrojUcenika !== ucenik) {
    ocjena = +prompt("Unesite ocjenu ucenika", );
    if (ocjena >= 1 && ocjena <= 5) {
        ukupniZbrojOcjena = ukupniZbrojOcjena + ocjena;
        ukupanBrojUcenika++;
    }
    if (ukupanBrojUcenika == ucenik) {
        prosjekOcjena = ukupniZbrojOcjena / ukupanBrojUcenika;
        alert("Prosjek ocjena svih ucenika je " + prosjekOcjena);
        break
    }
}
*/

// Moj pokusaj:
/*
let ucenik = +prompt("Uneiste broj ucenika", );
let ocjena;
let zbrojUcenika = 0;
let zbrojOcjena = 0;
let prosjekOcjena = 0;

for (zbrojUcenika++; zbrojUcenika !== ucenik;) {
    ocjena = +prompt("Uneiste broj ocjene", );
    if (ocjena >= 1 && ocjena <= 5) {
        zbrojOcjena = zbrojOcjena + ocjena;
    }
    if (zbrojUcenika == ucenik) {
        prosjekOcjena = zbrojOcjena / zbrojUcenika;
        alert("Prosjek ocjena svih ucenika je " + prosjekOcjena)
    }
}
*/

// ISPRAVNO:
let ucenik = +prompt("Unesite broj učenika:", '');
let zbrojOcjena = 0;
let prosjekOcjena = 0;
 
for (let zbrojUcenika = 0; zbrojUcenika < ucenik; zbrojUcenika++) {
    let ocjena = +prompt("Unesite ocjenu za učenika " + (zbrojUcenika + 1) + ":", '');
    if (ocjena >= 1 && ocjena <= 5) {
        zbrojOcjena += ocjena;
    } else {
        alert("Neispravna ocjena, molimo unesite ocjenu između 1 i 5.");
        zbrojUcenika--; // Smanjujemo brojač da korisnik ponovi unos za isti učenik
    }
}
 
prosjekOcjena = zbrojOcjena / ucenik;
alert("Prosjek ocjena svih učenika je " + prosjekOcjena.toFixed(2));