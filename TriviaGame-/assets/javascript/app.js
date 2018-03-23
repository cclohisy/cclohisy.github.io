
 console.log("hi")

$(document).ready(function () {
    //hide all but startGame div
    $("#startGame").show();
    //question
    $("#qaData").hide();
    //result
    $("#result").hide();
    //gameOver
    $("#gameOver").hide();
   

//define variables needed
var rightImage = "assets/images/leslieWon.gif"
//userCorrect - store correct answer total
var userCorrect = 0;
console.log("correct answers" + userCorrect);
//userWrong - store inccorecrt answer total
var userWrong = 0;
console.log("wrong answers" + userWrong);
//userTimeout- store unaswered total 
var userTimeout = 0;
console.log("unanswered questions" + userTimeout);
//countdown - 25 seconds to answer each question
var countdown = 7;
//timeRemains - true/false 
var timeRemains = true;
//question number- stores which question user in on ... 0-19
var questionNumber = 0;

var countdownTimer = 0;

//question and answer arrays? objects? 
var questionArr = [
    q0 = {
        question: " Where was Leslie Knope born?",
        answerArr: [
            option1 = {
                text: "Pawnee, IN",
                value: false
            },
            option2 = {
                text: "Eagleton, IN",
                value: true
            },
            option3 = {
                text: "New York, NY",
                value: false
            },
            option4 = {
                text: "Washington D.C",
                value: false
            }],
        correctAnswer: 1,

    },
    q1 = {
        question: " What College did Leslie Knope attend?",
        answerArr: [
            option1 = {
                text: "University of Wisconsin, Madison",
                value: false
            },
            option2 = {
                text: "Indiana University, Bloomington",
                value: true
            },
            option3 = {
                text: "University of Minnesota, Twin Cities",
                value: false
            },
            option4 = {
                text: "Purdue University",
                value: false

            },

        ]

    },
    q2 = {
        question: " What is the name of Andy's most succesful Band?",
        answerArr: [
            option1 = {
                text: "Rat Poison",
                value: false
            },
            option2 = {
                text: "Rat Mouse",
                value: false
            },
            option3 = {
                text: "Mouse Rat",
                value: true
            },
            option4 = {
                text: "Rodent Trap",
                value: false
            }]
    },
    q3 = {
        question: " Which of the following were NEVER the offical town slogan of Pawnee? ",
        answerArr: [
            option1 = {
                text: "First in Friendship, Fourth in Obesity",
                value: false
            },
            option2 = {
                text: "A Town and a Place",
                value: false
            },
            option3 = {
                text: "The Akron of Southwest Indiana",
                value: false
            },
            option4 = {
                text: "Storied Past, Bright Future",
                value: true
            }]
    },

    q4 = {
        question: " Who is Andy's alter ego",
        answerArr: [
            option1 = {
                text: "Burt Macklin",
                value: true
            },
            option2 = {
                text: "Mike Burton",
                value: false
            },
            option3 = {
                text: "Ben Houndle",
                value: false
            },
            option4 = {
                text: " Andy Dier",
                value: false
            }]
    },

    q5 = {
        question: 'What "holiday" do Tom and Donna celebrate once a year?',
        answerArr: [
            option1 = {
                text: "Galentines Day",
                value: false
            },
            option2 = {
                text: "Their friendship aniversary",
                value: false
            },
            option3 = {
                text: "Treat yo' self!",
                value: true
            },
            option4 = {
                text: "National Parks",
                value: false
            }]
    },
    q6 = {
        question: " What is Ben's favorite food? ",
        answerArr: [
            option1 = {
                text: "Pie",
                value: false
            },
            option2 = {
                text: "Waffles",
                value: false
            },
            option3 = {
                text: "Pizza",
                value: false
            },
            option4 = {
                text: "Calzones",
                value: true
            }]
    },
    q7 = {
        question: " What is the name of Leslie's adolescent nemesis?",
        answerArr: [
            option1 = {
                text: "George Weasly",
                value: false
            },
            option2 = {
                text: "Greg Pikitus",
                value: true
            },
            option3 = {
                text: "April Ludgate",
                value: false
            },
            option4 = {
                text: "Peter Finklestein",
                value: false
            }]
    },
    q8 = {
        question: " What is Leslie's favorite food?",
        answerArr: [
            option1 = {
                text: "Ice Cream",
                value: false
            },
            option2 = {
                text: "Bacon",
                value: false
            },
            option3 = {
                text: "Waffles ",
                value: true
            },
            option4 = {
                text: "Whipped Cream",
                value: false
            }]
    },
    q9 = {
        question: " Tom invents which alcoholic beverage?",
        answerArr: [
            option1 = {
                text: "Viper Venom",
                value: false
            },
            option2 = {
                text: "Tom's Potion",
                value: false
            },
            option3 = {
                text: "Blackout Bev",
                value: false
            },
            option4 = {
                text: "Snake Juice",
                value: true
            }]
    },
    q10 = {
        question: " What is 'Jerry' Gergich's real name?",
        answerArr: [
            option1 = {
                text: "Larry",
                value: false
            },
            option2 = {
                text: "Garry",
                value: true
            },
            option3 = {
                text: "Gerry",
                value: false
            },
            option4 = {
                text: "Terry",
                value: false
            }]
    },
    q11 = {
        question: " Ben Wyatt was the mayor of which Minnesota town at 18?",
        answerArr: [
            option1 = {
                text: "Fridley",
                value: false
            },
            option2 = {
                text: "Patridge",
                value: true
            },
            option3 = {
                text: "Roseville",
                value: false
            },
            option4 = {
                text: "Eagan",
                value: false
            }]
    },


];

//when player clicks start game button
//initialize game
$("#startButton").on("click", function () {
    //hide startbutton
    // $("#startGame").hide();
    $("#startButton").hide(3000);
    questionDisplay();
}

);
//when player clicks Try again button
//restart game
$("#retryButton").on("click", function () {
    questionNumber = 0;
    //hide startGame 
    $("#gameOver").hide();
    //question
    $("#qaData").hide();
    //result
    $("#result").hide();
    //gameOver
    $("#gameOver").hide();
    questionDisplay();
}

);
function questionDisplay() {
    //display countdown = 7
    $("#timeRemaining").text(countdown);
    //display question
    $("#trivia").text(questionArr[questionNumber].question);
    //display answer options1-4
    $("#ans1").text(questionArr[questionNumber].answerArr[0].text);
    $("#ans2").text(questionArr[questionNumber].answerArr[1].text);
    $("#ans3").text(questionArr[questionNumber].answerArr[2].text);
    $("#ans4").text(questionArr[questionNumber].answerArr[3].text);
    //display qestion data
    $("#qaData").show();
    //hide result div
    $("#result").hide();

    //timeout function - see if user ran out of time - move onto result screen
    countdownTimer = setInterval(function () {

        countdown = countdown - 1;
        $("#timeRemaining").text(countdown);
        //IF countdown == 0 
        if (countdown == 0) {
            clearInterval(countdownTimer)
            //userTimeout++
            userTimeout++
            console.log("unanswered questions" + userTimeout)
            //display results div with TIME OUT message
            timesUpResults()
        }
    }, 1000);// end of set interval
} //end of question display 

//on player click determine if choice was right or wrong
$(".answers").on("click", function () {
    //hide question screeen
    $("#qaData").hide();
    // show result screen
    $("#result").show();
    clearInterval(countdownTimer)
    

}).on("click", "#ans1", function () {
    //IF userChoice == true
    if (questionArr[questionNumber].answerArr[0].value == true) {
        //playerCorrect + 1
        userCorrect++;
        //display YOU ARE RIGHT message
        $("#resultMessage").text("YOU GOT IT! ");
        //display you won gif... hide rest
        $("#rightImage").show();
        $("#wrongImage").hide();
        $("#timeoutImage").hide();
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        //display wrong message
        $("#timeRemaining").text(countdown)
        $("#resultMessage").text("WRONG. Nice Try.")
        //display correct answer
        $("#correctAnswer").text("The correct answer was " + questionArr[questionNumber].answerArr[0].text)
        //display wrong gif... hide rest
        $("#rightImage").hide();
        $("#wrongImage").show();
        $("#timeoutImage").hide();
    }
    //questionNumber ++
    questionNumber++
     //after 3 seconds display next question 
   nextQuestionTimer()

}).on("click", "#ans2", function () {
    if (questionArr[questionNumber].answerArr[1].value == true) {
        //playerCorrect + 1
        userCorrect++;
        //display YOU ARE RIGHT message
        $("#resultMessage").text("YOU GOT IT! ");
        //display you won gif... hide rest
        $("#rightImage").show();
        $("#wrongImage").hide();
        $("#timeoutImage").hide();
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        //display wrong message
        $("#resultMessage").text("WRONG. Nice Try.");
        //display correct answer
        $("#correctAnswer").text("The correct answer was " + questionArr[questionNumber].answerArr[0].text)
        //display wrong gif... hide rest
        $("#rightImage").hide();
        $("#wrongImage").show();
        $("#timeoutImage").hide();
    }
    //questionNumber ++
    questionNumber++;
    //after 3 seconds display next question 
    nextQuestionTimer();

}).on("click", "#ans3", function () {
    if (questionArr[questionNumber].answerArr[2].value == true) {
        //playerCorrect + 1
        userCorrect++;
        //run result display function
        $("#resultMessage").text("YOU GOT IT! ")
        //display you won gif... hide rest
        $("#rightImage").show();
        $("#wrongImage").hide();
        $("#timeoutImage").hide();
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        //display wrong message
        $("#resultMessage").text("WRONG. Nice Try.")
        //display correct answer
        $("#correctAnswer").text("The correct answer was " + questionArr[questionNumber].answerArr[0].text)
        //display wrong gif... hide rest
        $("#rightImage").hide();
        $("#wrongImage").show();
        $("#timeoutImage").hide();
    }
    //questionNumber ++
    questionNumber++
    //after 3 seconds display next question 
    nextQuestionTimer()


}).on("click", "#ans4", function () {
    if (questionArr[questionNumber].answerArr[3].value == true) {
        //playerCorrect + 1
        userCorrect++;
        //display right message 
        $("#resultMessage").text("YOU GOT IT! ");
        //display you won gif... hide rest
        $("#rightImage").show();
        $("#wrongImage").hide();
        $("#timeoutImage").hide();
    }
    //ELSE
    else {
        //playerwrong + 1
        userWrong++
        //display wrong message
        //display wrong message
        $("#resultMessage").text("WRONG. Nice Try.");
        //display correct answer
        $("#correctAnswer").text("The correct answer was " + questionArr[questionNumber].answerArr[0].text)
        //display wrong gif... hide rest
        $("#rightImage").hide();
        $("#wrongImage").show();
        $("#timeoutImage").hide();
    }
    //questionNumber ++
    questionNumber++
    //after 3 seconds display next question
    nextQuestionTimer();


});

function timesUpResults() {
    //questionNumber ++
    questionNumber++
    //hide question screeen
    $("#qaData").hide();
    // show result screen
    $("#result").show();
    //display results div with TIME OUT message
    $("#resultMessage").text("Out of Time")
    //display correct answer
    $("#correctAnswer").text("the correct answer was")
    //display wrong gif... hide rest
    $("#rightImage").hide();
    $("#wrongImage").hide();
    $("#timeoutImage").show();
    //display 0 time 
    // $("#timeRemaining").text(countdown)
    //after 3 seconds display next question 
    nextQuestionTimer()
}
// console.log(questionNumber);

function nextQuestionTimer() {
    resultsTimer = setTimeout(function() {
        //  clearInterval(resultsTimer);
        //hide results show question             
        $("#results").hide();
        // show question screen
        $("#qaData").show();
        //reset countdown
        countdown = 7;
        if (questionNumber < 12) {
            questionDisplay();
           
        }
        else
            // clearInterval(resultsTimer);
         endGame();

    }, 3000);


};




// when questions done... display game over screen not working 
function endGame() {
    //hide final result screen
    $("#result").hide();
    //hide question div 
    $("#qaData").hide()
    //display game over screen 
    $("#gameOver").show();
    //display correct answer total 
    $("#correct").text("Correct Answers: " + userCorrect);
    //display incorrect answer total 
    $("#wrong").text("Incorrect Answers : " + userWrong)
    //display unanswered total 
    $("#unanswered").text("Unanswered : " + userTimeout)
    
    if(userCorrect == 12){
        var allCorrectImg = $("<img>")
        allCorrectImg.addClass("img-fluid")
        allCorrectImg.attr("src", "/Users/ceciliaclohisy/Documents/homework/TriviaGame-/assets/images/allCorrectgif.gif")
        $("#allCorrectImg").append(allCorrectImg)
    }
}
});
