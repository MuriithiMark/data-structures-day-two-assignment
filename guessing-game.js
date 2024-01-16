/* Program works only in browser environment */

var input = prompt("Guess a number: ");
let guessedNumber = parseInt(input);

let randomNumber = Math.trunc(Math.random() * 10);

console.log(randomNumber)

if (guessedNumber === randomNumber) {
    console.log('Good Work!')
} else {
    console.log('Not matched')
}

