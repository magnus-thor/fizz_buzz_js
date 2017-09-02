describe('Fizz_buzz_spec', function() {
  var subject;

  beforeEach(function() {
    subject = new Fizz_buzz();
  });

  it('will return 1', function() {
    subject.normal_game(1);
    expect(subject.to_screen).toEqual(1);
  });

  it('3 returns fizz', function() {
    subject.normal_game(3);
    expect(subject.to_screen).toEqual('Fizz');
  });

  it('5 returns buzz', function() {
    subject.normal_game(5);
    expect(subject.to_screen).toEqual('Buzz');
  });

  it('15 returns FizzBuzz', function() {
    subject.normal_game(15);
    expect(subject.to_screen).toEqual('FizzBuzz');
  });
});
