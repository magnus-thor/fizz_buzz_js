function Fizz_buzz() {
  var to_screen;
}

Fizz_buzz.prototype.setMessage = function(message) {
  this.to_screen = (message);
};

Fizz_buzz.prototype.zero_remainder = function(number, divisor) {
  return (number % divisor === 0);
};

Fizz_buzz.prototype.normal_game = function(num) {
  // for (var i = 1; i <= num; i++) {
    if (this.zero_remainder(num, 15)) {
      this.setMessage('FizzBuzz');
    }
    else if (this.zero_remainder(num, 5)) {
      this.setMessage('Buzz');
    }
    else if (this.zero_remainder(num, 3)) {
      this.setMessage('Fizz');
    }
    else {
      this.setMessage(num);
    }
  // }
};
