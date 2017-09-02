describe('Fizz_Buzz_UI - index.html', function() {

  beforeEach(function() {
    $('#number').val('30');
    $('#run_fizz').trigger('click');
  });

  it('runs Fizz_buzz', function() {
    expect($('#display_buzz').text()).toBe('FizzBuzz');
  });


});
