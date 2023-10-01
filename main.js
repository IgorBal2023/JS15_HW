const start = () => {
  console.log(``);
  console.log(newTask);
  console.log(``);
};
// ===============================
let newTask = `Prototype inheritance`;
start();

class BankAccount {
  constructor(balance, accountHolder) {
    this._balance = balance;
    this.accountHolder = accountHolder;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }
}
const bankAccount = new BankAccount(5000, `Taras`);
console.log(bankAccount.balance);
bankAccount.balance = 6000;
console.log(bankAccount.balance);

// ===============================
newTask = `Encapsulation`;
start();

class BankAccount2 {
  constructor(balance, accountHolder) {
    this.#balance = balance;
    this.accountHolder = accountHolder;
  }
  #balance = 7500;
  getBalance() {
    return this.#balance;
  }
  setBalance(arg) {
    this.#balance = arg;
  }
}
const bankAccount2 = new BankAccount2(7000, `Taras`);
console.log(bankAccount2.getBalance());
bankAccount2.setBalance(8000);
console.log(bankAccount2.getBalance());

// ===============================
newTask = `Inheritance and Polymorphism`;
start();

class Animal {
  constructor(name) {
    this.name = name;
  }
  getInfo() {
    return this.name;
  }
}
class Mammal extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }

  getInfo() {
    return this.name + `,` + this.live;
  }
  run() {
    return this.name + ` run.`;
  }
}
class Bird extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }

  getInfo() {
    return this.name + `,` + this.live;
  }
  fly() {
    return this.name + ` fly.`;
  }
}
class Dog extends Mammal {
  constructor(name, live, breed) {
    super(name, live);
    this.breed = breed;
  }

  getInfo() {
    return this.name + `,` + this.live + `,` + this.breed;
  }
  whoIsGoodDog() {
    return this.name + ` barked "woof-woof"!`;
  }
}
class Penguin extends Bird {
  constructor(name, live, species) {
    super(name, live);
    this.species = species;
  }

  getInfo() {
    return this.name + `,` + this.live + `,` + this.species;
  }
  flySpecies() {
    return this.species + ` don\`t fly!`;
  }
  propertySpecies() {
    return this.species + ` swim.`;
  }
}

const animal = new Animal(`Human`);
const mammal = new Mammal(`Human`, `Hous`);
const bird = new Bird(`Eagle`, `Mountans`);
const dog = new Dog(`Dog`, `Doghouse`, `Maltipu`);
const penguin = new Penguin(`Penguin`, `Antarctic`, `Pygoscelis`);

console.log(animal.getInfo());
console.log(mammal.getInfo());
console.log(mammal.run());
console.log(bird.getInfo());
console.log(bird.fly());
console.log(dog.getInfo());
console.log(dog.whoIsGoodDog());
console.log(penguin.getInfo());
console.log(penguin.flySpecies());
console.log(penguin.propertySpecies());

// ===============================
newTask = `OOP`;
start();

class Vehicle{
  constructor(power,gasTank,mass){
      this.power = power;
      this.gasTank = gasTank;
      this.mass = mass;
      this.maxSpeed = this.calcMaxSpeed();
      this.gasUsage = this.calcGasUsage();
      this.gasLevel = this.gasTank;
      this.start = false; 
      this.speed = 0; 
  }
  calcMaxSpeed(){
    return 0.84 * this.power/this.mass;
  }
  getMaxSpeed(){
    return this.maxSpeed;
  }
  calcGasUsage(){
    return Math.round(this.calcMaxSpeed()/this.power*100);
  }
  getGasUsage(){
    return this.gasUsage;
  }
  startEngine(){
    this.start = true;
  }
  stopEngine(){
    this.start = false;
  }
  drive(speed, distance) {
    if (this.start) {
      const usedGas = this.calcGasUsage(distance);
      const gasDiff = this.gasLevel - usedGas;
      if (speed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      } else if (speed === 0) {
        this.speed = 0;
      } else {
        this.speed = speed;
      }
      this.gasLevel = gasDiff < 0 ? 0 : gasDiff;
    } else {
      console.log("Please start a vehicle");
    }
  };

  addGas(gas) {
    const gasSum = this.gasLevel + gas;
    this.gasLevel = gasSum > this.gasTank ? this.gasTank : gasSum;
  };

  printInfo(){
    const info = {
      power: this.power,
      gasTank: this.gasTank,
      mass: this.mass,
      maxSpeed: this.maxSpeed,
      gasUsage: this.gasUsage,
      started: this.started,
      speed: this.speed,
    }
    console.log(info);
    return info;
  }
}
class Car extends Vehicle{
  constructor(power,gasTank,mass,type,maxPassengerCount){
    super(power,gasTank,mass)
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
  }
  printInfo(){
    const info = super.printInfo();
    info.type = this.type;
    info.maxPassengersCount = this.maxPassengerCount;
    console.log(info);
    return info;
  }
}
class Bus extends Car{
  constructor(power,gasTank,mass,type,maxPassengerCount){
    super(power,gasTank,mass,type,maxPassengerCount)
  }
  passengerCount = 0;
  updatePassengers(passenger) {
    const passengerDiff = this.passengerCount + passenger;
    if(passengerDiff > this.maxPassengerCount){
      this.passengerCount = this.maxPassengerCount;
    }else if (passengerDiff < 0){
      this.passengerCount = 0;
    }else {
      this.passenger = this.passengerCount;
    }
  }
   printInfo(){
    const info = super.printInfo();
    info.passengerCount = this.passengerCount;
    console.log(info);
    return info;
  }
}
const vehicle = new Vehicle(300,150,15);
const car = new Car(150, 50, 10,`Sedan`,5);
const bus = new Bus(300, 100, 20,`Bus`,38);

vehicle.startEngine();
vehicle.drive(50, 100);
vehicle.addGas(20);

car.startEngine();
car.drive(60, 50);
car.addGas(10);

bus.startEngine();
bus.drive(40, 30);
bus.addGas(15);

vehicle.printInfo();
car.printInfo();
bus.printInfo();