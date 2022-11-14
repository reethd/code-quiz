let quizContainer = document.querySelector("#quiz");
let timeEl = document.querySelector(".timer");
let secondsLeft = 20;
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
  },
];

startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", function () {
  displayQuestion(quizQuestions, quizContainer);
});

function displayQuestion(quizQuestions, quizContainer) {
  let output = [];
  let answers;
  let i = 0;

  while (i < quizQuestions.length) {
    answers = [];
    for (letter in quizQuestions[i].answers) {
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          quizQuestions[i].answers[letter] +
          "</label>"
      );
    }

    output.push(
      '<div class="question">' +
        quizQuestions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );

    quizContainer.innerHTML = output.join("");

    i++;
    // displayQuestion(quizQuestions, quizContainer);
  }
}

function startTimer() {
  var timerInterval = setInterval(function () {
    timeEl.textContent = "Time remaining: " + secondsLeft;
    secondsLeft--;

    if (secondsLeft == -1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      quizOver();
    }
  }, 1000);
}

function quizOver() {
  alert("QUIZ OVER!");
}
