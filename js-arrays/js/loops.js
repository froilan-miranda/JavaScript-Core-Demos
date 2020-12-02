let y = 5;

console.log("this is the value of y: " + ++y);
console.log(y);

// Example 1
console.log("celcius        farenheit");
for (let c = 0; c <= 100; c++) {
  let farenheit = (c * 9) / 5 + 32;
  console.log(c + "               " + farenheit);
}

// Example 2
let userNumber = prompt("Enter a number, please");
let i = 1;
let sum = 0;
while (i <= userNumber) {
  sum += i++;
}

// Example 3
let output = "";
for (let k = 1; k < 7; k++) {
  output += k + " ";
  console.log(output);
}

alert("the sum of 1 to " + userNumber + " = " + sum);

let userInput = prompt("enter a color");
let colorValue = "";

switch (userInput) {
  case "white":
    colorValue = "#ffffff";
    alert(userInput + " has the hex value of " + colorValue);
    break;
  case "black":
    colorValue = "#000000";
    alert(userInput + " has the hex value of " + colorValue);
    break;
  case "red":
    colorValue = "#ff0000";
    alert(userInput + " has the hex value of " + colorValue);
    break;

  default:
    alert("don't know this hex value. and who uses that color anyway");
    break;
}

let drinkType = prompt("enter a beverage type");

switch (drinkType.toLowerCase()) {
  case "water":
    alert("this is a fantastic way to keep yourself hydrated");
    break;
  case "soda":
    alert("Tobias stop drinking so much sprite and pick up a glass of water");
    break;
  case "whiskey":
    alert("Not good for you but living my best life");
    break;
  default:
    alert("Whatever");
    break;
}
