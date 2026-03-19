console.log("Exercise #1 - For Loop");

for (var i = 0; i < 10; i++) {
	console.log(i);
}

console.log("Exercise #2 - While Loop");

var entity = "Monster";
var life = 10;
while (life != 0) {
	console.log("Keep " + entity + " on screen");
	life--;
}

console.log("Exercise #3 - While Loop as For Loop");

var i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

console.log("Exercise #4 - Do..While Loop");

var entity = "Monster";
var life = 10;

do {
	console.log("Keep " + entity + " on screen ");
	life--;
} while (life != 0);

console.log("Exercise #5 - Do..While (false condition)");

var entity = "Monster";
var life = 10;

do {
	console.log("Keep " + entity + " on screen ");
	life--;
} while (life > 10);

console.log("Exercise #6 - Array Create");

var fruits = ["apples", "oranges", "pears"];
console.log(fruits);

console.log("Exercise #7 - Array Push");

fruits.push("grapes");
console.log(fruits);

console.log("Exercise #8 - Array Pop");

fruits.pop();
console.log(fruits);

console.log("Exercise #9 - Array Shift");

fruits.shift();
console.log(fruits);

console.log("Exercise #10 - Array Unshift");

fruits.unshift("apples");
console.log(fruits);

console.log("Exercise #11 - Array Splice");

fruits.splice(1, 0, "grapes", "kiwi");
console.log(fruits);

console.log("Exercise #12 - Array Slice");

var favFruits = fruits.slice(2);
console.log(favFruits);

console.log("Exercise #13 - Array Sort");

fruits.sort();
console.log(fruits);

console.log("Exercise #14 - Array Reverse");

fruits.reverse();
console.log(fruits);

console.log("Exercise #15 - Array Concat");

var beenThereList = ["New York City", "London", "Rome"];
var bucketList = ["Shanghai", "Santiago"];

var myList = beenThereList.concat(bucketList);
console.log(myList);

console.log("Exercise #16 - Alert Popup");

alert("This is alert box!");

console.log("Exercise #17 - Confirm Popup");

confirm("Do you want to save changes?");

console.log("Exercise #18 - Prompt Popup");

prompt("Enter preferred loan period in years", "15");
