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

  // it("causes a timeout to be called synchronously", function() {
  // setTimeout(function() {
  //   timerCallback();
  // }, 100);
  //
  // expect(timerCallback).not.toHaveBeenCalled();
  //
  // jasmine.clock().tick(101);
  //
  // expect(timerCallback).toHaveBeenCalled();
  //   });

  it('spyEvent', function() {
    spyEvent = spyOnEvent('#run_fizz', 'click');
    $("#number").val(1);
    $("#run_fizz").trigger("click");
    expect('click').toHaveBeenTriggeredOn('#run_fizz');
    expect(spyEvent).toHaveBeenTriggered();
  });

  it('runs Fizz_buzz(150) and receives FizzBuzz', function() {
    $("#number").val(150);
    $("#run_fizz").trigger("click");
    fizz.normal_game(150);
    console.log(fizz.to_screen);
    expect($('#display_buzz').text()).toBe('FizzBuzz');
  });

  it('runs Fizz_buzz(1) and receives 1', function() {
    $("#number").val(1);
    $("#run_fizz").trigger("click");
    fizz.normal_game(1);
    console.log(fizz.to_screen);
    expect($('#display_buzz').text()).toBe('1');
  });

  // it("causes a timeout to be called", function() {
  //   setInterval(function() {
  //     timerCallback();
  //   }, 500);
  //   expect(timerCallback).not.toHaveBeenCalled();
  //   jasmine.clock().tick(501);
  //   expect(timerCallback).toHaveBeenCalled();
  // });
});
