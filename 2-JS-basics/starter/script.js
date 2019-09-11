/*
 * Uncomment each lesson separately
 */

/*
 * Variables and data types
 */

// var firstName = "John";
// console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "Teacher";
// console.log(job);

// // var 3years = 3; - you can't name it like this
// var _3years = 3;
// // var john/mark = 'John and Mark'; - you can't name it like this
// var johnMark = "John and Mark";

/*
 * Variable mutation and type coercion
 */
/*
// type coercion: automatic converting of variables
var firstName = "John";
var age = 28;
console.log(firstName + " " + age);

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*****************************
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/

/*****************************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
// Pay attention to the operator precedence and the associativity
// (associacivity = the direction in which the operator works)

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/*****************************
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/

/*****************************
 * Boolean logic
 */
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*****************************
 * The Ternary Operator and Switch Statements
 */
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

(if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// switch is cleaner than a huge if/else statement
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*****************************
 * Truthy and Falsy values and equality operators
 */
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

// You have to check the zero otherwise it will take it as undefined
// because it's a falsy value

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
// == does type coercion! that means it converts the values to compare!
// === compares the value and the type (does not convert it)
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/

/*****************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

// Note that if you just calculateAge and do not assign it it runs the function
// then throws away the value
// Don't Repeat Yourself (DRY principle)

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
 * Function Statements and Expressions
 */
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}


// expressions produce and immediate result, results in a value
// statements (like the function declaration) do not 
// for example if(true){} is a statement, 3 is an expression

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*****************************
 * Arrays
 */
/*
// Initialize new array
// both are equal, the first one is most used
var names = ["John", "Mary", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
// names[5] = 'Mary'; // Creates empty values until the array number
names[names.length] = 'Mark';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// Array methods
john.push('blue'); // adds to the end of the array
john.unshift('Mr.'); // adds to the start of the array
john.pop(); // removes last index
john.shift(); // removes first index

console.log(john);
console.log(john.indexOf(1990));
// indexOf can be used to know if a value is present in the array
console.log(john.indexOf(23)); // =-1;

var isDesigner = john.indexOf('Designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
john.push('Designer');
var isDesigner = john.indexOf('Designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*****************************
 * Coding Challenge 3
 */
/*
// bills 124 48 268

// tip calculator
// 20% less than 50
// 15% less than 200
// 10% more than 200

// 2 arrays; tip array and total array

var bills = [124, 48, 268];

function calculateTip(bill){
    if (bill < 50){
        return bill * 0.2;
    } else if (bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

var tips = [calculateTip(bills[0]), 
            calculateTip(bills[1]), 
            calculateTip(bills[2])];
var total = [bills[0] + tips[0], 
             bills[1] + tips[1], 
             bills[2] + tips[2]];

console.log(bills, tips, total);
*/

/*****************************
 * Objects and properties
 */
/*
// object we define key:value pairs
// like an array with labeled elements

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emma'],
    job: 'teacher',
    isMarried: false
};
console.log(john);

// reading each value:
// dot notation
console.log(john.firstName);
// brackets
console.log(john['lastName']); // remember that it receives a string
var x = 'birthyear';
console.log(john[x]);

// mutating each value:
john.job = 'driver';
john['isMarried'] = true;
console.log(john);

// You can declare an empty object and then start filling
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
*/

/*****************************
 * Objects and methods
 */
/*
// Methods are functions attached to objects

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emma'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() { // note that this is a function expression
        // this in this context means john, the current object
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*****************************
 * Coding Challenge 4
 */
/*
 // Note that for now we're repeating ourselves
var mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};
mark.calcBMI();
var john = {
  name: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};
john.calcBMI();
console.log(mark, john);

if (mark.BMI === john.BMI)
  console.log(mark.name + " and " + john.name + " have the same BMI.");
else
  console.log(
    mark.BMI > john.BMI
      ? mark.name + " has the highest BMI with " + mark.BMI
      : john.name + " has the highest BMI with " + john.BMI
  );
*/

/*****************************
 * Coding Challenge 4
 */
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// i = 0; 0 < 10 true; log(i); i++;
//...

for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// i = 1; 1 <= 10 true; log(i); i++;
//...

var john = ["John", "Smith", 1990, "teacher", false];
// [0, 1, 2, 3, 4]
// length = 5
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
// i = 0; log(i); i++; i < length true;
// ...

// continue and break statements
// only continue current iteration if the if holds true
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

// only continue the whole for loop if the if holds true
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

// reverse counter
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/*****************************
 * Coding Challenge 5
 */

// john went to 5 restaurants
// 124 48 268 180 42
// 20% <50; 15% <200; 10% >200
// use objects and loops

// object with array
// add a method with loops for the tip
// output tips array and total array: loop 2 empty arrays and fill them up

var tipCalculatorJohn = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  total: [],
  calculate: function() {
    var percent;
    // Calculate tips
    for (i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) percent = 0.2;
      else if (this.bills[i] <= 200) percent = 0.15;
      else if (this.bills[i] > 200) percent = 0.1;
      this.tips[i] = percent * this.bills[i];
      this.total[i] = this.tips[i] + this.bills[i];
    }
  }
};
tipCalculatorJohn.calculate();
console.log(tipCalculatorJohn);

// redo problem for mark;
// create a function, not a method, to calculate average of tips
// calculate the average tips of each family and log the family that paid
// the highest tips on average

var tipCalculatorMark = {
  bills: [77, 375, 110, 45],
  tips: [],
  total: [],
  calculate: function() {
    var percent;
    // Calculate tips
    for (i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 100) percent = 0.2;
      else if (this.bills[i] <= 300) percent = 0.1;
      else if (this.bills[i] > 300) percent = 0.25;
      this.tips[i] = percent * this.bills[i];
      this.total[i] = this.tips[i] + this.bills[i];
    }
  }
};
tipCalculatorMark.calculate();
console.log(tipCalculatorMark);

function averageTip(tipsArray) {
  var sum = 0;
  for (i = 0; i < tipsArray.length; i++) {
    sum += tipsArray[i];
  }
  return sum / tipsArray.length;
}
var averageJohn = averageTip(tipCalculatorJohn.tips);
console.log(averageJohn);
// you could have done john.average - easier
var averageMark = averageTip(tipCalculatorMark.tips);
console.log(averageMark);

console.log(
  averageJohn > averageMark
    ? "John paid the highest tips on average"
    : "Mark paid the highest tips on average"
);

