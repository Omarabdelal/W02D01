console.log(arrowTitle)
/* START CODE UNDER THIS LINE */
 //p.c
 /*
 Define the following arrays.

Define an array colors containing your favorite three colors.

Define an array negativeNumbers containing five negative numbers.

Define an array food containing three of your favorite foods.

Define an array numbers containing two arrays, the first array contains three odd numbers and the second array contains four even numbers.


 */
const colors =["green","red","black"];
const  negativeNumbers =[-5,-6,-7,-8,-9];
const food =["burgur",'sbankh'];
const   numbers =[[1,3,5 ] , [ 2,4,6,8]];

//Q2
/*
Access the following values.

Access the value Mars of the following arrays using the index.
const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];
Access the Koala value of the following arrays using the length property.
const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
Assign the following values to the corresponding array.





*/
const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];
const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
//animals [animals.length-1]


//Q3
/*


Assign the value Mars to end of the following arrays (don't replace Jupiter and Mercury).
// a- use the `length` property
const orderedPlanets = ["Mercury", "Venus", "Earth", "Jupiter"];
// b- don't use the `length` property (use the index)
const unorderedPlanets = ["Mars", "Earth", "Mercury"];
Assign the Koala to the start of the following array using the index (replace Cat).
const animals = ["Cat", "Dog", "Dolphin", "Squirrel"];

*/

const orderedPlanets1 = ["Mercury", "Venus", "Earth", "Jupiter"];
//orderedPlanets1[4]="mars"

const animals2 = ["Cat", "Dog", "Dolphin", "Squirrel"];
//animals2.push("Koala")
//Q4

//Add the value Dinosaur to the end of the array using the correct array method.
const reptiles = ["Snake", "Lizard", "Turtle"];
//Remove the first value of reptiles
//reptiles.shift()
// reptiles.push(" Dinosaur")
//Add the value Goldfish to the start of the array using the correct array method.
const fish = ["Swordfish", "Clownfish", "Shark"];
// fish.unshift('Goldfish')
//Remove the last value of fish
// fish.pop
//Q5
/*

Solve the following questions using the correct array methods.

Create the following string 1993 from the array bellow.
[1, 9, 9, 3];
Create the following string John Doe The Third from the array below.
["John", "Doe", "The Third"];
Create the following array ['world', 'hello'] from the array below.
["hello", "world"];
Create the following string 4-3-2-1 from the array below.
[1, 2, 3, 4];




*/

const year=[1, 9, 9, 3];
year.join(" ")
const jo=["John", "Doe", "The Third"];
jo.join(" ")
const say = ["hello", "world"];
say.reverse();
const num =[1, 2, 3, 4];
num.reverse();
  

//P
//Q1

 const addToArray = function (array, string) {

array.push(string)

return array
 }

//  Q2

// Write a function convertToString that accepts an array of strings and returns a string made out of the array values.

// const convertToString = function (array) {
//   // TODO: Your code here
// };

// convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
// convertToString(["Hello", "John", "i", "am", "Jane"]); // => "


const convertToString = function (array) {



return array.join( "  " )


}

//Q3
// Write a function accessElement that accepts two arguments, array and index, and returns the corresponding array element depending on the passed index.

// const accessElement = function (array, index) {
//   // TODO: Your code here
// };

// ?
// accessElement([1, 2, 3, 4, 5], 3); // => 4
// accessElement([1, 2, 3, 4, 5], 10); // => "No element at index 10"

const accessElement = function (array, index) {

    
   
        if ( index = array[index]  ){   
        return  index
        } 
        else {
            return ("No element at index "  )
        
        }}

//Q4
// Write a function isInArray that accepts two arguments, array and string, and returns true or false depending on whether the string is an element in the array or not.

// const isInArray = function (array, string) {
//   // TODO: Your code here
// };

// isInArray(["John", "Jane", "Mark"], "Jane"); // => true
// isInArray(["John", "Jane", "Mark"], "Mark"); // => true
// isInArray(["John", "Jane", "Mark"], "Smith"); // => false
// isInArray(["John", "Jane", "Mark"], "Doe"); // => false

//  const isInArray = function (array,string ){

  


// if( string = array[array.indexOf(string)] ){

//   return true
// }else
//  return false
//  }


// حل ثاني


 const isInArray = function (array,string ){

  


if( array.indexOf(string) !== -1 ){

  return true
}else
 return false
 }
   
   
//Q5
/*
Write a function reverseWords that accepts a string argument and returns the same string if only one word was passed in. If more than one word is passed, it will return a string of the words in the reverse order. Check out the comments below before solving the question.

// split: is a string method that is used to convert a string into an array and the values will be separated depending on the
// argument passed into the split method (opposite of join)
const word = "Hello";
// if an empty string is passed as an argument then the string will be split on every character
word.split(""); // => ["H", "e", "l", "l", "o"]
// if we pass the letter "e" as an argument, it will split the string on every "e" in that string. Since there is only one "e", the string has split into an array with two elements
word.split("e"); // => ["H", "llo"]
// if an empty space (" ") is passed as an argument, the string will be split on every empty space
const words = "This is a string that contains words";
words.split(" "); // => ["This", "is", "a", "string", "that", "contains", "words"]

const reverseWords = function (string) {
  // TODO: Your code here
};

reverseWords("Hello"); // => "Hello"
reverseWords("Hello World"); // => "World Hello"*/



const reverseWords = function (string) {
  // TODO: Your code here



  return string.split(" ").reverse().join(' ')
};







 //Q6 
//  Write a function addToLast that accepts two arguments, array and value, and returns an array with the value added to the end of the array. Use unshift instead of push.

// // do not use `push` or array assignments, only `unshift`
// const addToLast = function (array, value) {
//   // TODO: Your code here
// };

// addToLast([1, 2, 3], 4); // => [1, 2, 3, 4]
// addToLast([10, 6], 1); // => [10, 6, 1]
const addToLast = function (array, value){

array.reverse()
 array.unshift(value)
 array.reverse()
 


return array

}
//Q7
/*
Solve the following.

// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
  // do not use array.length
  // TODO: Your code here
};

getLength([1, 2, 3, 4]); // => 4
getLength([10, 22, 30]); // => 3

// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value
const getFirstVal = function (array) {
  // do not use array[0]
  // TODO: Your code here
};

getFirstVal([1, 2, 3, 4]); // => 1
getFirstVal([51, 3, 3, 4]); // => 51*/

const getLength = function (array) {
 return array.push()
  
};

getLength([1, 2, 3, 4]); // => 4
getLength([10, 22, 30]); // => 3




const getFirstVal = function (array) {
  return  array.shift()
};

getFirstVal([1, 2, 3, 4]); // => 1
getFirstVal([51, 3, 3, 4]); // => 51


//Q9
/*Write a function updateOrCreate that accepts three arguments, array, value, and index, and returns an updated array. Check the output for more information on the updated array.

// the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, value, index) {
  // TODO: Your code here
};

updateOrCreate([10, 20, 30], 50, 1); // => [10, 50, 30]
updateOrCreate([10, 20, 30], 40, 3); // => [10, 20, 30, 40]
updateOrCreate([10, 20, 30], 100, 10); // => [10, 20, 30, empty * 7, 100]*/

