describe('Fizz_Buzz_UI - index.html', function() {
  let fizz;
  var spyEvent;

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('index.html');
    $.holdReady(false);
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    fizz = new Fizz_buzz();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('spyEvent', function() {
    spyEvent = spyOnEvent('#run_fizz', 'click');
    $("#number").val(1);
    $("#run_fizz").trigger("click");
    expect('click').toHaveBeenTriggeredOn('#run_fizz');
    expect(spyEvent).toHaveBeenTriggered();
  });

  it('a non Integer input', function() {
    $("#number").val('abc');
    $("#run_fizz").trigger("click");
    expect($('#display_buzz').text()).toBe('Please enter an Integer');
  });

  it('runs Fizz_buzz(150) and receives FizzBuzz', function() {
    $("#number").val(3);
    $("#run_fizz").trigger("click");
    expect($('#display_buzz').text()).toBe('Fizz');
  });

  it('runs Fizz_buzz(1) and receives 1', function() {
    $("#number").val(1);
    $("#run_fizz").trigger("click");
    expect($('#display_buzz').text()).toBe('1');
  });
});
