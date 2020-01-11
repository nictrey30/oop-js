let obj = {
  num: 2
};

let addToThis = function(a, b, c) {
  return this.num + a + b + c;
};
// functionName.call(obj, functionArguments)
console.log(addToThis.call(obj, 1, 2, 3)); // 8

let arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr)); // 8

let bound = addToThis.bind(obj);
console.log(bound(1, 2, 3));
console.log(bound(...arr));

// ##############################
let john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation(style, timeOfDay) {
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

john.presentation.call(emily, 'friendly', 'morning');

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
console.log(ages); // [ 30, 55, 83, 15, 22 ]
console.log(fullJapan); // [ true, true, true, false, true ]
