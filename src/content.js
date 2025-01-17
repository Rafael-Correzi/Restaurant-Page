import imagemPizza from "./imagens/pizza.jpg";



const content = document.querySelector("#content");
const logoContainer = document.querySelector("#logo-container");

const p = document.createElement("p");
p.textContent = "L'idea";
p.classList.add("logo");


const img = document.createElement("img");
function addContent() { 
  content.appendChild(img);
  logoContainer.appendChild(p);
}

img.src = imagemPizza;
img.alt = "Pizza";
img.classList.add("cheia");

addContent();

export { content, addContent };




