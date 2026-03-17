console.log("Exercise #1");

function newStudent() {
	console.log("New student is added to the system!");
}

newStudent();

console.log("Exercise #2");

function newStudentAdded(name) {
	console.log(`${name} is added to the system!`);
}

console.log(newStudentAdded("John"));

console.log("Exercise #3");

let name = "Hanna";

if (name == "John") {
	console.log("Student name is " + name);
} else {
	console.log("It's a different student. His/her name is " + name + ".");
}

console.log("Exercise #4");

name = "John";

if (name === "John") {
	console.log("Student name is " + name);
} else {
	console.log("It's a different student. His/her name is " + name + ".");
}

console.log("Exercise #5");

name = "Andrea";

if (name === "John") {
	console.log("Student name is " + name);
} else if (name === "Hanna") {
	console.log("It's a different student. His/her name is " + name);
} else if (name === "Michael") {
	console.log("It's a new student. His/her name is " + name);
} else if (name === "Julie") {
	console.log("It's a returning student. His/her name is " + name);
} else {
	console.log("Sorry, no student by the name of " + name + " exist.");
}

console.log("Exercise #6");

let doorLocked = false;
let alarmOn = false;

if (doorLocked === true && alarmOn === true) {
	console.log("House is safe!");
} else {
	console.log("House not secured!!!");
}

console.log("Exercise #7");

doorLocked = true;

if (doorLocked == true || alarmOn == true) {
	console.log("House secured");
} else {
	console.log("House not secured");
}

console.log("Exercise #8");

doorLocked = false;
alarmOn = true;

if (doorLocked == true || alarmOn == true) {
	console.log("House secured");
} else {
	console.log("House not secured");
}

console.log("Exercise #9");

name = "Brent";

switch (name) {
	case "John":
		console.log("Student name is " + name);
		break;

	case "Hanna":
		console.log("It's a different student. His/her name is " + name);
		break;

	default:
		console.log("No such student name exist");
}
