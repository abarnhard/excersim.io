//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.yyyy = input;
};

Year.prototype.isLeap = function() {

  if ((this.yyyy % 400 === 0) || (this.yyyy % 4 === 0 && this.yyyy % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
