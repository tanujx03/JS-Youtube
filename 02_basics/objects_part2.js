// const tinderUser = new Object() => make singleton
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.loggedIn = false;
// console.log(tinderUser);

const reguralUser = {
  email: "hello@tinder.com",
  fullname: {
    userFullName: {
      firstName: "Hitesh",
      LastName: "Chaudhary",
    },
  },
};
// console.log(reguralUser.email);
// console.log(reguralUser.fullname);
// console.log(reguralUser.fullname.userFullName);
// console.log(reguralUser.fullname.userFullName.LastName);
// console.log(reguralUser.fullname.userFullName.firstName);

// not prefered
const profile = {
  tinderUser,
  reguralUser,
};
// console.log(profile);
// not prefered

// const newProfile = Object.assign({}, tinderUser, reguralUser);
// console.log(newProfile);
// console.log("------------------");

// const sampleProfile2 = Object.assign({}, tinderUser, reguralUser);
// console.log(sampleProfile2);
// console.log("------------------");
// console.log(tinderUser);
// console.log("------------------");

// const sampleProfile1 = Object.assign(tinderUser, reguralUser);
// console.log(sampleProfile1);
// console.log("------------------");
// console.log(tinderUser);
// console.log("------------------");


const object = {...tinderUser,...reguralUser}
console.log(object);


console.log(object.hasOwnProperty('name'));
console.log(object.hasOwnProperty('nam'));

