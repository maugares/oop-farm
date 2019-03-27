class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }
}

module.exports.Farm = Farm;