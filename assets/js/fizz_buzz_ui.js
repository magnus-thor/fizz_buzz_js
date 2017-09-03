$(document).ready(function () {

  $('#run_fizz').click(function() {
    var n = parseInt($('#number').val());
    var fizzbuzz = new Fizz_buzz();
    if ($.isNumeric(n) && n > 0) {
      var x = 1;
      var stop_buzz =  setInterval(function() {
        fizzbuzz.normal_game(x);
        $('#display_buzz').css("color", fizzbuzz.use_color).text(fizzbuzz.to_screen);
        if (x >= n) {
          clearInterval(stop_buzz);
        }
        x++;
      }, 500);
    } else {
      fizzbuzz.setMessage('Please enter an Integer');
      $('#display_buzz').css("color", fizzbuzz.use_color).text(fizzbuzz.to_screen);
    }
  });
  //
  // $('#run_fizz').click(function() {
  //   var n = parseInt($('#number').val());
  //   var fizzbuzz = new Fizz_buzz();
  //   if ($.isNumeric(n) && n > 0) {
  //     fizzbuzz.normal_game(n);
  //     $('#display_buzz').css("color", fizzbuzz.use_color).text(fizzbuzz.to_screen);
  //   } else {
  //     fizzbuzz.setMessage('Please enter an Integer');
  //     fizzbuzz.use_color = "black";
  //     $('#display_buzz').css("color", fizzbuzz.use_color).text(fizzbuzz.to_screen);
  //   }
  //
  // });
});
