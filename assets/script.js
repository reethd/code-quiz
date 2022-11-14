var timeEl = document.querySelector(".timer");
var secondsLeft = 100;

document.querySelector("#start").addEventListener("click", startTimer);

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time remaining: " + secondsLeft;
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      quizOver();
    }
  }, 1000);
}

function quizOver() {
    
}


