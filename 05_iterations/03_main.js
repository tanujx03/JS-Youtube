// for of loop
// Example 1
const carCompanies = ["Toyota", "Ford", "BMW", "Honda", "Tesla"];

for (const name of carCompanies) {
  // console.log(name);
}
// Example 2
const greeting = "Hello World!";
for (const name of greeting) {
  // console.log(name);
}

// Maps
const myMap = new Map();
myMap.set("IN", "India");
myMap.set("USA", "United States of America");
myMap.set("FR", "France");
myMap.set("JP", "Japan");
myMap.set("DE", "Germany");

// console.log(myMap);

for (const [country, full] of myMap) {
  //   console.log(country, ":-", full);
}


