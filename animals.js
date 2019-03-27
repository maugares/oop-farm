class Animal {
  constructor(age) {
    this.age = age;     // age in number of days
  }

  getWeightInKg() {
    return Math.min(this.age * this.yield, this.maxWeight)
    // Math.min() returns the smallest. If ageWeight is > than maxWeight, it returns maxWeight
  }

  getValueInEuros() {
    return this.getWeightInKg() * this.priceKg;
  }
}

class Cow extends Animal {
  constructor(age) {
    super(age);
    this.yield = 1.5;           // +1.5kg per day
    this.maxWeight = 1200;      // maxKg = 1200kg (800 days
    this.priceKg = 5;           // 5€/kg    
  }
}

class Pig extends Animal{
  constructor(age) {
    super(age);
    this.yield = 2.3;           // +2.3kg per day
    this.maxWeight = 700;       // maxKg = 700kg (304.4 days)
    this.priceKg = 4;           // 4€/kg        
  }
}

class Horse extends Animal{
  constructor(age) {
    super(age);
    this.yield = 1.7;          // +1.7kg per day
    this.maxWeight = 1000;     // maxKg = 1000kg (588.2 days)
    this.priceKg = 10;         // 10€/kg   
  }
}

module.exports = {Animal, Cow, Pig, Horse};

// const animal1 = new Cow(200);     // ~ 1500.00€
// const animal2 = new Pig(60);     // ~ 1380.00€
// const animal3 = new Pig(310);     // ~ 1380.00€
// const animal4 = new Horse(500);     // ~ 3400.00€


// console.log('value of animal1: ', animal1.getValueInEuros())       // ~ 1500.00€
// console.log('value of animal2: ', animal2.getValueInEuros())        // ~ 1380.00€
// console.log('value of animal3: ', animal3.getValueInEuros())       // ~ 1380.00€
// console.log('value of animal4: ', animal4.getValueInEuros())     // ~ 3400.00€