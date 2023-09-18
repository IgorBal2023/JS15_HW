const newTask = () => {
  console.log(``);
  console.log(nameTask);
  console.log(``);
}
// =================================================
let nameTask = `Create arr method`;
newTask();

const obj = {
  from: 1,
  to: 10,
};

const createArr = () => {
  const arr = [];
  for (let i = obj.from; i < obj.to; i++) {
    arr.push(i);
  }
  obj.arr = arr;
};
createArr();
console.log(obj.arr);  // [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ===========================

function createArr2() {
  const arrCreate = [];
  for (i = this.from; i < this.to; i++) {
    arrCreate.push(i);
  }
  this.arr = arrCreate;
}
const createArrBind = createArr2.bind(obj);
createArrBind();
console.log(obj.arr);
// ===========================
function createArr3() {
  const arr = [];
  for (i = this.from; i < this.to; i++) {
    arr.push(i);
  }
  this.arr = arr;
}
const createArrBind2 = createArr2.bind(obj);
createArrBind2.apply(obj);
console.log(obj.arr);

// ====================================================
nameTask = `Calculator`;
newTask();

function Calculator() {
  this.result = 0;

  this.sum = function (a) {
    this.result += a;
    return this;
  };
  this.sub = function (a) {
    this.result -= a;
    return this;
  };
  this.mul = function (a) {
    this.result *= a;
    return this;
  };
  this.div = function (a) {
    this.result /= a;
    return this;
  };
}
const calculator = new Calculator();
calculator.sum(2).sum(2).mul(4);       // 16
console.log(calculator.result);
calculator.result = 0;

calculator.sub(15).sum(2).div(4);
console.log(calculator.result);
calculator.result = 0;

calculator.mul(20).div(12).sub(4);
console.log(calculator.result);
calculator.result = 0;

calculator.div(202).sum(2).sub(4).mul(6);
console.log(calculator.result);
calculator.result = 0;

// ====================================================
nameTask = `Constructor Function`;
newTask();

function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.gasTank = gasTank;
  this.engineStarted = started;


  //========== STARTENGINE =========== 
  this.startEngine = function () {
    if (this.gasTank !== 0) {
      this.engineStarted = true;
      console.log(`Engine start`);
      return this;
    }
    else {
      this.engineStarted = false;
      console.log(`No fuel!!!`);
      return this;
    }

  }
  //==========  DRIVE =========== 
  this.drive = function () {
    if (this.engineStarted !== false && this.gasTank !== 0) {
      this.drive = true;
      this.speed = 30;
      console.log(`Drive - ` + this.drive);
      return this;
    }
    else {
      this.drive = false;
      console.log(`Drive - ` + this.drive);
      return this;
    }
  }
  //==========  STOP =========== 
  this.stop = function () {
    if (this.engineStarted == false || this.speed == 0) {
      this.speed = 0;
      this.engineStarted = false;
      console.log(`Car engine stop!`);
      return this;
    }
    else {
      console.log(`Car move!`);
      return this;
    }
  }
  //==========  SPEEDUP =========== 
  this.speedUp = function (arg) {
    const maxSpeed = 200;
    const fuelExpense = 5;
    let speedUpItter = Math.trunc(this.gasTank / fuelExpense);
    let speed_Up = this.speed;
    if (this.drive == true) {

      for (let i = 1; i <= speedUpItter; i++) {
        speed_Up += arg;
        this.speedUp = speed_Up;
        this.speed = this.speedUp;
        console.log(`Speed ` + this.speedUp + `!`);
      }
      console.log(`No fuel, the car slows down!!!`);
      return this;
    }
    else {
      console.log(`Car stop!`);
      return this;
    }
  }
  //==========  SLOWDOWN =========== 
  this.slowDown = function (arg) {
    let slowDownItter = Math.trunc(this.speed / arg);
    if (this.speed !== 0) {
      for (let i = slowDownItter; i > 0; i--) {
        this.speed -= arg;
        this.slowDown = this.speed
        console.log(`Speed` + this.slowDown + `!`);
      }
      console.log(`Car stopped!`);
      return this;
    }
    else {
      console.log(`Car stop!`);
      return this;
    }
  }
  // ===== GAS =====
  this.addGas = function (arg) {
    const maxGas = 20;
    const stepGas = arg;
    if (this.gasTank < maxGas) {
      const maxItterGas = Math.trunc(maxGas / stepGas);
      let fuelTank = this.gasTank;

      if (fuelTank + stepGas < maxGas) {
        for (let i = 1; i <= maxItterGas; i++) {
          fuelTank += stepGas;
        }
        this.gasTank = fuelTank;
      }
      console.log(`In tank ` + this.gasTank + ` units gas!`);
    }
    else {
      console.log(`Gas tank is FULL!`);
    }
    return this;
  }
}

const car = new Car(`Mazda`, `white`, `10`, 0, 0);
car.addGas(5).startEngine().drive().speedUp(5).slowDown(5).stop();

