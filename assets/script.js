// let quizContainer = document.querySelector("#quiz");
let timeEl = document.querySelector(".timer");
let secondsLeft = 30;
let startButton = document.querySelector("#start");
let score = 0;
let highScores = [];
let playerInitials;
// let quizQuestions = [
//   {
//     question: "Question 1",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "Question 2",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question: "Question 3",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "c",
//   },
//   {
//     question: "Question 4",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "c",
//   },
//   {
//     question: "Question 5",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "Question 6",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question: "Question 7",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "Question 8",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "c",
//   },
//   {
//     question: "Question 9",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question: "Question 10",
//     answers: {
//       a: "a",
//       b: "b",
//       c: "c",
//     },
//     correctAnswer: "c",
//   },
// ];

startButton.addEventListener("click", startQuiz);
// startButton.addEventListener("click", function () {
//   displayQuestion(quizQuestions, quizContainer);
// });

// function displayQuestion(quizQuestions, quizContainer) {
//   let output = [];
//   let answers;
//   let i = 0;

//   while (i < quizQuestions.length) {
//     answers = [];
//     for (letter in quizQuestions[i].answers) {
//       answers.push(
//         "<label>" +
//           '<input type="radio" name="question' +
//           i +
//           '" value="' +
//           letter +
//           '">' +
//           letter +
//           ": " +
//           quizQuestions[i].answers[letter] +
//           "</label>"
//       );
//     }

//     output.push(
//       '<div class="question">' +
//         quizQuestions[i].question +
//         "</div>" +
//         '<div class="answers">' +
//         answers.join("") +
//         "</div>"
//     );

//     quizContainer.innerHTML = output.join("");

//     i++;
//   }
// }

function startTimer() {
  var timerInterval = setInterval(function () {
    timeEl.textContent = "Time remaining: " + secondsLeft;
    secondsLeft--;

    if (secondsLeft == -1) {
      clearInterval(timerInterval);

      endQuiz();
    }
  }, 1000);
}

// function quizOver() {
//   alert("QUIZ OVER!");
// }

function startQuiz() {
  startTimer();
  document.querySelector(".home").className = "complete";
  document.getElementById("quest1").className = "active";
}

let quizQuestions = document
  .getElementById("questions")
  .getElementsByTagName("li");
// let questionStatus = document.querySelector("#questions.li").className;
let submitButton = document.createElement("button");
submitButton.innerHTML = "Submit Score";

function hideCurrentQuestion() {
  for (let i = 0; i < quizQuestions.length; i++) {
    if (quizQuestions[i].className == "inactive") {
      quizQuestions[i].className = "active";
      break;
    }
  }
}

function revealNextQuestion() {
  for (let i = 0; i < quizQuestions.length; i++) {
    if (quizQuestions[i].className == "active") {
      quizQuestions[i].className = "complete";
      break;
    }
  }
}

function isCorrect() {
  alert("Correct!");
  nextQuestion();
}

function isIncorrect() {
  alert("Wrong!");
  secondsLeft = secondsLeft - 5;
  nextQuestion();
}

function nextQuestion() {
  hideCurrentQuestion();
  revealNextQuestion();
}

function endQuiz() {
  playerInitials = prompt("QUIZ OVER! Enter initials");
  document.getElementById("quizovercard").className = "complete";
  document.querySelector(".timer").className = "complete";
  displayHighScore();
}

function displayHighScore() {
  highScores.push(score, playerInitials);
  document.getElementById("highscoretitle").className = "active";
  document.getElementById("scoreBoard").innerHTML += highScores;
}
