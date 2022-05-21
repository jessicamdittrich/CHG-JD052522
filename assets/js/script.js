// DIV VARIABLES
var appearStart = document.getElementById("content-start");
var appearMain = document.getElementById("content-main");
var appearEnd = document.getElementById("content-end");

// BUTTON VARIABLES
var buttonPlayGame = document.querySelector('#play-game');
var buttonPlayAgain = document.querySelector('#play-again');
var buttonCorrect = document.querySelector('.correct-answer');
var buttonWrong = document.querySelector('.wrong-answer');
var buttonLogScore = document.querySelector('#log-score');

// SPAN VARIABLES
var timer = document.querySelector("#timer-countdown");
var userScore = document.querySelector("#user-score");

function loadStart() {
    // MAKES CONTENT-START VISIBLE
    appearStart.setAttribute("style", "display: inline;");

    // MAKES CONTENT-START DISAPPEAR AND CONTENT-MAIN APPEAR
    buttonPlayGame.addEventListener('click', function () {
        appearStart.setAttribute("style", "display: none;");
        appearMain.setAttribute("style", "display: flex;");

        // START TIMER
        function countdown() {
            var timeLeft = 60;
          
            var timeInterval = setInterval(function () {
              timeLeft--;
              timer.textContent = timeLeft;
              if (timeLeft === 0) {
                clearInterval(timeInterval);
                displayMessage();
              }
            }, 1000);
          }

        countdown();
    });


    // LOOP THROUGH QUESTIONS
    /*for (var i = 0; i < ; i++){

    }*/

  }

loadStart();