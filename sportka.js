// Udělej losování klasické Sportky


// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

// Máš osudí čísel od 1 do 49

let numbers = [];

for (let i = 1; i <= 49; i = i +1){
    numbers.push(i);
}

// Náhodně z tohoto osudí vyber 7 čísel

let randomNumbers = [];

for (let i = 0; i < 7; i++){
    let winnerIndex = Math.floor(Math.random() * numbers.length);
    let winnerNumber = numbers[winnerIndex]; 

    randomNumbers.push(winnerNumber);
    numbers.splice(winnerIndex,1);
}



