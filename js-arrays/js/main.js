let comicCat = 4;

let catCopy = comicCat;

comicCat = 5;

console.log(catCopy);

let cat = ["taby", "sphynx", "black cat", "elf cat", comicCat];

let favNumbers = [7, 11, 27, 32, 54];

let mixedValues = [true, 28, "some string"];

let multiArray = [cat, favNumbers, mixedValues];

console.log(multiArray[1][2]);

let col1 = [1,2,3,4,5]
let col2 = [1,2,3,4,5]
let col3 = [1,2,3,4,5]
let col4 = [1,2,3,4,5]
let col5 = [1,2,3,4,5]

let rows = [col1, col2, col3, col4, col5]

console.log(rows[3][0];

//console.log(cat.length);
//console.log(cat.pop());
//console.log(cat.length);

//console.log(cat.push("Siamese"));
//console.log(cat[cat.length - 1]);

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[ 1]);   // Output: [2, 3]
console.log(nestedArr[1][0]);    // Output: 2
