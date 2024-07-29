//
var hello = "world";
var num = 7;
var bool = true;
var undef = undefined;
var none = null;


// num = '17'; *Example with string*


// console.log(5);

// console.log(hello)

// console.log("world");

//* Changed variable information here!
num = 29;

console.log(num);

// console.log(bool);

// console.log(undef);
 
// console.log(none);

//? MATH VARIABLES

var foo;

console.log(foo)

foo = 19;

console.log(foo + 4);

//? Concat

var textOne = 'Hello';

console.log(textOne + ' ' + hello + " Dude!")

//!TEMPERATURE CONVERTER
//TODO      Farenheit = Celceius * 9/5 + 32;
//CONSOLE.LOG(ANSWER)

cel = 20;

faren = cel * (9/5) + 32;

console.log(faren + '\u00B0')

//! Age Calculator
//Subtract the birth year from the current year to get the age.
//* Console.log(answer)

birth = 1990;

cur_year = 2024;

var age;

age = cur_year - birth;

console.log("I am " + age + '!')

//Bool variable
//let
//const
//escape the character
//wrap with opposite quote
//addition "+"
//subtraction "-"
//division "/"
//multiplication "*"
//increment "++"
//decrement "--"
//module "%"

//const == IMMUTABLE
//CANNOT CHANGE INFORMATION TO const;
const bar = 'You can not change me!'

//bar = 8;

console.log(bar)

//let = its accessible based on his scope;
let bar2 = 'You can change me!'

bar2 = 10;

console.log(bar2);


//Dealing with quotes in strings
let stringQuote = "You aren't special";
console.log(stringQuote);
//escaping the quote
let escapeQuote = 'You aren\'t special';
console.log(escapeQuote);

//increments and decrements
let num3 = 0;
console.log(num3)
num3++;
console.log(num3);
num3--;
console.log(num3);

//seeting mutli-variables
let baz, baz2, baz3;

baz3 = 8;
console.log("I'm Baz3!" + baz3);

//Template Literals
console.log(`Hello Baz2 ${baz3}`);


//TODO Personal Greeting
//? Input the user to input their name.
//* console out a personalized greeting message.
var yourName = "Sam";

console.log(`Hello ${yourName}`);



//TODO Tip Calculator
//? Input the user to input the bill amount and the tip percentage.
//* Calculate the tip amount and console the total bill.

var billAmount;
var tipPercentage;
var tax;
var total;

bill = 30.00;

tax = bill * .07;
billAmount = bill + tax;
tipPercentage = billAmount * 0.20;
total = tipPercentage + billAmount

console.log(`Your bill is ${billAmount} include tax. Your tip is ${tipPercentage.toFixed(2)}. Total is ${total}`);


//TODO Age Calculator in days
//? Ask the user to input their age in years.
//* Multiply the age in years by 365.
//console the total days
var age = 34;
var ageInDay;

ageInDay = age * 365;

console.log(ageInDay + " days");


