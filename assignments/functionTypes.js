// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//  Function Declaration
function add(n) {
  return n + 1;
}

// function expression
var add = function (n) {
  return n + 1;
}

// arrow function
var add = n => n+1;

// arrow function with curly bracket

var add = n => {
  return n+1;
}

// function invocation
add(3);



/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 //  Function Declaration
function sub(n) {
  return n - 1;
}

// function expression
var sub = function (n) {
  return n - 1;
}

// arrow function
var sub = n => n-1;

// arrow function with curly bracket

var sub = n => {
  return n-1;
}

// function invocation
sub(3);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 //  Function Declaration
function add(x, y) {
  return x + y;
}

// function expression
var add = function (x, y) {
  return x + y;
}

// arrow function
var add = (x, y) => x + y;

// arrow function with curly bracket

var add = (x, y) => {
  return x + y;
}

// function invocation
add(2,4);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

  //  Function Declaration
function sub(x, y) {
  return y - x;
}

// function expression
var sub = function (x, y) {
  return y - x;
}

// arrow function
var sub = (x, y) => y - x;

// arrow function with curly bracket

var sub = (x, y) => {
  return y - x;
}

// function invocation
sub(2,4);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

  //  Function Declaration
function mul(x, y) {
  return x * y;
}

// function expression
var mul = function (x, y) {
  return x * y;
}

// arrow function
var mul = (x, y) => x * y;

// arrow function with curly bracket

var mul = (x, y) => {
  return x * y;
}

// function invocation
mul(2,4);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

  //  Function Declaration
function div(x, y) {
  return x / y;
}

// function expression
var div = function (x, y) {
  return x / y;
}

// arrow function
var div = (x, y) => x / y;

// arrow function with curly bracket

var div = (x, y) => {
  return x / y;
}

// function invocation
div(2,4);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

  //  Function Declaration
function square(x) {
  return x * x;
}

// function expression
var square = function (x) {
  return x * x;
}

// arrow function
var square = (x) => x * x;

// arrow function with curly bracket

var square = (x) => {
  return x * x;
}

// function invocation
square(2);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

   //  Function Declaration
function greater(a, b) {

  if (a > b){
    return true;
  } else {
    return false;
  }
}

// function expression
var greater = function(a, b) {
  
  if (a > b){
    return true;
  } else {
    return false;
  }
}

// arrow function with curly bracket

var greater = (a, b) => {
  
  if (a > b){
    return true;
  } else {
    return false;
  }
}

// function invocation
greater(2,4);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

   //  Function Declaration
function smaller(a, b) {

  if (a < b){
    return true;
  } else {
    return false;
  }
}

// function expression
var smaller = function(a, b) {
  
  if (a < b){
    return true;
  } else {
    return false;
  }
}

// arrow function with curly bracket

var smaller = (a, b) => {
  
  if (a < b){
    return true;
  } else {
    return false;
  }
}

// function invocation
smaller(2,4);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

   //  Function Declaration
function equal(a, b) {

  if (a === b){
    return true;
  } else {
    return false;
  }
}

// function expression
var equal = function(a, b) {
  
  if (a === b){
    return true;
  } else {
    return false;
  }
}

// arrow function with curly bracket

var equal = (a, b) => {
  
  if (a === b){
    return true;
  } else {
    return false;
  }
}

// function invocation
equal(4,4);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

    //  Function Declaration
function smallest(a, b) {

  if (a > b){
    return b;
  } else {
    return a;
  }
}

// function expression
var smallest = function(a, b) {
  
  if (a > b){
    return b;
  } else {
    return a;
  }
}

// arrow function with curly bracket

var smallest= (a, b) => {
  
  if (a > b){
    return b;
  } else {
    return a;
  }
}

// function invocation
smallest(2,4);



/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

     //  Function Declaration
function largest(a, b) {

  if (a > b){
    return a;
  } else {
    return b;
  }
}

// function expression
var largest = function(a, b) {
  
  if (a > b){
    return a;
  } else {
    return b;
  }
}

// arrow function with curly bracket

var largest = (a, b) => {
  
  if (a > b){
    return a;
  } else {
    return b;
  }
}

// function invocation
largest(2,4);


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

     //  Function Declaration
function even(n) {

  if (n % 2 == 0) {
    return true;
  }
}

// function expression
var even = function (n) {
  
  if (n % 2 == 0) {
    return true;
  }
}

// arrow function with curly bracket

var even = n => {
  
  if (n % 2 == 0) {
    return true;
  }
}

// function invocation
even(4);


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

//  function declaration
function odd(n) {

  if (n % 2 != 0) {
    return true;
  }
}

// function expression
var odd = function (n) {
  
  if (n % 2 != 0) {
    return true;
  }
}

// arrow function with curly bracket

var odd = n => {
  
  if (n % 2 != 0) {
    return true;
  }
}

// function invocation
odd(4);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

      //  Function Declaration
function score(totalMarks, maxMarks) {
  var per = ( (totalMarks / maxMarks) * 100);
  per = Math.round(per);

  if (per >= 90 && per <= 100) {
    grade = "A";
  } else if (per >= 80 && per <= 89) {
    grade = "B";
  } else if (per >= 70 && per <= 79) {
    grade = "C";
  } else if (per >= 60 && per <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

// function expression
var score = function (totalMarks, maxMarks) {
  var per = ( (totalMarks / maxMarks) * 100);
  per = Math.round(per);
  
  if (per >= 90 && per <= 100) {
    grade = "A";
  } else if (per >= 80 && per <= 89) {
    grade = "B";
  } else if (per >= 70 && per <= 79) {
    grade = "C";
  } else if (per >= 60 && per <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

// arrow function with curly bracket

var score = (totalMarks, maxMarks) => {
  var per = ( (totalMarks / maxMarks) * 100);
  per = Math.round(per);
  
  if (per >= 90 && per <= 100) {
    grade = "A";
  } else if (per >= 80 && per <= 89) {
    grade = "B";
  } else if (per >= 70 && per <= 79) {
    grade = "C";
  } else if (per >= 60 && per <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

// function invocation
score(167, 200);



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

     //  Function Declaration
     function string(word1, word2) {

      var finalString = word1 + word2;
      return finalString;
    }
    
    // function expression
    var string = function (word1, word2) {
      
      var finalString = word1 + word2;
      return finalString;
    }
    
    // arrow function with curly bracket
    
    var string = (word1, word2) => {
      
      var finalString = word1 + word2;
      return finalString;
    }
    
    // function invocation
    string('Abhishek', ' Goswami');
    