const book1 = {
  title: 'Book 1',
  author: 'John Doe',
  year: 2013,
  get summary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.summary);
