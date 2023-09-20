const startOfTask = (nameTask) => {
  console.log(``);
  console.log(nameTask);
  console.log(``);
}
let nameTask;

// Filter arr
nameTask = `Filter arr`;
startOfTask(nameTask);

// filterRange(arr, from, to);
// filterRange(arr, 3, 7);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrFilter = arr.slice(2, 7);
console.log(arrFilter);

// Sort arr
nameTask = `Sort arr`;
startOfTask(nameTask);

const arrSort = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
const sortArr = arrSort.sort((a, b) => { return a - b });
console.log(sortArr);
// sortArr(arrSort);
// -3242, -454, 0, 4, 22, 23, 324, 544, 32423

// Sort arr str
nameTask = `Sort arr str`;
startOfTask(nameTask);

const arrSortString = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
const sortArrString = arrSortString.sort((a, b) => (a.length - b.length));

const sortArrString1 = arrSortString.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length > b.length) return -1;
  return a.localeCompare(b)
});
console.log(sortArrString);
console.log(sortArrString1);
// sortArr(arr);
// '', ' ', 'a', 'bb', '4534', 'sdfds', 'r4rdv-'

// Calculate average age of users older then 17 and younger then 55
nameTask = `Calculate average age of users older then 17 and younger then 55`;
startOfTask(nameTask);

const arrAge = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

let ageSum = 0;
const arrAgeSort = arrAge.filter(person =>
  person.age > 17 && person.age < 55
)

averageAge = arrAgeSort.forEach(person => {
  ageSum += person.age;

})
const ageResult = ageSum / arrAgeSort.length;
console.log(arrAgeSort);
console.log(ageResult);
//   averageAge(arrAge);
// 31.4

// Sort arr by name
nameTask = `Sort arr by name`;
startOfTask(nameTask);

const arrSort2 = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];
function sortUsers(arrSort2) {
  arrSort2.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    else if (a.name > b.name) { return 1; }
  }
  )
};
sortUsers(arrSort2);
console.log(arrSort2);

// //   Find min and max
// nameTask = `Find min and max`;
//startOfTask(nameTask);

//const arrMinMax = [
//    { name: "John", age: 25 },
//    { name: "Pete", age: 30 },
//    { name: "Mary", age: 29 },
//    { name: "Taras", age: 25 },
//    { name: "Kate", age: 74 },
//    { name: "Chris", age: 14 },
//    { name: "Alan", age: 5 },
//    { name: "Boris", age: 55 },
//    { name: "Elizabeth", age: 48 },
//  ];

//  minMaxAge(arrMinMax);
//  // {min:5, max:74}

//   Save only unique values
nameTask = `Save only unique values`;
startOfTask(nameTask);

const strings = [
  "HELLO",
  "World",
  "JS",
  "Js",
  "HI",
  "Hello",
  "HTML",
  "CSS",
  "js",
];
function getUniqueStrings(inputArray) {
  const litleStrings = inputArray.join(',').toLowerCase().split(',');
  const unique = litleStrings.filter((value, index, self) => self.indexOf(value) === index);
  return unique;
}

const uniqueArr = getUniqueStrings(strings);
console.log(uniqueArr);
// HELLO, World, JS, HI, HTML, CSS

nameTask = `the Longest Consecutive Sequence`;
startOfTask(nameTask);


function findLongestConsecutive(arr) {
  let longArr = [];
  let currentArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      currentArr.push(arr[i]);
    }
    else if (arr[i] !== arr[i - 1]) {
      currentArr = [arr[i]];
    }
    if (currentArr[0] === 1 && currentArr.length > longArr.length) {
      longArr = currentArr;
    }
  }
  return longArr;
}

const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 1, 2, 4, 5, 7, 8, 9, 0, 1, 2];
const longestConsecutive = findLongestConsecutive(numbers);     // [1, 2, 3, 4, 5]
console.log(longestConsecutive);