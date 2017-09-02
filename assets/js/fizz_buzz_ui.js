$(document).ready(function () {
  var ul =$("ul");
  // $('#display_buzz').text('counter');

  $('#run_fizz').click(function() {
    var n = parseInt($('#number').val());
    var x = 1;
    // for (x = 1; x <= n; x++) {
    var fizzbuzz = new Fizz_buzz();
    var stop_buzz =  setInterval(function() {
      fizzbuzz.normal_game(x);
      $('#display_buzz').text(fizzbuzz.to_screen);
      if (x >= n) {
        clearInterval(stop_buzz);
      }
      x++;
    }, 500);


    // }
  });
});




//  window.setTimeout(function(){$('#display_buzz').fadeIn(1000).html(fizzbuzz.to_screen)}, 500);
