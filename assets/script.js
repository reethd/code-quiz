let timeEl = document.querySelector(".timer");
let secondsLeft = 100;
let startButton = document.querySelector("#start");
let quizQuestions = [
  {
    question: "Question 1",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "a",
  },
  {
    question: "Question 2",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "b",
  },
  {
    question: "Question 3",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "c",
  },
  {
    question: "Question 4",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "c",
  },
  {
    question: "Question 5",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "a",
  },
  {
    question: "Question 6",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "b",
  },
  {
    question: "Question 7",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "a",
  },
  {
    question: "Question 8",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "c",
  },
  {
    question: "Question 9",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "b",
  },
  {
    question: "Question 10",
    answers: {
      a: "a",
      b: "b",
      c: "c",
    },
    correctAnswer: "c",
  }
];

startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startQuiz);

function startQuiz() {}

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

function quizOver() {}
