console.log("Exercise 1: indexOf");
var fruits = ["apples", "oranges", "pears", "apples"];
var search = fruits.indexOf("apples");
console.log("The search returns: " + search);

console.log("Exercise 2: indexOf (not found)");
search = fruits.indexOf("bananas");
console.log("The search returns: " + search);

console.log("Exercise 3: lastIndexOf");
search = fruits.lastIndexOf("apples");
console.log("The search returns: " + search);

console.log("Exercise 4: forEach");
var fruits2 = ["apples", "oranges", "pears", "cherries"];
fruits2.forEach(myFunction);
function myFunction(fruit, indexNum) {
    console.log(indexNum + " - " + fruit);
}

console.log("Exercise 5: includes");
search = fruits2.includes("mangoes");
console.log("The search returns: " + search);

console.log("Exercise 6: every (length > 6)");
search = fruits2.every(function (fruit) {
    return fruit.length > 6;
});
console.log("The search returns: " + search);

console.log("Exercise 7: every (length > 3)");
search = fruits2.every(function (fruit) {
    return fruit.length > 3;
});
console.log("The search returns: " + search);

console.log("Exercise 8: some (length > 6)");
search = fruits2.some(function (fruit) {
    return fruit.length > 6;
});
console.log("The search returns: " + search);

console.log("Exercise 9: some (length < 3)");
search = fruits2.some(function (fruit) {
    return fruit.length < 3;
});
console.log("The search returns: " + search);

console.log("Exercise 10: map");
var candies = fruits2.map(function (fruit) {
    return " candy " + fruit;
});
console.log(candies);

console.log("Exercise 11: filter (length > 6)");
var myFruits = fruits2.filter(function (fruit) {
    return fruit.length > 6;
});
console.log(myFruits);

console.log("Exercise 12: filter (includes 'es')");
myFruits = fruits2.filter(function (fruit) {
    return fruit.includes("es");
});
console.log(myFruits);

console.log("Exercise 13: reduce");
var daysales = [305, 432, 376, 290];
var weeklySales = daysales.reduce(function (accumTotal, curSales) {
    return accumTotal + curSales;
});
console.log(weeklySales);

console.log("Exercise 14: Math.random()");
var myNumber = Math.random();
console.log("The generated number is: " + myNumber);
