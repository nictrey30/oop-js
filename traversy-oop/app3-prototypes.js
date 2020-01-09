// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  let defaultISBN = 0;

  // The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
  Object.defineProperty(this, 'defaultISBN', {
    get: function() {
      return defaultISBN;
    },
    set: function(value) {
      // perform validation on ISBN
      if (parseInt(value) && value <= 999) {
        defaultISBN = value;
      } else {
        throw new Error('not a valid value!');
      }
    }
  });
}
/*
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.defaultISBN = 0;
  }

  get newISBN() {
    return this.defaultISBN + 1000;
  }
  set newISBN(value) {
    this.defaultISBN = value - 1000;
  }
}
*/

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
// getAge
Book.prototype.getAge = function() {
  return `${new Date().getFullYear() - this.year} years passed since ${
    this.title
  } was published`;
};
// revise / chnage year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};
// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
console.log(book2.getSummary());
console.log(book2.getAge());
book2.revise(2018);
console.log(book2);
