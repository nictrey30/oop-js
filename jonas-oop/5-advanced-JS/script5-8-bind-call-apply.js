// Lecture: Bind, call and apply
let john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        `Good ${timeOfDay} Ladies and Gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`
      );
    } else if (style === 'friendly') {
      console.log(
        `Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`
      );
    }
  }
};
let emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};
john.presentation('formal', 'morning');
//method borrowing
john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);
//apply will not work in this case because the function takes in 2 arguments, not an single array

//bind doesn't immediately call the function but instead it generates a copy of the function that we can store it somewhere
//useful for creating functions with preset arguments
let johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('morning');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}
function calculateAge(elem) {
  return new Date().getFullYear() - elem;
}
function isFullAge(limit, elem) {
  return elem >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
