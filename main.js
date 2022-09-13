let num1 = Math.ceil(Math.random() * 10),
  num2 = Math.ceil(Math.random() * 10);

let question = document.getElementById("question");

let scoreId = document.getElementById("score");

question.innerHTML = `What is ${num1} times ${num2}?`;
let form = document.getElementById("form");
let input = document.getElementById("input");

let correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreId.innerText = `Score: ${score}`;

form.addEventListener("submit", () => {
  let userAns = +input.value; // + is added at first to make the type a number
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
