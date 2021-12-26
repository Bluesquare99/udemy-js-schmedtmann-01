const country = "United States";
const continent = "North America";
let population = "33";

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "English";

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);

const half = population / 2;
console.log(population++);
const greaterThanFinland = population * 1000000 > 6000000;
const lessThanAverage = population * 100000 < 33000000;

// const description =
//   country +
//   " is in Europe, and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description, half, greaterThanFinland);

const description = `${country} is in Europe, and its ${population} million people speak ${language}`;
console.log(description);

// if (population > 33) {
//   console.log(`${country}'s population is above average.`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average.`
//   );
// }

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

/*

BMI = mass / height ** 2
aka BMI = mass / (height * height);

1. Store Marks' and John's mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a boolean variable 'markHigherBMI


let weightMark = 95;
let weightJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
console.log("markBMI: " + bmiMark);
const bmiJohn = weightJohn / heightJohn ** 2;
console.log("johnBMI: " + bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark}).`);
}



console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);


// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

let numNeighbours = Number(
  prompt("How many neighbor countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}



// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`You should NOT live in ${country}`);
}



const score1Dolphins = 97;
const score2Dolphins = 112;
const score3Dolphins = 101;
let averageScoreDolphins =
  (score1Dolphins + score2Dolphins + score3Dolphins) / 3;

const score1Koalas = 109;
const score2Koalas = 95;
const score3Koalas = 106;
let averageScoreKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

console.log(`dolphins scored ${averageScoreDolphins}`);
console.log(`koalas scored ${averageScoreKoalas}`);

if (averageScoreDolphins < 100 || averageScoreKoalas < 100)
  console.log("No team wins!");
else {
  if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100)
    console.log("Koalas win!");
  else if (
    averageScoreKoalas < averageScoreDolphins &&
    averageScoreDolphins >= 100
  )
    console.log("Dolphins win!");
  else if (
    averageScoreKoalas === averageScoreDolphins &&
    averageScoreKoalas >= 100
  )
    console.log("It's a tie!");
}



// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D

let language = "spanglish";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
  default:
    console.log("Great language too :D");
}

*/

const bill = 430;

const tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
