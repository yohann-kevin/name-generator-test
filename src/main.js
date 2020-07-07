let vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
let consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

let body = document.getElementById('test');
let title = document.createElement('h1');

let name;
let randomNumber;

function start() {
    body.appendChild(title);
    name = consonant[randomNum(consonant)] + vowel[randomNum(vowel)] + consonant[randomNum(consonant)] + vowel[randomNum(vowel)]
    title.textContent = name;
}


function randomNum(tab) {
    if (tab === vowel) {
        randomNumber = Math.floor(Math.random() * Math.floor(vowel.length));
    } else if (tab === consonant) {
        randomNumber = Math.floor(Math.random() * Math.floor(consonant.length));
    }
    return randomNumber;
}

start();