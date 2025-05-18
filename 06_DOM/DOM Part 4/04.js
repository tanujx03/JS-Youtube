const addLanguage = (langName) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${langName}`;
  document.querySelector(".languages").appendChild(listItem);
  console.log("Language added sucessfully");
};

addLanguage("python");

const optimum = (langName) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".languages").appendChild(li);
};
optimum("C++");

// edit values

const secondLang = document.querySelector("li:nth-child(2)");
console.log(secondLang);

// secondLang.innerHTML = "Mojo"

const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secondLang.replaceWith(newLi);
