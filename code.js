let hour = 0o11111;
let num = 12.3456

console.log (`${hour}`);
console.log(hour.toString(10));

console.log(123456..toString());

console.log(parseInt('2n9c', 36));
console.log(parseFloat('12.3AAA'));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(9, 2));
//console.log(Math.sort((a,b)=>a-b));

console.log(num.toFixed(2));

console.log('\u{1F514}');

for(let char of "Hello"){
console.log(char);
}

let char = 'AAAAA';
console.log(char[0].toLowerCase());

let str = 'Widget with id';
console.log(str.indexOf("with"));

console.log( "Widget with id".includes("Widget") );

let str1 = "stringify";
console.log( str1.slice(0, 6) );
console.log( str1.slice(0,-1) );

console.log( "z".codePointAt(0) );
console.log( String.fromCodePoint(90) );

console.log( 'Österreich'.localeCompare('Zealand') );

//str.trim() — убирает пробелы в начале и конце строки.
//str.repeat(n) — повторяет строку n раз.

let hello = 'Привет';
console.log(hello.concat(' Кевин', ', удачного дня.'));

console.log('абв'.repeat(2));

console.log(hello.split(''));

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

args(1,2,3,4,5,6);
function args(...args){
  console.log(args);
}

let age = 19;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);


let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Маловато' );
    break;
  case 4:
    console.log( 'В точку!' );
    break;
  case 5:
    console.log( 'Перебор' );
    break;
  default:
    console.log( "Нет таких значений" );
}


// isNaN
// isFinite

let i = "   2  ";
console.log(i.trim());
console.log(i);


console.log(Math.random());
// від 0 до 1
console.log(Math.random()*5);
// від 0 до 5
console.log(Math.random()*5+5); 
// від 5 до 10


// labelName: for (...) {
//   ...
// }    метка перед циклом for

// break labelName;  визов метки


let value  = true;
console.log(typeof(value));

let hel = 'Hello world'

for(let i = 0;i<hel.length;i++){
  console.log(hel[i]);
}

for (let letter of hel){
  console.log(letter);
}

for(let i = hel.length-1;i>=0;i--){
  console.log(hel[i]);
}


let part = "le"
let word = "letter"

console.log(word.includes(part));


let card = '4149 4991 0888 5432'
let result = card.slice(-4);
console.log(result.padStart(19,'**** '));


let sim = 'MTS';
console.log(sim.repeat(15));


const time = 'What time is it';
console.log(time.replace(/ /g,'-'));


const numbers = new Array(1, 2, 4, 5, 5, 6);
console.log(numbers);

numbers.push(100,101);
console.log(numbers);

numbers[8] = 0;
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();  // del first element '1'
console.log(numbers);

numbers.unshift(3, 4);  // push  as first and second element 
console.log(numbers);


let numberss = [1,2,3,4,5,6,7,8];
numberss.length=5;
console.log(numberss);



const words = 'qwerty';

console.log([...words]);
console.log(Array.from(words));
console.log(words.split(''));





// const user1 = {
//   firstName: 'Yura',
//   lastName: 'Seredyuk',
//   age: 23, 
// };

// userInfo(user1);

// function userInfo(user){
// console.log(`${firstName} ${lastName} ${age}`);
// }

// var a = [1, 1, 2];

// [... new Set(a)]


// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);