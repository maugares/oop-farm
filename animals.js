class Animal {
  constructor(age) {
    this.age = age;     // age in number of days
  }

  getWeightInKg() {
    return Math.min(this.age * this.yield, this.maxWeight)
    // Math.min() returns the smallest. If ageWeight is > than maxWeight, it returns maxWeight
  }

  getValueInEuros() {
    return this.getWeightInKg * this.priceKg;
  }
}

class Cow extends Animal {
  constructor(age) {
    super(age);
    this.yield = 1.5;           // +1.5kg per day
    this.maxWeight = 1200;      // max weight = 1200
    this.priceKg = 5;           // 5€/kg    
  }
}

class Pig extends Animal{
  constructor(age) {
    super(age);
    this.yield = 2.3;           // +2.3kg per day
    this.maxWeight = 700;       // max weight = 700
    this.priceKg = 10;          // 10€/kg        
  }
}

class Horse extends Animal{
  constructor(age) {
    super(age);
    this.yield = 1.7;          // +1.7kg per day
    this.maxWeight = 1000;     // max weight = 1000
    this.priceKg = 4;          // 4€/kg   
  }
}

module.exports = {Animal, Cow, Pig, Horse};