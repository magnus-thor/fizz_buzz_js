// # spec/fizz_buzz_spec.js

describe('fizz_buzz_spec', function() {
  var subject;

  beforeEach(function() {
    subject = new Fizz_buzz(9);
  });

  it('expect number to eq 9 at start', function() {
    expect(subject.number).toEqual(9);
  });

  it('expect number 3 to equal fizz', function() {
    expect(subject.number).toEqual('Fizz');
  });
}) // End of initial describe
