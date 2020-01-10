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

// Magazine sublclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
const mag1 = new Magazine('Mag one', 'John Doe', 2013, 'Jan');
console.log(mag1);
