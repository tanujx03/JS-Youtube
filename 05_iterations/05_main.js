const codingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "Swift",
  "TypeScript",
];

// codingLanguages.forEach((item) => {
//   console.log(item);
// });

// codingLanguages.forEach(function (items) {
//     console.log(items);
// })

function printMe(item) {
    console.log(item);
}

codingLanguages.forEach(printMe)