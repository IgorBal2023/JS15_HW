const start = (nameTest) => {
  console.log(``);
  console.log(nameTest);
  console.log(``);
}
// ==========================================================================
// let nameTest = `Pythagorean theorem`;
// start(nameTest);

// const pythagorean = (a, b) => {
//   let c = a*a + b*b;
//   c = Math.sqrt(c);
//   c = c.toFixed(2);
//   console.log(c);
// } ;

// pythagorean(5, 12);
// pythagorean(22.5, 34.7);
// pythagorean(12.85, 6.57);

// ==========================================================================
// nameTest = `number in money format`;
// start(nameTest);

// const formatMoney =(num) => {
//   let absoluteNum = Math.abs(num);
//   let money = absoluteNum.toLocaleString(`en`, { 
//     style: "decimal",
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,    
//   });
//   if (num > 0){
//   console.log(`UAH + `+ money)}
//   else {
//     console.log(`UAH - `+ money)}
// };

// formatMoney(1232323);      //+ 1,232,323.00
// formatMoney(-23.2132);     //- 23.21 

// ==========================================================================
// nameTest = `number in spaces`;
// start(nameTest);

// const formatNumber = (num) => {
//   let numSpace = num.toLocaleString(`eu`,{
//     style: "decimal",
//   });
//   console.log(numSpace);
// };

// formatNumber(1232323);                   // 1 232 323
// formatNumber(1223.65378);                // 1 223.654

// ==========================================================================
// nameTest = `password generator`;
// start(nameTest);

// const generatePassword = (n,symbol = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~0123456789	 
// 		ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`) => {
//   let password = ``;
//   for (let i = 0; i < n; ++i) {
//     password += symbol[
//       Math.floor(Math.random() * symbol.length)
//     ];
    
//   }
//   console.log(password);
// };

// generatePassword(8);
// generatePassword(16);

// ==========================================================================

nameTest = `number is Armstrong Number`;
start(nameTest);

const isArmstrong = (n) => {
  let numbersStr = n.toString();
  let numbersArr = [];
  for (let i = 0;i <= numbersStr.length-1;i++){
  const digit = parseInt(numbersStr[i]);
  numbersArr.push(digit);
  } 
  const powArr = numbersArr.reduce(function(acc,currentValue){
  const  digitPow =  Math.pow(currentValue,3);
  if( acc === undefined){
    acc = [];
  }
  acc.push(digitPow);
  return acc;    
 
    },[]);
  const sumAccPow = powArr.reduce(function name(acc,currentValue) {
    return acc + currentValue;    
  })  
    if (n === sumAccPow) {
     console.log( n + `  it's Armstrong number ` + `//`+true);      
    }
    else
    console.log(n + `  don't Armstrong number ` + `//`+false); 
  } 
  
isArmstrong(4);     // false
isArmstrong(153);   // true
isArmstrong(371);
isArmstrong(145320);