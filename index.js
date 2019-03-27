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
}

module.exports.Farm = Farm;