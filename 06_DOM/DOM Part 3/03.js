const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "generated Title");
div.style.background = "green";
div.style.padding = "12px";


// div.innerText = "Chai aur code";

const addText = document.createTextNode("Chai aur Code");
div.appendChild(addText);


document.body.appendChild(div)