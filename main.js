const start = () => {
  console.log(``);
  console.log(nameExercise);
  console.log(``);
};
// ======================================
let nameExercise = `Prototype inheritance`;
start();

const university = {
  universityName: ``,
  dean: ``,
};

const faculty = Object.create(university, {
  name: {
    value: ``,
    writable: true,
    enumerable: true,
  },
  groups: {
    nameGroups: ``,
    value: [],
    writable: true,
    enumerable: true,
  },
  enlistStudent: {
    value: function (nameStudent) {
      if (this.groups.length < 12) {
        this.groups.push(nameStudent);
      } else {
        console.log(`Full group.`);
      }
    },
  },
});

faculty.universityName = `Polytechnic`; // Polytechnic
faculty.dean = `Danilo`;
faculty.name = `Informatik`;
faculty.groups.nameGroups = `Group A`;
faculty.enlistStudent(`Homer`);
faculty.enlistStudent(`Marge`);
faculty.enlistStudent(`Bart`);
faculty.enlistStudent(`Taras`);

console.log(`Name of the university: ` + faculty.universityName);
console.log(`Dean's name: ` + faculty.dean);
console.log(`Faculty name: ` + faculty.name);
console.log(`Group name: ` + faculty.groups.nameGroups);
console.log(`Group members: ` + faculty.groups); // [['Taras']]

// ======================================
nameExercise = `Prototype constructor`;
start();

function Animal(name) {
  this.name = name;
}
Animal.prototype.getInfo = function () {
  return this.name;
};

function Mammal(name, live) {
  Animal.call(this, name);
  this.live = live;
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.run = function () {
  return this.name + ` run`;
};

function Bird(name, live) {
  Animal.call(this, name);
  this.live = live;
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.fly = function () {
  return this.name + ` fly`;
};

function Dog(name, live, breed) {
  Animal.call(this, name, live);
  this.breed = breed;
}
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.whoIsGoodDog = function () {
  return this.name + ` barked gaf-gaf`;
};

function Penguin(name, live, species) {
  Animal.call(this, name, live);
  this.species = species;
}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.fly = function () {
  return this.name + ` don\`t fly`;
};
Penguin.prototype.swim = function () {
  return this.name + ` swim`;
};

const animal = new Animal(`Dog`);
const mammal = new Mammal(`Humman`, `Hous`);
const bird = new Bird(`Eagle`, `in mountains`);
const dog = new Dog(`Dog`, `Dog hous`, `Shephard`);
const penguin = new Penguin(`Penguin`, `Antarctic`, `Imperor pinguin`);

console.log(animal.getInfo());
console.log(mammal.getInfo());
console.log(bird.getInfo());
console.log(mammal.run());
console.log(bird.fly());
console.log(dog.whoIsGoodDog());
console.log(penguin.fly());
console.log(penguin.swim());
