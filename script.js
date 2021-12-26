/* let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);

let js = true;

js = "miss";
console.log(typeof js);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// Math operators
console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;
// console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 15; this operation takes place from right-to-left

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚕");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young.  Wait another ${yearsLeft} years :)`);
}

let century;
const birthYear = 2012;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3);

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN
// These aren't false immediately, but will become false when converted to a boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}


let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

let favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.group("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");


const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

console.log("Ending script.js");



const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

*/

// an if STATEMENT
if (23 > 10) {
  // string is an expression
  // the whole line of code is a statement, it's a complete sentence
  const str = "23 is bigger";
}

const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
