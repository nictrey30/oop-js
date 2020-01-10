class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  get summary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  static topBookStore() {
    return 'Barnes & Noble';
  }
}

Book.prototype.getAge = function() {
  return `${new Date().getFullYear() - this.year} years passed since ${
    this.title
  } was published`;
};
Book.prototype.revise = function(year) {
  this.year = year;
  this.revised = true;
};
const book1 = new Book('Book One', 'John Doe', 2015);
console.log(book1.summary);

console.log(Book.topBookStore());
