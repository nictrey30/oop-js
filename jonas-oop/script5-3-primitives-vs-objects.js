// primitives vs objects
let a = 23;
let b = a;
a = 46;
console.log(a); //46
console.log(b); // 23

let obj1 = {
  name: 'John',
  age: 26
};
let obj2 = obj1;
obj1.age = 30;

console.log(obj1.age); // 30
console.log(obj2.age); // 30

// functions
let age = 27;
let obj = {
  name: 'Jonas',
  city: 'Lisbon'
};
function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}
change(age, obj);

console.log(age); //27
console.log(obj.city); //San Francisco
