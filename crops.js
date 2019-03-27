class Crop {
  constructor(acres) {
    this.acres = acres;
  }

  getYieldInEuros() {
    return this.getYieldInKg() * this.price;
  }

  getCosts() {
    return this.acres * this.cost;
  }
}

class Wheat extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 1.5;   ///1.5€/kg
    this.cost = 340;    // 340€/acre
  }
  
  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3);
  }
}

class Sugarcane extends Crop {
  constructor(acres) {
    super(acres);
    this.price = 2;     // 2€/kg
    this.cost = 166;    // 166€/acre
  }

  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1);
  }
}

// 1 EXPORT
module.exports = { Wheat, Sugarcane, Crop};

// // SEPARATED EXPORTS
// module.exports.Wheat = {Wheat};
// module.exports.Sugarcane = {Sugarcane};
// module.exports.Crop = {Crop};