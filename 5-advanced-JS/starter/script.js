/*
 * Creating Objects: Function Constructors
 */
/*
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // If you declare it here, every new object would have a copy of the method!
  //   this.calculateAge = function() {
  //     console.log(2016 - this.yearOfBirth);
  //   };
};

// Adding methods and properties in the constructor's prototype, every new object
// relates back to this function instead of having its own
// Remember: 
// The Constructor’s prototype property is NOT the prototype of the Constructor itself, 
// it’s the prototype of ALL instances that are created through it;
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';

// new operator: first an empty object is created than the creator function is called;
// the this variable points to the new object recently created,
// the new object created is assigned to its variable
var john = new Person("John", 1990, "teacher");

john.calculateAge();

var jane = new Person("jane", 1975, "designer");
var mark = new Person("mark", 1948, "retired");
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/*
 * The prototype chain in the console
 */

// console can be used to inspect objects
// In the inspect:
//  john.__proto__ === Person.prototype;
// john.hasOwnProperty('job'); true
// john.hasOwnProperty('lastName'); false
// john instanceof Person
// console.info(x); see the proto of the array

/*
 * Creating Objects: Object.create
 */
/*
// create only a prototype
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

// we pass a prototype in this function
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

// we can pass also the object
var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
// Object.create differs from function constructors pattern is that Object.create builds an object that
// directly inherits from the object that we pass as the fisrt argument
// the function constructor inherits from the prototype of the selected object
// Object.create allows to build complex inheritance systems
*/

/*
 * Primitives vs objects
 */
/*
// variables containing primitives hold data in the variable
// variables associated with objects contain a reference to the place in memory where the object is stored

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); //23
// because primitives actually hold the data

// Objects
var obj1 = {
  name: "John",
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30
// because objects point to the reference place in memory
// no copy was created
// we only created a new reference to the same place...

// Functions
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age); // 27
console.log(obj); // San Francisco
// When we pass a primitive into a funciton a simple copy is created
// when we pass an object we pass the reference of the object, this it "actually" changes outside of the function

// Motherfucking Javascript
*/

/*
 * First Class Functions: Passing Functions as Arguments
 */
/*
var years = [1990, 1965, 1937, 2005, 1998];
//  To easaly solve this we can create two functions and pass one on another

// fn is a callback function
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// simple function to be used as a callback function
function calculateAge(el) {
  return 2016 - el;
}

// don't use the parenthesis in here,  calculateAge() means you want to call the function,
// we want the arrayCalc to call it
var ages = arrayCalc(years, calculateAge);
console.log(ages);

function isFullAge(el) {
  return el >= 18;
}

var isFullAges = arrayCalc(ages, isFullAge);
console.log(isFullAges);

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var maxHeRate = arrayCalc(ages, maxHeartRate);
console.log(maxHeRate);
*/

/*
 * First Class Functions: Functions returning Functions
 */
/*
// this returns an object (which is a function)
function interviewQuestion(job) {
  if (job === "designer") {
    // anonymous function
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello, " + name + ", what do you do?");
    };
  }
}

//  a question always for teachers
var teacherQuestion = interviewQuestion("teacher");
// running the function that is returned from interviewQuestion
teacherQuestion("John");
var designerQuestion = interviewQuestion("designer");
designerQuestion("Jane");
var otherQuestion = interviewQuestion("BELELEU");
otherQuestion("Mark");
*/

/*
 * Immediately Invoked Function Expressions (IIFE)
 */
/*
// if we want to hide a paremeter we could declare it inside of a function
// because the scoping chain goes the other way around it won't be visible

// supposing we want to hide score (creating a private variable)
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// there's a better way to do it
// using a iife:
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
// anonymous function treated as an expression, not a declaration

// this would output an error because the parser would think that it is a declaration
// function() {}
// In js anything inside a parenthesis is an expression, that's what "tricks" the parser

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(3);

// all we want is data privacy, creating a scope separete from the global scope, it's not meant to be reused
*/

/*
 * Closures
 */
/*
// an inner function has always access to the variables
// and parameters of its outer function, even after the outer function has returned
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementIceleand = retirement(67);
retirementIceleand(1990);
var retirementGermany = retirement(65);
retirementGermany(1990);

retirement(66)(1990);

// Exercise
// Rewriting the function:
// We can do it because the function inside has access to the job variable
function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello, " + name + ", what do you do?");
    }
  };
}

interviewQuestion("teacher")("John");
*/

/*
 * Bind, Call and Apply
 */
/*
var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " Ladies and gentlemen! I'm " +
          this.name +
          " a " +
          this.job +
          " and I'm " +
          this.age +
          " years old"
      );
    } else if (style === "friendly") {
      console.log(
        "Hey What's up? I'm " +
          this.name +
          " a " +
          this.job +
          " and I'm " +
          this.age +
          "years old, have a nice " +
          timeOfDay
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

john.presentation("formal", "morning");
// method borrowing
john.presentation.call(emily, "friendly", "afternoon");
// apply won't work now because the method does not expect an array
// john.presentation.apply(emily, ["friendly", "afternoon"]);

// set incomplete arguments
var johnFriendly = john.presentation.bind(john, "friendly");
// here comes the arguments that are missing
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("Black Sabbath");


// Let's show in another example
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
// the bind here is used to call isFullAge with the limit set to 20
// this is the full age function, 20 is it's first parameter, limit, set fixed to 20
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

/*
 * CODING CHALLENGE MOTHERFUCKER
 */

// FUN quiz game in the console
// My version trial 1

(function() {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  var score = 0;

  var question1 = new Question(
    "What's the color of Napoleon's white horse?",
    ["blue", "magenta", "cyan", "white"],
    3
  );
  var question2 = new Question(
    "Who's the father of Rosemary's baby?",
    ["john", "ted", "the devil", "laura"],
    2
  );
  var question3 = new Question(
    "If you spit upwards and there is no wind, what will happen?",
    [
      "the spit flies",
      "you'll spit on your face",
      "you'll win a prize",
      "it's an ugly thing to spit"
    ],
    1
  );
  var questionArray = [question1, question2, question3];

  // fuck it. Gonna do a normal function instead of a method. I didn't quite get it
  function printRandomQuestion(questionArray) {
    var selected = Math.floor(Math.random() * questionArray.length);
    questionArray[selected].printQuestion();
    return selected;
  }

  Question.prototype.printQuestion = function() {
    console.log(this.question);
    for (i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.isCorrect = function(answer) {
    if (answer === "exit") {
      return;
    }
    // Let's use type coercion here
    else if (answer == this.correctAnswer) {
      console.log("That's correct!");
      score++;
      console.log("Your score is: " + score);
      console.log("--------------------------------");
      ask();
      return true;
    } else {
      console.log("That's absolutely wrong!");
      console.log("Your score is: " + score);
      console.log("--------------------------------");
      ask();
      return false;
    }
  };

  function ask() {
    var selected = printRandomQuestion(questionArray);

    var answer = prompt(
      "What's the answer, MATE? (Just type the number in the field)"
    );

    questionArray[selected].isCorrect(answer);
  }
  ask();
})(); // using this (function(){})() we protect our variables from other variables that could be added in the
// actual global scope

// Corrections!

// you could use the parseInt function instead of type coercion

// you could have used closures here:
function score() {
  var sc = 0;
  return function(correct) {
    if (correct) {
      sc++;
    }
  };
}
var keepScore = score();
// pass this function as a callback
// isCorrect(answer,callback){}
// he uses printScore as a method of score