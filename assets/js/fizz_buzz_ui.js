$(document).ready(function () {
  var ul =$("ul");
  $('#run_fizz').click(function() {
    var n = parseInt($('#number').val());
    var fizzbuzz = new Fizz_buzz();
    for (x = 1; x <= n; x++) {
      fizzbuzz.normal_game(x);
      ul.append("<li>" + fizzbuzz.to_screen + "</li>");
    // $('#display_buzz').html(fizzbuzz.to_screen);
  };
  });


});
