class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  // arrow functions don't bind the value of this
}
User.prototype.login = function() {
  console.log(`${this.username} just logged in`);
};
User.prototype.logout = function() {
  console.log(`${this.username} just logged out`);
};
User.prototype.incScore = function() {
  this.score++;
  console.log(`${this.username} has a score of ${this.score}`);
  return this; // -> for method chaining
};

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.titile = title;
  }
}

Admin.prototype.deleteUser = function(user) {
  if (!(user instanceof Admin)) {
    users = users.filter(el => el.username !== user.username);
  } else {
    console.log(`You cannot delete an admin`);
  }
};

const user1 = new User('mario', 'mario@google.com');
const user2 = new User('luigi', 'luigi@yahoo.com');

// user1.incScore();
// user1.incScore();
user1.incScore().incScore();

const user3 = new Admin('shaun', 'shaun@yahoo.com', 'black-belt-ninja');

let users = [user1, user2, user3];

console.log(user3);
user3.incScore();

console.log(users);
user3.deleteUser(user1);
console.log(users);
