const bestSellingModels = {
  Toyota: "Innova Crysta",
  BMW: "3 Series",
  Honda: "City",
  Tata: "Nexon",
  Mahindra: "XUV700",
};
// Objects are not iteratable using for of loop.
// So we introduced for in loop.

for (const key in bestSellingModels) {
//   console.log(
//     // `In India, ${bestSellingModels[key]} is the best selling car of ${key}`
//   );
}

// for in loop for arrays
const carBrands = ["Toyota", "BMW", "Honda", "Tata", "Mahindra"];

for (const index in carBrands) {
    console.log(`Brand at index ${index} is ${carBrands[index]}`);
}
