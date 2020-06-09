let wins  = 0;
let losses = 0;

let correctGuesses = 0;
let userGuesses = [];
let blanks = [];

let guessesLeft = 5;

let horrorWords = ['ruvik', 'the keeper', 'red pyramid'];

let guessWord = horrorWords[Math.floor(Math.random() * 3)];
console.log(guessWord)


for (var i = 0; i < guessWord.length; i++) {
    // $("#something").append(blanks);
    blanks.push("_")
}
    $("#something").append(blanks.join (" "));

document.onkeyup = function(event) {
    var userChoice = event.key
    console.log(userChoice)

}




