const {Farm} = require('./index');
const {Wheat, Sugarcane, Crop} = require('./crops');
const {Animal, Cow, Pig, Horse} = require('./animals');

// Test: correct calculation of farm's value when containing crops and animals
test('The farm has a name', () => {
  const farm = new Farm('Happy Cows');
  expect(farm.name.toBeTruthy);
})

test('A functioning farm was created', () => {
  const farm = new Farm('Happy Cows');
  farm.addCrop(new Wheat(100));       // ~ 1011.60€
  farm.addCrop(new Sugarcane(50));    // ~  423.03€
  farm.addAnimal(new Cow(200));       // ~ 1500.00€
  farm.addAnimal(new Pig(60));        // ~  552.00€
  farm.addAnimal(new Pig(310));       // ~ 2800.00€
  farm.addAnimal(new Horse(500));     // ~ 8500.00€
  expect(farm.calculateIncome()).toBeCloseTo(14786.63, 1);
})

// Test: Max weight calculation for old Horses
test('A horse of 801 days weighs the same as a 900 days', () =>{
  const horse1 = new Horse(801);
  const horse2 = new Horse(900);
  expect(horse1.getWeightInKg).toEqual(horse2.getWeightInKg);
})

// // Calculator: check actual value
// test('A functioning farm was created', () => {
//   const farm = new Farm();
//   // farm.addCrop(new Wheat(100));       // ~ 1011.60
//   // farm.addCrop(new Sugarcane(50));    // ~  423.03
//   // farm.addAnimal(new Cow(200));       // ~ 
//   // farm.addAnimal(new Pig(10));
//   // farm.addAnimal(new Pig(60));
//   // farm.addAnimal(new Horse(500));
//   expect(farm.calculateIncome()).toBeCloseTo(0, 1);
// })