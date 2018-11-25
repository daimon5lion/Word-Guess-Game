var games = [
  "soccer",
  "skating",
  "basketball",
  "fencing",
  "wrestling",
  "swimming",
  "icehockey",
  "tennis",
  "volleyball",
  "diving",
  "waterpolo",
  "archery"
];

var computerWord = "";
var lettersOfWord = [];
var blanksAndCorrect = [];
var wrongGuess = [];
var blanks = 0;

var wins = 0;
var losses = 0;
var guessLeft = 15;

var c = document.getElementById("champion");
var s = document.getElementById("sad");

function startup() {
  computerWord = games[Math.floor(Math.random() * games.length)];
  console.log(computerWord);
  lettersOfWord = computerWord.split("");
  blanks = lettersOfWord.length;
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
    wrongGuess.push(letter.toUpperCase());
    guessLeft--;
  }
}

function gameRun() {
  if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
    wins++;
    document.getElementById("image").src = "./assets/images/gmedal.jpg";
    c.play();
    reset();
    document.getElementById("win").innerHTML = " " + wins;
  } else if (guessLeft === 0) {
    losses++;
    document.getElementById("image").src = "./assets/images/tagain.jpg";
    document.getElementById("wrong").innerHTML = " " + losses;
    s.play();
    reset();
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
