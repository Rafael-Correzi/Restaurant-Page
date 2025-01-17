import imagemPizza from "./imagens/pizza.jpg";



const content = document.querySelector("#content");
const logoContainer = document.querySelector("#logo-container");

const p = document.createElement("p");
p.textContent = "L'idea";
p.classList.add("logo");

logoContainer.appendChild(p);

const img = document.createElement("img");
content.appendChild(img);

img.src = imagemPizza;
img.alt = "Pizza";
img.classList.add("cheia");





