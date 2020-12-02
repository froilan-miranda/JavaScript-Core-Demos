console.log("js script is connected");

function greeting() {
  console.log("Hello... you");
}

function addition(...num) {
  let sum = 0;

  for (let value of num) {
    sum += value;
  }

  return sum;
}

let sum = addition(10, 12, 44);

let value1 = 43;

let value2 = 33;

//sum = addition(value1, value2);

let numArray = [2, 4, 5, 7, 10];

function timesTwo(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function map(f, a) {
  let newArr = [];

  for (let value of a) {
    newArr.push(f(value));
  }

  return newArr;
}

let mappedArray = map(timesTwo, numArray);
console.log(mappedArray);
