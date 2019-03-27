class Farm {
  constructor(name) {
    this.name = name;
    this.crops = [];
    this.animals = [];
  }

  addCrop(crop) {
    this.crops.push(crop);
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  calculateIncome() {
    const cropValue = this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((totalIncome, cropIncome) => totalIncome + cropIncome, 0)
    const animalValue = this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((totalIncome, animalIncome) => totalIncome + animalIncome, 0)
    return cropValue + animalValue;
  }

  printReport() {
    const spaces = " ";
    const input = [this.name, this.crops.length, this.animals.length, parseFloat(this.calculateIncome().toFixed(2))];

    const maxLength = input.map( value => value.toString().length)


    // const lineFarm = `Farm: ${this.name}`
    // const lineCrops = `No. of crops: ${this.crops.length}`
    // const lineAnimals = `No. of animals: ${this.animals}`
    // const income = `Total Income: ${this.calculateIncome()}`
    // const longest = Math.max(lineFarm.length, lineCrops.length, lineAnimals.length, income.length);

    console.log(input);
    console.log(typeof(maxLength.slice));
    console.log(Math.max(maxLength));
  }

}


module.exports.Farm = Farm;

// Test report
const {Wheat, Sugarcane, Crop} = require('./crops');
const {Animal, Cow, Pig, Horse} = require('./animals');

const farm = new Farm('Happy Cows');
farm.addCrop(new Wheat(100));       // ~ 1011.60€
farm.addCrop(new Sugarcane(50));    // ~  423.03€
farm.addAnimal(new Cow(200));       // ~ 1500.00€
farm.addAnimal(new Pig(60));        // ~  552.00€
farm.addAnimal(new Pig(310));       // ~ 2800.00€
farm.addAnimal(new Horse(500));     // ~ 8500.00€
console.log(farm.printReport());