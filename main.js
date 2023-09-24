const start = () => {
  console.log(``);
  console.log(nameExercise);
  console.log(``);
};
// ======================================
let nameExercise = `Prototype inheritance`;
start();

 function University  (universityName, dean){
  this.universityName = universityName;
  this.dean = dean;
};

 function Faculty  (universityName, dean,facultyName){
 University.call(this,universityName, dean);
 this.facultyName = facultyName;
 this.groups = {};
};

Faculty.prototype = Object.create(University.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.enlistStudent = function(groupName,studentName){
  if(!this.groups[groupName]){
    this.groups[groupName] = [];
  }
  if ( this.groups[groupName].length < 12){
      this.groups[groupName].push(studentName);
  }else{
    console.log(`Full groups.`);
  }
}
const university = new University(`Polytechnic`,`Kohen`);
const faculty = new Faculty(`Polytechnic`,`Kohen`,`Matematic`);
console.log(faculty.universityName);  // Polytechnic
faculty.enlistStudent(`Group A`,`Taras`);
console.log(faculty.groups['Group A']);  // [['Taras']]

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
Dog.prototype.whoIsGoodDog = function(){
  return this.name +` saids gaf-gaf`;
}

function Penguin(name, live, species) {
  Animal.call(this, name, live);
  this.species = species;
}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.fly = function(){
  return this.name + ` don\`t fly` 
}
Penguin.prototype.swim = function(){
  return this.name + ` swim`;
}

const animal = new Animal(`Dog`);
const mammal = new Mammal(`Humman`,`Hous`);
const bird = new Bird(`Eagle`,`in mountains`);
const dog = new Dog(`Dog`,`Dog hous`,`Shephard`);
const penguin = new Penguin(`Penguin`,`Antarctic`,`Imperor pinguin`);

console.log(animal.getInfo());
console.log(mammal.getInfo());
console.log(bird.getInfo());
console.log(mammal.run());
console.log(bird.fly());
console.log(dog.whoIsGoodDog());
console.log(penguin.fly());
console.log(penguin.swim());