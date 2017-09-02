//  asset

function Fizz_game() {
}

Fizz_game.prototype.normal_game = function() {
  for (var i = 1; i <= this.number; i++, msg = "") {
    if (i % 15 == 0) {
      msg = "fizzbuzz";
      setMessage(msg);
    }
    else if (i % 3 == 0) {
      msg = "fizz";
      setMessage(msg);
    }
    else if (i % 5 == 0) {
      msg = "buzz";
      setMessage(msg);
    }
    else {
      msg = "";
      setMessage(msg);
    }
  }
};

function setMessage(msg) {
  this.message = (msg);
}
