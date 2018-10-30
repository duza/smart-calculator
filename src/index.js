class SmartCalculator {
  constructor(initialValue) {
    this.num = initialValue + '';
  }

  add(number) {
    this.num = `${this.num} + ${number}`;
    return this;
  }
  
  subtract(number) {
    this.num = `${this.num} - ${number}`;
    return this;
  }

  multiply(number) {
    this.num = `${this.num} * ${number}`;
    return this;
  }

  devide(number) {
    this.num = `${this.num} / ${number}`;
    return this;
  }

  pow(number) {
    this.num = `${this.num} ** ${number}`;
    return this;
  }

  toString() {
    return eval(`${this.num}`);
  }
}

module.exports = SmartCalculator;
