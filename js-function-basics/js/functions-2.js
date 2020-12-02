function addition(...nums) {
  let sum = 0;

  for (let value of nums) {
    sum += value;
  }

  return sum;
}

console.log(addition(1, 2, 3, 4));

let subtraction = function (...nums) {
  let difference = 0;

  for (let value of nums) {
    difference -= value;
  }

  return difference;
};

let division = function (num1, num2) {
  if (num2 === 0) {
    return null;
  }

  return num1 / num2;
};

console.log(subtraction(1, 2, 3, 4));

console.log(subtraction);

//let areaOfRectangle = function (width, height) {
//  return width * height;
//};

let areaOfRectangle = (width = 1, height = 1) => width * height;

let doubleValue = (value) => value * 2;

let sendMessage = () => alert("here is a message");

let volumeOfCube = function (width, height, depth) {
  return width * height * depth;
};

let measurements = [2, 3, 4];

console.log(volumeOfCube(measurements[0], measurements[1], measurements[2]));
console.log(volumeOfCube(...measurements));

console.log(areaOfRectangle(undefined, 52));

console.log(doubleValue(10));

console.log(sendMessage());
