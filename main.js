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
  nameGroups: {
    value: ``,
    writable: true,
    enumerable: true,
  },
  groups: {
    value: [[`Lisa`,`Maggie`,`Abe`,`Mona`,`Patrik`,`Krubs`,`SpanchBob`,`Squidvard`,`Paff`,`Plancton`]],
    writable: true,
    enumerable: true,
  },
});

faculty.enlistStudent = function (nameStudent) {
  if (this.groups[this.groups.length - 1].length < 12) {
    this.groups[this.groups.length - 1].push(nameStudent);
  } else {
    this.groups.push([]);
    this.groups[this.groups.length - 1].push(nameStudent);
  }
};

faculty.universityName = `Polytechnic`; // Polytechnic
faculty.dean = `Danilo`;
faculty.name = `Informatik`;
faculty.enlistStudent(`Homer`);
faculty.enlistStudent(`Marge`);
faculty.enlistStudent(`Bart`);
faculty.enlistStudent(`Taras`);
faculty.nameGroups = `Group ` + (faculty.groups.length + 1);

console.log(`Name of the university: ` + faculty.universityName);
console.log(`Dean's name: ` + faculty.dean);
console.log(`Faculty name: ` + faculty.name);
for (i = 0; i < faculty.groups.length; i++) {
  const groupName = `Group ` + (i + 1);
  const studentsName = faculty.groups[i];

  console.log(`Group name: ` + groupName);
  console.log(`Group members: ` + studentsName); // [['Taras']]
}
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
