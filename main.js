// // Filter arr
// console.log(`Filter arr`);
// console.log(``);

// // filterRange(arr, from, to);
// // filterRange(arr, 3, 7);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrFilter = arr.slice(2,7);
// console.log(arrFilter);

// // Sort arr
// console.log(``);
// console.log(`Sort arr`);
// console.log(``);

// const arrSort = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
// const sortArr = arrSort.sort((a,b) => {return a-b});
// console.log(sortArr);
// // sortArr(arrSort);
// // -3242, -454, 0, 4, 22, 23, 324, 544, 32423

// Sort arr str
console.log(``);
console.log(`Sort arr str`);
console.log(``);

const arrSortString = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
const sortArrString = arrSortString.sort((a,b)  => {a.length - b.length});

// const sortArrString = arrSortString.sort((a,b)  => {
//     if (a.length > b.length) return 1;
//     if (a.length > b.length) return -1;
//     return a.localeCompare(b)});
console.log(sortArrString);
// sortArr(arr);
// '', ' ', 'a', 'bb', '4534', 'sdfds', 'r4rdv-'
