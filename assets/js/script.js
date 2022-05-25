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

var userScoreCounter = 0;

// INPUT VARIABLE
var userNameInput = document.querySelector("#user-name");

// CORRECT/WRONG NOTIFIER VARIABLES
var correctChoice = document.querySelector("#correct-choice");
var wrongChoice = document.querySelector("#wrong-choice");

// TIMER VARIABLE
var timeLeft = 30;

/* ***** FUNCTIONS ***** */

// QUESTIONS
function clickAnswerHandler(event) {
    var answerCheck = event.target.classList.length;
    questions[userQuestionCounter].setAttribute("style", "display: none;");
    
    if (answerCheck === 2) {
        // SHOW ANSWER WAS CORRECT
        correctChoice.setAttribute("style", "display: inline;");
        // ADDS 10 POINTS IF ANSWER IS CORRECT
        userScoreCounter = userScoreCounter+10;
        localStorage.setItem("answer-count", userScoreCounter);
    } else {
        // SHOW ANSWER WAS WRONG
        wrongChoice.setAttribute("style", "display: inline;");
        // SUBTRACTS 5 POINTS IF ANSWER IS WRONG
        userScoreCounter = userScoreCounter-5;
        localStorage.setItem("answer-count", userScoreCounter);
        // SUBTRACTS 5 SECONDS IF ANSWER IS WRONG
        timeLeft = timeLeft-5;
    }

    // WHEN TIMER RUNS OUT REMOVE CONTENT-MAIN AND SHOW CONTENT-END
    setTimeout(function(){
        userQuestionCounter++;
        questions[userQuestionCounter].setAttribute("style", "display: inline-block;");
        correctChoice.setAttribute("style", "display: none;");
        wrongChoice.setAttribute("style", "display: none;");
        return;
    }, 500);
}

// START TIMER/COUNTDOWN
function countdown() {
    // SETTING UP TIMER
    var timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = timeLeft;

        // TEXT CONTENTS
        userScore.textContent = userScoreCounter;

      // WHEN TIMER = 0, HIDE CONTENT-MAIN & SHOW CONTENT-END
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        appearMain.setAttribute("style", "display: none;");
        appearEnd.setAttribute("style", "display: inline;");
        timeLeft = 0;
      }
    }, 1000);
}

// ADD DATA NAME AND SCORE TO LEADERBOARD
function showNameAndScore(){
    // PULLING DATA FROM LOCAL STORAGE
    userName = localStorage.getItem("user-name");
    userScoreCounter = localStorage.getItem("answer-count");
    // LOOP TO LOOP THROUGH USERS PLAYED - STILL TO BE DONE
    for (var i = 0; i < userNamePulled.length; i++){
    // PUTTING DATA INTO LEADERBOARD TEXT CONTENT
    userNamePulled[0].textContent = userName;
    
    }

    userFinalScore[0].textContent = userScoreCounter;
}

/* ***** EVENT LISTENERS ***** */

// CLICK PLAY AND CONTENT-START DISAPPEARS, CONTENT-MAIN APPEARS, TIMER & QUESTIONS START
buttonPlayGame.addEventListener('click', function () {
    appearStart.setAttribute("style", "display: none;");
    appearMain.setAttribute("style", "display: flex;");
    questions[0].setAttribute("style", "display: inline-block;");
    // LOOP FOR BUTTONS TO BREAKUP CONNECTION OF BUTTONS
    for (var i = 0; i < buttonAnswer.length; i++){
        buttonAnswer[i].addEventListener("click", clickAnswerHandler)
    }
    // RUN TIMER
    countdown();
});

// CLICK TO LOG NAME AND SCORE
buttonLogScore.addEventListener("click", function(event) {
    event.preventDefault();
    // PULLING DATA FROM LOCAL STORAGE
    var userName = document.querySelector("#user-name").value;
    localStorage.setItem("user-name", userName);
    // FUNCTION TO ADD DATA NAME AND SCORE TO LEADERBOARD
    showNameAndScore();
    // HIDE CONTENT-END AND SHOW CONTENT-MAIN WITHOUT QUESTIONS BUT SHOW PLAY AGAIN BUTTON
    appearMain.setAttribute("style", "display: flex;");
    appearEnd.setAttribute("style", "display: none;");
    correctChoice.setAttribute("style", "display: none;");
    wrongChoice.setAttribute("style", "display: none;");
    buttonPlayAgain.setAttribute("style", "display: inline;");
    questions[0].setAttribute("style", "display: none;");
    questions[1].setAttribute("style", "display: none;");
    questions[2].setAttribute("style", "display: none;");
    questions[3].setAttribute("style", "display: none;");
    questions[4].setAttribute("style", "display: none;");
    questions[5].setAttribute("style", "display: none;");
    timeLeft = 0;
});

// CLICK PLAY AGAIN BUTTON AND PAGE RELOADS
buttonPlayAgain.addEventListener("click", function() {
    window.location.reload();
});