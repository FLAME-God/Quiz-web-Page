const data = [
  {
    id: 1,
    question: "Which of these is a bird?",
    answers: [
      { answer: "Tiger", isCorrect: false },
      { answer: "Pecock", isCorrect: true },
      { answer: "Python", isCorrect: false },
      { answer: "Lion", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "Which of these is a snake?",
    answers: [
      { answer: "Goat", isCorrect: false },
      { answer: "Pecock", isCorrect: false },
      { answer: "Python", isCorrect: true },
      { answer: "Horse", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "Which of these is a insect?",
    answers: [
      { answer: "Tiger", isCorrect: false },
      { answer: "Butterfly", isCorrect: true },
      { answer: "Horse", isCorrect: false },
      { answer: "Lion", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const answerContainer = document.querySelector(".answers");
const questionContainer = document.querySelector(".question");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;

  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answer: ${correctCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answer: ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Scorer: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  questionContainer.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
         <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
         <label for=${index}>${item.answer}</label>
    </div>
    `
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Select an Answer");
    }
  });
};

showQuestion(qIndex);
submitAnswer();
