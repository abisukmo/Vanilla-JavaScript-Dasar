const foo = 1;

function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
            return "Salak";
        case 2:
            return "Apel";
        case 3:
            return "Jeruk";
        case 4:
            return "Durian";
    
        default:
            return "Semangka";
    }
}

console.log (pilihBuah(1));

