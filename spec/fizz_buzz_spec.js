describe('Fizz_buzz_spec', function() {
  var subject;

  beforeEach(function() {
    subject = new Fizz_buzz();
  });

  it('will return 1', function() {
    expect(subject.normal_game(1)).toEqual(1);
  });

  it('3 should return fizz', function() {
    expect(subject.normal_game(3)).toEqual('Fizz');
  });
});
