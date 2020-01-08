const userOne = {
  username: 'ryu',
  email: 'ryu@yahoo.com',
  login() {
    console.log(`the user ${this.username} logged in`);
  },
  // logout: () => console.log(`the user ${this.username} has logged out`)
  logout() {
    console.log(`the user ${this.username} has logged out`);
  }
};
