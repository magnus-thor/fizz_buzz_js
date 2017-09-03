describe('Fizz_Buzz_UI - index.html', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('index.html');
    $.holdReady(false);
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("causes a timeout to be called", function() {
    setInterval(function() {
      timerCallback();
    }, 500);
    expect(timerCallback).not.toHaveBeenCalled();
    jasmine.clock().tick(501);
    expect(timerCallback).toHaveBeenCalled();
  });

  it('runs Fizz_buzz(1) and receives 1', function() {
    $('#number').val(1);
    $('#run_fizz').trigger('click');
    expect($('#display_buzz').text()).toBe('1');
  });
});
