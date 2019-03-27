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
    this.yield = 1.5;
    this.maxWeight = 1200;
    this.priceKg = 5;           // 5€/kg    
  }
}

class Pig extends Animal{
  constructor(age) {
    super(age);
    this.yield = 2.3;
    this.maxWeight = 700;
    this.priceKg = 10;          // 10€/kg        
  }
}

class Horse extends Animal{
  constructor(age) {
    super(age);
    this.yield = 1.7;    
    this.maxWeight = 1000;
    this.priceKg = 4;          // 4€/kg   
  }
}

module.exports = {Animal, Cow, Pig, Horse};