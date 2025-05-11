const accountId = 12123;
let accountEmail = "hello@git.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // not the correct way (but make job done)
let accountState;


// accountId = 12; // not allowed
// TypeError: Assignment to constant variable.

accountEmail = "fello@git.com";
// // allowed

accountPassword = "23456";
//allowed

// New way to print variables
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

/*
prefere to not to use var 
*/