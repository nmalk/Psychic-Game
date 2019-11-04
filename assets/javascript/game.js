

var letterOptions = ["a","b","d","e","k","m","p","r","u","v","x","y"];     //options to be matched   

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var userGuess = "";
var computerGuess =letterOptions[Math.floor(Math.random()*letterOptions.length)];

function wrongGuesses (userGuess){
    console.log(userGuess);
    document.getElementById("wrongGuesses").innerHTML = userGuess;
}

function reStartGame () {
    winCount = 0;
    lossCount = 0;
    guessesLeft = 10;
    userGuess = "";
    computerGuess =letterOptions[Math.floor(Math.random()*letterOptions.length)];
}
reStartGame();


document.onkeyup = function() {
    var newUserGuess =  String.fromCharCode(event.keyCode).toLowerCase();
       userGuess = userGuess + newUserGuess;
        wrongGuesses (userGuess);

    if (newUserGuess == computerGuess) {
        winCount++;
        // if(guessesLeft === 0) {
        //     reStartGame();
        // }
        document.getElementById("winCounter").innerHTML = winCount;
    }
    if (newUserGuess !== computerGuess) {
        lossCount++;
        if(guessesLeft === 0){
            reStartGame();
        }
        guessesLeft--;
        document.getElementById("lossCounter").innerHTML = lossCount;
        document.getElementById("numGuesses").innerHTML = guessesLeft;
    }
}













