class Vehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }
  toString() {
    return "(" + this.wheels + ")";
  }
}

class Car extends Vehicle {
  constructor(colour) {
    super(4);
    this.colour = colour;
  }
  toString() {
    return super.toString() + "coloured: " + this.colour;
  }
}

let car = new Car("blue");
console.log(car.toString());

console.log(car instanceof Car);
console.log(car instanceof Vehicle);
