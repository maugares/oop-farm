class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }

  calculateIncome() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((totalIncome,cropIncome) => totalIncome + cropIncome, 0)
  }
}

module.exports.Farm = Farm;