function Fizz_buzz() {
  var to_screen;
  var use_color;
}

Fizz_buzz.prototype.setMessage = function(message) {
  this.to_screen = (message);
};

Fizz_buzz.prototype.zero_remainder = function(number, divisor) {
  return (number % divisor === 0);
};

Fizz_buzz.prototype.normal_game = function(num) {
    if (this.zero_remainder(num, 15)) {
      this.use_color = "blue";
      this.setMessage('FizzBuzz');
    }
    else if (this.zero_remainder(num, 5)) {
      this.use_color = "red";
      this.setMessage('Buzz');
    }
    else if (this.zero_remainder(num, 3)) {
      this.use_color = "green";
      this.setMessage('Fizz');
    }
    else {
      this.use_color = "black";
      this.setMessage(num);
    }
};
