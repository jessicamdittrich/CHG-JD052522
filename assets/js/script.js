// DIV VARIABLES
var appearStart = document.getElementById("content-start");
var appearMain = document.getElementById("content-main");
var appearEnd = document.getElementById("content-end");

// QUESTION VARIABLES
var questions = document.getElementsByClassName('individual-questions');

// BUTTON VARIABLES
var buttonPlayGame = document.querySelector('#play-game');
var buttonPlayAgain = document.querySelector('#play-again');
var buttonAnswer = document.querySelectorAll('.answer');
var buttonCorrect = document.querySelectorAll('.correct-answer');
var buttonLogScore = document.querySelector('#log-score');

// SPAN VARIABLES
var timer = document.querySelector("#timer-countdown");
var userScore = document.querySelector("#user-score");

// CORRECT/WRONG NOTIFIER VARIABLES
var correctChoice = document.querySelector("#correct-choice");
var wrongChoice = document.querySelector("#wrong-choice");

// MAIN FUNCTION
function loadStart() {
    // MAKES CONTENT-START VISIBLE
    appearStart.setAttribute("style", "display: inline;");

    // MAKES CONTENT-START DISAPPEAR AND CONTENT-MAIN APPEAR
    buttonPlayGame.addEventListener('click', function () {
        appearStart.setAttribute("style", "display: none;");
        appearMain.setAttribute("style", "display: flex;");

        // START TIMER/COUNTDOWN
        function countdown() {
            var timeLeft = 60;
          
            var timeInterval = setInterval(function () {
              timeLeft--;
              timer.textContent = timeLeft;

              // WHEN TIMER = 0, HIDE CONTENT-MAIN & SHOW CONTENT-END
              if (timeLeft === 0) {
                clearInterval(timeInterval);
                appearMain.setAttribute("style", "display: none;");
                appearEnd.setAttribute("style", "display: inline;");
              }
            }, 1000);
        }

        // LOOPING QUESTIONS
        var i = 0;
        while (i < questions.length) {
            questions[0].setAttribute("style", "display: inline-block;");
            
            // ASKING QUESTIONS
            buttonAnswer.forEach(eachButton => {
                eachButton.addEventListener("click", function() {
                    if (value = "answer correct-answer") {
                        console.log(buttonAnswer.value);
                        correctChoice.setAttribute("style", "display: inline;");
                        // IF ANSWER - WRONG, SHOW WRONG
                        } else {
                            wrongChoice.setAttribute("style", "display: inline;");
                            // REMOVE TIME IF WRONG ***STILL TO DO
                    }
                    questions[0].setAttribute("style", "display: none;");
                });
            });
        i++;
        if (i > questions.length) break;
        }
        countdown();

    });

    // function saveData() {
    //     correctChoice = 10;
    //     wrongChoice = 5;
    // }
    // saveData();

}

loadStart();