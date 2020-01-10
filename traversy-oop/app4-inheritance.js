function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);
// instantiate Magazin Object
mag1 = new Magazine('Mag One', 'John Doe', 2017, 'Jan');

// use Magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1.getSummary());
