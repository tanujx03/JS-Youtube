// for loop sample
for (let i = 0; i < 10; i++) {
  const element = i;
  // console.log(element);
}

// for loop for printing table from 1 to 10
for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer Loop ${i} in which`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// for loop in array
const superHeros = ["SuperMan", "BatMan", "IronMan"];
for (let i = 0; i < superHeros.length; i++) {
  const element = superHeros[i];
  //   console.log(element);
}

// Break and Continue in for loop
// break
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // console.log(`${i} is found`);
    break;
  }
//   console.log(i);
}
// console.log("------------");

// continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
//   console.log(i);
}
