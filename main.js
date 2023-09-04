// Reverse str
console.log(`Reverse str`);

 const reverse = (str) =>{
     str = str.split('').reverse().join('');
     console.log(str);
 }
 reverse(`hello`);

// -----------------------------------------------------------------------------------
console.log(``);
// Create a function that counts words in sentence
console.log(`counts words in sentence`);

let countWords = (str) => {
    str = str.split(" ");
    console.log(str.length);
}
countWords(`Hi my name is Taras`);

// -----------------------------------------------------------------------------------
console.log(``);
// Create a function that clears spaces
console.log(`Create a function that clears spaces`);

const clearWhiteSpace = (str) => {
    str = str.replace(/ /g,'');
    console.log(str);
   }
const result = clearWhiteSpace("  1   2   "); // Навіщо змінна? І навіщо ії = до функції?

// -----------------------------------------------------------------------------------
console.log('');
// Max length
console.log(`Max length`);

const cutStr = (str, maxLength) => {
  if( str.length <= maxLength){
   console.log(str);
  }
  else
  {
    str = str.slice(0,maxLength);
    str = str+`...`;
    console.log(str);
  }
};
cutStr("Hello", 5);
cutStr("Hello there", 5);

// -----------------------------------------------------------------------------------
console.log('');
// Palindrome
console.log(`Palindrome`);

const palindromeFoo = (str)=> {
  str= str.toLowerCase().replace(" ",'');
    if ( str === str.split('').reverse().join(''))
    console.log(true);
    else
    console.log(false);
}
palindromeFoo(`Tenet`);
palindromeFoo(`js`)
