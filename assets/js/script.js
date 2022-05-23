// DIV VARIABLES
var appearStart = document.getElementById("content-start");
var appearMain = document.getElementById("content-main");
var appearEnd = document.getElementById("content-end");

// QUESTIONS ARRAY
var questions = document.getElementsByClassName('individual-questions');

// SETS QUESTION TO START AT FIRST ONE
var userQuestionCounter = 0;

// BUTTON VARIABLES
var buttonPlayGame = document.querySelector('#play-game');
var buttonPlayAgain = document.querySelector('#play-again');
var buttonAnswer = document.querySelectorAll('.answer');
var buttonLogScore = document.querySelector('#log-score');

// SPAN VARIABLES
var timer = document.querySelector("#timer-countdown");
var userScore = document.querySelector("#user-score");
var scoreCount = localStorage.getItem("answer-count");
var userFinalScore = document.getElementsByClassName("user-score-pulled");
var userNamePulled = document.getElementsByClassName("user-name-pulled");

// INPUT VARIABLE
var userNameInput = document.querySelector("#user-name");

// TEXT CONTENTS
userScore.textContent = scoreCount;

// CORRECT/WRONG NOTIFIER VARIABLES
var correctChoice = document.querySelector("#correct-choice");
var wrongChoice = document.querySelector("#wrong-choice");

// TIMER VARIABLE
var timeLeft = 10; // RETURN TO 60

// START TIMER/COUNTDOWN
function countdown() {
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = timeLeft;

      // WHEN TIMER = 0, HIDE CONTENT-MAIN & SHOW CONTENT-END
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        appearMain.setAttribute("style", "display: none;");
        appearEnd.setAttribute("style", "display: inline;");
        timeLeft = 0;
      }
    }, 1000);
}

// MAIN FUNCTION
function loadStart() {
    // MAKES CONTENT-START VISIBLE
    appearStart.setAttribute("style", "display: inline;");

    // MAKES CONTENT-START DISAPPEAR AND CONTENT-MAIN APPEAR
    buttonPlayGame.addEventListener('click', function () {
        appearStart.setAttribute("style", "display: none;");
        appearMain.setAttribute("style", "display: flex;");
        questions[0].setAttribute("style", "display: inline-block;");
        // LOOP FOR BUTTONS TO BREAKUP CONNECTION OF BUTTONS
        for (var i = 0; i < buttonAnswer.length; i++){
            buttonAnswer[i].addEventListener("click", clickAnswerHandler)
        }

        countdown();
    });
}

// STARTS THE SCORE AT 0
userScore = 0;

function clickAnswerHandler(event) {
    var answerCheck = event.target.classList.length;
    questions[userQuestionCounter].setAttribute("style", "display: none;");
    
    if (answerCheck === 2) {
        console.log(answerCheck);
        correctChoice.setAttribute("style", "display: inline;");
        // ADDS 10 POINTS IF ANSWER IS CORRECT
        userScore = userScore+10;
        localStorage.setItem("answer-count", userScore);
    } else {
        wrongChoice.setAttribute("style", "display: inline;");
        // SUBTRACTS 5 POINTS IF ANSWER IS WRONG
        userScore = userScore-5;
        localStorage.setItem("answer-count", userScore);
        // SUBTRACTS 5 SECONDS IF ANSWER IS WRONG
        timeLeft = timeLeft-5;
    }

    // WHEN TIME RUNS OUT REMOVE CONTENT-MAIN AND SHOW CONTENT-END
    setTimeout(function(){
        userQuestionCounter++;
        questions[userQuestionCounter].setAttribute("style", "display: inline-block;");
        correctChoice.setAttribute("style", "display: none;");
        wrongChoice.setAttribute("style", "display: none;");
        
        // ONCE QUESTIONS END TIMER STOPS AND THANKS FOR PLAYING APPEARS
        /*if (questions[userQuestionCounter] = undefined) {
            console.log(questions[userQuestionCounter]);
            appearMain.setAttribute("style", "display: none;");
            appearEnd.setAttribute("style", "display: inline;");
        }*/
        return;
    }, 500);
}

// ADD DATA NAME AND SCORE TO LEADERBOARD
function showNameAndScore(){
    // PULLING DATA FROM LOCAL STORAGE
    userName = localStorage.getItem("user-name");
    userScore = localStorage.getItem("answer-count");
    // PUTTING DATA INTO LEADERBOARD TEXT CONTENT
    userNamePulled[0].textContent = userName;
    userFinalScore[0].textContent = userScore;
}
    // CLICK TO LOG NAME AND SCORE
    buttonLogScore.addEventListener("click", function(event) {
        event.preventDefault();

        var userName = document.querySelector("#user-name").value;
        localStorage.setItem("user-name", userName);
        // FUNCTION TO ADD DATA NAME AND SCORE TO LEADERBOARD
        showNameAndScore();

        appearMain.setAttribute("style", "display: flex;");
        appearEnd.setAttribute("style", "display: none;");
        buttonPlayAgain.setAttribute("style", "display: inline;");
        questions[0].setAttribute("style", "display: none;");
        questions[1].setAttribute("style", "display: none;");
        questions[2].setAttribute("style", "display: none;");
        questions[3].setAttribute("style", "display: none;");
        questions[4].setAttribute("style", "display: none;");
    });

    // PLAY AGAIN BUTTON RESTARTS QUESTIONS AND TIMER
    buttonPlayAgain.addEventListener("click", function() {
        // RESETS SCORE TO 0
        userScore = 0;
        // ONCE CLICKED BUTTONS DISAPPEAR AND QUESTIONS BEGIN AGAIN
        buttonPlayAgain.setAttribute("style", "display: none;");
        // COPIED FROM LINE 58 UNDER LOAD START
        appearStart.setAttribute("style", "display: none;");
        appearMain.setAttribute("style", "display: flex;");
        questions[0].setAttribute("style", "display: inline-block;"); // END COPIED SECTION

        // RESETS TIMER
        timeLeft = 60;
        timer.textContent = timeLeft;
        countdown();
    });

loadStart();