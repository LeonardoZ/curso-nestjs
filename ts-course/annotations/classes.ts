class Vehicle {
  constructor(public color: string) {}

  honk(): void {
    console.log('mululu');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vrom');
    console.log(`${this.wheels} wheels`);
    console.log(`${this.color} colors`);
  }
}
const car = new Car(3, 'orange');
car.drive();
