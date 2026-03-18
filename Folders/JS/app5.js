/* Prvi primjer */
for (let i = 0; i <= 3; i++) {
    console.log("Hi John");
}

// let i = 0

// i = 0
// provjera uvjeta (i < 3)
// pokrecemo funkciju unutar petlje
// i++

// i = 1
// provjera uvjeta (i < 3) (1 < 3)
// pokrecemo funkciju unutar petlje
// i++

// i = 2
// provjera uvjeta (i < 3) (2 < 3)
// pokrecemo funkciju unutar petlje
// i++

// i = 3
// provjera uvjeta (i < 3) (3 < 3) -> NE -> petlja prekida s radom

/* Drugi primjer */
for (let i = 0; i <= 5; i++) {
    console.log(i);
    i++;
}

// let i = 0
//  i <= 5 -> DA

// ispis i -> 0
// i++; -> i postaje 1
// i++; -> i postaje 2

// i <= 5 -> DA
// ispis i -> 2
// i++; -> i postaje 3
// i++; -> i postaje 4

/* Treci primjer */
for (let i = 0; i <= 3; i++) {
    if (i > -2) continue;
    // prekida izvodenje

    console.log(i)
}

//___________________________________________________________
// i = 2
// provjera uvjeta: i <= 3 DA
// zapocinje se izvrsavanje bloka naredbi
// if (i == 2) DA -> continue (prekini izvodenje bloka naredbi i zapocni iducu iteraciju)
//___________________________________________________________

// i = 0
// provjera uvjeta: i <= 3 DA
// zapocinje se ivrsavanje bloka naredbi
// if (i > -2) DA -> continue (prekini izvodenje bloka naredbi i zapocni iducu iteraciju)

// i: 0 1 2 3
// while do-while