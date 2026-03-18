
// Unos broja učenika
let broj_ucenika = parseInt(prompt("Unesite broj učenika:"));

// Varijabla za spremanje zbroja ocjena
let zbroj_ocjena = 0;

// For petlja za unos ocjena i računanje zbroja ocjena
for (let i = 1; i <= broj_ucenika; i++) {
    let ocjena = parseFloat(prompt("Unesite ocjenu za učenika " + i + ":"));
    zbroj_ocjena += ocjena;
}

// Računanje prosječne ocjene
let prosjecna_ocjena = zbroj_ocjena / broj_ucenika;

// Ispis rezultata
console.log("Prosječna ocjena svih učenika je: " + prosjecna_ocjena);
alert("Prosječna ocjena svih učenika je: " + prosjecna_ocjena);
