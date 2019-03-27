const {Farm} = require('./index');
const {Wheat, Sugarcane, Crop} = require('./crops');

test('A new Farm can be created', () => {
  const farm = new Farm();
  expect(farm).toBeTruthy();
})

test('A farm can have a name', () => {
  const farm = new Farm('Happy Cows');
  expect(farm.name).toBe('Happy Cows');
})

// Test: add crops to the farm

test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
})

// Test: calculate income from crops

test('The income of an empty farm is 0', () => {
  const farm = new Farm('TEST_NAME')
  expect(farm.calculateIncome()).toBe(0)
})

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
  farm.addCrop(new Sugarcane(100))
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
})