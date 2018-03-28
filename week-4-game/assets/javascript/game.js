//establish variables
//compScore
$(document).ready(function(){
var computerScore = Math.floor(Math.random() * 102) + 1;
console.log("comp guesss " + computerScore);
//userScore
var userScore = 0;
console.log("user score " + userScore);
//win
var win = 0;
//loss
var loss = 0;
//resultWon
var resultWin = "You Won!!!!!"
//resultLoss
var resultLoss = "You Lost :(";

//display initial values of..
//compScore
$("#computerScore").text(computerScore);
//userScore
$("#userScore").text(userScore);
//win
$("#win").text(win);
//loss
$("#loss").text(loss);

// establish random crystal vaules 1-12 
//assign different random value to each crystal (4 diff vaules for four crystals)...TBD 
var crystal = {

        crys1: Math.floor(Math.random() * 12) + 1,

        crys2: Math.floor(Math.random() * 12) + 1,

        crys3: Math.floor(Math.random() * 12) + 1,

        crys4: Math.floor(Math.random() * 12) + 1,

};
console.log("crystal 1 value " + (crystal.crys1));
console.log("crystal 2 value " + (crystal.crys2));
console.log("crystal 3 value " + (crystal.crys3));
console.log("crystal 4 value " + (crystal.crys4));


//create function to reset game - will run after user win or loss
function reset() {
        //set user score to 0 
        userScore = 0
        //display new user score 
        $("#userScore").text(userScore);
        console.log("user score " + userScore);
        //generate new random computer score 
        computerScore = Math.floor(Math.random() * 102) + 19;
        console.log("comp guesss " + computerScore);
        //display new computer score 
        $("#computerScore").text(computerScore);
        // generate new random vaules for each crystal
        crystal = {

                crys1: Math.floor(Math.random() * 12) + 1,

                crys2: Math.floor(Math.random() * 12) + 1,

                crys3: Math.floor(Math.random() * 12) + 1,

                crys4: Math.floor(Math.random() * 12) + 1,

        };
        console.log("crystal 1 value " + (crystal.crys1));
        console.log("crystal 2 value " + (crystal.crys2));
        console.log("crystal 3 value " + (crystal.crys3));
        console.log("crystal 4 value " + (crystal.crys4));

};
//when user clicks crystal 1 run function
$("#crys1").on("click", function () {

        //IF user score < computer score
        if (userScore < computerScore) {
                //add value of crystal clicked to previous userScore
                userScore = userScore + (crystal.crys1);
                //display new value of userScore in #userScore
                $("#userScore").text(userScore);

        }

        //ELSE 
        else {
                // increase loss +1
                loss++;
                //display new value of loss in #loss
                $("#loss").text(loss);
                //display you lost result message in #result
                $("#result").text(resultLoss);
                //run rest function
                reset();
        }

        //IF user score == computer score 
        if (userScore === computerScore) {
                //increase wins +1
                win++;
                //display new vaule of win in #win
                $("#win").text(win);
                //display you won result message in #result
                $("#result").text(resultWin);
                //call reset function 
                reset();
        }
});

//when user clicks crystal 2 run function
$("#crys2").on("click", function () {

        //IF user score < computer score
        if (userScore < computerScore) {
                // $(".crystal").on("click", function () {
                //add value of crystal clicked to previous userScore
                userScore = userScore + (crystal.crys2);
                //display new value of userScore in #userScore
                $("#userScore").text(userScore);

                // })
        }

        //ELSE 
        else {
                // increase loss +1
                loss++;
                //display new value of loss in #loss
                $("#loss").text(loss);
                //display you lost result message in #result
                $("#result").text(resultLoss);
                //run rest function
                reset();
        }

        //IF user score == computer score 
        if (userScore === computerScore) {
                //increase wins +1
                win++;
                //display new vaule of win in #win
                $("#win").text(win);
                //display you won result message in #result
                $("#result").text(resultWin);
                //call reset function 
                reset();
        }
});

//when user clicks crystal run function
$("#crys3").on("click", function () {

        //IF user score < computer score
        if (userScore < computerScore) {
                // $(".crystal").on("click", function () {
                //add value of crystal clicked to previous userScore
                userScore = userScore + (crystal.crys3);
                //display new value of userScore in #userScore
                $("#userScore").text(userScore);

                // })
        }

        //ELSE 
        else {
                // increase loss +1
                loss++;
                //display new value of loss in #loss
                $("#loss").text(loss);
                //display you lost result message in #result
                $("#result").text(resultLoss);
                //run rest function
                reset();
        }

        //IF user score == computer score 
        if (userScore === computerScore) {
                //increase wins +1
                win++;
                //display new vaule of win in #win
                $("#win").text(win);
                //display you won result message in #result
                $("#result").text(resultWin);
                //call reset function 
                reset();
        }
});

//when user clicks crystal run function
$("#crys4").on("click", function () {

        //IF user score < computer score
        if (userScore < computerScore) {
                // $(".crystal").on("click", function () {
                //add value of crystal clicked to previous userScore
                userScore = userScore + (crystal.crys4);
                //display new value of userScore in #userScore
                $("#userScore").text(userScore);

                // })
        }

        //ELSE 
        else {
                // increase loss +1
                loss++;
                //display new value of loss in #loss
                $("#loss").text(loss);
                //display you lost result message in #result
                $("#result").text(resultLoss);
                //run rest function
                reset();
        }

        //IF user score == computer score 
        if (userScore === computerScore) {
                //increase wins +1
                win++;
                //display new vaule of win in #win
                $("#win").text(win);
                //display you won result message in #result
                $("#result").text(resultWin);
                //call reset function 
                reset();
        }
});
})









