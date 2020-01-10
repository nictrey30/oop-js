// Object Of Protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    return `${new Date().getFullYear() - this.year} years passed since ${
      this.title
    } was published`;
  }
};

// Create Object
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = 2015;
const book1 = Object.create(bookProtos, {
  title: { value: 'Book One' },
  author: { value: 'John Doe' },
  year: { value: 2015 }
});

console.log(book1.getAge()); // '5 years passed since Book One was published'
