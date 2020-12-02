let avg = function (a) {
  let average = 0;

  let sum = add(...a); // add all numbers

  average = sum / a.length; // divide by amount of numbers

  return average; // return final value
};

let add = function (...a) {
  let sum = 0;

  for (let value of a) {
    sum += value;
  }

  return sum;
};

let numArr = [1, 2, 3, 4, 5];
console.log(avg(numArr));

let subtraction = function (...nums) {
  let output = 0;

  for (let num of nums) {
    output -= num;
  }

  return output;
};

console.log(subtraction(3, 4, 5));
