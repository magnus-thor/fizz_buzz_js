describe('Fizz_Buzz_UI - index.html', function() {

  beforeEach(function() {
    // jasmine.getFixtures().fixturesPath = './';
    // loadFixtures('index.html');
    // $.holdReady(false);
    $('#number').val(1);
    $('#run_fizz').trigger('click');
  });

  it('runs Fizz_buzz', function() {
    expect($('#display_buzz').text()).toBe('1');
  });


});
