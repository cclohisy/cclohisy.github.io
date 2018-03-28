
//set initial win/loss/guesses left count
var win = 0;
var loss = 0;
var guessesLeft = 9;

//create array to store user guesses
var userGuessArray = [];

//set array of possible computer guesses 
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');

//determine the computers guess   
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("comp guesss " + computerGuess);


//determine how to obtain user guess(which key is pressed)
//write function to run when user makes a letter choice

document.onkeyup = function (event) {

    var userGuess = event.key;

    //add each user guess to array
    userGuessArray.push(userGuess);
    decideWin(userGuess, computerGuess);

};

// make decideWinner(userGuess,computerGuess) function 
function decideWin(userGuess, computerGuess) {
    //determine if user guess matches the computers guess
    //IF  userGuess ==computerGuess, 
    if (userGuess === computerGuess) {
        //increase wins +1
        win++;
        //display new vaule of win in html
        document.getElementById("wins").innerHTML = win;
        //call reset function 
        reset();
    }

    //ELSE user still has guesses left  AND choice did not match             
    else {
        // decrease guessesLeft -1
        guessesLeft--;
        // display guessesLeft 
        document.getElementById("remainingGuess").innerHTML = guessesLeft;
        // display user guess array
        document.getElementById("soFar").innerHTML = userGuessArray;
    }

    //ELSE user maxed out guesses (9 max)
    if (guessesLeft == 0) {
        //increase loss +1
        loss++;
        // display loss count
        document.getElementById("loss").innerHTML = loss;
        //call reset function
        reset();

    }
};


//make funtion to reset game
function reset() {

    //determine the computers guess   
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("new comp guess " + computerGuess);

    // clear user guess array 
    userGuessArray = [];
    //display new value of array 
    document.getElementById("soFar").innerHTML = userGuessArray;

    //set guesses left back to 9
    guessesLeft = 9;
    //display guessesLeft
    document.getElementById("remainingGuess").innerHTML = guessesLeft;

};