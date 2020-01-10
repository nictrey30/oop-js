let Car = function(color) {
  this.color = color;
};
Car.prototype.getColor = function() {
  return this.color;
};
