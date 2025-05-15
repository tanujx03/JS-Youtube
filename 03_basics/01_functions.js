// console.log("T");
// console.log("A");
// console.log("N");
// console.log("U");
// console.log("J");

function sumNumbers(a, b) {
  let sum = a + b;
  console.log(sum);
}

// const solution = sumNumbers(2, 6);
// console.log(solution);

function sum(a, b) {
  return a + b;
}

const result = sum(2, 4);
// console.log(result);

// if else in function
function isLoggedIn(username = "Bro") {
  if (!username) {
    console.log("Enter a User Name");
    return;
  }
  return `${username} just logged into the page`;
}

console.log(isLoggedIn("Tanuj")); // Tanuj just logged into the page
console.log(isLoggedIn("")); // Enter a User Name
console.log(isLoggedIn()); // Bro just logged into the page
