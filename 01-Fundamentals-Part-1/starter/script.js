// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher'
*/
/*
let markMass = 95;
let johnMass = 85;
let markHeight = 1.88; 
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

if(markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}!`);
} else {
  console.log(`Mark's BMI ${markBMI} is lower than John's BMI ${johnBMI}!`);
}

console.log(markBMI, johnBMI, markHigherBMI);
*/
/*
const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young.  Wait another ${yearsLeft} years.`)
}

const birthYear = 1978;
let century;

if(birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century);
*/

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive.');
} else {
  console.log('Someone else should drive.');
}

const isTired = true;

console.log(hasDriversLicense || hasGoodVision || isTired);