///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
// we don't get an error because functions are pre-initialized in hoisting
calculateAge(1990);
function calculateAge(year) {
    console.log(2016 - year);
}

// now we would get an error because this is a function expression and it's not
// processed 
// retirement(1956)
var retirement = function(year){
    console.log(65 - (2016-year));
}

// variables
// notice the undefined: 
// the variable was acknowledged, but initialized as undefined
console.log(age);
var age = 23;

function foo() {
    // this log gives undefined again because it's in this function's context
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
// This would give 23 because it's in the global context
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping

// First scoping example
// second() scope can access it's scope and the global and the first() scope
// first() scope can access it's scope and the global
// global scope can access it's scope
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        // you can call the third function because of the execution stack
        third()
    }
}
// third function is in a different scope than the second function
function third() {
    var d = 'John';
    console.log(c); // this won't work, it can't access the scope of the second function
    console.log(a+d); // this works becaus it has the third() and global contexts
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

// this in the global context is the window object
console.log(this);

calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}

var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    // now the this keyword refers to it's object
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFunction() {
      // this is back to being the window object...
      // when a regular function happens the default object is the window object
      // doesoen't matter if it's written here
      console.log(this);
    }
    // or called here
    innerFunction();
  }
};
// you need to call it in the global context
john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};
// Method borrowing: borrow one object method in another
// notice there are no parenthesis, they are used for executing (calling) the function
// we just want to reference
mike.calculateAge = john.calculateAge;
mike.calculateAge();
// the this keyword only becames something as soon as the method gets called
// that's why above will output mike's age
