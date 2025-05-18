const parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  //   console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "orange";

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const day1 = document.querySelector(".day");
// console.log(day1.outerHTML);
// console.log(day1.parentElement.outerHTML);
// console.log(day1.nextElementSibling.outerHTML);
console.log(parent.childNodes);
