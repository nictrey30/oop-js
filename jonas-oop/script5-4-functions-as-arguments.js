// Lecture: Passing functions as arguments
/*
- a function is an instance of the Object type
- a functions behaves like any other object
- we can store functions in a variable
- we can pass a function as an argument to another fucntion 
- we can return a function from a function
FIRST CLASS FUNCTIONS
*/
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

//callback functions - functions that we pass into functions that will then call them later
function calculateAge(elem) {
  return new Date().getFullYear() - elem;
}

function isFullAge(elem) {
  return elem >= 18;
}

function maxHeartRate(elem) {
  // the formula is valid for people >= 18y old && <= 81y old
  if (isFullAge(elem) && elem <= 81) {
    return Math.round(206.9 - 0.67 * elem);
  } else {
    return 'not applicable';
  }
}

let ages = arrayCalc(years, calculateAge);
console.log(ages);
let fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
let maxRates = arrayCalc(ages, maxHeartRate);
console.log(maxRates);
