const numbers = [1, 2, 3];
let sum = 0;
const Total = numbers.reduce((sum, curr) => {
  return sum + curr;
}, sum);
// console.log(Total);

const items = [
  { name: "item1", price: 8999 },
  { name: "item2", price: 4999 },
  { name: "item3", price: 999 },
  { name: "item4", price: 7500 },
  { name: "item5", price: 3200 },
];

const finalPrice = items.reduce((totalTillNow, currentItem) => {
  console.log(
    `current value : ${currentItem.price}, total till now : ${totalTillNow}`
  );

  return totalTillNow + currentItem.price;
}, sum);

console.log(finalPrice);
