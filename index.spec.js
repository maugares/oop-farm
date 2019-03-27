const {Farm} = require('./index');

test('A new Farm can be created', () => {
  const farm = new Farm();
  expect(farm).toBeTruthy();
})

test('A farm can have a name', () => {
  const farm = new Farm('Happy Cows');
  expect(farm.name).toBe('Happy Cows');
})