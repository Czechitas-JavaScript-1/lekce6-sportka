<<<<<<< HEAD
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


//vypis do html 
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:


let winningNumbers = document.querySelector('#vyherni-cisla');

for (let j=0; j < randomNumbers.length; j++) {
    winningNumbers.innerHTML += '<span class="cislo">' + randomNumbers[j] + '</span>';
=======
// SPORTKA

let osudi = [];
let vyherniCisla = document.querySelector('#vyherni-cisla');
let tazenaCisla = [];

//naplním osudí
for (let i = 1; i <= 49; i = i + 1) {
    osudi.push(i);
}

// z osudi vyberu 7 náhodných čísel
for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];

    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
}

//vypíšu do HTML
for (let i = 0; i < tazenaCisla.length; i++) {
    vyherniCisla.innerHTML += '<span class="cislo">' +  tazenaCisla[i] + '</span>';
>>>>>>> origin/develop
}