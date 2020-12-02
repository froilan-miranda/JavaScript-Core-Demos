let colorArr = ["black", "white", "cyan", "fuchsia", "sea foam green"];

let list = document.getElementById("main-nav");

// select parent node
//let listParent = list.parentNode;
//listParent.style.backgroundColor = "#0000ff";

for (let color of colorArr) {
  let newColor = document.createElement("li");
  let colorTxt = document.createTextNode(color);
  newColor.appendChild(colorTxt);
  list.appendChild(newColor);
}

// select previous sibling
let colorItem = document.querySelector("#green");
let prevSib = colorItem.previousElementSibling;
prevSib.style.backgroundColor = "#ff0000";

// select next sibling
let colorItem2 = document.querySelector(".nav-item");
let nextSib = colorItem2.nextElementSibling;
nextSib.style.backgroundColor = "#0033ff";

// insert before
let colorItemBefore = document.createComment("This is a list of Colors");
list.insertBefore(colorItemBefore, colorItem2);

// get all child nodes
let listChildren = list.childNodes;

console.log(listChildren.length);
console.log(list.children.length);
console.log(list.children[3].nodeName);

for (let childNode of listChildren) {
  console.log(childNode.nodeName);
}

// first child
console.log(list.firstElementChild.nodeName + " is the first element child");
// last child
console.log(list.lastElementChild.nodeName + " is the last element child");

// Remove Node
//let itemToRemove = document.querySelector(".nav-item");
//itemToRemove.remove();

//let newListItem = document.createElement("li");

//let listItemText = document.createTextNode("yellow");

//newListItem.appendChild(listItemText);

//list.appendChild(newListItem);
