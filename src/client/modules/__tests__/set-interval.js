import interval from './../set-interval';

test('If interval set method is called the timeout id should be truthy', () => {
  interval.set();

  expect(interval.get()).toBeTruthy();
});

test('If interval set method is called, then cleared, the timeout id should be falsy', () => {
  interval.set();
  interval.clear();

  expect(interval.get()).toBeFalsy();
});
