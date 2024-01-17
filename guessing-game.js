/* Program works only in browser environment */

const noOfPossibleAttempts = 3;
let noOfAttempts = 0;

// Modified to fail after 3 failed attempts
while (noOfAttempts < noOfPossibleAttempts) {
    var input = prompt("Guess a number: ");
    let guessedNumber = parseInt(input);

    let randomNumber = Math.trunc(Math.random() * 10);

    console.log(randomNumber)

    if (guessedNumber === randomNumber) {
        console.log('Good Work!');
        break;
    } else {
        console.log('Not matched');
    }

    noOfAttempts++;
}