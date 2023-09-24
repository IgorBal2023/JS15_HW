const start = () => {
  console.log(``);
       console.log(exercise);
   console.log(``);
}
// =============================================
let exercise = `Decorator`;
start();

document.write(`What is a decorator?`);
console.log(`What is a pattern?`);
console.log(`How can you create something you don’t know?`);

// =============================================
exercise = `Factorial recursion`;
start();

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log( factorial(5) );

// =============================================
exercise = `Fibonacci recursion`;
start();

const fib = (n, a = 1, b = 1, arr = []) => {
  if (n <= 0) {
    return arr;
  }
  arr.push(a);
  return fib(n - 1, b, a + b,arr);
};
let arrFib = fib(10);    // 1 1 2 3 5
let fibNum = arrFib.join(` `);
console.log(fibNum);
// =============================================
 exercise = `Read List`;
start();

const list = {
  title: "lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

const readList = (list) => {
  if (list){
  console.log(list.title);
  readList(list.next);
}
};

readList(list);
// lesson-1
// lesson-2
// lesson-3
// lesson-4
// lesson-5