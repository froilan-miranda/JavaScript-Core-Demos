console.log("connected");

let myButton = document.getElementById("myButton");

setTimeout(() => console.log("time is out"), 5000);

myButton.addEventListener("click", () =>
  alert("this is the result of a function expression")
);

function clickButton() {
  alert("button click");
}

let width = 700;
let height = 500;
let score = 0;

let scoreEle = document.getElementById("showScore");

let boundry = document.getElementById("boundry");
boundry.style.width = width + "px";
boundry.style.height = height + "px";
boundry.style.border = "1px solid #000000";

let box = document.createElement("div");
box.style.width = "20px";
box.style.height = "20px";
box.style.backgroundColor = "#000000";
box.style.position = "absolute";
box.addEventListener("click", increaseScore);
boundry.appendChild(box);

function increaseScore(event) {
  console.log(event);
  score += 100;
  scoreEle.textContent = score;
}

function reposition() {
  console.log("interval");
  box.style.left = Math.floor(Math.random() * width) + "px";
  box.style.top = Math.floor(Math.random() * height) + "px";
}
setInterval(reposition, 2000);
