describe('Fizz_Buzz_UI - index.html', function() {
  let fizz;

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('index.html');
    $.holdReady(false);
    // timerCallback = jasmine.createSpy("timerCallback");
    // jasmine.clock().install();
    // jasmine.clock().useMock();
    fizz = new Fizz_buzz();
  });

  // afterEach(function() {
  //   jasmine.clock().uninstall();
  // });
  //
  // it("causes a timeout to be called synchronously", function() {
  //     setTimeout(function() {
  //       timerCallback();
  //     }, 100);
  //
  //     expect(timerCallback).not.toHaveBeenCalled();
  //
  //     jasmine.clock().tick(101);
  //
  //     expect(timerCallback).toHaveBeenCalled();
  //   });

  //
  // it("causes a timeout to be called", function() {
  //   setInterval(function() {
  //     timerCallback();
  //   }, 500);
  //   expect(timerCallback).not.toHaveBeenCalled();
  //   jasmine.clock().tick(501);
  //   expect(timerCallback).toHaveBeenCalled();
  // });



  it('runs Fizz_buzz(1) and receives 1', function() {
    $('#number').val(1);
    $('#run_fizz').trigger('click');
    // fizz.normal_game(1);
    // jasmine.clock().tick(1000);
    expect($('#display_buzz').text()).toBe('1');
  });
});
