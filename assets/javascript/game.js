// <script type="text/javascript">
var words = ['Titanic', 'Amadeus', 'Gandhi', 'cabaret', 'Patton', 'Gravity', 'Schindlers', 'The Sting', 'The Bridge', 'Star Wars'];
var guessesRemaining = 7;
var maskedWord = "";
var lostGame = "Lets Play";
var randomWord;
var letters = {};
var gamesWon = 0;
var found = false
var keyArray = [];
// document.getElementById("remaining").innerHTML = triesRemaining;
// document.getElementById("stat").innerHTML = q;
// document.getElementById("key").innerHTML = keyArray;
// document.getElementById("games-won").innerHTML = "Games Won";

var guessesLeftHTML = document.getElementById("remaining");
var keysPressedHTML = document.getElementById("keys-pressed");
var gamesWonHTML = document.getElementById("games-won");


var playGame = function() {
    console.log("palying game")
    randomWord = words[Math.floor(Math.random() * (words.length))];
    
    keysPressedHTML.innerHTML = "";
    guessesLeftHTML.innerHTML = guessesRemaining;
    gamesWon.innerHTML = gamesWon;
    
    for( var i = 0; i < randomWord.length; i++) {
        let currentIndex = i;
        // debugger
        // letters.currentIndex = {}
        letters[i] = {};
        letters[i].letter = "";

        if( randomWord[i] == " "){
          letters[i].letter += "SPACE"
          continue;
        } else {
            letters[i].letter += randomWord[i];
            
        }
        
        letters[i].guessed = false;
    }
    // maskWord(randomWord);
    maskWord(letters);
}                


var maskWord = function(word){
    maskedWord = "";
    console.log(randomWord);
    console.log(word);
   
    for ( i in word) {
        var guessedRightorWrong = word[i].guessed
        // console.log(word[i]); //checking each letter
        if(word[i].letter === "SPACE"){

          maskedWord += " ";
        } else if (guessedRightorWrong === true ){
          maskedWord += word[i].letter + " ";
        } else {
            maskedWord += "_ ";   
        }
    };


    console.log(maskedWord)
    document.getElementById("hangman-word-to-guess").innerHTML = maskedWord;
}

function isKeyGuessed(x) {
    var indexOfGuessedKey = getIndexOfGuessedKey(x)
    console.log(x);
    // debugger
    
    // console.log("keysUsed: " + keysUsed);
    // console.log(randomWord.toLowerCase().indexOf(x));
    console.log(getIndexOfGuessedKey(x));
    let indexOfKeyPressedandChecking = getIndexOfGuessedKey(x)
    if (randomWord.toLowerCase().indexOf(x) >= 0) {
        letters[indexOfGuessedKey].guessed = true;
        console.log(letters[indexOfGuessedKey])
        return true;
    };
    return false;
}

function getIndexOfGuessedKey(key){
    return randomWord.toLowerCase().indexOf(key)
}

document.onkeyup = function(e) {

    console.log("guessing letter")
    console.log(e)
    console.log(e.key)
    var keyPressed = e.key;

    console.log(keyPressed);

    //Add New Pressed Key
    var newLetterSpan = document.createElement('span')
    newLetterSpan.innerHTML = keyPressed
    newLetterSpan.className = "key-pressed"
    keysPressedHTML.appendChild(newLetterSpan);
    // console.log(randomWord);
    // maskWord(randomWord);

    // xsrandomWordLength = randomWord.length;

   var keyMatched = isKeyGuessed(keyPressed);
   console.log("is key a match? "+ keyMatched);

   if(keyMatched){
    // debugger
    let matchedLetterIndex = getIndexOfGuessedKey(keyPressed)
    console.log(matchedLetterIndex);
    // console.log(maskedWord[matchedLetterIndex]);
    console.log(maskedWord)

    letters[matchedLetterIndex].guessed = true;

   } else{
    // debugger
    guessesRemaining --;
    guessesLeftHTML.innerHTML = guessesRemaining;
    console.error("Key doesn't match");

   }

   maskWord(letters);
    // for (var i = 0; i < randomWordLength.length; i++) {
       
    //     console.log(randomWord[i])
        
    //     console.log("hangman-word-to-guess");

    // }
} // END OF FUNCTION = guessLetter

function isGameIsOver() {

    if (foundWord == true){
      alert("You Win!")
    } else if(guessesRemaining == 0){
      alert("Game is over");
      
    }
    exit();

}
var resetGame = function(){
  gameWon = 0;
  maskedWord = 0;
  playGame();
}

document.getElementById("reset-btn").addEventListener("click", resetGame)
document.getElementById("play-btn").addEventListener("click", playGame)
// document.getElementById("myBtn").addEventListener("click", displayDate);

// document.onkeyup = guessLetter(event);

