// declared global variables
let timeEl = document.querySelector(".timer");
let secondsLeft = 30;
let startButton = document.querySelector("#start");
let highScoreBtn = document.querySelector("#highScoreButton");
let clearScoresBtn = document.getElementById("clear");
let restartBtn = document.getElementById("start-over");
let score = 0;
let playerInitials;
let scoreBoard = document.getElementById("scoreBoard");
let scoreContainer = document.createElement("div");
let quizQuestions = document
  .getElementById("questions")
  .getElementsByTagName("li");
let submitButton = document.createElement("button");
let timerInterval;

// created event listeners for the button clicks
startButton.addEventListener("click", startQuiz);
highScoreBtn.addEventListener("click", goToHighScores);
clearScoresBtn.addEventListener("click", clearScores);
restartBtn.addEventListener("click", startOver);

// starts and displays the count down timer
function startTimer() {
  timerInterval = setInterval(function () {
    timeEl.textContent = "Time remaining: " + secondsLeft;
    secondsLeft--;

    if (secondsLeft < 0) {
      clearInterval(timerInterval);

      endQuiz();
    }
  }, 1000);
}

// runs startTimer and renders the first question in place of the home page
function startQuiz() {
  startTimer();
  document.querySelector("#home").className = "complete";
  document.getElementById("quest1").className = "active";
}

//these 2 functions change which container is visible
function revealNextQuestion() {
  for (let i = 0; i < quizQuestions.length; i++) {
    if (quizQuestions[i].className == "inactive") {
      quizQuestions[i].className = "active";
      break;
    }
  }
}

function hideCurrentQuestion() {
  for (let i = 0; i < quizQuestions.length; i++) {
    if (quizQuestions[i].className == "active") {
      quizQuestions[i].className = "complete";
      break;
    }
  }
}

//these 2 functions alert the user to their answer validity, move to the next question, and remove time from the timer if neccessary
function isCorrect() {
  alert("Correct!");
  nextQuestion();
}

function isIncorrect() {
  alert("Wrong!");
  secondsLeft = secondsLeft - 5;
  nextQuestion();
}

//changes visibility from current question to next question
function nextQuestion() {
  hideCurrentQuestion();
  revealNextQuestion();
}

//prompts user for their initials and logs highscore
function endQuiz() {
  playerInitials = prompt("QUIZ OVER! Enter initials");
  document.getElementById("quizovercard").className = "complete";
  document.querySelector(".timer").className = "complete";
  logHighScore();
}

//calls and prints array of high scores from local storage
function goToHighScores() {
  var highScores = JSON.parse(localStorage.getItem("highScores"));
  if (highScores == null) {
    highScores = [];
  }
  for (i = 0; i < highScores.length; i++) {
    let scoreItem = highScores[i];
    scoreContainer.innerHTML +=
      "Initials: " +
      scoreItem.initials +
      " Score: " +
      scoreItem.quizscore +
      "<hr>";
    scoreContainer.className = "scorecontainer";
    scoreBoard.appendChild(scoreContainer);
  }

  if (document.querySelector("#home")) {
    document.querySelector("#home").className = "complete";
  }
  document.getElementById("questions").className = "complete";
  document.getElementById("highscoretitle").className = "active";
}

//logs highscores to local storage as objects with the attributes: initials and quizscore
function logHighScore() {
  var highScores = JSON.parse(localStorage.getItem("highScores"));
  if (highScores == null) {
    highScores = [];
  }

  let scoreItem = {
    initials: playerInitials,
    quizscore: score,
  };

  highScores.push(scoreItem);
  localStorage.setItem("highScores", JSON.stringify(highScores));

  goToHighScores();
}

//clears local storage and resets score board
function clearScores() {
  scoreContainer.innerText = "";
  localStorage.clear();
}

//resets answer checkboxes
function unSelectAll() {
  var items = document.getElementsByName("answer");
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "checkbox") items[i].checked = false;
  }
}

//allows the user to return to the beginning of the quiz and reset the answers
function startOver() {
  for (let i = 0; i < quizQuestions.length; i++) {
    if (quizQuestions[i].className == "complete") {
      quizQuestions[i].className = "inactive";
    }
  }
  document.getElementById("questions").className = "active";
  document.getElementById("highscoretitle").className = "inactive";
  document.querySelector("#home").className = "active";
  unSelectAll();
}
