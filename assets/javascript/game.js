var games = ["soccer", "skating", "basketball"];

var computerWord = "";
var lettersOfWord = [];
var blanksAndCorrect = [];
var wrongGuess = [];
var blanks = 0;

var wins = 0;
var losses = 0;
var guessLeft = 15;

function startup() {
  computerWord = games[Math.floor(Math.random() * games.length)];
  letterOfWord = computerWord.split("");
  blanks = letterOfWord.length;
  for (var i = 0; i < blanks; i++) {
    blanksAndCorrect.push("_");
  }
}

function reset() {
  guessLeft = 15;
  wrongGuess = [];
  blanksAndCorrect = [];
  startup();
}

function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < blanks; i++) {
    if (computerWord[i] == letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {
      if (computerWord[i] == letter) {
        blanksAndCorrect[i] = letter;
      }
    }
  } else {
    wrongGuess.push(letter);
    guessLeft--;
  }
}

function gameRun() {
  if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
    wins++;
    reset();
    document.getElementById("win").innerHTML = " " + wins;
  } else if (guessLeft === 0) {
    losses++;
    reset();
    document.getElementById("wrong").innerHTML = " " + losses;
  }
  document.getElementById("yourguess").innerHTML =
    "  " + blanksAndCorrect.join(" ");
  document.getElementById("gremain").innerHTML = " " + guessLeft;
}

startup();

document.onkeyup = function(event) {
  var guesses = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(guesses);
  gameRun();
  document.getElementById("guessed").innerHTML = "  " + wrongGuess.join(" ");
};

//console logs below
console.log(games.length);
console.log(computerWord);
console.log(letterOfWord);
console.log(blanks);
console.log(blanksAndCorrect);
