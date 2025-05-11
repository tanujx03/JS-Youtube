let score = "23";
console.log(typeof score); // string

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber); // number

// look at this
// Case 1
let age = "123abc";
console.log(typeof age); // string

let ageInNumber = Number(age);
console.log(ageInNumber); //NaN

// Case 2
let number = null;
console.log(typeof number); // object

let numberInNumber = Number(number);
console.log(numberInNumber); //0

// Case 3
let number2 = undefined;
console.log(typeof number2); // undefined

let number2InNumber = Number(number2);
console.log(number2InNumber); //NaN

// Case 4
let number3 = true;
console.log((typeof number3)); // boolean

let number3inNumber = Number(number3);
console.log(number3inNumber); // 1

// converting number in boolena
let isUser = 1;
console.log(typeof isUser);

let isUserInBoolean = Boolean(isUser);
console.log(isUserInBoolean);

// "" => false
// "abc" => true

// ********************************Operations********************************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion