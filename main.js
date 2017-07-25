// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A:undefined
console.log('1. expect: undefined got:', givenName);

// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A:Tim
console.log('2. expect: Tim got:', givenName);

// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A:Tim
console.log('3. expect: Tim got:', givenName);

// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A:"Hello, how are you? Tim"
console.log('4. expect: Hello, how are you? Tim got:', greeting);

// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: 40
console.log('5. expect: 40, got:', math);

// 6.
// What is `math` set to?
math = high - "5";
// A: 45
console.log('6. expect: 45, got:', math);

// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:
let age = today - born
console.log('7. Tim is ' + age + ' years old');


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = 'Foo';
let instructorName = 'Bar';


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:
yourName = 'Devon';
instructorName = 'Jess and Justin'

// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log('9. expect: Devon is taking a class at The Iron Yard, my instructor’s name is Jess and Justin, got:', statement);

// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 3;
let myString = 'Devon';
let myBoolean = true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined = typeof myDog;
// A:
console.log('10. expect: undefined, got:', myUndefined);

// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true
console.log('11. expect: true, got:', x);


// 12.
let y = (false == "");
// A. true
console.log('12. expect: true, got:', y);

// 13.
let z = (0 == "");
// A. true
console.log('13. expect: true, got:', z);

// 14.
let a = (null == null);
// A. true
console.log('14. expect: true, got:', a);

// 25.
let b = (undefined == undefined);
// A. true
console.log('15. expect: true, got:', b);

// 16.
let c = (undefined == null);
// A. true
console.log('16. expect: true, got:', c);

// 17.
let d = (null == false);
// A. false
console.log('17. expect: false, got:', d);

// 18.
let e = (NaN == null);
// A. false
console.log('18. expect: false, got:', e);

// 19.
let f = (NaN == NaN);
// A. false
console.log('19. expect: false, got:', f);

// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
console.log('20. expect: I’m parched!, got:');

let thirsty = true;

if (thirsty == true) {
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
console.log('21. expect: False!, got:');
let q;

if(q){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!

console.log('22. "" expect: False! got:');
// 22.
let foo = "";
if(foo){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!

console.log('23. "" expect: False! got:');
// 23.
// this expression will set x to NaN
x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!

console.log('24. "" expect: False! got:');
// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!

console.log('25. expect: True!, got:');
// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


console.log('26. expect: True!, got:');
// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!

console.log('27. expect: True!, got:');
// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!

console.log('28. expect: True!, got:');
// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!

console.log('29. expect: True!, got:');
// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True!


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
