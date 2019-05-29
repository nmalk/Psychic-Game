alert("Test");

var letterOptions = ["a","b","d","e","k","m","p","r","u","v","x","y"];        

var winCount =0;
var lossCount =0;
var guessesLeft =10;
var yourGuessesSoFar ="";


document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

    var computerGuess = letterOptions[Math.floor(Math.random()*letterOptions.length)];
    console.log(computerGuess);

    guessesLeft = 10;
    yourGuessesSoFar = "";

    
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongGuesses").innerHTML = yourGuessesSoFar;
    

    if (userGuess.toString()== computerGuess.toString()){
        winCount++;
        document.getElementById("winCounter").innerHTML = winCount;
    }
    else if (userGuess.toString() !== computerGuess.toString()) {
        lossCount++;
        document.getElementById("lossCounter").innerHTML = lossCount;
    }


}



















