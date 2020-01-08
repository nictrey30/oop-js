let numArray = [3, 7, 9, 4];
let len = numArray.length;
for (let i = 0; i < len; i++) {
  // console.log(numArray[i]);
}
let anObject = {
  name: 'bob',
  age: 20,
  friends: ['john', 'kim', 'peter'],
  getName() {
    return this.name;
  }
};
for (let value of numArray) {
  // console.log(value);
}
for (let key in anObject) {
  // console.log(key);
}
// Symbol.iterator is a function that is available to the iterable objects
// you can run this function to get an iterator out
let iterator = numArray[Symbol.iterator]();
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 7, done: false }
console.log(iterator.next()); // { value: 9, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
let iterator2 = generator(); // it only calls "yield" when i call "next"
console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 2, done: false }
console.log(iterator2.next()); // { value: 3, done: false }
console.log(iterator2.next()); // { value: 4, done: false }
console.log(iterator2.next()); // { value: undefined, done: true }

function* genny() {
  yield 'a';
}
let iter = genny();
console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: undefined, done: true }

let starwars8 = {
  title: 'The Last jedi',
  director: 'Rian Johnson',
  year: 2017,
  boxOffice: '1.38'
};
let count = -1;
let SW8 = {
  [Symbol.iterator]: function(obj) {
    return {
      next: () => {
        count++;
        switch (count) {
          case 0:
            return {
              value: obj.title,
              done: false
            };
          case 1:
            return {
              value: obj.year,
              done: false
            };
          case 2:
            return {
              value: obj.director,
              done: false
            };
          case 3:
            return {
              value: undefined,
              done: true
            };
          default:
            return {
              value: undefined,
              done: true
            };
        }
      }
    };
  }
};
let data = SW8[Symbol.iterator](starwars8);
console.log(data.next()); // { value: 'The Last jedi', done: false }
console.log(data.next()); // { value: 2017, done: false }
console.log(data.next()); // { value: 'Rian Johnson', done: false }
console.log(data.next()); // { value: undefined, done: true }
