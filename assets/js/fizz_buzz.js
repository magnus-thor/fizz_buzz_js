function Fizz_buzz() {
  var to_screen;
};

Fizz_buzz.prototype.setMessage = function(message) {
  this.to_screen = (message);
}

Fizz_buzz.prototype.normal_game = function(num) {
  for (var i = 1; i <= num; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
      this.setMessage("FizzBuzz");
    }
    else if ( i % 3 == 0 ) {
      this.setMessage("Fizz");
    }
    else if ( i % 5 == 0 ) {
      this.setMessage("Buzz");
    }
    else {
      this.setMessage(i);
    }
  }
}





// below is code to review incase  i get the above to work
















// function Fizz_buzz() {
// };
//
//
//   Fizz_buzz.prototype.zero_remainder = function(number, divisor) {
//       // console.log("zero_remainder function: ", + number)
//       return (number % divisor === 0);
//   };
//
//   Fizz_buzz.prototype.setMessage = function(number) {
//     var msg = "";
//     // var numb = parseInt(number);
//     console.log("before if: ", typeof number);
//     if (number == 15) {
//        msg = 'FizzBuzz';
//     }
//     if (number == 1) {
//       console.log("inside if: ", number)
//       msg = number;
//     }
//     // console.log("Message: ", + message);
//     console.log("before return msg: ", msg)
//     return(msg);
//   }
//
//   Fizz_buzz.prototype.normal_game = function(num) {
//     numb = parseInt(num);
//     console.log('typeof: ', typeof num)
//     if (this.zero_remainder(num, 15)) {
//       this.setMessage(15);
//     }
//     else if (this.zero_remainder(num, 5)) {
//       this.setMessage('Buzz');
//     }
//     else if (this.zero_remainder(num, 3)) {
//       this.setMessage('Fizz');
//     }
//     else {
//       // num_string = " " + num;
//       console.log('before setMessage: ', typeof num)
//       this.setMessage(num);
//     }
//   };
