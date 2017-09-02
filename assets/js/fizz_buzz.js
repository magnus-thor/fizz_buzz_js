function Fizz_buzz() {
};


  Fizz_buzz.prototype.zero_remainder = function(number, divisor) {
      return ((number % divisor) === 0);
  };

  Fizz_buzz.prototype.normal_game = function(num) {
    if (this.zero_remainder(num, 3)) {
      return('Fizz');
    }
    else {
      return(num);
    }
  };


// Fizz_buzz.prototype.setMessage = function(message) {
//     console.log("message: ", + message);
//     return message;
//   }



















// Fizz_buzz.prototype.normal_game = function(num) {
//     var msg = ""
//     for (var i = 1; i <= num; i++, msg = "") {
//       if (i % 15 == 0) {
//         msg = "fizzbuzz";
//         return msg;
//       }
//       else if (i % 3 == 0) {
//         msg = "Fizz";
//         return msg;
//       }
//       else if (i % 5 == 0) {
//         msg = "buzz";
//         return msg;
//        }
//       else {
//         msg = i;
//         console.log("msg: ", + msg);
//        return msg;
//       }
//     }
//   };
//
