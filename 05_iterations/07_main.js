const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumber.map((num) => {
//   return num + 10;
// });
// console.log(newNums);

// Below method will not work
// const newNum = myNumber.forEach((num) => {
//   return num + 10;
// });
// console.log(newNum);

const newNums = myNumber
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  })
  .filter((num) => {
    return num > 40;
  });
console.log(newNums);
