describe('Fizz_Buzz_UI - index.html', function() {
  var spyEvent;

  beforeAll(function(done) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL= 120000;
    done();
  });

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

  it('runs Fizz_buzz(1) and receives 1', function() {
    $("#number").val(1);
    $("#run_fizz").trigger("click");
    jasmine.clock().tick(510);
    expect($('#display_buzz').text()).toBe('1');
  });

  it('runs Fizz_buzz(3) and receives FizzBuzz', function() {
    $("#number").val(3);
    $("#run_fizz").trigger("click");
    jasmine.clock().tick(1510);
    expect($('#display_buzz').text()).toBe('Fizz');
  });
});
