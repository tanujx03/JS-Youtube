// singleton
// object.create => by this singleton is made.

// Object literals
// if declared by literals => singleton is not made

const mySym = Symbol("key1");

const jsUser = {
  name: "Hitest",
  // keys are proccessed as "name","age".....
  age: 18,
  email: "hello@world.com",
  [mySym]:"Hello World",
  isLogedIn: false,
  lastLogin: ["monday", "tuesday"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email = "tanuj@google.com"
console.log(jsUser["email"]);


// Object.freeze(jsUser)

jsUser.email = "tanuj@microsoft.com"
console.log(jsUser["email"]);
console.log(jsUser);


console.log("------------------------------------");


jsUser.greeting = function () {
  console.log("Hello User");
}

console.log(jsUser.greeting());

jsUser.greeting2 = function () {
  console.log(`Hello ${this.name}, How are You`);
}

console.log(jsUser.greeting2());