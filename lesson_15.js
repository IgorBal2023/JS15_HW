//  Quadratic equation
console.log(`Quadratic equation`);
let calculate = (a,b,c) => {
       let d = b*b - 4*a*c;
       if (d > 0){
        x1 = (-b + Math.sqrt(d))/2*a;
        x2 = (-b - Math.sqrt(d))/2*a;
       }
       else if (d === 0){
        x1 = (-b + Math.sqrt(d))/2*a;
        x2 = null;// x2 : x1 так может правильней, надо проверить
       }
       else if (d < 0){
        x1 = null;
        x2 = null;
       }
}
 calculate(1, 5, 6);
let result1 = {
x1: x1,
x2: x2
};
console.log(result1);

 calculate(1, 4, 4);
let result2 = {
x1: x1,
x2: x2
};
console.log(result2);

calculate(1, 1, 1);
let result3 = {
x1: x1,
x2: x2
};
console.log(result3);


console.log(``);
// Function factorial
console.log(`Function factorial`);
function factorial(n){
  if  (  n ===0 || n === 1)
  {         return(1); 
} 
else {  return n * factorial(n-1);}
}
console.log(factorial(7));


function factorial_2(n) {
    return (n != 1) ? n * factorial_2(n - 1) : 1;
  }
  
  console.log( factorial_2(7) );


console.log(``);
// Fibonachi numbers
console.log(`Fibonachi numbers`); 

let aF = 1;
let bF = 1;
let cF;
const numbers = Number(prompt(`Введіть число послідовності Фібоначи`)); 
 console.log(aF); 
 console.log(bF);

const fibonachi = (numbers) => {



for ( iF=3; iF<=numbers; iF++){
          aF ==bF;
          bF == cF; 
          cF = aF+bF;
   for( jF=iF; jF<=iF;jF++)
          aF=bF;
          bF=cF;
          console.log(cF);
};
}
fibonachi(numbers);

console.log(``);

console.log(`Pyramid`);
// Pyramid
console.log(``);

const printPyramid = (rovs) => {
    for (let iP=1; iP <= rovs; iP++){
        let sharp = `#`.repeat(rovs-iP);
        let stars = `*`.repeat(2*iP - 1);
        console.log(sharp + stars + sharp);
    }
}

const rovs = Number(prompt(`Enter number rows:`));
printPyramid(rovs);
